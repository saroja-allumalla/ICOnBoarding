import { Driver } from '../models/driver.model';
import * as DriverActions from '../actions/driver.actions';

const initialState: Driver = {
    TempID: null,
    BrokerType: '',
    FirstName: '',
    MiddleName: '',
    LastName: '',
    CompanyName: '',
    StreetName: '',
    Unit: '',
    City: '',
    Country: '',
    Province: '',
    PostalCode: '',
    Email: '',
    AlternateEmail: '',
    HomePhone: '',
    CellPhone: '',
    EmergencyContactName: '',
    EmergencyPhone: '',
    Fax: '',
    AlternateFax: '',
    SIN: '',
    BIN: '',
    DOB: null,
    GST: '',
    ScanID: '',
    Charges: null,
    Conviction: null,
    Gender: '',
    BrokerRegion: null,
    ProceedWithApplicant: null,
    BCRequired: null,
    DARequired: null,
    VehicleUseRequired: null,
    LeaseDocumentsRequired: null,
    StartDate: null,
    VehicleType: '',
    LicenseNumber: '',
    LicenseIssueDate: null,
    LicenseExpiryDate: null,
    VehicleMake: '',
    VehicleModel: '',
    VehicleYear: '',
    VehicleInsurance: '',
    InsurancePolicyNo: '',
    InsurancePolicyExpiryDate: null,
    LicensePlateNo: '',
    LicensePlateExpiryDate: null,
    VehicleVinNo: '',
    VehicleLeased: null,
    SpecificReason: '',
    ReasonForRejection: '',
    ApprovingRecruiterId: '',
    ApprovingRecruiterEmail: ''
  }

export function reducer(state: Driver = initialState, action: DriverActions.Actions) {
    switch(action.type) {
        case DriverActions.ADD_DRIVER:
            return action.payload;
            break;
        case DriverActions.UPDATE_DRIVER:
            return action.payload
            break;
        case DriverActions.REMOVE_DRIVER:
            return state;
            break; 
        default:
            return state;
    }
}