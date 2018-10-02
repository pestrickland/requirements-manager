import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { RequirementService } from '../requirement.service';

@Component({
  selector: 'app-definitions-dashboard',
  templateUrl: './definitions-dashboard.component.html',
  styleUrls: ['./definitions-dashboard.component.scss']
})
export class DefinitionsDashboardComponent implements OnInit {

  term: string;
  definition: string;
  buttonText = 'Create';
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
}
