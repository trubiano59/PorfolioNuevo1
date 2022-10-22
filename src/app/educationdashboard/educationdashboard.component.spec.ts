import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationdashboardComponent } from './educationdashboard.component';

describe('EducationdashboardComponent', () => {
  let component: EducationdashboardComponent;
  let fixture: ComponentFixture<EducationdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
