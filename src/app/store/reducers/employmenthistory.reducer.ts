import { EmploymentHistory } from '../models/employmenthistory.model';
import * as EmploymentHistoryActions from '../actions/employmenthistory.actions';
import { DriverService } from '../../theme/services/driver.service';

const initialState: EmploymentHistory[] = [];

export function reducer(state: EmploymentHistory[] = initialState, action: EmploymentHistoryActions.Actions) {
    var driverService: DriverService;
    
    switch(action.type) {
        case EmploymentHistoryActions.INSERT_INTO_EMPLOYMENTHISTORY:
            if(state.length >= 1) {
                var index = state.map(x => x.EmploymentID).indexOf(action.payload.EmploymentID);
                if(index === -1) {
                            state.push(action.payload);
                } else {
                            state.splice(index, 1); state.push(action.payload);                  
                }
            } else {
                        state.push(action.payload);
            }
            return state;
        case EmploymentHistoryActions.UPDATE_EMPLOYMENTHISTORY:
            return action.payload;
        case EmploymentHistoryActions.DELETE_FROM_EMPLOYMENTHISTORY:
            state.splice(state.indexOf(action.payload), 1);
        return;
        default: return state;
    }
}
