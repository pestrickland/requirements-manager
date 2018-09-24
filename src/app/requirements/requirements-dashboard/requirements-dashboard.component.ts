import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { RequirementService } from '../requirement.service';

@Component({
  selector: 'app-requirements-dashboard',
  templateUrl: './requirements-dashboard.component.html',
  styleUrls: ['./requirements-dashboard.component.scss']
})
export class RequirementsDashboardComponent implements OnInit {
  
  description: string
  type: string
  phase: string
  title: string
  buttonText: string = "Create"

  constructor(private auth: AuthService, private requirementService: RequirementService) { }

  ngOnInit() {
  }
  
  createRequirement() {
    const data = {
      author: this.auth.authState.displayName || this.auth.authState.email,
      authorId: this.auth.currentUserId,
      description: this.description,
      type: this.type,
      phase: this.phase,
      created: new Date,
      title: this.title,
    };
    this.requirementService.create(data)
    this.title = ''
    this.description = ''
    this.phase = ''
    this.type = ''
    this.buttonText = 'Requirement created'
    setTimeout(() => this.buttonText = 'Create', 2000)
  } 

}
