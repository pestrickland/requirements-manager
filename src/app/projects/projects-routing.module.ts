import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { RequirementsListComponent } from '../requirements/requirements-list/requirements-list.component';
import { RequirementsDetailComponent } from '../requirements/requirements-detail/requirements-detail.component';
import { DefinitionsListComponent } from '../definitions/definitions-list/definitions-list.component';
import { DefinitionsDetailComponent } from '../definitions/definitions-detail/definitions-detail.component';

const projectsRoutes: Routes = [
  {
    path: '',
    component: ProjectsListComponent,
    children: [
      {
        path: ':id',
        component: ProjectDetailComponent,
        children: [
          {
            path: 'reqs',
            component: RequirementsListComponent,
            children: [
              {
                path: ':id',
                component: RequirementsDetailComponent
              }
            ]
          },
          {
            path: 'defs',
            component: DefinitionsListComponent,
            children: [
              {
                path: ':id',
                component: DefinitionsDetailComponent
              }
            ]
          }

        ]
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
