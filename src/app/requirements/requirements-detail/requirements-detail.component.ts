import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequirementService } from '../requirement.service';
import { Requirement } from '../requirement';

@Component({
  selector: 'app-requirements-detail',
  templateUrl: './requirements-detail.component.html',
  styleUrls: ['./requirements-detail.component.scss']
})
export class RequirementsDetailComponent implements OnInit {
  
  requirement: Requirement

  constructor(
    private route: ActivatedRoute,
    private requirementService: RequirementService
    ) { }

  ngOnInit() {
    this.getRequirement()
    console.log(this)
  }
  
  getRequirement() {
    const id = this.route.snapshot.paramMap.get('id');
    return this.requirementService.getRequirementData(id).subscribe(data => this.requirement = data)
  }

}
