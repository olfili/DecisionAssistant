import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalDecisionComponent } from './final-decision.component';

describe('FinalDecisionComponent', () => {
  let component: FinalDecisionComponent;
  let fixture: ComponentFixture<FinalDecisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinalDecisionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalDecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
