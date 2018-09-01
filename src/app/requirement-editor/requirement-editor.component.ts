import { Component, OnInit, Input } from '@angular/core';
import { Requirement } from '../requirement';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RequirementService } from '../requirement.service';

@Component({
  selector: 'app-requirement-editor',
  templateUrl: './requirement-editor.component.html',
  styleUrls: ['./requirement-editor.component.css']
})
export class RequirementEditorComponent implements OnInit {
  @Input() requirement: Requirement;

  constructor(
    private route: ActivatedRoute,
    private requirementService: RequirementService,
    private location: Location
  ) { }

  ngOnInit(): void {
      this.getRequirement();
  }

  getRequirement(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.requirementService.getRequirement(id)
          .subscribe(requirement => this.requirement = requirement);
  }

  goBack(): void {
      this.location.back();
  }

  save(): void {
    this.requirementService.updateRequirement(this.requirement)
        .subscribe(() => this.goBack());
  }
}
