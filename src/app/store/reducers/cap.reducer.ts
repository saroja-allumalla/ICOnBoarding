import { Cap } from '../models/cap.model';
import * as CapActions from '../actions/cap.actions';
import * as CapTypes from '../types/types';

const initialState: Cap = {
    Personal: 0,
    Vehicle: 0,
    Quiz: 0,
    BrokerManual: 0,
    BrokerManualAcknowledgement: 0,
    DirectDeposit: 0,
    WsibContract: 0,
    ConsentForm: 0,
    Aoda: 0,
    AodaTraining: 0,
    Interview: 0,
    Payment: 0,
    Total: 1
}

export function reducer(state: Cap = initialState, action: CapActions.Actions) {
    if(action.type == CapActions.UPDATE_CAP) {
        switch(action.payload) {
            case CapTypes.CAP_PERSONAL: 
                state.Personal = 10;    
                break;
            case CapTypes.CAP_VEHICLE:
                state.Vehicle = 10;
                break;
            case CapTypes.CAP_QUIZ:
                state.Quiz = 10;
                break;
            case CapTypes.CAP_BROKERMANUAL:
                state.BrokerManual = 5;
                break;
            case CapTypes.CAP_BROKERMANUALACK:
                state.BrokerManualAcknowledgement = 5;
                break;
            case CapTypes.CAP_DIRECTDEPOSIT:
                state.DirectDeposit = 10;
                break;
            case CapTypes.CAP_WSIB:
                state.WsibContract = 10;
                break;
            case CapTypes.CAP_CONSENTFORM:
                state.ConsentForm = 10;
                break;
            case CapTypes.CAP_AODA:
                state.Aoda = 5;
                break;
            case CapTypes.CAP_AODATEST:
                state.AodaTraining = 5;
                break;
            case CapTypes.CAP_PAYMENT:
                state.Payment = 10;
                break;
            case CapTypes.CAP_INTERVIEW:
                state.Interview = 10;
                break;
            default: 
            return state;
        } 
        state.Total = state.Personal + state.Vehicle + state.Quiz + state.BrokerManual + state.BrokerManualAcknowledgement + state.DirectDeposit 
            + state.WsibContract + state.ConsentForm + state.Aoda + state.AodaTraining;
        return state;
    } else 
        return state;
}