import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/app.state';
import * as CapActions from '../../../../store/actions/cap.actions';
import * as CapTypes from '../../../../store/types/types';
import { Router } from '@angular/router';

@Component({
    selector: 'app-aoda-ref',
    templateUrl: './aoda-ref.component.html',
    styleUrls: ['./aoda-ref.component.scss']
})
export class AodaRefComponent implements OnInit {

    constructor(private store: Store<AppState>, private router: Router) { }

    ngOnInit() {
    }

    markRead() {
        this.store.dispatch(new CapActions.UpdateCap(CapTypes.CAP_AODA));
        this.router.navigateByUrl('/driver/aoda-test');
    }
}
