import { DriverTemp } from '../models/driver.model';
import * as DriverTempActions from '../actions/driverTemp.actions';

const initialState: DriverTemp = {
      TempID: '',
      Charges: null,
      Conviction: null,
      VehicleUseRequired: null,
      BCRequired: null,
      DARequired : null,
      LeaseDocumentsRequired: null,
      ProceedWithApplicant: null,
      BrokerRegion:'',
      BrokerType: '',
      StartDate:null,
      FirstName: '',
      MiddleName: '',
      LastName: '',  
      DOB:null,
      Email: '',  
      CellPhone: '',
      ValidWorkPermit:null,
      ReasonForRejection:'',
      ApprovingRecruiterId: '',
      ApprovingRecruiterEmail: ''
  }

export function reducer(state: DriverTemp = initialState, action: DriverTempActions.Actions) {
    switch(action.type) {
        case DriverTempActions.ADD_TEMPDRIVER:
            return action.payload;
            break;
        case DriverTempActions.UPDATE_TEMPDRIVER:
            return action.payload
            break;
        case DriverTempActions.REMOVE_TEMPDRIVER:
            return state;
            break; 
        default:
            return state;
    }
}