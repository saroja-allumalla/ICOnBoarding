import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../../../layouts/layout.module';
import { DefaultComponent } from '../default.component';
import { BlankComponent } from './blank.component';
import { MainComponentComponent } from '../../../onboarding/main-component/main-component.component';
import { DobComponent } from '../../../dob/dob.component'
import { ThemeComponent } from '../../../theme.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhoneMaskDirective } from '../../../directives/phonemask.directive';


const routes: Routes = [
    {
        'path': '',
        'component': BlankComponent,
    },
];

@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule, FormsModule, ReactiveFormsModule
    ], exports: [
        RouterModule,
    ], declarations: [
        BlankComponent, PhoneMaskDirective
    ],
})
export class BlankModule {
}