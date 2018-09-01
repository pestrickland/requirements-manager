import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementSearchComponent } from './requirement-search.component';

describe('RequirementSearchComponent', () => {
  let component: RequirementSearchComponent;
  let fixture: ComponentFixture<RequirementSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequirementSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
