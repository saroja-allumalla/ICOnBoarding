import { Action } from '@ngrx/store'
import { Navigation } from '../models/navigation.model';
import * as NavigationActions from '../actions/navigation.actions';

const initialState: Navigation[] = []

export function reducer(state: Navigation[] = initialState, action: NavigationActions.Actions) {
    switch(action.type) {
        case NavigationActions.DISPLAY_RECRUITER_NAVIGATION:
            return action.payload;
            break;
        case NavigationActions.DISPLAY_RECRUITER_BACKGROUND:
            return action.payload;
            break;
        case NavigationActions.DISPLAY_RECRUITER_PAYMENT:
            return action.payload;
            break;
        case NavigationActions.DISPLAY_RECRUITER_TRAINING:
            return action.payload;
            break;
        case NavigationActions.DISPLAY_RECRUITER_REVIEW:
            return action.payload;
            break;
        case NavigationActions.DISPLAY_RECRUITER_DOCUMENT:
            return action.payload;
            break;
        case NavigationActions.DISPLAY_DRIVER_BASIC_PROFILE_NAVIGATION:
            return action.payload;
            break;            
        default:
            return state; 
    }
}