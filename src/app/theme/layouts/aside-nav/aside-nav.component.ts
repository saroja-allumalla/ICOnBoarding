import { Component, OnInit, ViewEncapsulation, AfterViewInit, Pipe, PipeTransform } from '@angular/core';
import { Navigation } from '../../../store/models/navigation.model';
import { Observable } from 'rxjs/Observable';
import * as NavigationActions from '../../../store/actions/navigation.actions';
import { AppState } from '../../../store/app.state';
import { Store } from '@ngrx/store';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import * as _ from 'lodash';
import { Cap } from '../../../store/models/cap.model';
import { Router } from '@angular/router';

declare let mLayout: any;
@Component({
    selector: "app-aside-nav",
    templateUrl: "./aside-nav.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class AsideNavComponent implements OnInit, AfterViewInit {
    basicNavigations: Navigation[];
    contractsNavigations: Navigation[];
    consentNavigations: Navigation[];
    trainingNavigations: Navigation[];
    basicProfileNavigations: Navigation[];
    progress: number;
    progressPoints: Observable<number>;
    personalProgress: Observable<string>;
    isStartPage: boolean = true;
    isRecruiterUrl:boolean;
    public personalTooltip: string = "Resource Personal Information";
    public vehicleTooltip: string = "Resource Vehicle Information";
    public testTooltip: string = "Resource Knowledge Test";


    constructor(private store: Store<AppState>,private router: Router, private route: ActivatedRoute) {
        this.basicNavigations = [];
        this.contractsNavigations = [];
        this.consentNavigations = [];
        this.trainingNavigations = [];
        this.basicProfileNavigations = [];
        this.progress = 0;
        this.progressPoints = this.store.select(state => state.cap.Total);
        this.personalProgress = this.store.select(state => state.cap.Personal === 10 ? 'green' : '#28A745');
        this.isStartPage = this.router.url === "/index" ? true : false;
        if(this.router.url === "/index" || this.router.url === "/recruiter") this.isStartPage = true; else this.isStartPage = false;
        this.store.select('cap').subscribe((comp) => {
            this.progress = comp.Total;
        });
        
        this.store.select('navigation').subscribe((object) => {
            object.forEach(element => {
                this.isRecruiterUrl = this.router.url === "/recruiter" ? true: false;                            
                switch(element.Id){
                    case 1:
                        if(this.basicNavigations.filter(e => {return e.Content === element.Content}).length > 0) 
                        this.basicNavigations = [...this.basicNavigations];
                        else 
                        this.basicNavigations = [...this.basicNavigations, element]; 
                        break;
                    case 2:
                        if(this.contractsNavigations.filter(e => {return e.Content === element.Content}).length > 0) 
                        this.contractsNavigations = [...this.contractsNavigations];
                        else
                        this.contractsNavigations = [...this.contractsNavigations, element];
                        break;
                    case 3:
                        if(this.consentNavigations.filter(e => {return e.Content === element.Content}).length > 0) 
                        this.consentNavigations = [...this.consentNavigations];
                        else
                        this.consentNavigations = [...this.consentNavigations, element];
                        break;
                    case 4:
                        if(!this.trainingNavigations.includes(element)) 
                        this.trainingNavigations = [...this.trainingNavigations, element]; break;
                    case 5:
                        if(this.basicProfileNavigations.filter(e => {return e.Content === element.Content}).length > 0) {
                            this.basicProfileNavigations = [...this.basicProfileNavigations];
                        }                        
                        else
                        this.basicProfileNavigations = [...this.basicProfileNavigations, element];
                        break;
                    default:
                        break; 
               }                
           })
        });      
    }

    ngOnInit() {
        if(this.router.url === "/index" || this.router.url === "/recruiter") this.isStartPage = true; else this.isStartPage = false;
    }

    ngAfterViewInit() {
        mLayout.initAside();
        this.router.events.subscribe((val) => {
            if(val instanceof NavigationEnd){
                if(val.url === "/index" || val.url === "/recruiter") this.isStartPage = true; else this.isStartPage = false;
            }
        })
    }

}
