import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionsListComponent } from './definitions-list.component';

describe('DefinitionsListComponent', () => {
  let component: DefinitionsListComponent;
  let fixture: ComponentFixture<DefinitionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinitionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
