import { Action } from '@ngrx/store';
import { EmploymentHistory } from '../models/employmenthistory.model';

export const INSERT_INTO_EMPLOYMENTHISTORY = "[EMPLOYMENTHISTORY] Insert";
export const DELETE_FROM_EMPLOYMENTHISTORY = "[EMPLOYMENTHISTORY] Delete";
export const UPDATE_EMPLOYMENTHISTORY = "[EMPLOYMENTHISTORY] Update";


export class AddEmploymentHistory implements Action {
    readonly type = INSERT_INTO_EMPLOYMENTHISTORY;

    constructor(public payload: EmploymentHistory) {}
}


export class UpdateEmploymentHistory implements Action {
    readonly type = UPDATE_EMPLOYMENTHISTORY;

    constructor(public payload: EmploymentHistory) {}
}


export class DeleteEmploymentHistory implements Action {
    readonly type = DELETE_FROM_EMPLOYMENTHISTORY;

    constructor(public payload: EmploymentHistory) {}
}

export type Actions = AddEmploymentHistory | UpdateEmploymentHistory | DeleteEmploymentHistory;