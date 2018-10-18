import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth.service';
import { RequirementService } from '../requirement.service';

@Component({
  selector: 'app-definitions-dashboard',
  templateUrl: './definitions-dashboard.component.html',
  styleUrls: ['./definitions-dashboard.component.scss']
})
export class DefinitionsDashboardComponent implements OnInit {

  definitionForm = new FormGroup({
    term: new FormControl('', Validators.required),
    definition: new FormControl('', Validators.required),
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

  onSubmit() {
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
