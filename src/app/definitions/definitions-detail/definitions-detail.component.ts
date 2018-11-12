import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { Definition } from '../definition';
import { RequirementService } from '../../requirements/requirement.service';


@Component({
  selector: 'app-definitions-detail',
  templateUrl: './definitions-detail.component.html',
  styleUrls: ['./definitions-detail.component.scss']
})
export class DefinitionsDetailComponent implements OnInit {

  definition: Definition;
  editing = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private requirementService: RequirementService,
    public auth: AuthService,
  ) { }

  ngOnInit() {
    this.getDefinition();

  }

  getDefinition() {
    const id = this.route.snapshot.paramMap.get('id');
    return this.requirementService.getDefinitionData(id).subscribe(data => this.definition = data);
  }

  updateDefinition() {
    const formData = {
      term: this.definition.term,
      definition: this.definition.definition,
    };
    const id = this.route.snapshot.paramMap.get('id');
    this.requirementService.updateDefinition(id, formData);
    this.editing = false;
  }

  delete() {
    const id = this.route.snapshot.paramMap.get('id');
    this.requirementService.deleteDefinition(id);
    this.router.navigate(['/defs']);
  }


}

