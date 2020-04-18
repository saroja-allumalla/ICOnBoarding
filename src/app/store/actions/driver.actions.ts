import { Action } from '@ngrx/store';
import { Driver } from '../models/driver.model';

export const ADD_DRIVER = '[TEMPDRIVER] Add';
export const UPDATE_DRIVER = '[TEMPDRIVER] Update';
export const REMOVE_DRIVER = '[TEMPDRIVER] Remove';

export class AddDriver implements Action {
    readonly type = ADD_DRIVER

    constructor(public payload: Driver) {}
}

export class UpdateDriver implements Action {
    readonly type = UPDATE_DRIVER

    constructor(public payload: Driver) {}
}

export class RemoveDriver implements Action {
    readonly type = REMOVE_DRIVER

    constructor(public payload: Driver) {}
}


export type Actions = AddDriver | RemoveDriver | UpdateDriver;