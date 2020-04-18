import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forEach } from '@angular/router/src/utils/collection';
import { Driver } from '../../store/models/driver.model';
import { Vehicle } from '../../store/models/vehicle.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import * as DriverActions from '../../store/actions/driver.actions';
import * as VehicleActions from '../../store/actions/vehicle.actions';
import * as NavigationActions from '../../store/actions/navigation.actions';
import { Router } from '@angular/router';
import { DriverService } from '../services/driver.service';


@Component({
  selector: 'app-recruitor',
  templateUrl: './recruitor.component.html',
  styleUrls: ['./recruitor.component.css']
})
export class RecruitorComponent implements OnInit {
  drivers: any;
  public lineBreak: string = '<br />';  
  
  constructor(private http: HttpClient, private store: Store<AppState>, public router: Router, private driverService: DriverService) {
    this.driverService
    .getAllDrivers()
    .subscribe(data => {
      console.log(data);
      this.drivers = data;
    });
  }

  ngOnInit() {
  }

  onRefreshList() {
    this.driverService
    .getAllDrivers()
    .subscribe(data => {
      this.drivers = data;
    });
  }
  
  OpenDriver(e) {
    const newDriver:Driver = this.driverService.mapDataToDriverModel(e.data);
    this.store.dispatch(new DriverActions.AddDriver(newDriver));
    this.store.dispatch(new NavigationActions.displayRecruiterNavigation());
    this.router.navigateByUrl("/driver/driver");
  }

}
