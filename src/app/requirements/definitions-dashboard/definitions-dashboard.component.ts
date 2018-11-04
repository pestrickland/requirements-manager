import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth.service';
import { RequirementService } from '../requirement.service';

@Component({
  selector: 'app-definitions-dashboard',
  templateUrl: './definitions-dashboard.component.html',
  styleUrls: ['./definitions-dashboard.component.scss']
})
export class DefinitionsDashboardComponent implements OnInit {

  definitionForm = this.fb.group({
    term: ['', Validators.required],
    definition: ['', Validators.required],
  });

  term: string;
  definition: string;
  buttonText = 'Create definition';
  id: string;
  defines: Array<string>;

  user: any;

  constructor(private auth: AuthService,
              private requirementService: RequirementService,
              private fb: FormBuilder) {
                this.user = this.auth.getUser();
               }

  ngOnInit() {
  }

  onSubmit(formData: any, formDirective) {
    const data = {
      author: this.user.displayName || this.user.email,
      authorId: this.user.uid,
      definition: this.definitionForm.get('definition').value,
      term: this.definitionForm.get('term').value,
      created: new Date,
      defines: null,
    };
    this.requirementService.createDef(data);
    this.definitionForm.setValue({term: '', definition: ''});
    this.buttonText = 'Definition created';
    setTimeout(() => this.buttonText = 'Create', 2000);
    formDirective.resetForm();
    this.definitionForm.reset();
  }
}
