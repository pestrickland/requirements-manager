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
    private auth: AuthService) {
  }

  ngOnInit() {
    // Get list of projects.
    this.projects$ = this.projectService.getProjects();
  }

  // Go to project.
  selectProject(project) {
    // Use currentProject to route subsequent queries through correct URL? Can the router do this?
    this.currentProject = this.projectService.loadProjectData(project);
  }

  // Get current project.

}
