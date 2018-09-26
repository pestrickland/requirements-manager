import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Requirement } from '../requirement';
import { RequirementService } from '../requirement.service';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-requirements-list',
  templateUrl: './requirements-list.component.html',
  styleUrls: ['./requirements-list.component.scss']
})
export class RequirementsListComponent implements OnInit {
  requirements: Observable<Requirement[]>

  constructor(private requirementService: RequirementService, public auth: AuthService) { }

  ngOnInit() {
    this.requirements = this.requirementService.getRequirements();
    console.log(this);
    
  }
  
  delete(id: string) {
    this.requirementService.delete(id);
  }

}
