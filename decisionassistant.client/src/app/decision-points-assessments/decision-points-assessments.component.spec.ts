import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionPointsAssessmentsComponent } from './decision-points-assessments.component';

describe('DecisionPointsAssessmentsComponent', () => {
  let component: DecisionPointsAssessmentsComponent;
  let fixture: ComponentFixture<DecisionPointsAssessmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DecisionPointsAssessmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecisionPointsAssessmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
