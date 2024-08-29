import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DecisionService } from '../decision-service.service';

interface IAssessment {
  option: string;
  score: number;
}

@Component({
  selector: 'app-final-decision',
  templateUrl: './final-decision.component.html',
  styleUrl: './final-decision.component.css'
})
export class FinalDecisionComponent implements OnInit {

  final_decision = '';
  assessments: IAssessment[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    DecisionService.decision_options.forEach(option => {
      let assessment = DecisionService.decision_points_assessments.filter(a => a[0] === option);
      const score = assessment.map(a => a[2]).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      this.assessments.push({ option: option, score: score });
    });

    this.final_decision = this.assessments.filter(a => a.score === Math.max(...this.assessments.map(a => a.score)))[0].option;
  }

  goHome() {
    DecisionService.decision_point = '';
    DecisionService.decision_options = new Array<string>;
    DecisionService.decision_points = new Array<string>;
    DecisionService.decision_points_assessments = new Array<[string, string, number]>;

    this.router.navigate(['/home']);
  }
}