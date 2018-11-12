import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../core/auth.service';
import { Definition } from '../definition';
import { RequirementService } from '../../requirements/requirement.service';

@Component({
  selector: 'app-definition-list',
  templateUrl: './definitions-list.component.html',
  styleUrls: ['./definitions-list.component.scss']
})
export class DefinitionsListComponent implements OnInit {
  definitions: Observable<Definition[]>;

  constructor(private requirementService: RequirementService, public auth: AuthService) { }

  ngOnInit() {
    this.definitions = this.requirementService.getDefinitions();
  }

  delete(id: string) {
    this.requirementService.deleteDefinition(id);
  }

}
