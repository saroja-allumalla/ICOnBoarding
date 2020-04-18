/// <reference types="@types/googlemaps" />
import { Component,OnInit,ViewChild,enableProdMode,ElementRef,NgZone,AfterViewInit,ViewChildren,QueryList, SimpleChanges,Input} from '@angular/core';
import { DxFormComponent,DxValidationGroupComponent,DxSelectBoxComponent} from 'devextreme-angular';
import {MapsAPILoader} from '@agm/core';
import {FormBuilder,FormGroup,Validators,FormControl,ReactiveFormsModule,NgControl} from '@angular/forms';
import {DataService} from '../../services/data.service';
import notify from 'devextreme/ui/notify';
import validation_group from 'devextreme/ui/validation_group';
import ArrayStore from "devextreme/data/array_store";
import ValidationEngine from 'devextreme/ui/validation_engine';
import {DxiItemComponent} from 'devextreme-angular/ui/nested/item-dxi';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {AppState} from '../../../store/app.state';
import {DriverTemp} from '../../../store/models/driver.model';
import * as DriverActions from '../../../store/actions/driver.actions';
import * as AddressHistoryActions from '../../../store/actions/addresshistory.actions';
import * as EmploymentHistoryActions from '../../../store/actions/employmenthistory.actions';
import * as NavigationActions from '../../../store/actions/navigation.actions';
import {AddressHistory} from '../../../store/models/addresshistory.model';
import { Router } from '@angular/router';
import * as CapActions from '../../../store/actions/cap.actions';
import * as CapTypes from '../../../store/types/types';
import { UtilsService } from '../../services/utils.service';
import { DriverService } from '../../services/driver.service';
import * as util from '../../../store/util/phonePipe';
import { Location } from '@angular/common';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'baisc-personal-info',
  templateUrl: './baisc-personal-info.component.html',
  styleUrls: ['./baisc-personal-info.component.css']
})
export class BaiscPersonalInfoComponent implements OnInit {
  driverTemp: DriverTemp;
  cellPhoneEditorOptions:any;  
  @ViewChild("errorMessage") public errorMessageElementRef: ElementRef;     
  @ViewChild("driverInformationForm") public driverInformationForm : DxFormComponent;  
  phonePattern: any = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
  constructor(private _utilService: UtilsService, private driverService: DriverService, private dataService: DataService, private mapsAPILoader: MapsAPILoader, private store: Store <AppState> , private ngZone: NgZone, private router: Router, private location:Location) {
      this.store.select('driverTemp').subscribe(comp=>{        
        this.driverTemp = comp;        
      })  

      this.onFormSubmit = this.onFormSubmit.bind(this);
      this.birthDateCheck = this.birthDateCheck.bind(this);   

    this.cellPhoneEditorOptions={
      valueChangeEvent: "keyup",            
            onValueChanged: (event) => {
              event.value.replace(this.phonePattern);
              this.driverInformationForm.instance.getEditor("CellPhone").option("value", util.phoneNumberTransform(event.value));
            },
    }
   }

  ngOnInit() {
  }

  birthDateCheck(e){          
    let dob = new Date(e.value);
    let diff = (new Date().getTime() - dob.getTime()) / (1000*60 * 60 * 24);
    return dob && Math.round(diff/365.25) >= 18;
}  

  onFormSubmit = function (e) {    
    e.preventDefault();    
    var result = ValidationEngine.validateGroup('driverTempData');
    this.errorMessageElementRef.nativeElement.innerHTML  = '';    
    var email = this.driverInformationForm.instance.option('formData').Email;
    var cellPhome = this.driverInformationForm.instance.option('formData').CellPhone;
    
    console.log(result)
    if(email !="" || cellPhome != "")
    {
       if(result.isValid){   
    //   notify({
    //     message: "You have submitted the form",
    //     position: {
    //         my: "center top",
    //         at: "center top"
    //     }
    // }, "success", 3000);
    this.store.dispatch(new CapActions.UpdateCap(CapTypes.CAP_PERSONAL));    
    this.driverService.createDriverBasicProfile(this.driverTemp).subscribe(data => {
        console.log(data);
        this.driverTemp.TempID = data;
        console.log("Create Profile Returned Data");

        if(this.driverTemp.TempID == -1){
          Swal({
            title: 'Nope!',
            text: 'Email/Cellular Phone already exists in the system',
            type: 'error',
            confirmButtonText: 'Cool'
        })
        }
        else{                        
        this.router.navigateByUrl('/driver/basic-profile-created');
        // this.driverService.getDriverAddressHistory(data).subscribe(element => {
        //     this.store.dispatch(new AddressHistoryActions.AddAddressHistory(this.driverService.mapDataToAddressHistoryModel(element[0])));
        //     this.store.dispatch(new AddressHistoryActions.AddAddressHistory(this.driverService.mapDataToAddressHistoryModel(element[1])));                    
        // })

        // this.driverService.getDriverEmploymentHistory(data).subscribe(element => {
        //     this.store.dispatch(new EmploymentHistoryActions.AddEmploymentHistory(this.driverService.mapDataToEmploymentModel(element[0])));
        //     this.store.dispatch(new EmploymentHistoryActions.AddEmploymentHistory(this.driverService.mapDataToEmploymentModel(element[1])));
        //     this.store.dispatch(new EmploymentHistoryActions.AddEmploymentHistory(this.driverService.mapDataToEmploymentModel(element[2])));
        //     this.store.dispatch(new EmploymentHistoryActions.AddEmploymentHistory(this.driverService.mapDataToEmploymentModel(element[3])));
        //     this.store.dispatch(new EmploymentHistoryActions.AddEmploymentHistory(this.driverService.mapDataToEmploymentModel(element[4])));
        // })
      }
    }) 
  }
}
  else{    
    Swal({
      title: 'Nope!',
      text: 'Email or Cellular Phone is mandatory',
      type: 'error',
      confirmButtonText: 'Cool'
  })
  }
}

onPrevious(event){
  this.location.back();
}

onResetForm(event){
  this.driverInformationForm.instance.resetValues();    
}
}
