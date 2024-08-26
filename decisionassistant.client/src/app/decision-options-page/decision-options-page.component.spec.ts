import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionOptionsPageComponent } from './decision-options-page.component';

describe('DecisionOptionsPageComponent', () => {
  let component: DecisionOptionsPageComponent;
  let fixture: ComponentFixture<DecisionOptionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DecisionOptionsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecisionOptionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
