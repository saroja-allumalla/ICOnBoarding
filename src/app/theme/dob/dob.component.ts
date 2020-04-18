import { Component, OnInit, ViewChild, ViewEncapsulation, ElementRef, AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from '../../_services/script-loader.service';
import { DxFormComponent, DxValidationGroupComponent } from 'devextreme-angular';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { UserIdleService } from 'angular-user-idle';

declare let mLayout: any;

@Component({
    selector: 'app-dob',
    templateUrl: './dob.component.html',
    styleUrls: ['./dob.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class DobComponent implements OnInit, AfterViewInit {
    accordionData = [
        { title: "Panel", html: "<app-basic></app-basic>" },
        { title: "Panel 2 Title", html: "<h1>Panel 2 Text Content</h1>" }
    ];
    showButton: boolean = false;
    showPortlet: boolean = true;
    recruiterHome: boolean = false;
    tempId: string = "";

    constructor(private _script: ScriptLoaderService, private store: Store<AppState>, private router: Router) {
        this.store.select('navigation').subscribe(comp => {                        
            if(comp.length === 0) {
                this.router.navigateByUrl('/recruiter');
            }
        })
        
        
        if(this.router.url.includes("/recruiter")) {
            this.showButton = true;
        } 

        if(this.router.url == "/recruiter") {
            this.recruiterHome = true;
        }
        
        if(this.router.url==="/driver/start"){
            this.showButton = true;
        }

        if(this.router.url === "/driver/recruitor") {
            this.showPortlet = false;
        }

        this.store.select('driver').subscribe(comp => {
            if(comp) {this.tempId = comp.TempID};
        })

    }

    disableButton() {
        this.showButton = false;
        this.router.navigateByUrl("/driver/driver");
    }

    onDriversList() {
        this.router.navigateByUrl("/recruiter");
    }

    ngOnInit() {
        
    }

    ngAfterViewInit() {
        mLayout.initAside();
    }

}
