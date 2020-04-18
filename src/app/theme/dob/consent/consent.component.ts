import { Component, OnInit, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import * as NavigationActions from '../../../store/actions/navigation.actions';
import * as CapActions from '../../../store/actions/cap.actions';
import * as CapTypes from '../../../store/types/types';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.css']
})
export class ConsentComponent implements OnInit {
  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  public signaturePadOptions: Object = { 
    // passed through to szimek/signature_pad constructor
    'minWidth': 3,
    'canvasWidth': 900,
    'canvasHeight': 300,
    'background': "rgb(255, 0, 0)"
  };
  content: string;
  gaveConsent: boolean = false;
  cap: Observable<any>;

  constructor(private store: Store<AppState>, private router: Router) { 
    this.content = "The information contained in this application is correct to the best of my knowledge. <br/><br/>I hereby authorize and its designated agents and representatives to conduct a comprehensive review of my background causing a consumer report and/or an investigative consumer report to be generated for employment and/or volunteer purposes. I understand that the scope of the consumer report/ investigative consumer report may include, but is not limited to the following areas: verification of social security number; credit reports, current and previous residences; employment history, education background, character references; drug testing, civil and criminal history records from any criminal justice agency in any or all federal, state, county jurisdictions; driving records, birth records, and any other public records. <br/><br/>I further authorize any individual, company, firm, corporation, or public agency to divulge any and all information, verbal or written, pertaining to me, to or its agents. I further authorize the complete release of any records or data pertaining to me which the individual, company, firm, corporation, or public agency may have, to include information or data received from other sources. and its designated agents and representatives shall maintain all information received from this authorization in a confidential manner in order to protect the applicants personal information, including, but not limited to, addresses, social security numbers, and dates of birth.";  
    this.cap = this.store.select(state => state.cap.ConsentForm);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 2); // set szimek/signature_pad options at runtime  
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }

  drawComplete() {
      // will be notified of szimek/signature_pad's onEnd event
      console.log(this.signaturePad.toDataURL());
  }

  drawStart() {
      // will be notified of szimek/signature_pad's onBegin event
      console.log('begin drawing');
  }

  clearSignature() {
    this.signaturePad.clear();
  }

  submitSignature() {
    
    Swal({
      title: 'Do you want to proceed with above signature',
      imageUrl: this.signaturePad.toDataURL(),
      imageAlt: 'The uploaded picture',
      showCancelButton: true,
      confirmButtonText: 'Yes!',
      confirmButtonColor: '#28a745',
      cancelButtonColor: '#dc3545',
      cancelButtonText: 'No!',
      footer: 'You can give as many tries as you want before submitting your final signature'
    })
    .then((choice) => {
      //if(choice.dismiss) this.clearSignature();
      if(choice.value) this.onConfirm();
    })

 
  }

  onConfirm() {
    this.store.select('cap').subscribe(comp => {
      if(comp['ConsentForm'] === 0) {
        this.store.dispatch(new CapActions.UpdateCap(CapTypes.CAP_CONSENTFORM));
      }
    })

    //this.router.navigateByUrl("/driver/broker-manual");
    this.gaveConsent = true;
  }

  changeRoute() {
    this.router.navigateByUrl("/driver/broker-manual");
  }
}
