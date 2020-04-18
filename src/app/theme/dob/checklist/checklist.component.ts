import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import * as NavigationActions from '../../../store/actions/navigation.actions';
import { saveAs } from 'file-saver';
import Swal from 'sweetalert2';
import { DxFormComponent } from 'devextreme-angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Location } from '@angular/common';

@Component({
  selector: 'checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {
  @ViewChild("personalInterviewForm") public personalInterviewForm: DxFormComponent;
  driverTempId: any;
  content: any;
  files: any[] = [];
  wsibUrl: String = "";
  comp: any;
  trainingData: {
    train: any,
    ReasonForRejection: any,
    SpecificReason: any
  }
  RejectionReasons: any;
  imageToShow: any;
  isImageLoading: boolean;
  payment: boolean = false;

  constructor(private http: HttpClient, private store: Store<AppState>, private router: Router, private location: Location) {
    this.trainingData = {
      train: null,
      ReasonForRejection: null,
      SpecificReason: null
    }

    this.RejectionReasons = [
      'Background Check Not Cleared',
      'Driving History Not Clear',
      'Other'
    ]
    

    this.store.select('driver').subscribe(comp => {
      this.driverTempId = comp['TempID'];
      this.http.post(`${environment.apiUrl}api/drivers/listDocuments`, {driverTempId: this.driverTempId}).subscribe(comp => {
      
      for(var i=0; i<8; i++) {
        if(comp[i]) {
          if(comp[i].substr(0,2) === 'DL') { 
            this.files = [...this.files, {content: 'Drivers License', link: 'http://10.10.170.80:5000/api/file/'+this.driverTempId+'F'+comp[i]}];
          }
          if(comp[i].substr(0,2) === 'VR') { 
           this.files = [...this.files, {content: 'Vehicle Registration', link: 'http://10.10.170.80:5000/api/file/'+this.driverTempId+'F'+comp[i]}];
          }
          if(comp[i].substr(0,2) === 'VI') { 
           this.files = [...this.files, {content: 'Vehicle Insurance', link: 'http://10.10.170.80:5000/api/file/'+this.driverTempId+'F'+comp[i]}];
          }
          if(comp[i].substr(0,2) === 'DA') { 
           this.files = [...this.files, {content: 'Drivers Abstract', link: 'http://10.10.170.80:5000/api/file/'+this.driverTempId+'F'+comp[i]}];
          }
          if(comp[i].substr(0,2) === 'VC') { 
           this.files = [...this.files, {content: 'Void Cheque', link: 'http://10.10.170.80:5000/api/file/'+this.driverTempId+'F'+comp[i]}];
          }
          if(comp[i].substr(0,2) === 'VU') { 
           this.files = [...this.files, {content: 'Vehicle Use Permission Letter', link: 'http://10.10.170.80:5000/api/file/'+this.driverTempId+'F'+comp[i]}];
          }
          if(comp[i].substr(0,2) === 'BC') { 
           this.files = [...this.files, {content: 'Background Check', link: 'http://10.10.170.80:5000/api/file/'+this.driverTempId+'F'+comp[i]}];
          }
          if(comp[i].substr(0,2) === 'VL') { 
           this.files = [...this.files, {content: 'Vehicle Lease', link: 'http://10.10.170.80:5000/api/file/'+this.driverTempId+'F'+comp[i]}];
          }
       }
      }
      });  
      this.http.post(`${environment.apiUrl}api/drivers/checkDriver`, {email: comp['Email']}).subscribe(object => {
        console.log("HEYHEY");  
        this.comp = object;
      })
    })
    this.booleanCheck = this.booleanCheck.bind(this);
  }

  ngOnInit() {
  }

  
  onPrevious(event){
    this.location.back();
  }

  downloadUserMetadata() {
    this.http.get(`${environment.apiUrl}api/drivers/createxml`);
  }

  downloadWsibForm() {
    alert("Hello");
    saveAs(`${environment.apiUrl}api/file/vehicle/wsib`);
    //this.http.get(`${environment.apiUrl}api/file/vehicle/wsib`);
  }

  allowTraining() {
    this.http.post(`${environment.apiUrl}api/recruiter/training`, {
        DriverTempID: this.driverTempId,
        train: this.trainingData.train,
        ReasonForRejection: this.trainingData.ReasonForRejection,
        SpecificReason: this.trainingData.SpecificReason
    }).subscribe(comp => {
      
    })
  }

  pushToCC() {
    this.http.post(`${environment.apiUrl}api/drivers/pushtocc`, {driver_id: this.driverTempId, RecruiterLogin: JSON.parse(localStorage.getItem("currentUser")).Login}).subscribe(comp => {
      this.router.navigateByUrl("/driver/splashes")
    })
  }


  booleanCheck() {
    if(typeof this.trainingData.train === 'boolean') return true;
    return false;
  }

  onboardBroker() {
    if(this.trainingData.train) {
      Swal({
        title: 'This action will create a driver in CC. Do you want to proceed?',
        showCancelButton: true,
        confirmButtonText: 'Yes!',
        confirmButtonColor: '#28a745',
        cancelButtonColor: '#dc3545',
        cancelButtonText: 'No!',
        footer: 'This action is irreverisble'
      })
      .then((choice) => {
        //if(choice.dismiss) this.clearSignature();
        if(choice.value) this.allowTraining();
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


  fileDownload(i) {
    console.log(this.files[i].link);
    this.http.get(this.files[i].link);
  }

}
