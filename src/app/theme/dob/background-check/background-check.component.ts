import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import html2canvas from 'html2canvas';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'background-check',
  templateUrl: './background-check.component.html',
  styleUrls: ['./background-check.component.scss']
})
export class BackgroundCheckComponent implements OnInit {
  driverObject: any;
  driverTempId: any;
  modeOfPayment: any;
  RecruiterName: string;
  RecruiterEmail: any;
  daPrice: number = 0.00;
  bcPrice: number = 0.00;
  invoiceNumber: string = "100001";
  totalAmount: number = 0.00;
  taxAmount: number = 0.00;
  viewReceipt: boolean = false;
  checkStarted: boolean = false;

  constructor(private http: HttpClient, private store: Store<AppState>, private router: Router) { 
    this.store.select('driver').subscribe(comp => {
        this.driverTempId = comp['TempID'];
        this.invoiceNumber = comp['TempID'];
        this.http.post('http://10.10.170.80:5000/api/drivers/getDriver', {driverTempId: this.driverTempId}).subscribe(element => {
          this.driverObject = element;
          if(!element['BCRequired']) {
            this.bcPrice = 40;
            this.viewReceipt = true;
          }
          if(!element['DARequired']) {
            this.daPrice = 20;
            this.viewReceipt = true;
          }
          this.taxAmount = (this.bcPrice + this.daPrice) * 0.13;
          this.totalAmount = this.bcPrice + this.daPrice + this.taxAmount;
        })
    })

    this.RecruiterName = JSON.parse(localStorage.getItem("currentUser")).Name;
    this.RecruiterEmail = JSON.parse(localStorage.getItem("currentUser")).Email;
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    /*
    html2canvas(document.getElementById('receipt')).then((canvas) => {
      console.log('Inside after view init')
      console.log(canvas.toDataURL())
      var a = document.createElement('a');
        // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
        a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
        a.download = 'somefilename.jpg';
        a.click();
      onrendered: (canvas) => {
         console.log(canvas.toDataURL())
        };
    }
    )
    */
  }

  nextSteps() {
    this.router.navigateByUrl("/driver/steps")
  }

  collectCash = (e) => {
    this.http.post(`${environment.apiUrl}api/recruiter/collectPayment`, 
                            {
                              driver_id: this.driverTempId,
                              amount: this.totalAmount,
                              recruiter_id: JSON.parse(localStorage.getItem("currentUser")).UserID
                            }).subscribe(comp => {
      //comp["success"];
        this.http.post('http://10.10.170.80:5000/api/drivers/getDriver', {driverTempId: this.driverTempId}).subscribe(element => {
          this.driverObject = element;
          if(!element['BCRequired']) {
            this.bcPrice = 40;
            this.viewReceipt = true;
          }
          if(!element['DARequired']) {
            this.daPrice = 20;
            this.viewReceipt = true;
          }
          this.taxAmount = (this.bcPrice + this.daPrice) * 0.13;
          this.totalAmount = this.bcPrice + this.daPrice + this.taxAmount;
        })

        this.checkStarted = true; 
        this.viewReceipt = true;
    })
    /*this.http.post(`${environment.apiUrl}sterling/newCandidate`, {driver_id: this.driverTempId}).subscribe(comp => {
      if(comp['screening']) {
        this.checkStarted = true; 
        this.viewReceipt = true;
      }
    })*/
  }

  collectCredit = (e) => {
    this.viewReceipt = true;
  }

  startScreening() {
    
  }

  checkReport() {
    this.http.post(`${environment.apiUrl}sterling/getReport`, {driver_id: this.driverTempId}).subscribe(comp => {
      if(comp['error']) {
        Swal({
          title: 'Nope!',
          text: 'The report is not yet ready. Please try again later. ',
          type: 'error',
          confirmButtonText: 'Cool'
        })
      } else {
        Swal({
          title: 'Drivers Abstract is Ready. Go to documents to check report.',
          showCancelButton: true,
          confirmButtonText: 'Go to Documents!',
          confirmButtonColor: '#28a745',
          cancelButtonColor: '#dc3545',
          cancelButtonText: 'No!',
        })
        .then((choice) => {
          //if(choice.dismiss) this.clearSignature();
          //if(choice.value)
          this.changeRoute();
        })
      }
    })
  }

  changeRoute = () => {
    this.router.navigateByUrl("/driver/steps");
  }

  printReceipt = (e) => {
    html2canvas(document.getElementById('invoice-POS'), { allowTaint : true })
    .then((canvas) => {
        var a = document.createElement('a');
        // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
        a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
        a.download = 'paymentReceipt.jpg';
        a.click();
    })
  }
}
