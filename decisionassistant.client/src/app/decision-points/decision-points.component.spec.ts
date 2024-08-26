import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionPointsComponent } from './decision-points.component';

describe('DecisionPointsComponent', () => {
  let component: DecisionPointsComponent;
  let fixture: ComponentFixture<DecisionPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DecisionPointsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecisionPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
