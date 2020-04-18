import { Action } from '@ngrx/store';
import { AddressHistory } from '../models/addresshistory.model';

export const INSERT_INTO_ADDRESSHISTORY = "[ADDRESSHISTORY] Insert";
export const DELETE_FROM_ADDRESSHISTORY = "[ADDRESSHISTORY] Delete";
export const UPDATE_ADDRESSHISTORY = "[ADDRESSHISTORY] Update";


export class AddAddressHistory implements Action {
    readonly type = INSERT_INTO_ADDRESSHISTORY;

    constructor(public payload: AddressHistory) {}
}


export class UpdateAddressHistory implements Action {
    readonly type = UPDATE_ADDRESSHISTORY;

    constructor(public payload: AddressHistory) {}
}


export class DeleteAddressHistory implements Action {
    readonly type = DELETE_FROM_ADDRESSHISTORY;

    constructor(public payload: AddressHistory) {}
}

export type Actions = AddAddressHistory | UpdateAddressHistory | DeleteAddressHistory;