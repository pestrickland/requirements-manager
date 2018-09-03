import { Component, OnInit } from '@angular/core';
import { Requirement } from '../requirement';
import { RequirementService } from '../requirement.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  requirements: Requirement[] = [];

  constructor(private requirementService: RequirementService) { }

  ngOnInit() {
      this.getRequirements();
  }

  getRequirements() {
      this.requirementService.getRequirements()
          .subscribe(requirements => this.requirements = requirements.slice(0,3));
  }
}
