import { Action } from '@ngrx/store';

export const CLEAR_STATE = '[App] clearstate';


  export class ClearState implements Action {      
    readonly type = CLEAR_STATE;    
  }

  export type Actions = ClearState