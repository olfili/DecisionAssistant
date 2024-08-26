import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecisionMakerPageComponent } from './decision-maker-page/decision-maker-page.component';
import { DecisionOptionsPageComponent } from './decision-options-page/decision-options-page.component';
import { DecisionPointsAssessmentsComponent } from './decision-points-assessments/decision-points-assessments.component';
import { DecisionPointsComponent } from './decision-points/decision-points.component';
import { FinalDecisionComponent } from './final-decision/final-decision.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'decision_maker', component: DecisionMakerPageComponent },
  { path: 'decision_options', component: DecisionOptionsPageComponent },
  { path: 'decision_points', component: DecisionPointsComponent },
  { path: 'decision_points_assessments', component: DecisionPointsAssessmentsComponent },
  { path: 'final_decision', component: FinalDecisionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }