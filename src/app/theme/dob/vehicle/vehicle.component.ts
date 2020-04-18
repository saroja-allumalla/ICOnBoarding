import { Component, OnInit, ViewChild, enableProdMode, ElementRef, NgZone } from '@angular/core';
import { Driver, DataService } from '../../services/data.service';
import { DxFormComponent } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import ValidationEngine from 'devextreme/ui/validation_engine';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../../../store/app.state';
import * as CapActions from '../../../store/actions/cap.actions';
import * as NavigationActions from '../../../store/actions/navigation.actions';
import * as CapTypes from '../../../store/types/types';
import { Vehicle } from '../../../store/models/vehicle.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DriverService } from '../../services/driver.service';
import { Location } from '@angular/common';

@Component({
  selector: 'vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  @ViewChild(DxFormComponent) form: DxFormComponent
  @ViewChild("vehicleInformationForm") public vehicleInformationForm: DxFormComponent;
  driver: any;
  vehicle: Vehicle;
  licenseNumberRules: any = {
    X: /[A-Z]/
  }
  vehicleVIN: RegExp;
  workerCompensationClass: string[];
  vehicleType: any;
  quizNavigation: boolean = false;
  vehicleObject: any[] = [];

  constructor(dataService: DataService, private driverService: DriverService, private store: Store<AppState>, private router: Router, private http: HttpClient, private previousLocation:Location) { 
    this.store.select('driver').subscribe(comp => {
      this.driver = comp;
    });
    this.vehicleVIN = new RegExp("^[A-HJ-NPR-Z\\d]{8}[\\dX][A-HJ-NPR-Z\\d]{2}\\d{6}$");
    dataService.getVehicleType().subscribe(comp => this.vehicleType = comp);
    this.workerCompensationClass = dataService.getWorkerCompensationClass();
    this.vehicleVinCheck = this.vehicleVinCheck.bind(this);
    this.licenseNumberCheck = this.licenseNumberCheck.bind(this);
  }

  ngOnInit() {
    this.store.select('cap').subscribe(comp => {
      if(comp.Vehicle == 10) this.quizNavigation = true;
    })
  }

  ngAfterViewInit(): void {
    this.vehicleInformationForm.instance.validate();
    this.vehicleInformationForm.showValidationSummary = true;
  }


  vehicleVinCheck(e) {
    this.http.get("https://vpic.nhtsa.dot.gov/api//vehicles/DecodeVin/"+e.value+"?format=json").subscribe(comp => {
        comp['Results'].forEach(element => {
          switch(element['Variable']) {
            case "Make": this.vehicle.VehicleMake = element["Value"]; break;
            case "Model": this.vehicle.VehicleModel = element["Value"]; break;
            case "Model Year": this.vehicle.VehicleYear = element["Value"]; break;
            default: break;
          }
          if(element['Value']) {
            this.vehicleObject.push(element)
          }
        })
      })
   
 
   /*
    if(e.value.match(this.vehicleVIN)){
      this.http.get("https://vpic.nhtsa.dot.gov/api//vehicles/DecodeVin/"+e.value+"?format=json").subscribe(comp => {
        console.log(comp['Results']);
        comp['Results'].forEach(element => {
          switch(element['Variable']) {
            case "Make": this.vehicle.VehicleMake = element["Value"]; break;
            case "Model": this.vehicle.VehicleModel = element["Value"]; break;
            case "Model Year": this.vehicle.VehicleYear = element["Value"]; break;
            default: break;
          }
        })
      })
      return true;
    } else {
      return true;
    }
    */
   
    return true;
  }


  licenseNumberCheck(e) {
    let error = false;
    if(e.value.length != 17) return false;
    else{
      this.store.select('driver').subscribe(comp => {
        var d = new Date(comp.DOB);
        var year = d.getFullYear();
        var date = d.getDate();
        if(year.toString().substr(2,2) === (e.value.substr(10,1)) + e.value.substr(12,1)) {
          let dater = date.toString();
          if(date.toString().length == 1) dater = "0" + dater;
          if(dater === e.value.substr(15,2)) {
            return true;
          } else {
            error = true;
            return false;
          }
        } else {
          error = true;
          return false;
        }
      })
     if(error) return false; else return true;
    }
  } 

  onPrevious(event){
    this.previousLocation.back();
  }


  onFormSubmit = function(e) {
        
    e.preventDefault();
    var result = ValidationEngine.validateGroup("vehicleData");
   //var vehivleResult = ValidationEngine.validateGroup("Vehicle");
    //console.log(result.brokenRules);
    
          notify({
              message: "You have submitted the form",
              position: {
                  my: "center top",
                  at: "center top"
              }
          }, "success", 3000);

              
      
      this.driverService.updateDriverInformation(this.driver).subscribe(data => {
        if(data)
        this.router.navigateByUrl('/driver/steps');
      });
}
}
