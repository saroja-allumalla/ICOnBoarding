import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/app.state';
import * as CapActions from '../../../../store/actions/cap.actions';
import * as CapTypes from '../../../../store/types/types';
import { Router } from '@angular/router';

@Component({
    selector: 'app-broker-manual',
    templateUrl: './broker-manual.component.html',
    styleUrls: ['./broker-manual.component.scss']
})
export class BrokerManualComponent implements OnInit {

    constructor(private store: Store<AppState>, private router: Router) { 
        
    }

    ngOnInit() {
    }

    onFinishedReading() {
        this.store.dispatch(new CapActions.UpdateCap(CapTypes.CAP_BROKERMANUAL));
        this.router.navigateByUrl('/driver/broker-quiz');
    }

}
