import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DecisionService } from '../decision-service.service';

@Component({
  selector: 'app-decision-maker-page',
  templateUrl: './decision-maker-page.component.html',
  styleUrl: './decision-maker-page.component.css',
})
export class DecisionMakerPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.decision_point.setValue(DecisionService.decision_point);
  }
  
  decision_point = new FormControl();

  submit() {
    DecisionService.decision_point = this.decision_point.value;
    this.router.navigate(['/decision_options']);
  }

  cantGoForward(): boolean {
    return this.decision_point.value === null || this.decision_point.value.trim() === '' || this.decision_point.value === undefined;
  }
}
