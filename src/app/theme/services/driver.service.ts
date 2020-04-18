import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Driver, DriverTemp } from '../../store/models/driver.model';
import { Vehicle } from '../../store/models/vehicle.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.state';
import { AddressHistory } from '../../store/models/addresshistory.model';
import { EmploymentHistory } from '../../store/models/employmenthistory.model';
import { ResponseContentType } from '@angular/http';
import { map } from 'rxjs/operators';
import { saveAs } from 'file-saver';
import { environment } from '../../../environments/environment';

const apiUrl = `${environment.apiUrl}api/drivers/`;
const printAPIUrl = "http://test.appleexpress.com:5050/onboardingapi/";

@Injectable()
export class DriverService {

  constructor(private http: HttpClient, private store: Store<AppState>) { }

  //Not to be used now
  getNewTempID(email) {
    return this.http.post(`${apiUrl}addNewDriver`, {email: email});
  }

  // Not to be used now
  getNewTempIDWithPhone(phone) {
    return this.http.post(`${apiUrl}addNewDriver`, {phone: "+1 "+phone});
  }

  addDriverPersonalInfo = (driver: Driver) => {
    return this.http.post(`${apiUrl}personal`, driver);
  }

  addDriverVehicleInfo = (driver: Driver) => {
    return this.http.post(`${apiUrl}vehicle`, driver);
  }

  createDriverProfile = (driver: Driver) => {
    return this.http.post(`${apiUrl}createDriverProfile`, driver);
  }

  createDriverBasicProfile = (driver: DriverTemp) => {
    return this.http.post(`${apiUrl}createDriverBasicProfile`, driver);
  }  

  updateDriverInformation = (driver: Driver) => {
    return this.http.post(`${apiUrl}updateDriverInformation`, driver);
  }

  addAddressHistory = (addressHistory: AddressHistory, tempID: string) => {
    return this.http.post(`${apiUrl}addAddressHistory`, {...addressHistory, TempID: tempID });
  }

  addEmploymentHistory = (employmentHistory: EmploymentHistory, tempID: string) => {
      return this.http.post(`${apiUrl}addEmploymentHistory`, {...employmentHistory, TempID: tempID });
  }

  getAllDrivers = () => {
    return this.http.get(`${apiUrl}alldrivers`);
  }

  getDriverInformation = (driverTempID: any) => {
    return;
  }

  getConsentVerbiage = () => {
    return this.http.get(`${apiUrl}getConsentVerbiage`);
  }

  getDriverAddressHistory = (tempID) => {
    return this.http.get(`${apiUrl}getAddressHistory/${tempID}`);
  }

  getDriverEmploymentHistory = (tempID) => {
    return this.http.get(`${apiUrl}getEmploymentHistory/${tempID}`);
  }

  printWsib = (driverid) => {
     var recruiterid = JSON.parse(localStorage.getItem("currentUser")).RecruiterID;
   /* return this.http.get(`${printAPIUrl}printwsib/${driverid}/${recruiterid}`, {  responseType: 'blob' as 'blob' }).map(
      (res) => {
          return new Blob([res.blob()], { type: 'application/pdf' })
      }); */
      this.downloadPdf(`${printAPIUrl}printwsib/${driverid}/${recruiterid}`).subscribe((sub) => { saveAs(sub); });
  }

  printVBApplication = (driverid) => {
    var recruiterid = JSON.parse(localStorage.getItem("currentUser")).RecruiterID;
    /* return this.http.get(`${printAPIUrl}printVendorBrokerApplication/${driverid}/${recruiterid}`,{  responseType: ResponseContentType.Blob }).map(
      (res) => {
          return new Blob([res.blob()], { type: 'application/pdf' })
      }); */
      this.downloadPDF(`${printAPIUrl}printwsib/${driverid}/${recruiterid}`, "Vendor Broker Application.pdf");
  }

  printAgreement = (driverid) => {
    var recruiterid = JSON.parse(localStorage.getItem("currentUser")).RecruiterID;
   /*  return this.http.get(`${printAPIUrl}printBrokerAgreement/${driverid}/${recruiterid}`,{  responseType: ResponseContentType.Blob }).map(
      (res) => {
          return new Blob([res.blob()], { type: 'application/pdf' })
      }); */
      this.downloadPDF(`${printAPIUrl}printwsib/${driverid}/${recruiterid}`, "IC Agreement.pdf");
  }

  public downloadPdf(url): any {
    let headers = new Headers();
    let headerOptions = new HttpHeaders({
      'Content-Type': 'application/json', 
      'Accept': 'application/pdf'
     //   'Accept': 'application/octet-stream', // for excel file
    }); 
    headers.append('Authorization', 'JWT ' + localStorage.getItem('id_token'));
    return this.http.get(url,{  headers: headerOptions, responseType: 'blob' as 'blob'}).map(
        (res) => {
            return new Blob([res], { type: 'application/pdf' })
        })
  }
  
  downloadPDF(serviceUrl, filename)
  {

    let headerOptions = new HttpHeaders({
    'Content-Type': 'application/json', 
    'Accept': 'application/pdf'
   //   'Accept': 'application/octet-stream', // for excel file
  }); 

      let requestOptions = {headers : headerOptions,responseType: 'blob' as 'blob'}; 
      // post or get depending on your requirement
        this.http.get(serviceUrl,requestOptions).pipe(map((data :any)  => {

          let blob = new Blob([data], { 
             type: 'application/pdf' // must match the Accept type
          // type: 'application/octet-stream' // for excel 
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = filename;
          link.click();
          window.URL.revokeObjectURL(link.href);

        })).subscribe((result : any) => {
        });

  }

  mapDataToDriverModel = (comp: any):Driver => {
    console.log("Driver");
    console.log(comp);
    const driver: Driver = {
      TempID: comp['DriverTempID'],  //SpecialMapping
      BrokerRegion: +comp['BrokerRegion'],
      BrokerType: comp['BrokerType'],
      FirstName: comp['FirstName'],
      LastName: comp['LastName'],
      MiddleName: comp['MiddleName'],
      CompanyName: comp['CompanyName'],
      StreetName: comp['StreetName'],
      Unit: comp['Unit'],
      City: comp['City'],
      Country: comp['Country'],
      Province: comp['Province'],
      PostalCode: comp['PostalCode'],
      Email: comp['Email'],
      AlternateEmail: comp['AlternateEmail'], 
      HomePhone: comp['HomePhone'],
      CellPhone: comp['CellPhone'],
      EmergencyPhone: comp['EmergencyPhone'],
      Fax: comp['Fax'],
      AlternateFax: comp['AlternateFax'],
      SIN: comp['SIN'],
      BIN: comp['BIN'],
      DOB: comp['DOB'] ? new Date(comp['DOB']) : comp['DOB'],
      VehicleType: comp['VehicleType'],
      LicenseNumber: comp['LicenseNumber'],
      LicenseIssueDate: comp['LicenseIssueDate'] ? new Date(comp['LicenseIssueDate'].replace("+00:00", "").replace("T", " ").replace("-", "/")).toString() : comp['LicenseIssueDate'],
      LicenseExpiryDate: comp['LicenseExpiryDate'] ? new Date(comp['LicenseExpiryDate']).toString() : comp['LicenseExpiryDate'],
      VehicleMake: comp['VehicleMake'],
      VehicleModel: comp['VehicleModel'],
      VehicleYear: comp['VehicleYear'],
      VehicleInsurance: comp['InsuranceName'],
      InsurancePolicyNo: comp['InsurancePolicyNo'],
      InsurancePolicyExpiryDate: comp['InsurancePolicyExpiryDate'] ? new Date(comp['InsurancePolicyExpiryDate']) : comp['InsurancePolicyExpiryDate'],
      LicensePlateNo: comp['LicensePlateNo'],
      LicensePlateExpiryDate: comp['LicensePlateExpiryDate'] ? new Date(comp['LicensePlateExpiryDate']) : comp['LicensePlateExpiryDate'],
      VehicleVinNo: comp['VINNo'],
      ProceedWithApplicant: comp['DriverCleared'], //SpecialMapping
      SpecificReason: comp['SpecificReason'],
      ReasonForRejection: comp['ReasonForRejection'],
      ApprovingRecruiterId: comp['ApprovingRecruiterId'],
      ApprovingRecruiterEmail: comp['ApprovingRecruiterEmail'],
      EmergencyContactName: comp['EmergencyContactName'],
      ScanID: null,
      Charges: comp['Charges'],
      Conviction: comp['Conviction'],
      Gender: comp['Gender'],
      StartDate: comp['StartDate'] ? new Date(comp['StartDate']) : comp['StartDate'],
      VehicleUseRequired: comp['VehicleUseRequired'],
      BCRequired: comp['BCRequired'],
      DARequired: comp['DARequired'],
      LeaseDocumentsRequired: comp['LeaseDocumentsRequired'],
      GST: comp['GST'],
      VehicleLeased: comp['VehicleLeased']
    }
    return driver;
  }

  mapDataToAddressHistoryModel = (comp: any): AddressHistory => {
    const address: AddressHistory = {
      AddressID: comp['ID'],
      City: comp['City'],
      Country: comp['Country'],
      CurrentAddress: comp['CurrentAddress'],
      DriverNumber: comp['DriverNumber'],
      FromDate: comp['FromDate'] ? new Date(comp['FromDate']) : comp['FromDate'],
      PostalCode: comp['PostalCode'],
      Province: comp['Province'],
      StreetName: comp['StreetName'],
      ToDate: comp['FromDate'] ? new Date(comp['ToDate']) : comp['FromDate'],
      Unit: comp['Unit'],
    }
    return address;
  }

  mapDataToEmploymentModel = (comp: any): EmploymentHistory => {
    const employment: EmploymentHistory = {
      EmploymentID: comp['ID'],
      DriverNumber: comp['DriverNumber'],
      FromDate: comp['FromDate'] ? new Date(comp['FromDate']) : comp['FromDate'],
      ToDate: comp['FromDate'] ? new Date(comp['FromDate']) : comp['FromDate'],
      StillEmployed: comp['StillEmployed'],
      CompanyName: comp['CompanyName'],
      CompanyStreet: comp['CompanyStreet'],
      CompanyCity: comp['CompanyCity'],
      CompanyPostalCode: comp['CompanyPostalCode'],
      CompanyProvince: comp['CompanyProvince'],
      CompanyCountry: comp['CompanyCountry'],
      CompanyPhone: comp['CompanyPhone'],
      Position: comp['Position'],    
      Salary: comp['Salary'],
      SupervisorName: comp['SupervisorName'],        
      ReasonForLeaving: comp['ReasonForLeaving']
    }
    return employment;
  }
}
