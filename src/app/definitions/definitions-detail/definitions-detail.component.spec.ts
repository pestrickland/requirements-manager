import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionsDetailComponent } from './definitions-detail.component';

describe('DefinitionsDetailComponent', () => {
  let component: DefinitionsDetailComponent;
  let fixture: ComponentFixture<DefinitionsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinitionsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitionsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
