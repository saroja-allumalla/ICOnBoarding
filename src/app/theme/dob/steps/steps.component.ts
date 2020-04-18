import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { BasicComponent } from '../basic/basic.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../../../store/app.state';
import * as CapActions from '../../../store/actions/cap.actions';
import * as NavigationActions from '../../../store/actions/navigation.actions';
import * as CapTypes from '../../../store/types/types';
import * as ChekclistTypes from '../../../store/types/types';
import * as ChecklistActions from '../../../store/actions/checklist.actions';
import { DxFileUploaderComponent } from 'devextreme-angular';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../services/data.service';
import { FileService } from '../../services/file.service';
import { DriverService } from '../../services/driver.service';
import { environment } from '../../../../environments/environment';
import { Location } from '@angular/common';

export interface fileOperations  {
  prefix: string;
  downloadUrl: string;
  uploadUrl: string;
  removeUrl: string;
}

@Component({
  selector: 'steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {
  popupContent: any;
  popupVisible: boolean = false;
  removePopupVisible: boolean = false;
  statusText: string = "Incomplete";
  successColor: string = "green";
  dangerColor: string = "red";
  value: any[] = [];
  driversLicense: any[] = [];
  wsibDocument: any[] = [];
  vehicleInsurance: any[] = [];
  vehicleRegistration: any[] = [];
  voidCheque: any[] = [];
  policeReport: any[] = [];
  backgroundCheck: any[] =[];
  leaseDocuments: any[] = [];
  vehicleUse: any[] = []; 
  profilePhoto: any[] = [];
  vendorBroker: any[] = [];
  icAgreement: any[] = [];
  driversLicenseFile: boolean = false;
  vehicleInsuranceFile: boolean = false;
  vehicleRegistrationFile: boolean = false;
  voidChequeFile: boolean = false;
  policeReportFile: boolean = false;
  backgroundCheckFile: boolean = false;
  leaseDocumentsFile: boolean = false;
  vehicleUseFile: boolean = false;
  wsibDocumentFile: boolean = false;
  profilePhotoFile: boolean = false;
  vendorBrokerFile: boolean = false;
  icAgreementFile: boolean = false;
  error: boolean = false;
  urlString: string;
  uploadDLUrl: string;
  uploadVRUrl: string;
  uploadVIUrl: string;
  uploadBCUrl: string;
  uploadDAUrl: string;
  uploadVCUrl: string;
  uploadVUPLUrl: string;
  uploadVLUrl: string;
  uploadWSIBUrl: string;
  uploadUrlString: string;
  uploadPhotoUrl: string;
  uploadVBUrl: string;
  uploadICUrl: string;
  downloadDLUrl: string;
  downloadVRUrl: string;
  downloadVIUrl: string;
  downloadBCUrl: string;
  downloadDAUrl: string;
  downloadVCUrl: string;
  downloadVUPLUrl: string;
  downloadVLUrl: string;
  downloadUrlString: string;
  downloadPhotoUrl: string;
  downloadVBUrl: string;
  downloadICUrl: string;
  step: number;
  backgroundCheckRequired: boolean = true;
  leaseDocumentsRequired: boolean = false;
  vehicleUseRequired: boolean = false;
  policeReportRequired: boolean = true;
  driverTempId: any;
  driverName: any;
  popupDocumentName: string = "Driver's License";
  popupInterval: any;
  downloadWSUrl: any;
  showVideo: boolean = false;
  removeDLUrl: string;
  removeVRUrl: string;
  removeVIUrl: string;
  removeBCUrl: string;
  removeDAUrl: string;
  removeVCUrl: string;
  removeVUPLUrl: string;
  removeVLUrl: string;
  removeUrlString: string;
  removePhotoUrl: string;
  removeVBUrl: string;
  removeICUrl: string;
  recruiterid: string;
  printWSUrl: string;
  printVBUrl: string;
  printICUrl: string;

  @ViewChild("video")
  public video: ElementRef;

  @ViewChild("canvas")
  public canvas: ElementRef;

  public captures: Array<any>;

    constructor(private _router: Router, private activatedRoute: ActivatedRoute, private store: Store<AppState>, private http: HttpClient, private driverService: DriverService, private fileService: FileService, private location:Location) {
    this.recruiterid = JSON.parse(localStorage.getItem("currentUser")).RecruiterID;
    
    this.step = 1;
    this.popupContent = " ";  
    this.captures = [];
    this.store.select('driver').subscribe(comp => {
      this.driverTempId = comp['TempID'];
      this.printWSUrl = "http://test.appleexpress.com:5050/onboardingapi/printwsib/" + this.driverTempId + "/" + this.recruiterid;
      this.printVBUrl = "http://test.appleexpress.com:5050/onboardingapi/printVendorBrokerApplication/" + this.driverTempId + "/" + this.recruiterid;
      this.printICUrl = "http://test.appleexpress.com:5050/onboardingapi/printBrokerAgreement/" + this.driverTempId + "/" + this.recruiterid;
      this.driverName = comp['FirstName'];
      this.uploadUrlString = this.urlString + comp['TempID'];
      this.uploadDLUrl = `${this.fileService.apiUrl}driversLicense/${this.driverTempId}`;
      this.uploadVRUrl = `${this.fileService.apiUrl}vehicleRegistration/${this.driverTempId}`;
      this.uploadVIUrl = `${this.fileService.apiUrl}vehicleInsurance/${this.driverTempId}`;
      this.uploadBCUrl = `${this.fileService.apiUrl}backgroundCheck/${this.driverTempId}`;
      this.uploadDAUrl = `${this.fileService.apiUrl}driversAbstract/${this.driverTempId}`;
      this.uploadVCUrl = `${this.fileService.apiUrl}voidCheque/${this.driverTempId}`;
      this.uploadVUPLUrl = `${this.fileService.apiUrl}vehicleUse/${this.driverTempId}`;
      this.uploadVLUrl = `${this.fileService.apiUrl}vehicleLease/${this.driverTempId}`;
      this.uploadWSIBUrl = `${this.fileService.apiUrl}wsib/${this.driverTempId}`;
      this.uploadPhotoUrl = `${this.fileService.apiUrl}profilephoto/${this.driverTempId}`;
      this.uploadVBUrl = `${this.fileService.apiUrl}vendorBroker/${this.driverTempId}`;
      this.uploadICUrl = `${this.fileService.apiUrl}contractagreement/${this.driverTempId}`;
      console.log(this.uploadPhotoUrl);

      this.downloadDLUrl = `${this.fileService.apiUrl}` + this.driverTempId + "FDL";
      this.downloadVRUrl = `${this.fileService.apiUrl}` + this.driverTempId + "FVR";
      this.downloadVIUrl = `${this.fileService.apiUrl}` + this.driverTempId + "FVI";
      this.downloadBCUrl = `${this.fileService.apiUrl}` + this.driverTempId + "FBC";
      this.downloadDAUrl = `${this.fileService.apiUrl}` + this.driverTempId + "FDA";
      this.downloadVCUrl = `${this.fileService.apiUrl}` + this.driverTempId + "FVC";
      this.downloadVUPLUrl = `${this.fileService.apiUrl}` + this.driverTempId + "FVU";
      this.downloadVLUrl = `${this.fileService.apiUrl}` + this.driverTempId + "FVL";
      this.downloadWSUrl = `${this.fileService.apiUrl}` + this.driverTempId + "FWS";
      this.downloadPhotoUrl = `${this.fileService.apiUrl}` + this.driverTempId + "FPP";
      this.downloadVBUrl = `${this.fileService.apiUrl}` + this.driverTempId + "FVB";
      this.downloadICUrl = `${this.fileService.apiUrl}` + this.driverTempId + "FIC";

      this.removeDLUrl = `${this.fileService.apiUrl}delete/` + this.driverTempId + "FDL";
      this.removeVRUrl = `${this.fileService.apiUrl}delete/` + this.driverTempId + "FVR";
      this.removeVIUrl = `${this.fileService.apiUrl}delete/` + this.driverTempId + "FVI";
      this.removeBCUrl = `${this.fileService.apiUrl}delete/` + this.driverTempId + "FBC";
      this.removeDAUrl = `${this.fileService.apiUrl}delete/` + this.driverTempId + "FDA";
      this.removeVCUrl = `${this.fileService.apiUrl}delete/` + this.driverTempId + "FVC";
      this.removeVUPLUrl = `${this.fileService.apiUrl}delete/` + this.driverTempId + "FVU";
      this.removeVLUrl = `${this.fileService.apiUrl}delete/` + this.driverTempId + "FVL";
      this.removePhotoUrl = `${this.fileService.apiUrl}delete/` + this.driverTempId + "FPP";
      this.removeVBUrl = `${this.fileService.apiUrl}delete/` + this.driverTempId + "FVB";
      this.removeICUrl = `${this.fileService.apiUrl}delete/` + this.driverTempId + "FIC";

      this.checkFiles();
    })
    this.capture = this.capture.bind(this);
  }

  public ngOnInit() { }

   public ngAfterViewInit() {
      
    }


  dataURLtoBlob = (dataurl) => {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type:mime});
  }

  uploadImage(i) {
    let formData: FormData = new FormData();
    formData.append('file', this.dataURLtoBlob(this.captures[i]));
      this.http.post('http://10.10.170.80:5000/api/file/profilephoto/'+this.driverTempId, formData).subscribe(comp => {
        this.showVideo = false;
        this.profilePhotoFile = true;
        this.video.nativeElement.pause();
        this.video.nativeElement.srcObject = null;
    })
  }  



  startVideo() {
    this.showVideo = true;
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
            //this.video.nativeElement.src = window.URL.createObjectURL(stream);
            this.video.nativeElement.srcObject = stream;
            this.video.nativeElement.play();
        });
    }
  }

  onPrevious(event){
    this.location.back();
  }

  public capture() {
    var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);
    this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
  }

  checkFiles() {
    this.http.post(`${environment.apiUrl}api/upload/checkFile`, { driver_id: this.driverTempId, fileType: 'DL' })
    .subscribe(comp => { if(comp["success"]) { this.driversLicenseFile = true;} else { this.driversLicenseFile = false; }})
    this.http.post(`${environment.apiUrl}api/upload/checkFile`, { driver_id: this.driverTempId, fileType: 'VR' })
    .subscribe(comp => { if(comp["success"]) { this.vehicleRegistrationFile = true;} else { this.vehicleRegistrationFile = false; }})
    this.http.post(`${environment.apiUrl}api/upload/checkFile`, { driver_id: this.driverTempId, fileType: 'VI' })
    .subscribe(comp => { if(comp["success"]) { this.vehicleInsuranceFile = true;} else { this.vehicleInsuranceFile = false; }})
    this.http.post(`${environment.apiUrl}api/upload/checkFile`, { driver_id: this.driverTempId, fileType: 'BC' })
    .subscribe(comp => { if(comp["success"]) { this.backgroundCheckFile = true;} else { this.backgroundCheckFile = false; }})
    this.http.post(`${environment.apiUrl}api/upload/checkFile`, { driver_id: this.driverTempId, fileType: 'DA' })
    .subscribe(comp => { if(comp["success"]) { this.policeReportFile = true;} else { this.policeReportFile = false; }})
    this.http.post(`${environment.apiUrl}api/upload/checkFile`, { driver_id: this.driverTempId, fileType: 'WS' })
    .subscribe(comp => { if(comp["success"]) { this.wsibDocumentFile = true;} else { this.wsibDocumentFile = false; }})
    this.http.post(`${environment.apiUrl}api/upload/checkFile`, { driver_id: this.driverTempId, fileType: 'VU' })
    .subscribe(comp => { if(comp["success"]) { this.vehicleUseFile = true;} else { this.vehicleUseFile = false; }})
    this.http.post(`${environment.apiUrl}api/upload/checkFile`, { driver_id: this.driverTempId, fileType: 'CC' })
    .subscribe(comp => { if(comp["success"]) { }})
    this.http.post(`${environment.apiUrl}api/upload/checkFile`, { driver_id: this.driverTempId, fileType: 'DD' })
    .subscribe(comp => { if(comp["success"]) { this.voidChequeFile = true; } else { this.voidChequeFile = false; }})
    this.http.post(`${environment.apiUrl}api/upload/checkFile`, { driver_id: this.driverTempId, fileType: 'VC' })
    .subscribe(comp => { if(comp["success"]) { this.voidChequeFile = true; } else { this.voidChequeFile = false; }})
    this.http.post(`${environment.apiUrl}api/upload/checkFile`, { driver_id: this.driverTempId, fileType: 'LD' })
    .subscribe(comp => { if(comp["success"]) { this.leaseDocumentsFile = true; } else { this.leaseDocumentsFile = false; }})
    this.http.post(`${environment.apiUrl}api/upload/checkFile`, { driver_id: this.driverTempId, fileType: 'PP' })
    .subscribe(comp => { if(comp["success"]) { this.profilePhotoFile = true; } else { this.profilePhotoFile = false; }})
    this.http.post(`${environment.apiUrl}api/upload/checkFile`, { driver_id: this.driverTempId, fileType: 'VB' })
    .subscribe(comp => { if(comp["success"]) { this.vendorBrokerFile = true; } else { this.vendorBrokerFile = false; }})
    this.http.post(`${environment.apiUrl}api/upload/checkFile`, { driver_id: this.driverTempId, fileType: 'IC' })
    .subscribe(comp => { if(comp["success"]) { this.icAgreementFile = true; } else { this.icAgreementFile = false; }})
  }


  approveToTrain() {
    this.error = false;
       
    if(!this.voidChequeFile) this.error = true;
    //To be done after the training, takes more than a month
    //if(!this.wsibDocumentFile) this.error = true;

    if(this.error) {
      Swal({
        title: 'Error',
        text: 'Please Submit All The Required Documents',
        type: 'error',
        confirmButtonText: 'Cool'
      })
    } else {
      this._router.navigateByUrl("/driver/checklist");
    }   
    
  }

  openPopup(popupDocumentName) {
    this.setUser(popupDocumentName);
    this.popupDocumentName = this.fileService.getDocumentName(popupDocumentName);
    this.popupVisible = true;
  }

  removePopup(popupDocumentName) {
    this.removePopupVisible = true;
    this.fileService.removeFile(this.driverTempId, popupDocumentName).subscribe(comp => {
      
      this.checkFiles();
      this.removePopupVisible = false;
    })
    this.popupDocumentName = this.fileService.getDocumentName(popupDocumentName);    
  }

  setUser(fileType) {
    this.http.post(`${environment.apiUrl}api/upload/setUser`, {
      driver_id: this.driverTempId,
      name: this.driverName,
      fileType: fileType
    }).subscribe(comp => 
      {
        if(comp["success"]) {
          this.popupInterval = Observable.interval(3000)
            .subscribe((val) => {
              this.checkFile(fileType);
            })
        }
      }
    );
  }

  checkFile(fileType) {
    this.http.post(`${environment.apiUrl}api/upload/checkFile`, {
      driver_id: this.driverTempId,
      fileType: fileType
    }).subscribe(comp => {
      console.log(comp); 
       if(comp["success"]) {
        switch(fileType) {
          case 'DL': this.driversLicenseFile = true; break;
          case 'VR': this.vehicleRegistrationFile = true; break;
          case 'VI': this.vehicleInsuranceFile = true; break;
          case 'BC': this.backgroundCheckFile = true; break;
          case 'DA': this.policeReportFile = true; break;
          case 'WS': this.wsibDocumentFile = true; break;
          case 'VU': this.vehicleUseFile = true; break;
          case 'DD': this.vehicleUseFile = true; break;
          case 'VC': this.voidChequeFile = true; break;
          case 'LD': this.leaseDocumentsFile = true; break;
          case 'PP': this.profilePhotoFile = true; break;
          case 'VB': this.vendorBrokerFile = true; break;
          case 'IC': this.icAgreementFile = true; break;
          default: break;
        }
         this.popupInterval.unsubscribe();
         this.popupVisible = false;
       }
    })
  }

  removeUser() {
    this.http.post(`${environment.apiUrl}api/upload/removeUser`, {}).subscribe(comp => console.log(comp));
  }


  changePopupContent(item) {
    this.popupContent = this.activatedRoute.component.toString();
    this.popupVisible = true;
  }

  
  OpenDriver(e) {
    alert("Opening driver")
  }

  Uploaded(e) {
    this.fetchUrls();
    switch(e) {
      case 'driversLicense' : this.driversLicenseFile = true; break;
      case 'vehicleInsurance' : this.vehicleInsuranceFile = true; break;
      case 'vehicleRegistration' : this.vehicleRegistrationFile = true; break;
      case 'voidCheque' : this.voidChequeFile = true; break;
      case 'policeReport' : this.policeReportFile = true; break;
      case 'leaseDocuments' : this.leaseDocumentsFile = true; break;
      case 'backgroundCheck' : this.backgroundCheckFile = true; break;
      case 'vehicleUse' : this.vehicleUseFile = true; break;
      case 'wsibDocument' : this.wsibDocumentFile = true; break;
      case 'profilePhoto': this.profilePhotoFile = true; break;
      case 'vendorBroker': this.vendorBrokerFile = true; break;
      case 'icAgreement': this.icAgreementFile = true; break;
      default: break;
    }
  }

  onSubmitForm() {
    this.error = false;
    console.log(this.profilePhotoFile);

    if(!this.driversLicenseFile) this.error = true;
    if(!this.vehicleInsuranceFile) this.error = true;
    if(!this.vehicleRegistrationFile) this.error = true;
    if(!this.voidChequeFile) this.error = true;
    if(!this.backgroundCheckFile) this.error = true;
    if(!this.policeReportFile) this.error = true;
    if(!this.profilePhotoFile) this.error = true;
    if(this.leaseDocumentsRequired && !this.leaseDocumentsFile) this.error = true;
    if(this.vehicleUseRequired && !this.vehicleUseFile) this.error = true;
    if(!this.icAgreementFile) this.error = true;
    if(!this.vendorBrokerFile) this.error = true;


    window.scroll(0,0);
    if(this.error) {
      Swal({
        title: 'Error',
        text: 'Please Submit All The Required Documents',
        type: 'error',
        confirmButtonText: 'Cool'
      })
    } else {
      this._router.navigateByUrl("/driver/checklist");
    }   
  }

  printWSIB() {
    this.driverService.printWsib(this.driverTempId);
  }

  printVBApplication() {
    this.driverService.printVBApplication(this.driverTempId);
  }

  printAgreement() {
    this.driverService.printAgreement(this.driverTempId);
  }

  public downloadPdf(): any {
    let url='your url'
    let headers = new Headers();
    headers.append('Authorization', 'JWT ' + localStorage.getItem('id_token'));
    return this.http.get(url)
  }

  fetchUrls() {
    this.http.post(`${environment.apiUrl}api/drivers/listDocuments`, {driverTempId: this.driverTempId}).subscribe(comp => {
      for(var i=0; i<8; i++) {
        if(comp[i]) {
          var downloadUrl = `${this.fileService.apiUrl}${this.driverTempId}F${comp[i]}`;
          switch(comp[i].substr(0,2)){
            case 'DL': this.downloadDLUrl = downloadUrl;  break;
            case 'VR': this.downloadVRUrl =  downloadUrl;  break;
            case 'VI': this.downloadVIUrl = downloadUrl;  break;
            case 'DA': this.downloadDAUrl = downloadUrl;  break;
            case 'VC': this.downloadVCUrl = downloadUrl;  break;
            case 'VU': this.downloadVUPLUrl = downloadUrl; break;
            case 'BC': this.downloadBCUrl = downloadUrl; break;
            case 'VL': this.downloadVLUrl = downloadUrl; break;
            case 'PP': this.downloadPhotoUrl = downloadUrl; break;
            case 'VB': this.downloadVBUrl = downloadUrl; break;
            case 'IC': this.downloadICUrl = downloadUrl; break;
          }
          }
        }
      });  
  }

}


