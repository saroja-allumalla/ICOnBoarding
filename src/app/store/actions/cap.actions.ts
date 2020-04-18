import { Action, UPDATE } from '@ngrx/store';
import { Cap } from '../models/cap.model';

export const UPDATE_CAP = "[Cap] Update";

export class UpdateCap implements Action {
    readonly type = UPDATE_CAP;

    //payload here will be the name of the field
    constructor(public payload: string) {}
}

export type Actions = UpdateCap;