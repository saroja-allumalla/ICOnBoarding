/*
import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import * as NavigationActions from '../../../store/actions/navigation.actions';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import ValidationEngine from 'devextreme/ui/validation_engine';
import { DxFormComponent } from 'devextreme-angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'personal-interview',
  templateUrl: './personal-interview.component.html',
  styleUrls: ['./personal-interview.component.css']
})
export class PersonalInterviewComponent implements OnInit {
  @ViewChild(DxFormComponent) form: DxFormComponent
  @ViewChild("personalInterviewForm") public personalInterviewForm: DxFormComponent;
  driverTempId: any;
  driverName: string;
  hasPassed: boolean = false;
  personalInterview: any;
  finishedQuestions: boolean = false;
  step: number = 1;
  vehicleUseRequired: boolean;
  backgroundCheckRequired: boolean;
  leaseDocumentsRequired: boolean;
  policeReportRequired: boolean;
  brokerRegion: any;
  workerCompensationClass: any;
  RejectionReasons: any;
  interviewDone: boolean = false;
  interviewData:  {
    BrokerRegion: any,
    StartDate: any,
    VehicleUseRequired: any,
    LeaseDocumentsRequired: any,
    VerifiedVR: any,
    VerifiedDL: any,
    VerifiedVI: any,
    BCRequired: any,
    DARequired: any,
    UploadDL: any[],
    UploadVR: any[],
    UploadVI: any[],
    ProceedWithApplicant: any,
    ReasonForRejection: any,
    SpecificReason: any,
    ApprovingRecruiterId: any,
    ApprovingRecruiterEmail: any
  }
  uploadDLUrl: string = ""
  uploadVRUrl: string = ""
  uploadVIUrl: string = ""
  DLFileUploaded: boolean = false;
  VIFileUploaded: boolean = false;
  VRFileUploaded: boolean = false;
  driverInterval: any;
  registrationInterval: any;
  insuranceInterval: any;
  endProcess: boolean = false;
  Charges: boolean = false;
  Conviction: boolean = false;
  showInterview = false;
  
  constructor(private store: Store<AppState>, private router: Router, private http: HttpClient, private dataService: DataService) {
    this.interviewData = {
      BrokerRegion: null,
      StartDate: null,
      VehicleUseRequired: null,
      LeaseDocumentsRequired: null,
      VerifiedVR: null,
      VerifiedDL: null,
      VerifiedVI: null,
      BCRequired: null,
      DARequired: null,
      UploadDL: [],
      UploadVR: [],
      UploadVI: [],
      ProceedWithApplicant: null,
      ReasonForRejection: null,
      SpecificReason: null,
      ApprovingRecruiterId: JSON.parse(localStorage.getItem("currentUser")).UserID,
      ApprovingRecruiterEmail: JSON.parse(localStorage.getItem("currentUser")).Email
    }

    this.RejectionReasons = [
      'Does not meet standards',
      'Has restrictions on hours',
      'Inappropriate Vehicle',
      'Unable to lift over 50 pounds',
      'Not available immediately',
      'Unable to work night time',
      'Other'
    ]
    
    dataService.getBrokerRegion().subscribe(comp => this.brokerRegion = comp );
    this.workerCompensationClass = this.dataService.getWorkerCompensationClass();
    
    // console.log(this.personalInterviewForm.instance);

    this.store.select('driver').subscribe(comp => {
      this.driverTempId = comp['TempID'];
      this.driverName = comp['FirstName'];
      this.uploadDLUrl = `${environment.apiUrl}api/file/driversLicense/` + comp['TempID'];
      this.uploadVRUrl = `${environment.apiUrl}api/file/vehicleRegistration/` + comp['TempID'];
      this.uploadVIUrl = `${environment.apiUrl}api/file/vehicleInsurance/` + comp['TempID'];
          
      this.http.post(`${environment.apiUrl}api/drivers/getDriver`, {driverTempId: this.driverTempId}).subscribe(element => {
        this.interviewData = {
          BrokerRegion: element['BrokerRegion'],
          StartDate: element['StartDate'],
          VehicleUseRequired: element['VehicleUseRequired'],
          LeaseDocumentsRequired: element['LeaseDocumentsRequired'],
          VerifiedVR: element['PhysicallyCheckedVR'],
          VerifiedDL: element['PhysicallyCheckedDL'],
          VerifiedVI: element['PhysicallyCheckedVI'],
          BCRequired: element['BCRequired'],
          DARequired: element['DARequired'],
          UploadDL: [],
          UploadVR: [],
          UploadVI: [],
          ProceedWithApplicant: element['DriverCleared'],
          ReasonForRejection: element['RecruiterRejectionReason'],
          SpecificReason: element['RecruiterInterviewNotes'],
          ApprovingRecruiterId: JSON.parse(localStorage.getItem("currentUser")).UserID,
          ApprovingRecruiterEmail: JSON.parse(localStorage.getItem("currentUser")).Email
        }
        
        if(element['RecruiterPersonal'] && element['RecruiterVehicle']) {
          this.showInterview = true;
        } 
        if(element['Charges']) {
          this.Charges = true;
        }
        if(element['Conviction']) {
          this.Conviction = true;
        }
        if(element['Interview'] && element['DriverCleared']) {
            if(element['DriversLicenseUploaded'] && element['VehicleRegistrationUploaded'] && element['VehicleInsuranceUploaded']) {
              this.interviewDone = true;
              this.step = 4;
            }
        }

        var driverObject = {
          driver_id: this.driverTempId,
          name: this.driverName,
          fileType: 'DL'
        }

         
        });

        this.http.post(`${environment.apiUrl}api/drivers/getProgress`, {driverTempId: this.driverTempId}).subscribe(element => {
          if(element['Interview']) {
            this.hasPassed = true;
          }
        });  
    })
    
    this.booleanCheck = this.booleanCheck.bind(this);
    this.checkDocument = this.checkDocument.bind(this);
    this.driversLicenseUploaded = this.driversLicenseUploaded.bind(this);
    this.vehicleInsuranceUploaded = this.vehicleInsuranceUploaded.bind(this);
    this.vehicleRegistrationUploaded = this.vehicleRegistrationUploaded.bind(this);
    this.increaseStep = this.increaseStep.bind(this);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }

  onFormSubmit(e) {
    e.preventDefault();
  }

  driversLicenseUploaded() {
    this.DLFileUploaded = true;
  }

  vehicleInsuranceUploaded() {
    this.VIFileUploaded = true;
  }

  vehicleRegistrationUploaded() {
    this.VRFileUploaded = true;
  }

  booleanCheck = (e) => {
    if(typeof(e.value) === 'boolean') return true;
    return false;
  }

  checkDocument = (msg) => {
    switch(msg){
      case 'DL': console.log(this.interviewData.UploadDL);
        break;
      default:
        break;
    }
    return false;
  }

  increaseStep = (e) => {  }
 
  onApproveDriver = (e) => {
    e.preventDefault();
    console.log(this.interviewData.UploadDL)
    var result = ValidationEngine.validateGroup(this.personalInterviewForm['validationGroup']);
    //alert(result.isValid)
    console.log(result);


    if(result.isValid) {
      this.http
      .post(
        `${environment.apiUrl}api/recruiter/interview`, 
        {
          DriverTempID: this.driverTempId,
          BrokerRegion: this.interviewData.BrokerRegion,
          StartDate: this.interviewData.StartDate,
          LeaseDocumentsRequired: this.interviewData.LeaseDocumentsRequired,
          VehicleUseRequired: this.interviewData.VehicleUseRequired,
          BCRequired: this.interviewData.BCRequired,
          DARequired: this.interviewData.DARequired,
          PhysicallyCheckedVI: this.interviewData.VerifiedVI,
          PhysicallyCheckedVR: this.interviewData.VerifiedDL,
          PhysicallyCheckedDL: this.interviewData.VerifiedVR,
          ApprovingRecruiterId: this.interviewData.ApprovingRecruiterId,
          ApprovingRecruiterEmail: this.interviewData.ApprovingRecruiterEmail,
          DriverCleared: this.interviewData.ProceedWithApplicant,
          RecruiterInterviewNotes: this.interviewData.SpecificReason,
          RecruiterRejectionReason: this.interviewData.ReasonForRejection
        })
      .subscribe(element => {
            this.interviewDone = true; 
            if(this.interviewData.ProceedWithApplicant) {
              this.step = 1;
            } else {
              this.step = 4;
              this.endProcess = true;
            }

            var driverObject = {
              driver_id: this.driverTempId,
              name: this.driverName,
              fileType: 'DL'
            }

            this.checkFile('DL').subscribe(comp => {
              if(!comp["success"]) {      
                this.http.post(`${environment.apiUrl}api/upload/setUser`, driverObject).subscribe(comp => console.log(comp));
                this.driverInterval = Observable.interval(2000)
                  .subscribe((val) => {this.checkDL()})
              } else {
                this.checkFile('VR').subscribe(object => {
                  if(!object['success']) {
                    this.step = 2;
                    this.http.post(`${environment.apiUrl}api/upload/setUser`, driverObject).subscribe(comp => console.log(comp));
                    this.registrationInterval = Observable.interval(2000)
                      .subscribe((val) => {this.checkVR()})
                  } else {
                    this.checkFile('VI').subscribe(element => {
                      if(!element['success']) {
                        this.step = 3;
                        this.http.post(`${environment.apiUrl}api/upload/setUser`, driverObject).subscribe(comp => console.log(comp));
                        this.insuranceInterval = Observable.interval(2000)
                          .subscribe((val) => {this.checkVI()})
                      } else {
                        this.step = 4;
                      }
                    })
                  }
                })
              }
            })
      });  
    }
  }

  checkFile(filename: string) {
    return this.http.post(`${environment.apiUrl}api/upload/checkFile`, {driver_id: this.driverTempId, fileType: filename});
  }
  
  checkDL() {
    this.checkFile('DL').subscribe(comp => {
      if(comp["success"]) {
        if(this.interviewData.VerifiedVR) {
          this.step++;
          if(this.driverInterval) this.driverInterval.unsubscribe();
          var driverObject = {
            driver_id: this.driverTempId,
            name: this.driverName,
            fileType: 'VR'
          }
          this.http.post(`${environment.apiUrl}api/upload/setUser`, driverObject).subscribe(comp => console.log(comp));
          this.registrationInterval = Observable.interval(2000)
            .subscribe((val) => {this.checkVR()})
        } else if (this.interviewData.VerifiedVI) {
          this.step += 2;
          if(this.driverInterval) this.driverInterval.unsubscribe();

          var driverObject = {
            driver_id: this.driverTempId,
            name: this.driverName,
            fileType: 'VI'
          }
          this.http.post(`${environment.apiUrl}api/upload/setUser`, driverObject).subscribe(comp => console.log(comp));
          this.insuranceInterval = Observable.interval(2000)
            .subscribe((val) => {this.checkVI()})
        } else {
          this.step += 3;
          if(this.driverInterval) this.driverInterval.unsubscribe();
        }
      }
    })
  }

  checkVR() {
    this.checkFile('VR').subscribe(comp => {
      if(comp["success"]) {
        if(this.interviewData.VerifiedVI) {
          this.step++;
          this.registrationInterval.unsubscribe();
          var driverObject = {
            driver_id: this.driverTempId,
            name: this.driverName,
            fileType: 'VI'
          }
          this.http.post(`${environment.apiUrl}api/upload/setUser`, driverObject).subscribe(comp => console.log(comp));
          this.insuranceInterval = Observable.interval(2000)
          .subscribe((val) => {this.checkVI()})
        } else {
          this.step +=2;
        if(this.driverInterval) this.driverInterval.unsubscribe();
        if(this.registrationInterval) this.registrationInterval.unsubscribe();
        }
      }
    })
  }
  

  checkVI() {
    this.checkFile('VI').subscribe(comp => {
      if(comp["success"]) {
        this.step++;
        if(this.driverInterval) this.driverInterval.unsubscribe();
        if(this.registrationInterval) this.registrationInterval.unsubscribe();
        if(this.insuranceInterval) this.insuranceInterval.unsubscribe();
      }
    })
  }
  
  onDisapproveDriver = (e) => {
    e.preventDefault();
    
    var result = ValidationEngine.validateGroup(this.personalInterviewForm['validationGroup']);
    //alert(result.isValid)
    if(result.isValid) {
      this.http.post(`${environment.apiUrl}api/recruiter/failDriver`, {driverTempId: this.driverTempId}).subscribe(element => {
        this.router.navigateByUrl("/driver/splashes");  
        this.hasPassed = false;
      });  

    }
  }



  onPassDriver() {
    this.http.post(`${environment.apiUrl}api/recruiter/passDriver`, {driverTempId: this.driverTempId}).subscribe(element => {
      this.hasPassed = true;
    });  
  }


  
  onYes(str) {
    switch(str) {
      case 'policeReport' : this.policeReportRequired = true; 
        this.http.post(`${environment.apiUrl}api/recruiter/updateOldDriversAbstract`, {driverTempId: this.driverTempId}).subscribe(element => {
          if(element['Questionnaire']) {
              this.step = 5;
          }
        });
        //this.store.dispatch(new ChecklistActions.UpdateChecklist(CapTypes.CHECKLIST_DRIVERSABSTRACT));
        break;
      case 'leaseDocuments' : this.leaseDocumentsRequired = true; 
        this.http.post(`${environment.apiUrl}api/recruiter/updateVehicleLease`, {driverTempId: this.driverTempId}).subscribe(element => {
          if(element['Questionnaire']) {
              this.step = 5;
          }
        });
        this.http.post(`${environment.apiUrl}api/recruiter/finishQuestions`, {driverTempId: this.driverTempId}).subscribe(element => {console.log(element);});
        //this.store.dispatch(new ChecklistActions.UpdateChecklist(CapTypes.CHECKLIST_VEHICLELEASED));
        break;
      case 'backgroundCheck' : this.backgroundCheckRequired = true; 
        this.http.post(`${environment.apiUrl}api/recruiter/updateOldBackgroundCheck`, {driverTempId: this.driverTempId}).subscribe(element => {
          if(element['Questionnaire']) {
              this.step = 5;
          }
        });
        //this.store.dispatch(new ChecklistActions.UpdateChecklist(CapTypes.CHECKLIST_DRIVERSABSTRACT));
        break;
      case 'vehicleUse' : this.vehicleUseRequired = false; 
        //this.store.dispatch(new ChecklistActions.UpdateChecklist(CapTypes.CHECKLIST_DRIVERSABSTRACT));
        break;
    }
    this.step++;
  }

  onNo(str) {
    switch(str) {
      case 'policeReport' : this.policeReportRequired = false; break;
      case 'leaseDocuments' : 
        this.leaseDocumentsRequired = false;
        this.http.post(`${environment.apiUrl}api/recruiter/finishQuestions`, {driverTempId: this.driverTempId}).subscribe(element => {console.log(element);});
        break;
      case 'backgroundCheck' : this.backgroundCheckRequired = false; break;
      case 'vehicleUse' : 
        this.vehicleUseRequired = true; 
        this.http.post(`${environment.apiUrl}api/recruiter/updateVehicleOwnership`, {driverTempId: this.driverTempId}).subscribe(element => {
          if(element['Questionnaire']) {
              this.step = 5;
          }
        });
        break;
    }
    this.step++;
  }

  proceedNext() {
    this.store.dispatch(new NavigationActions.displayReviewNavigation())
    if(!(this.interviewData.BCRequired && this.interviewData.DARequired)) {
      this.store.dispatch(new NavigationActions.displayBackgroundNavigation())
      this.router.navigateByUrl("/driver/background-check");
    } else {
      //this.store.dispatch(new NavigationActions.displayRecruiterDocument())
      this.router.navigateByUrl("/driver/steps");
    }
  }

  printList() {
   
    window.print();
  }


}
*/

import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import * as NavigationActions from '../../../store/actions/navigation.actions';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import ValidationEngine from 'devextreme/ui/validation_engine';
import { DxFormComponent } from 'devextreme-angular';
import { DriverTemp } from '../../../store/models/driver.model';
import {Observable} from 'rxjs/Observable';
import { DataService } from '../../services/data.service';
import { DriverService } from '../../services/driver.service';
import * as CapActions from '../../../store/actions/cap.actions';
import * as CapTypes from '../../../store/types/types';
import { environment } from '../../../../environments/environment';
import * as DriverTempActions from '../../../store/actions/driverTemp.actions';
import * as DriverReducer from '../../../store/reducers/driver.reducer';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';

@Component({
  selector: 'personal-interview',
  templateUrl: './personal-interview.component.html',
  styleUrls: ['./personal-interview.component.css']
})
export class PersonalInterviewComponent implements OnInit {
  @ViewChild(DxFormComponent) form:DxFormComponent
  @ViewChild('driverInformationForm') public driverInformationForm : DxFormComponent;
  driverTemp: DriverTemp;
  driverTempId: any;
  hasPassed: boolean = false;
  interviewData: any;
  personalInterview: any;
  RejectionReasons: any;
  brokerRegion: any;
  brokerType: any;
  isProceedWithApplicant:boolean= true;
  hsValidWorkPermit:boolean= true;
  isProceed:boolean=true;
  rejectionReasonValue:string;
  StartDateEditorOptions:any;
  constructor(private dataService: DataService, private driverService: DriverService, private store: Store<AppState>, private router: Router, private http: HttpClient, private location:Location) {
    this.brokerType = dataService.getBrokerType();
    this.dataService.getBrokerRegion().subscribe(comp => this.brokerRegion = comp );
    this.RejectionReasons = ['Does not meet standards','Has restrictions on hours','Inappropriate Vehicle','Unable to lift over 50 pounds','Not available immediately','Unable to work night time','Other'];     
    //this.store.select('driver').subscribe(comp => { this.driver = comp; console.log(this.driver); });
    this.booleanCheck = this.booleanCheck.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onProceedApplicantValueChanged = this.onProceedApplicantValueChanged.bind(this);
    this.onValidWorkPermitChanged = this.onValidWorkPermitChanged.bind(this);
    this.onRejectionReasonValueChanged = this.onRejectionReasonValueChanged.bind(this); 

    let currentUser = JSON.parse(localStorage.getItem('currentUser'));

    this.store.select('driverTemp').subscribe(data => {
      console.log('drivertemp data')
      console.log(data)
        if(data && data.TempID.length == 0) {
          this.driverTemp = data;
          this.driverTemp.TempID = data.TempID;
        }
        else{
          let driverTempObj: DriverTemp = {
            TempID: '',
            Charges: null,
            Conviction: null,
            VehicleUseRequired: null,
            BCRequired: null,
            DARequired : null,
            LeaseDocumentsRequired: null,
            ProceedWithApplicant: null,
            BrokerRegion:'',
            BrokerType: '',
            StartDate:new Date(),
            FirstName: '',
            MiddleName: '',
            LastName: '',  
            DOB:null,
            Email: '',  
            CellPhone: '',
            ValidWorkPermit:null,
            ReasonForRejection:'',
            ApprovingRecruiterId: currentUser.RecruiterID,
            ApprovingRecruiterEmail: currentUser.Email
          };   
          this.driverTemp = driverTempObj;  
          this.store.dispatch(new DriverTempActions.AddTempDriver(this.driverTemp));  
        }
    });
    
    this.StartDateEditorOptions={                  
        invalidDateMessage: 'Use format: MM/dd/yyyy', 
        type:'date',
        pickerType: 'calender',
        value: new Date()
      }
  }    

  ngOnInit() { 
     
   }

  onFormSubmit(e) {
    e.preventDefault();    
    var result = ValidationEngine.validateGroup('driverTempData');

    if(result.isValid) {
      if(this.isProceedWithApplicant) {        
        this.router.navigateByUrl('/driver/basic-personal-info');
        this.store.dispatch(new CapActions.UpdateCap(CapTypes.CAP_INTERVIEW));
      } else {
        this.router.navigateByUrl("/index");
      } 
    }
  }

  onPassDriver() {
    this.http.post(`${environment.apiUrl}api/recruiter/passDriver`, {driverTempId: this.driverTempId}).subscribe(element => {
      this.hasPassed = true;
    });  
  }

  booleanCheck = (e) => {
    if(typeof(e.value) === 'boolean') return true;
    return false;
  }

  onValidWorkPermitChanged(e){
    this.hsValidWorkPermit = e.value;
    this.isProceed = (!this.isProceedWithApplicant || !e.value) ? false : true;
  }

  onProceedApplicantValueChanged(e){
    this.isProceedWithApplicant = e.value;
    this.isProceed = (!this.hsValidWorkPermit || !e.value) ? false : true;
  }

  onRejectionReasonValueChanged(e){
    this.rejectionReasonValue  = e.value;
  }

  onResetForm(event){
    this.driverInformationForm.instance.resetValues();    
  }

  onPrevious(event){
    this.location.back();
  }

  onApproveDriver = (e) => {
    e.preventDefault();
    var result = ValidationEngine.validateGroup("driverTempData");

    if(result.isValid) {
      this.http
      .post(
        "http://10.10.200.233:5000/api/recruiter/interview", 
        {
          DriverTempID: this.driverTempId,
          BrokerRegion: this.driverTemp.BrokerRegion,
          
          RecruiterRejectionReason: this.driverTemp.ReasonForRejection
        })
      .subscribe(element => {
        
      });  
    }
  }
}
