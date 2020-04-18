import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import * as NavigationActions from '../../../store/actions/navigation.actions';
import * as CapTypes from '../../../store/types/types';
import * as CapActions from '../../../store/actions/cap.actions';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent implements OnInit {
  passed: boolean = true;
  driverTempId: any;
  
  constructor(private store: Store<AppState>, private router: Router, private http: HttpClient) { 
    this.onProceedFurther = this.onProceedFurther.bind(this);
    this.store.select('driver').subscribe(comp => {
      this.driverTempId = comp['TempID'];
    })
    this.store.select('cap').subscribe(comp => {
      this.passed = comp['Interview'] === 0 ? false: true;
    })
  }

  ngOnInit() {
  }

  onProceedFurther = () => {
    if(!this.passed){
      this.http.post(`${environment.apiUrl}api/drivers/getInterviewProgress`, {driverTempId: this.driverTempId}).subscribe(element => {
        if(element['Interview']) {
          this.store.dispatch(new CapActions.UpdateCap(CapTypes.CAP_INTERVIEW));
          this.router.navigateByUrl('/driver/consent')
        } else {
          Swal({
            title: 'Nope!',
            text: 'You have not yet completed the interview. Please contact the recruiter. ',
            type: 'error',
            confirmButtonText: 'Cool'
          })
        }
      })
    } else {
      this.router.navigateByUrl('/driver/consent');
    }
  }

}
