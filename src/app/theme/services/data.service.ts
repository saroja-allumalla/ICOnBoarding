import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/core/src/render3/util';
import { environment } from '../../../environments/environment';

let brokerRegion: string[] = [
  'TORONTO',
  'MONTREAL',
  'VANCOUVER',
  'WEST',
  'ONTARIO',
  'EAST',
  'US',
  'CALGARY(CGY)',
  'EDMONTON(EDM)',
  'MATTS(MATTS)',
  'OTTAWA(OTT)'
] ;
let brokerType: any[] = [
  'COMPANY',
  'INDIVIDUAL'
];

let vehicleType: string[] = [
  'MINI VAN',
  'CAR',
  '5 TON TRUCK',
  '3 TON TRUCK',
  'FULLSIZE VAN',
  'TRACTOR TRAILER',
  'POWER TAILGATE',
  'TILT DECK TRAILER',
  '1 TON',
  'GOOSENECK',
  'CUBEVAN',
  'PIPE RACK',
  'PICKUP',
  '1/2 TON TRUCK',
  '1/4 TON TRUCK',
];

let workerCompensationClass: string[] = [
  'IC',
  'DEEMED'
]

export class Driver {
  BrokerRegion: string;
  BrokerType: string;
  Name: string;
  CompanyName: string;
  StreetName: string;
  Unit: string;
  City: string;
  Country: string;
  Province: string;
  PostalCode: string;
  Email: string;
  AlternateEmail: string;
  HomePhone: string;
  CellPhone: string;
  EmergencyPhone: string;
  Fax: string;
  Fax2: string;  
}

let driver: Driver = {
  'BrokerRegion': null,
  'BrokerType': null,
  "Name": null,
  'CompanyName': null,
  'StreetName': null,
  'Unit': null,
  'City': null,
  'Country': null,
  'Province': null,
  'PostalCode': null,
  'Email': null,
  'AlternateEmail': null,
  'HomePhone': null,
  'CellPhone': null,
  'EmergencyPhone': null,
  'Fax': null,
  'Fax2': null,
}



@Injectable()
export class DataService {

  VehicleObject: {
    VehicleTypeID: number,
    Description: string,
    Picture: number,
    MaximumWeight: number,
    MaximumDistance: number
  } [] = [];
  
  constructor(private http: HttpClient) { }


  public getBrokerType() {
    return brokerType;
  }

  public getBrokerRegion() {
    return this.http.get(`${environment.apiUrl}api/drivers/getbrokerregions`);
  }

  public getVehicleType() {
    return this.http.get(`${environment.apiUrl}api/drivers/getvehicletypes`);
  }

  public getWorkerCompensationClass() {
    return workerCompensationClass;
  }

  public getDriver() {
    return driver;
  }

}
