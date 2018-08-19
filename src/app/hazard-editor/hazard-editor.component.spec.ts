import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HazardEditorComponent } from './hazard-editor.component';

describe('HazardEditorComponent', () => {
  let component: HazardEditorComponent;
  let fixture: ComponentFixture<HazardEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HazardEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HazardEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
