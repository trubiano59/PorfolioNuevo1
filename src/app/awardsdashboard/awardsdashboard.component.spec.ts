import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsdashboardComponent } from './awardsdashboard.component';

describe('AwardsdashboardComponent', () => {
  let component: AwardsdashboardComponent;
  let fixture: ComponentFixture<AwardsdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwardsdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwardsdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
