import { Vehicle } from '../models/vehicle.model';
import * as VehicleActions from '../actions/vehicle.actions';
import { Router } from '@angular/router';

const initialState: Vehicle = {
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
  WorkerCompensationClass: '',
  VehicleLeased: false
}

export function reducer(state: Vehicle = initialState, action: VehicleActions.Actions) {
    switch(action.type) {
        case VehicleActions.ADD_VEHICLE:
            return action.payload;
            break;
        case VehicleActions.UPDATE_VEHICLE:
            return action.payload;
            break;
        case VehicleActions.REMOVE_VEHICLE:
            return state;
            break; 
        default:
            return state;
    }
}