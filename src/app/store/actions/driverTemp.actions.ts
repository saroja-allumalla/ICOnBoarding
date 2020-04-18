import { Action } from '@ngrx/store';
import { DriverTemp } from '../models/driver.model';

export const ADD_TEMPDRIVER = '[DRIVER] Add';
export const UPDATE_TEMPDRIVER = '[DRIVER] Update';
export const REMOVE_TEMPDRIVER = '[DRIVER] Remove';

export class AddTempDriver implements Action {
    readonly type = ADD_TEMPDRIVER

    constructor(public payload: DriverTemp) {}
}

export class UpdateTempDriver implements Action {
    readonly type = UPDATE_TEMPDRIVER

    constructor(public payload: DriverTemp) {}
}

export class RemoveTempDriver implements Action {
    readonly type = REMOVE_TEMPDRIVER

    constructor(public payload: DriverTemp) {}
}


export type Actions = AddTempDriver | RemoveTempDriver | UpdateTempDriver;