import { Action } from '@ngrx/store';
import { Vehicle } from '../models/vehicle.model';

export const ADD_VEHICLE = '[VEHICLE] Add';
export const UPDATE_VEHICLE = '[VEHICLE] Update';
export const REMOVE_VEHICLE = '[VEHICLE] Remove';

export class AddVehicle implements Action {
    readonly type = ADD_VEHICLE

    constructor(public payload: Vehicle) {}
}

export class UpdateVehicle implements Action {
    readonly type = UPDATE_VEHICLE

    constructor(public payload: Vehicle) {}
}

export class RemoveVehicle implements Action {
    readonly type = REMOVE_VEHICLE

    constructor(public payload: Vehicle) {}
}

export type Actions = AddVehicle | RemoveVehicle | UpdateVehicle;