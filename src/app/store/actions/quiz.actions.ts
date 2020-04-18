import { Action } from  '@ngrx/store';
import { Quiz } from '../models/quiz.model';

export const ADD_ANSWER = "[QUIZ] Add";

export class AddAnswer implements Action {
    readonly type = ADD_ANSWER

    constructor(public payload: number, public answerOf: number) { }
}

export type Actions = AddAnswer;