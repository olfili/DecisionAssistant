import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionMakerPageComponent } from './decision-maker-page.component';

describe('DecisionMakerPageComponent', () => {
  let component: DecisionMakerPageComponent;
  let fixture: ComponentFixture<DecisionMakerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DecisionMakerPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecisionMakerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
