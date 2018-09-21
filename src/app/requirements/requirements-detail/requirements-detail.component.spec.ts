import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementsDetailComponent } from './requirements-detail.component';

describe('RequirementsDetailComponent', () => {
  let component: RequirementsDetailComponent;
  let fixture: ComponentFixture<RequirementsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequirementsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
