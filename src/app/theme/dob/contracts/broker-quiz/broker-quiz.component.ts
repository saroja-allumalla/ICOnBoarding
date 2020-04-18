import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/app.state';
import * as CapActions from '../../../../store/actions/cap.actions';
import * as CapTypes from '../../../../store/types/types';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'broker-quiz',
  templateUrl: './broker-quiz.component.html',
  styleUrls: ['./broker-quiz.component.css']
})
export class BrokerQuizComponent implements OnInit {
  selectionModeValue: string = "multiple";
  selectAllModeValue: string = "page";
  questions: any;
  answers: any;
  givenAnswers: any;

  constructor(private store: Store<AppState>, private router: Router) {
    this.answers = [
      [4],
      [0, 2, 3],
      [0, 1, 2, 4],
      [0, 1, 2],
      [4],
      [1, 2, 4],
      [4],
      [0, 1, 4],
      [0, 1, 3],
      [0, 1, 3, 4]
    ];
    this.questions = [
      {
        question: 1,
        questionText: 'Apple Express expecations towards an Independent Broker ( select all appropriate Answers)',
        Options: [
          'Being polite and presentable',
          'Using good communication techniques (speak slowly and clearly to ensue your message is understood and received)',
          'Being courteous and accommodating',
          'Providing exceptional service with care',
          'All of the above'
        ]
      }, {
        question: 2,
        questionText: 'Acceptable attire while delivering for Apple Express  ( select all appropriate Answers)',
        Options: [
          'Clean navy blue (Dark color) shirt (golf, polo, or collared)',
          'Track Pants, spandex, bike shorts or running shorts',
          'Valid Apple Express ID Badge (or customer issued ID badge)',
          'Clean full-length black (Dark color) pants (khakis, cargo, chino)',
          'House slippers / flip flops'
        ]
      }, {
        question: 3,
        questionText: 'Waybills play an important role in this business. They are needed to; ( select all appropriate Answers)',
        Options: [
          'Perform a pickup from a customer',
          'Perform a delivery to a customer',
          'Return product back to a customer',
          'Pay your Bills',
          'Charge the customer for the orders/ jobs.'
        ]
      }, {
        question: 4,
        questionText: 'General Delivery guidelines while delivering for Apple Express ( select all appropriate Answers)',
        Options: [
          'Upon arrival to delivery location, use the smart phone to acknowledge your arrival',
          'Upon arrival introduce yourself and politely greet the customer',
          'Ensure that you follow any delivery instructions provided.',
          'Release shipment without a legible signature or name',
          'If customer is not available, drop the parcel at delivery location without confirming with client / dipatcher'
        ]
      }, {
        question: 5,
        questionText: 'To On-board a broker, Apple Express will need the following documentation. ( select all appropriate Answers)',
        Options: [
          'Valid Vehicle Registration or Vehicle lease documents (if leased)',
          'Valid Vehicle Insurance',
          'Driver Abstract',
          'Background Criminal Record  Check',
          'All of the Above'
        ]
      }, {
        question: 6,
        questionText: 'Type of services provided by Apple Express.  ( select all appropriate Answers)',
        Options: [
          'Private Aviation',
          'Direct Drive or Direct 90mins.',
          'NFO Express',
          'Food Delivery ',
          'Swap / Smart Courier Program'
        ]
      }, {
        question: 7,
        questionText: 'As a Independent Contractor for Apple Express, you are expected to comply and have knowledge of the following; ( select all appropriate Answers)',
        Options: [
          'The Occupational Health and Safety Act',
          'The National Safety Code',
          'The Clear Language Transportation of Dangerous Goods Act',
          'The Worker’s Compensation Act (WCB / WSIB)',
          'All of the Above'
        ]
      }, {
        question: 8,
        questionText: 'All Independent Brokers must always adhere to the following SAFETY GUIDELINES AND REGULATIONS;  ( select all appropriate Answers)',
        Options: [
          'you must give the right of way to any and all operating equipment on site',
          'Always park vehicle in authorized areas only',
          'As a delivery agent you may not require to comply with security laws of a facility',
          'always maintain a speed limit of 65Km per hour while delivering',
          'Never Argue With Security Personnel And Always Comply With The Site Safety Rules.'
        ]
      }, {
        question: 9,
        questionText: 'In the event of an accident what is expected from an Independent Broker  ( select all appropriate Answers)',
        Options: [
          'You MUST tend to the accident and ensure that you follow the law in such situations',
          'Call dipatch and advice on your situation ',
          'Flew the site, leaving the delivery parcels un attended',
          'NOTIFY Dispatch if you have possession of NARCOTICS',
          'None of the above'
        ]
      }, {
        question: 10,
        questionText: 'Apple Express Identification Card (ID) is a proof of Independent Broker identity. The ID will have the following information  ( select all appropriate Answers)',
        Options: [
          'Full Name',
          'Independent Broker Number',
          'Independent Broker Vehicle Picture',
          'ACR Certification (If Applicable)',
          'Independent Broker Photo'
        ]
      },
    ];

    
    this.onItemClick = this.onItemClick.bind(this);
  
  }


onItemClick(e, i) {
    if(this.givenAnswers[i].includes(e.itemIndex)){
      const index: number = this.givenAnswers[i].indexOf(e.itemIndex);
      if (index !== -1) {
          this.givenAnswers[i].splice(index, 1);
      }  
    } else {
      this.givenAnswers[i].push(e.itemIndex);
    }
}

onSubmitAnswers() {
  console.log(this.givenAnswers);
  var points = 0, empty = 0;
  this.givenAnswers.forEach((element, i) => {
    if(element.length === 0) {
      empty++;
    } else {
      element.sort();
      const answer = this.answers[i].filter(item => element.indexOf(item) < 0);
      if(answer.length === 0) {
        points++;
      }
    }
  });
  if(empty == 0) {
    alert("Final Score: "+points);
    this.store.dispatch(new CapActions.UpdateCap(CapTypes.CAP_BROKERMANUALACK));
    this.router.navigateByUrl('/driver/aoda');
  } else {
    Swal({
      title: 'Error',
      text: 'Please Answer All Questions',
      type: 'error',
      confirmButtonText: 'Cool'
    })
  }
}

  ngOnInit() {
    console.log(this.answers);
    this.givenAnswers = [[],[],[],[],[],[],[],[],[],[]];  
  }

}
