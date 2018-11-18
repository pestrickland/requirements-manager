import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../core/auth.service';
import { Project } from '../projects/project';
import { ProjectService } from '../projects/project.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  projects$: Observable<Project[]>;
  currentProject: Observable<Project>;

  constructor(
    private projectService: ProjectService,
    private auth: AuthService,
  ) {}

  ngOnInit() {
    // Get list of projects.
    this.projects$ = this.projectService.getProjects();
  }
}
