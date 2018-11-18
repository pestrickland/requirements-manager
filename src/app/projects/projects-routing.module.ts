import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefinitionsDetailComponent } from '../definitions/definitions-detail/definitions-detail.component';
import { DefinitionsListComponent } from '../definitions/definitions-list/definitions-list.component';
import { RequirementsDetailComponent } from '../requirements/requirements-detail/requirements-detail.component';
import { RequirementsListComponent } from '../requirements/requirements-list/requirements-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

const projectsRoutes: Routes = [
  {
    path: ':id',
    component: ProjectDetailComponent,
    children: [
      {
        path: '',
        component: RequirementsListComponent,
        children: [
          {
            path: ':id',
            component: RequirementsDetailComponent
          }
        ]
      },
      {
        path: '',
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
