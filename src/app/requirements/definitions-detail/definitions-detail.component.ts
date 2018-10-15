import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { Definition } from '../definition';
import { RequirementService } from '../requirement.service';


@Component({
  selector: 'app-definitions-detail',
  templateUrl: './definitions-detail.component.html',
  styleUrls: ['./definitions-detail.component.scss']
})
export class DefinitionsDetailComponent implements OnInit {

  definition: Definition;
  editing = false;
  myControl: FormControl;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private requirementService: RequirementService,
    public auth: AuthService,
  ) { }

  ngOnInit() {
    this.getRequirement();
    this.myControl = new FormControl();

  }

  getRequirement() {
    const id = this.route.snapshot.paramMap.get('id');
    return this.requirementService.getDefinitionData(id).subscribe(data => this.definition = data);
  }
}
