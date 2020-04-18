import { Tutorial } from './models/tutorial.model';
import { Navigation } from './models/navigation.model';
import { Driver, DriverTemp } from './models/driver.model';
import { Vehicle } from './models/vehicle.model';
import { Cap } from './models/cap.model';
import { Quiz } from './models/quiz.model';
import { Checklist } from './models/checklist.model';
import { AddressHistory } from './models/addresshistory.model';
import { EmploymentHistory } from './models/employmenthistory.model';

export interface AppState {
    readonly tutorial: Tutorial[];
    readonly navigation: Navigation[];
    readonly driver: Driver;
    readonly driverTemp: DriverTemp;
    readonly vehicle: Vehicle;
    readonly cap: Cap;
    readonly quiz: Quiz;
    readonly checklist: Checklist;
    readonly addressHistory: AddressHistory[];
    readonly employmentHistory: EmploymentHistory[];
}