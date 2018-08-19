import { Component, OnInit, Input } from '@angular/core';
import { Hazard } from '../hazard';

@Component({
  selector: 'app-hazard-editor',
  templateUrl: './hazard-editor.component.html',
  styleUrls: ['./hazard-editor.component.css']
})
export class HazardEditorComponent implements OnInit {
  @Input() hazard: Hazard;

  constructor() { }

  ngOnInit() {
  }

}
