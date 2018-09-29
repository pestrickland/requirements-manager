import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { Requirement } from '../requirement';
import { RequirementService } from '../requirement.service';

@Component({
  selector: 'app-requirements-detail',
  templateUrl: './requirements-detail.component.html',
  styleUrls: ['./requirements-detail.component.scss']
})
export class RequirementsDetailComponent implements OnInit {

  requirement: Requirement;
  editing = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private requirementService: RequirementService,
    public auth: AuthService,
    ) { }

  ngOnInit() {
    this.getRequirement();
    console.log(this);
  }

  getRequirement() {
    const id = this.route.snapshot.paramMap.get('id');
    return this.requirementService.getRequirementData(id).subscribe(data => this.requirement = data);
  }

  updateRequirement() {
    const formData = {
      title: this.requirement.title,
      description: this.requirement.description,
    };
    const id = this.route.snapshot.paramMap.get('id');
    this.requirementService.update(id, formData);
    this.editing = false;
  }

  delete() {
    const id = this.route.snapshot.paramMap.get('id');
    this.requirementService.delete(id);
    this.router.navigate(['/reqs']);
  }
}
