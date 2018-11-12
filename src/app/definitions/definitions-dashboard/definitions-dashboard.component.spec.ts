import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionsDashboardComponent } from './definitions-dashboard.component';

describe('DefinitionsDashboardComponent', () => {
  let component: DefinitionsDashboardComponent;
  let fixture: ComponentFixture<DefinitionsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinitionsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitionsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
