import { AddressHistory } from '../models/addresshistory.model';
import * as AddressHistoryActions from '../actions/addresshistory.actions';
import { DriverService } from '../../theme/services/driver.service';

const initialState: AddressHistory[] = [];

export function reducer(state: AddressHistory[] = initialState, action: AddressHistoryActions.Actions) {
    var driverService: DriverService;
    
    switch(action.type) {
        case AddressHistoryActions.INSERT_INTO_ADDRESSHISTORY:
            if(state.length >= 1) {
                var index = state.map(x => x.AddressID).indexOf(action.payload.AddressID);
                if(index === -1) {
                    state.push(action.payload);

                } else {
                    state.splice(index, 1); state.push(action.payload);
                   
                }
            } else {
                state.push(action.payload);
            }
            return state;
        case AddressHistoryActions.UPDATE_ADDRESSHISTORY:
            return action.payload;
        case AddressHistoryActions.DELETE_FROM_ADDRESSHISTORY:
            state.splice(state.indexOf(action.payload), 1);
        return;
        default: return state;
    }
}
