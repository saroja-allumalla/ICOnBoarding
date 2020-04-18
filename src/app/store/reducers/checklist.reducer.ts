import { Checklist } from '../models/checklist.model';
import * as ChecklistActions from '../actions/checklist.actions';
import * as ChecklistTypes from '../types/types';

const initialState: Checklist = {
    VehicleLeased: false,
    BackgroundCheck: false,
    DriversAbstract: false,
    VehicleOwnership: true,
}

export function reducer(state: Checklist = initialState, action: ChecklistActions.Actions) {
    switch(action.payload) {
        case ChecklistTypes.CHECKLIST_VEHICLELEASED:
            state.VehicleLeased = true;
            return state;
        case ChecklistTypes.CHECKLIST_BACKGROUNDCHECK:
            state.BackgroundCheck = true;
            return state;
        case ChecklistTypes.CHECKLIST_DRIVERSABSTRACT:
            state.DriversAbstract = true;
            return state;
        case ChecklistTypes.CHECKLIST_DRIVERSABSTRACT:
            state.VehicleOwnership = false;
            return state;
        default:
            return state;
    }
}