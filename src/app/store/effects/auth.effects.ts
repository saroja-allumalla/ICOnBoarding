import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Observable, defer, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as authActions from '../actions/auth.actions';
import { switchMap, map } from 'rxjs/operators';


@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions,
    private http: HttpClient) {}

    @Effect()
    loadAuths$: Observable<Action> = this.actions$.pipe(
      ofType(authActions.AuthActionTypes.LoadAuths),
      switchMap(() => {
        console.log("Inside Switch Map");
        return this.http.get<any>(`https://swapi.co/api/people/1/`)
          .pipe(
            map((person) => {
              const name: string = person.name;
              return new authActions.SetAuths({
                userName: name.replace(" ", ""),
                friendlyName: name
              });
            })
          )
      })
    );

    @Effect()
    init$: Observable<Action> = defer(() => {
    console.log('ok');
    const username = '';
    const password = '';
    return ; 
    });

}
