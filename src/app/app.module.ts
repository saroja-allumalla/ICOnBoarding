import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { ThemeComponent } from './theme/theme.component';
import { LayoutModule } from './theme/layouts/layout.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScriptLoaderService } from "./_services/script-loader.service";
import { ThemeRoutingModule } from "./theme/theme-routing.module";
import { AuthModule } from "./auth/auth.module";
import { CComponent } from './c/c.component';
import { MainComponentComponent } from './theme/onboarding/main-component/main-component.component';
import { DriveronboardingComponent } from './theme/driveronboarding/driveronboarding.component';
import {
    DxCheckBoxModule,
    DxSelectBoxModule,
    DxNumberBoxModule,
    DxButtonModule,
    DxFormModule,
    DxAutocompleteModule,
    DxValidationGroupModule,
    DxValidatorModule,
    DxTreeListModule,
    DxTreeViewModule,
    DxGalleryModule
} from 'devextreme-angular';
import { DevExtremeModule } from 'devextreme-angular';
import { DobModule } from './theme/dob/dob.module';
import { QuizService } from './theme/services/quiz.service';
import { DataService } from './theme/services/data.service';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DirectDepositComponent } from './theme/contracts/direct-deposit/direct-deposit.component';
import { StoreModule } from '@ngrx/store';
import { reducer as tutorialReducer } from './store/reducers/tutorial.reducer';
import { reducer as CapReducer } from './store/reducers/cap.reducer';
import { reducer as NavigationRecuder } from './store/reducers/navigation.reducer';
import { reducer as driverReducer } from './store/reducers/driver.reducer';
import { reducer as driverTempReducer } from './store/reducers/driverTemp.reducer';
import { reducer as vehicleReducer } from './store/reducers/vehicle.reducer';
import { reducer as quizReducer } from './store/reducers/quiz.reducer';
import { reducer as checklistReducer } from './store/reducers/checklist.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { WellComponent } from './well/well.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { UtilsService } from './theme/services/utils.service';
import { DriverService } from './theme/services/driver.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecruitorComponent } from './theme/recruitor/recruitor.component';
import { FileService } from './theme/services/file.service';
import {clearState as clearState} from './store/reducers/clearState.reducers'

if (!/localhost/.test(document.location.host)) {
    enableProdMode();
}

@NgModule({
    declarations: [
        ThemeComponent,
        AppComponent,
        CComponent,
        MainComponentComponent,
        DriveronboardingComponent,
        DirectDepositComponent,
        WellComponent,
        RecruitorComponent
    ],
    imports: [
        LayoutModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ThemeRoutingModule,
        AuthModule,
        DobModule,
        DxCheckBoxModule,
        DxSelectBoxModule,
        DxNumberBoxModule,
        DxButtonModule,
        DxAutocompleteModule,
        DxFormModule,
        DevExtremeModule,
        PdfViewerModule,
        DxValidatorModule, 
        DxValidationGroupModule,
        AngularFontAwesomeModule,
        DxGalleryModule, 
        DxTreeListModule,
        DxTreeViewModule, 
        StoreModule.forRoot({
            tutorial: tutorialReducer,
            navigation: NavigationRecuder,
            driver: driverReducer,
            driverTemp: driverTempReducer,
            vehicle: vehicleReducer,
            cap: CapReducer,
            quiz: quizReducer,
            checklist: checklistReducer
        },          
        {metaReducers:[clearState]}, 
        ),
        StoreDevtoolsModule.instrument({
            maxAge: 45
        })
       // StoreModule.forRoot(reducers, { metaReducers }), !environment.production ? StoreDevtoolsModule.instrument() : [], EffectsModule.forRoot([AppEffects, AuthEffects])
    ],
    providers: [ScriptLoaderService, QuizService, DataService, UtilsService, DriverService, FileService],
    bootstrap: [AppComponent]
})
export class AppModule { }

