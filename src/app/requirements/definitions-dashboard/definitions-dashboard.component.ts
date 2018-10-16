import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { RequirementService } from '../requirement.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-definitions-dashboard',
  templateUrl: './definitions-dashboard.component.html',
  styleUrls: ['./definitions-dashboard.component.scss']
})
export class DefinitionsDashboardComponent implements OnInit {

  definitionForm = new FormGroup({
    term: new FormControl(''),
    definition: new FormControl(''),
  });

  term: string;
  definition: string;
  buttonText = 'Create definition';
  id: string;
  defines: Array<string>;

  constructor(private auth: AuthService,
              private requirementService: RequirementService) { }

  ngOnInit() {
  }

  createDefinition() {
    const data = {
      author: this.auth.authState.displayName || this.auth.authState.email,
      authorId: this.auth.currentUserId,
      definition: this.definition,
      term: this.term,
      created: new Date,
      defines: null,
    };
    this.requirementService.createDef(data);
    this.term = '';
    this.definition = '';
    this.buttonText = 'Definition created';
    setTimeout(() => this.buttonText = 'Create', 2000);
  }

  onSubmit() {
    console.warn(this.definitionForm.value);
    const data = {
      author: this.auth.authState.displayName || this.auth.authState.email,
      authorId: this.auth.currentUserId,
      definition: this.definitionForm.get('definition').value,
      term: this.definitionForm.get('term').value,
      created: new Date,
      defines: null,
    };
    this.requirementService.createDef(data);
    this.definitionForm.setValue({term: '', definition: ''});
    this.buttonText = 'Definition created';
    setTimeout(() => this.buttonText = 'Create', 2000);
  }
}
