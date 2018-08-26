import { Component, OnInit } from '@angular/core';
import { Requirement } from '../requirement';
import { RequirementService } from '../requirement.service';

@Component({
  selector: 'app-requirement',
  templateUrl: './requirement.component.html',
  styleUrls: ['./requirement.component.css']
})
export class RequirementComponent implements OnInit {

  constructor(private requirementService: RequirementService) { }

  ngOnInit() {
    this.getRequirements();
  }

  requirements: Requirement[];
  selectedRequirement: Requirement;

  onSelect(requirement: Requirement): void {
      this.selectedRequirement = requirement;
  }

  getRequirements(): void {
    this.requirementService.getRequirements()
    .subscribe(requirements => this.requirements = requirements);
  }
}
