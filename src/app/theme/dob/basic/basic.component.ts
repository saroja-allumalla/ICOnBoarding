/// <reference types="@types/googlemaps" />
import { Component,OnInit,ViewChild,enableProdMode,ElementRef,NgZone,AfterViewInit,ViewChildren,QueryList} from '@angular/core';
import { DxFormComponent,DxValidationGroupComponent,DxSelectBoxComponent} from 'devextreme-angular';
import {Customer,Service} from './basic.service';
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
import {Driver} from '../../../store/models/driver.model';
import * as DriverActions from '../../../store/actions/driver.actions';
import { Router } from '@angular/router';
import * as CapActions from '../../../store/actions/cap.actions';
import * as CapTypes from '../../../store/types/types';
import { UtilsService } from '../../services/utils.service';
import { DriverService } from '../../services/driver.service';
import * as util from '../../../store/util/phonePipe';
import { Location } from '@angular/common';

@Component({
    selector: 'app-basic',
    templateUrl: './basic.component.html',
    styleUrls: ['./basic.component.css'],
    providers: [Service],
})
export class BasicComponent implements OnInit, AfterViewInit {
    @ViewChild(DxFormComponent) form: DxFormComponent
    @ViewChild("driverInformationForm") public driverInformationForm: DxFormComponent
    driver: Driver;
    priorities: string[];
    priority: string;
    customer: Customer;
    countries: string[];
    cities: string[];
    brokerRegion: string[];
    brokerType: any;
    //brokerType: ArrayStore;
    namePattern: any = /^[^0-9]+$/;
    phonePattern: any = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
    phoneRules: any = {
        X: /[02-9]/
    };
    individual: boolean = false;
    company: boolean = true;
    vendorMask: any = '000-000-000';
    vendorBinRules: any = {
        rc: /^[a-zA-Z0-9]+$/
    };
    vendorMaskRules: any = {
        X: /[02-9]/
    };
    driverFormData: Driver;    
    @ViewChild("search") public searchElementRef: ElementRef;
    @ViewChild("name") name: DxiItemComponent;
    @ViewChild("companyName") companyName: DxiItemComponent;
    @ViewChildren(DxiItemComponent) public inputs: QueryList < DxiItemComponent > ;
    public latitude: number;
    public longitude: number;
    public searchControl: FormControl;
    public zoom: number;
    place: any;
    location = {};
    dlStreetName = '';
    dlUnit = '';
    dlProvince = '';
    dlPostalCode = '';
    city = '';
    dlCountry = '';
    driverData: any;
    formItems: any;
    HomePhoneEditorOptions: any;    
    CellPhoneEditorOptions: any;    
    EmergencyPhoneEditorOptions: any;    

    passwordComparison = () => {
        return this.form.instance.option("formData").Password;
    };
   
    checkComparison() {
        return true;
    }
    constructor(private _utilService: UtilsService, private driverService: DriverService, private dataService: DataService, service: Service, private mapsAPILoader: MapsAPILoader, private store: Store < AppState > , private ngZone: NgZone, private router: Router, private previousLocation:Location) {
        this.brokerType = dataService.getBrokerType();
        this.store.select('driver').subscribe(comp => {
            this.driver = comp;
            if (comp['City']) this.city = comp['City'];
            if (comp['StreetName']) this.dlStreetName = comp['StreetName'];
            if (comp['Country']) this.dlCountry = comp['Country'];
            if (comp['PostalCode']) this.dlPostalCode = comp['PostalCode'];
            if (comp['Unit']) this.dlUnit = comp['Unit'];
            if (comp['Province']) this.dlProvince = comp['Province'];
            else {
                console.log("Nothing selected");
            };
        })
        this.ssnValidCheck = this.ssnValidCheck.bind(this);

        this.HomePhoneEditorOptions={
            valueChangeEvent: "keyup",            
                  onValueChanged: (event) => {
                    event.value.replace(this.phonePattern);
                    this.driverInformationForm.instance.getEditor("HomePhone").option("value", util.phoneNumberTransform(event.value));
                  },
          }
      
          this.CellPhoneEditorOptions={
            valueChangeEvent: "keyup",            
                  onValueChanged: (event) => {
                    event.value.replace(this.phonePattern);
                    this.driverInformationForm.instance.getEditor("CellPhone").option("value", util.phoneNumberTransform(event.value));
                  },
          }
      
          this.EmergencyPhoneEditorOptions={
            valueChangeEvent: "keyup",            
                  onValueChanged: (event) => {
                    event.value.replace(this.phonePattern);
                    this.driverInformationForm.instance.getEditor("EmergencyPhone").option("value", util.phoneNumberTransform(event.value));
                  },
          }
    }

    ngAfterViewInit() {
        this.driverInformationForm.instance.validate();
    }

    ssnValidCheck(e) {
        return this._utilService.isValidSSN(e.value);
    }

    onPrevious(event){
        this.previousLocation.back();
      }

    ngOnInit() {
        //set google maps defaults
        this.zoom = 4;
        this.latitude = 39.8282;
        this.longitude = -98.5795;

        //create search FormControl
        this.searchControl = new FormControl();

        //load Places Autocomplete
        this.mapsAPILoader.load().then(() => {
            let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", () => {
                this.ngZone.run(() => {
                    //get the place result
                    let place: google.maps.places.PlaceResult = autocomplete.getPlace();
                    this.place = place;
                    console.log(place.address_components);
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    console.log(place);
                    place.address_components.forEach(element => {
                        console.log(element.types[0] + ' ' + element.long_name);
                        switch (element.types[0]) {
                            case 'street_number':
                                this.dlStreetName = element.long_name;
                                break;
                            case 'route':
                                let number = this.dlStreetName;
                                this.dlStreetName = number + ' ' + element.long_name;
                                break;
                            case 'locality':
                                this.city = element.long_name;
                                break;
                            case 'administrative_area_level_1':
                                this.dlProvince = element.long_name;
                                break;
                            case 'country':
                                this.dlCountry = element.long_name;
                                break;
                            case 'postal_code':
                                this.dlPostalCode = element.long_name;
                                break;
                        }
                    })

                    //set latitude, longitude and zoom
                    this.latitude = place.geometry.location.lat();
                    this.longitude = place.geometry.location.lng();
                    this.zoom = 12;
                });
            });
        });


        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.location = position.coords;
            });
        }
    }

    onFormSubmit = function (e) {
        e.preventDefault();
        var result = ValidationEngine.validateGroup("driverData");
        if (result.isValid) {
           // this.store.dispatch(new DriverActions.AddDriver(this.driver));
           
            notify({
                message: "You have submitted the form",
                position: {
                    my: "center top",
                    at: "center top"
                }
            }, "success", 3000);
            this.router.navigateByUrl('/driver/vehicle');
            this.store.dispatch(new CapActions.UpdateCap(CapTypes.CAP_PERSONAL));
            this.driverService.addDriverPersonalInfo(this.driver).subscribe();            
        }
    }


}