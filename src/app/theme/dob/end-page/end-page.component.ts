import { Component, OnInit } from '@angular/core';
import {Driver} from '../../../store/models/driver.model';
import * as DriverActions from '../../../store/actions/driver.actions';
import { Router } from '@angular/router';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {AppState} from '../../../store/app.state';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { DxFormComponent } from 'devextreme-angular';
import { environment } from '../../../../environments/environment';
import { Location } from '@angular/common';

@Component({
  selector: 'end-page',
  templateUrl: './end-page.component.html',
  styleUrls: ['./end-page.component.css']
})
export class EndPageComponent implements OnInit {
  driver: any;
  trainingData: {
    train: any,
    ReasonForRejection: any,
    SpecificReason: any
  }
  RejectionReasons: any;
  driverTempId: any;
  isImageLoading: boolean;
  imageUrl: string;
  imageToShow: string | ArrayBuffer;

  constructor(private store: Store < AppState >, private http: HttpClient, private router: Router, private location: Location) { 
    this.trainingData = {
      train: null,
      ReasonForRejection: null,
      SpecificReason: null
    }

    this.RejectionReasons = [
      'Background Check Not Cleared',
      'Driving History Not Clear',
      'Other'
    ];

    
    this.store.select('driver').subscribe(comp => {
      this.driverTempId = comp['TempID'];
      this.http.post(`${environment.apiUrl}api/drivers/checkDriver`, {email: comp['Email']}).subscribe(element => {
        this.driver = element;
        console.log(element);
        this.imageUrl = `${environment.apiUrl}api/file/`+comp['TempID']+'FPP';
        this.getImageFromService();
      })
    })
  }

  ngOnInit() {
  }

  //Start - Image Service to Get Image
  public getImage(imageUrl: string): Observable<Blob> {
      return this.http.get(imageUrl, {responseType: 'blob'})
  }

  getImageFromService() {
    this.isImageLoading = true;
    this.getImage(this.imageUrl).subscribe(data => {
      this.createImageFromBlob(data);
      this.isImageLoading = false;
    }, error => {
      this.isImageLoading = false;
      console.log(error);
    })
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imageToShow = reader.result;
    }, false);

    if(image) {
      reader.readAsDataURL(image);
    }
  }
  //End - Image Service to Get Image


  
  allowTraining() {
    this.http.post(`${environment.apiUrl}api/recruiter/training`, {
        DriverTempID: this.driverTempId,
        train: this.trainingData.train,
        ReasonForRejection: this.trainingData.ReasonForRejection,
        SpecificReason: this.trainingData.SpecificReason
    }).subscribe(comp => {
      this.http.post(`${environment.apiUrl}api/drivers/getDriver`, {driverTempId: this.driverTempId}).subscribe(element => {
        this.driver = element;
      })
    })
  }

  pushBroker(e) {
    this.http.post(`${environment.apiUrl}api/drivers/pushtocc`, {driver_id: this.driverTempId, RecruiterLogin: JSON.parse(localStorage.getItem("currentUser")).Login}).subscribe(comp => {
      this.router.navigateByUrl("/driver/splashes")
    })
  }

  onPrevious(event){
    this.location.back();
  }

  onboardBroker() {
    if(this.trainingData.train) {
      Swal({
        title: 'This action will approve the driver for training. Do you want to proceed?',
        showCancelButton: true,
        confirmButtonText: 'Yes!',
        confirmButtonColor: '#28a745',
        cancelButtonColor: '#dc3545',
        cancelButtonText: 'No!',
        footer: 'This action is irreverisble'
      })
      .then((choice) => {
        //if(choice.dismiss) this.clearSignature();
        //if(choice.value)
        this.allowTraining();
      })
    } else {
      Swal({
        title: 'Are you sure you want to suspend the drivers onboarding procedure',
        showCancelButton: true,
        confirmButtonText: 'Yes!',
        confirmButtonColor: '#28a745',
        cancelButtonColor: '#dc3545',
        cancelButtonText: 'No!',
        footer: 'You dont have to do this step, if you are still awaiting on drivers audit results'
      })
      .then((choice) => {
        //if(choice.dismiss) this.clearSignature();
        if(choice.value) {
          //go ahead and shut the driver off the system
        } else ;;// do nothing
      })
    }
   
  }
}
