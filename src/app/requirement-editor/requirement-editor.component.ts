import { Component, OnInit, Input } from '@angular/core';
import { Requirement } from '../requirement';

@Component({
  selector: 'app-requirement-editor',
  templateUrl: './requirement-editor.component.html',
  styleUrls: ['./requirement-editor.component.css']
})
export class RequirementEditorComponent implements OnInit {
  @Input() requirement: Requirement;

  constructor() { }

  ngOnInit() {
  }

}
