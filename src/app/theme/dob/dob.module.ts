import { NgModule, enableProdMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layouts/layout.module';
import { Routes, RouterModule } from '@angular/router';
import { DobComponent } from './dob.component';
import { DefaultComponent } from '../pages/default/default.component';
import { BasicComponent } from './basic/basic.component';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
    DxAutocompleteModule,
    DxButtonModule,
    DxCheckBoxModule,
    DxColorBoxModule,
    DxDataGridModule,
    DxDateBoxModule,
    DxDropDownBoxModule,
    DxFormModule,
    DxListModule,
    DxLoadPanelModule,
    DxLookupModule,
    DxMenuModule,
    DxNumberBoxModule,
    DxPopupModule,
    DxRadioGroupModule,
    DxSelectBoxModule,
    DxTabPanelModule,
    DxTextBoxModule,
    DxValidationGroupModule,
    DxValidationSummaryModule,
    DxValidatorModule,
    DxResponsiveBoxModule,
    DxGalleryModule,
    DxFileUploaderModule,
    DxTemplateModule,
    DxTreeViewModule,
    DxScrollViewModule
} from 'devextreme-angular';
import { DxiColumnModule } from 'devextreme-angular/ui/nested/column-dxi';
import { DxiCustomOperationModule } from 'devextreme-angular/ui/nested/custom-operation-dxi';
import { DxiFieldModule } from 'devextreme-angular/ui/nested/field-dxi';
import { DxiItemModule } from 'devextreme-angular/ui/nested/item-dxi';
import { DxiMenuItemModule } from 'devextreme-angular/ui/nested/menu-item-dxi';
import { DxiSortByGroupSummaryInfoModule } from 'devextreme-angular/ui/nested/sort-by-group-summary-info-dxi';
import { DxiTabModule } from 'devextreme-angular/ui/nested/tab-dxi';
import { DxiToolbarItemModule } from 'devextreme-angular/ui/nested/toolbar-item-dxi';
import { DxiValidationRuleModule } from 'devextreme-angular/ui/nested/validation-rule-dxi';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrokerDriverComponent } from './contracts/broker-driver/broker-driver.component';
import { AodaRefComponent } from './contracts/aoda-ref/aoda-ref.component';
import { AodaTestComponent } from './contracts/aoda-test/aoda-test.component';
import { BrokerManualComponent } from './contracts/broker-manual/broker-manual.component';
import { BrokerManualAckComponent } from './contracts/broker-manual-ack/broker-manual-ack.component';
import { DirectDepositComponent } from './contracts/direct-deposit/direct-deposit.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DataService } from '../services/data.service';
import { SignaturePadModule } from 'angular2-signaturepad';
import { DxAccordionModule } from "devextreme-angular";
import { StepsComponent } from './steps/steps.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { VehicleComponent } from './vehicle/vehicle.component';
import { ConsentComponent } from './consent/consent.component';
import { VehicleUseComponent } from './contracts/vehicle-use/vehicle-use.component';
import { BrokerQuizComponent } from './contracts/broker-quiz/broker-quiz.component';
import { PersonalInterviewComponent } from './personal-interview/personal-interview.component';
import { BackgroundCheckComponent } from './background-check/background-check.component';
import { QuizResultsComponent } from './quiz-results/quiz-results.component';
import { InterviewComponent } from './interview/interview.component';
import { SpalshesComponent } from './spalshes/spalshes.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { PaymentComponent } from './payment/payment.component';
import { BackgroundComponent } from './background/background.component';
import { NgxSortableModule } from 'ngx-sortable';
import { EndPageComponent } from './end-page/end-page.component';
import { BaiscPersonalInfoComponent } from './baisc-personal-info/baisc-personal-info.component';
import { BasicProfileCreatedComponent } from './basic-profile-created/basic-profile-created.component';

const routes: Routes = [
    {
        'path': '',
        'component': DobComponent,
        'children': [
            {
                'path': 'driver',
                'component': BasicComponent
            },
            {
                'path': 'basic-personal-info',
                'component': BaiscPersonalInfoComponent
            },
            {
                'path': 'basic-profile-created',
                'component': BasicProfileCreatedComponent
            },            
            {
                'path': 'direct-deposit',
                'component': DirectDepositComponent
            },
            {
                'path': 'steps',
                'component': StepsComponent
            },
            {
                'path': 'vehicle',
                'component': VehicleComponent
            },
            {
                'path': 'consent',
                'component': ConsentComponent
            },
            {
                'path': 'broker-quiz',
                'component': BrokerQuizComponent
            },
            {
                'path': 'vehicle-use',
                'component': VehicleUseComponent
            },
            {
                'path': 'personal-interview',
                'component': PersonalInterviewComponent
            },
            {
                'path': 'payment',
                'component': PaymentComponent
            },
            {
                'path': 'quiz-results',
                'component': QuizResultsComponent
            },
            {
                'path': 'checklist',
                'component': EndPageComponent
            },
            {
                'path': 'background-check',
                'component': BackgroundCheckComponent
            },
            {
                'path': 'splashes',
                'component': SpalshesComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule,
        SignaturePadModule,
        DxAutocompleteModule,
        DxButtonModule,
        DxCheckBoxModule,
        DxColorBoxModule,
        DxDataGridModule,
        DxDateBoxModule,
        DxDataGridModule,
        DxDropDownBoxModule,
        DxFormModule,
        DxListModule,
        DxLoadPanelModule,
        DxLookupModule,
        DxMenuModule,
        DxNumberBoxModule,
        DxPopupModule,
        DxRadioGroupModule,
        DxSelectBoxModule,
        DxTabPanelModule,
        DxTextBoxModule,
        DxValidationGroupModule,
        DxValidationSummaryModule,
        DxValidatorModule,
        DxiColumnModule,
        DxiCustomOperationModule,
        DxiFieldModule,
        DxiItemModule,
        DxiMenuItemModule,
        DxiSortByGroupSummaryInfoModule,
        DxiTabModule,
        DxScrollViewModule,
        DxiToolbarItemModule,
        DxiValidationRuleModule,
        DxResponsiveBoxModule,
        DxGalleryModule,
        DxFileUploaderModule,
        AngularFontAwesomeModule,
        DxTemplateModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCoIKeBmUmyi9cQIYdmO1PoVBZpC6FRv3w',//'AIzaSyAZMhIdLJk9hyfict1B8_B7oZD89EPd6Ag',
            libraries: ["places"]
        }),
        HttpClientModule,
        NgxSortableModule,
        FormsModule,
        ReactiveFormsModule,
        PdfViewerModule,
        DxAccordionModule,
        DxTreeViewModule
    ],
    providers: [ DataService ],
    exports: [
        RouterModule
    ],
    declarations: [DobComponent, BasicComponent, BrokerDriverComponent, AodaRefComponent, AodaTestComponent, BrokerManualComponent, BrokerManualAckComponent, DirectDepositComponent, StepsComponent, VehicleComponent, ConsentComponent, VehicleUseComponent, BrokerQuizComponent, PersonalInterviewComponent, BackgroundCheckComponent, QuizResultsComponent, InterviewComponent, SpalshesComponent, ChecklistComponent, PaymentComponent, BackgroundComponent, EndPageComponent, BaiscPersonalInfoComponent, BasicProfileCreatedComponent],
})
export class DobModule { }

