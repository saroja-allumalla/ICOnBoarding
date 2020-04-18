import { Action } from '@ngrx/store';

export const UPDATE_CHECKLIST = '[Checklist] Update';

export class UpdateChecklist implements Action {
    readonly type = UPDATE_CHECKLIST;

    //payload here will be the name of the checklist field
    constructor(public payload: string) {

    }
}

export type Actions = UpdateChecklist;