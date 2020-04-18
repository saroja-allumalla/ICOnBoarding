import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/_guards/auth.guard';
import { MainComponentComponent } from './onboarding/main-component/main-component.component';
import { RecruitorComponent } from './recruitor/recruitor.component';

const routes: Routes = [
    {
        'path': '',
        'component': ThemeComponent,
        'canActivate': [AuthGuard],
        'children': [
            {
                'path': 'index',
                //5.2 changes done by saroja start
                //'redirectTo': 'recruiter'             
                'loadChildren': '.\/pages\/default\/blank\/blank.module#BlankModule'
                //5.2 changes done by saroja end

            },
            {
                'path': 'recruiter',
                'component': RecruitorComponent
            },
            {
                'path': 'driver',
                'loadChildren': '.\/dob\/dob.module#DobModule'
            },
            {
                'path': '',
                'redirectTo': 'index',
                'pathMatch': 'full',
            },
            {
                'path': 'driveronboarding',
                'redirectTo': 'index',
                'pathMatch': 'full'
            }
        ],
    },
    {
        'path': '**',
        'redirectTo': 'index',
        'pathMatch': 'full',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ThemeRoutingModule { }