import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../../../store/app.state';
import * as JsBarcode  from 'jsbarcode';
import html2canvas from 'html2canvas';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'spalshes',
  templateUrl: './spalshes.component.html',
  styleUrls: ['./spalshes.component.css']
})
export class SpalshesComponent implements OnInit {
  step: number;
  driverNumber: any;
  driverName: any;
  isImageLoading: boolean;
  imageUrl: string;
  imageToShow: string | ArrayBuffer;
  showAppleBadge: boolean = false;
  showSprintstarBadge: boolean = false;

  constructor(private router: Router, private http: HttpClient, private store: Store<AppState>) {
    this.step = 1;
    this.store.select('driver').subscribe(comp => {
      this.http.post(`${environment.apiUrl}api/drivers/getDriver`, {driverTempId: comp['TempID']}).subscribe(element => {
        this.driverNumber = element['DriverNumber'];
        var canvas = document.getElementById('mycanvas');
        JsBarcode(canvas, this.driverNumber, {
          format: "CODE39",
          displayValue: false
        });
        var canvas_apple = document.getElementById('mycanvas-apple');
        JsBarcode(canvas_apple, this.driverNumber, {
          format: "CODE39",
          displayValue: false,
          background: null
        });

        this.driverName = comp['FirstName'] + ' ' + comp['LastName'];
        this.imageUrl = `${environment.apiUrl}api/file/`+comp['TempID']+'FPP';
        this.getImageFromService();
    });
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

  //Print Image on button click

  printSprintstarBadge = (e) => {
    html2canvas(document.getElementById('sprintstar-badge'), { allowTaint : true })
    .then((canvas) => {
        var a = document.createElement('a');
        // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
        a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
        a.download = this.driverNumber + ' sprintstar-badge.jpg';
        a.click();
    })
  }


  printAEXBadge = (e) => {
    html2canvas(document.getElementById('apple-another-badge'), {  allowTaint : true })
    .then((canvas) => {
        var a = document.createElement('a');
        // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
        a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
        a.download = this.driverNumber + ' apple-badge.jpg';
        a.click();
        this.showAppleBadge = false;
    })
  }

  //End Print Image on Button Click



  onNext() {
    this.step++;
  }

  onBack() {
    this.step--;
  }
}
