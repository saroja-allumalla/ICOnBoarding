import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../../../../store/app.state';
import { Driver } from '../../../../store/models/driver.model';
import * as DriverActions from '../../../../store/actions/driver.actions';
import * as VehicleActions from '../../../../store/actions/vehicle.actions';
import { DriverService } from '../../../services/driver.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Vehicle } from '../../../../store/models/vehicle.model';
import * as CapActions from '../../../../store/actions/cap.actions';
import * as CapTypes from '../../../../store/types/types';
import * as NavigationActions from '../../../../store/actions/navigation.actions';
import * as ClearStateAction from '../../../../store/actions/clearState.actions';


@Component({
    selector: 'app-blank',
    templateUrl: './blank.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class BlankComponent implements OnInit {        
    constructor(private http: HttpClient, private store: Store<AppState>, private router: Router, private driverService: DriverService) {               
        
        //if(this.store.select('navigation') != null  || this.store.select('navigation') != 'undefined') { this.store.removeReducer('navigation')};
        //this.store.dispatch(new ClearStateAction.ClearState());
    }
    
    ngOnInit() {   
            
    }

    onSubmit() {  
        this.store.dispatch(new NavigationActions.displayResumeNavigation());      
        this.store.dispatch(new NavigationActions.displayDriverBasicProfileNavigation());
        this.router.navigateByUrl('/driver/personal-interview');
        /* this.driverService.getNewTempID('').subscribe(comp => {
        }); */
    }

    onResumeSubmit() {  
        this.store.dispatch(new NavigationActions.displayResumeNavigation());
        this.store.dispatch(new NavigationActions.displayRecruiterNavigation());
        this.router.navigateByUrl('/recruiter');
    }
}