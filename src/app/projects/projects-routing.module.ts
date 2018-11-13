import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';

const projectsRoutes: Routes = [
  {
    path: 'projects',
    component: ProjectsListComponent,
    children: [
      {
        path: ':id',
        component: ProjectDetailComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(projectsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProjectsRoutingModule { }
