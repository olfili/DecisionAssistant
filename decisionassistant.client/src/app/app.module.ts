import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DecisionMakerPageComponent } from './decision-maker-page/decision-maker-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TextFieldModule } from '@angular/cdk/text-field';
import { DecisionOptionsComponent } from './decision-options/decision-options.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { AgGridAngular } from '@ag-grid-community/angular';
import { DecisionPointsComponent } from './decision-points/decision-points.component';
import { DecisionPointsAssessmentsComponent } from './decision-points-assessments/decision-points-assessments.component';
import { FinalDecisionComponent } from './final-decision/final-decision.component';

@NgModule({ 
    declarations: [
        AppComponent,
        DecisionMakerPageComponent,
        HomeComponent,
        DecisionOptionsComponent,
        DecisionPointsComponent,
        DecisionPointsAssessmentsComponent,
        FinalDecisionComponent
    ],
    bootstrap: [AppComponent], 
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        MatButtonModule,
        AppRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        TextFieldModule,
        MatListModule,
        MatIconModule,
        AgGridAngular,
    ], 
    providers: [provideHttpClient(withInterceptorsFromDi()), provideAnimationsAsync()] })
export class AppModule { }
