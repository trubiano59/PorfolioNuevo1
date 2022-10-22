import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencedashboardComponent } from './experiencedashboard.component';

describe('ExperiencedashboardComponent', () => {
  let component: ExperiencedashboardComponent;
  let fixture: ComponentFixture<ExperiencedashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperiencedashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperiencedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
