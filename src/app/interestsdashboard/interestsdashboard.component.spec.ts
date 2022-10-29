import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestsdashboardComponent } from './interestsdashboard.component';

describe('InterestsdashboardComponent', () => {
  let component: InterestsdashboardComponent;
  let fixture: ComponentFixture<InterestsdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestsdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterestsdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
