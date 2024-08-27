import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionOptionsComponent } from './decision-options.component';

describe('DecisionOptionsComponent', () => {
  let component: DecisionOptionsComponent;
  let fixture: ComponentFixture<DecisionOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DecisionOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecisionOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
