import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkdashboardComponent } from './workdashboard.component';

describe('WorkdashboardComponent', () => {
  let component: WorkdashboardComponent;
  let fixture: ComponentFixture<WorkdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
