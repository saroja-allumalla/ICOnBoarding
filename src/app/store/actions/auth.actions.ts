import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  LoadAuths = '[Auth] LoadAuths',
  SetAuths = '[Auth] SetAuths'
}

export class LoadAuths implements Action {
  readonly type = AuthActionTypes.LoadAuths;
}

export interface SetAuthsPayload {
  userName: string;
  friendlyName: string;
}

export class SetAuths implements Action {
  readonly type = AuthActionTypes.SetAuths;

  constructor(public payload: SetAuthsPayload) {}
}

export type AuthActions = LoadAuths | SetAuths;