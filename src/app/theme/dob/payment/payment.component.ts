import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import * as NavigationActions from '../../../store/actions/navigation.actions';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentDone: boolean = false;
  driverTempId: any;
  public recruiterName: string;
  public recruiterEmail: string;
  public amountToBeCollected: string;
  public packageSelected: string;
  public paymentTypeDataSource: any;
  public paymentType: any;

  constructor(private http: HttpClient, private store: Store<AppState>, private router: Router) {
    this.recruiterName = JSON.parse(localStorage.getItem("currentUser")).Name;
    this.recruiterEmail = JSON.parse(localStorage.getItem("currentUser")).Email;
    this.paymentType = null;
    this.paymentTypeDataSource = ["Cash", "Debit/Credit"]
    this.store.select('driver').subscribe(comp => {
      this.driverTempId = comp['TempID'];
    })
  }

  onClickPayment() {
    //console.log(window['workflow']['options']);
    //console.log(document.getElementById('candidate-pay'));
    //console.log(window['workflow']['options']['element']);
    
    //console.log(window['workflow']);
    //console.log(window['init']);
    //console.log(window['config']);
   
    window['candidataId'] = "988212368";
    window['conn_ACCESS_TOKEN'] = 'eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5rZW5uZWN0LmNvbS8iLCJzdWIiOiJvbmRlbWFuZHxteUNvbXBhbnlVc2VySWR8MjAwMTE1NTgiLCJyb2xlcyI6WyIvaW50djEvR0VUL2pzL3BhY2thZ2VzLzgzOTczNDEvcHJpY2UiLCIvaW50djEvUE9TVC9qcy9zY3JlZW5pbmdzIiwiL2ludHYxL1BPU1QvanMvY2hhcmdlcyIsIi9pbnR2MS9HRVQvanMvcGFja2FnZXMiLCIvaW50djEvUE9TVC9qcy9jYW5kaWRhdGVzIiwiL2ludHYxL1BPU1QvanMvcGFydG5lci1hY2NvdW50cyJdLCJkYXRhIjp7InBhY2thZ2UiOnsiaWQiOiI4Mzk3MzQxIn0sImNhbmRpZGF0ZSI6eyJpZCI6Ijk4ODIxMjM2OCJ9LCJiYXNlVXJsIjoiaHR0cHM6Ly9hcGktaW50Lmtlbm5lY3QuY29tL3YxL2pzIn0sImlhdCI6MTU1MDYxODg5MiwiZXhwIjoxNTUwNjIyNDkyfQ.omihTF8m3YwsNrFCzzRC6LDgna7olNJqa1btc2oK1WdHy2gHk7apLaWTfaXeEGGmQETVEwwTqyqFQjYGK8hTi8o60ll4U-FNNK0MgLeBGH4qQdeGjpQK-3itP51CNT8RrBH6bQrNN6ZwPnHzC3twa6ArxqOGsrWoQBn5rvq2eUY1y1iRbbXvssJz_ncDI-h7clG-wOfnHUgaCy9yUnAdqVPQEga7EKHT7W2fhh5ciBfkkcGFMRHe5Flq_YF-O-addpinbAZ-h4ll4nkA5WCk_xzaAPTzDv_qVeBMICGzRg9L3HEDKHlErA1kZJTqEtemdvhL_dlIn48kQwqdqJiJdSXKEFFarXFNF22N16bX1s2keDegB4kOm9LHZasxl9vIKAl_n0ulFfs0OG-nqAsz562dgTDvBkpJZmnQLLEMYr_ihx5QMVfWiboyusePkWXCWMsczFQzcNhbkSKgPXgMAtGCb1EgSEjsYXhdM5NhRfWGyfnes4o8MMpNZ1GK_EPXM1RMgA6ZW5u6VYYCYUuLRPgZLXM4SQ73aDJI1AYzHt3I29aiPt2ALzNXJFBROkaz92_WmgQxUhLvm562J2U-lhnRPEgeksYswATzRXM1B1AtEgCzzrsXrU2BZT8TRrbCJ1PysEpfxpG0pK57pn0C_nCO0pbNmJYNJRS2BWMwLnY';
    var init = window['init'];
    init();
    //window['workflow'].initialize();
    window['workflow']['options']['element'] = document.getElementById('candidate-pay');
    window['workflow'].on('complete', (output) => {
      console.log('Workflow Complete:', output);
      console.log("inside the complete function");
    });

    window['workflow']
    .on('ready', (data) => { 
      console.log(data);
      console.log("Inside the ready function")
    })
    .on('close', () => { console.log("This step was closed")})
    .on('error', (error) => { 
      console.log(error);
      console.log("The payment server is temporarily out of service")
    });

    window['workflow'].initialize();
  }

  ngOnInit() {
  }

  onCollectPayment() {
    this.http.post(`${environment.apiUrl}api/recruiter/collectPayment`, {driverTempId: this.driverTempId}).subscribe(element => {
      this.paymentDone = true;
    });  
  }

  onCashPayment() {
    this.http.post(`${environment.apiUrl}api/recruiter/cashPayment`, {driverTempId: this.driverTempId}).subscribe(element => {
      this.paymentDone = true;
    });  
  }
}
