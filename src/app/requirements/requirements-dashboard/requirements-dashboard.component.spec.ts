import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementsDashboardComponent } from './requirements-dashboard.component';

describe('RequirementsDashboardComponent', () => {
  let component: RequirementsDashboardComponent;
  let fixture: ComponentFixture<RequirementsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequirementsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
