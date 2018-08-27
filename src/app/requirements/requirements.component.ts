import { Component, OnInit } from '@angular/core';
import { Requirement } from '../requirement';
import { RequirementService } from '../requirement.service';

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.css']
})
export class RequirementsComponent implements OnInit {
  requirements: Requirement[];

  constructor(private requirementService: RequirementService) { }

  ngOnInit() {
    this.getRequirements();
  }

  getRequirements(): void {
    this.requirementService.getRequirements()
        .subscribe(requirements => this.requirements = requirements);
  }
}
