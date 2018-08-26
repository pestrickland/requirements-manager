import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementEditorComponent } from './requirement-editor.component';

describe('RequirementEditorComponent', () => {
  let component: RequirementEditorComponent;
  let fixture: ComponentFixture<RequirementEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequirementEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
