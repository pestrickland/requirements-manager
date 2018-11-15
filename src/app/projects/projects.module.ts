import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';

import { ProjectsRoutingModule } from './projects-routing.module';
import { RequirementsModule } from '../requirements/requirements.module';
import { DefinitionsModule } from '../definitions/definitions.module';


@NgModule({
  declarations: [
    ProjectDetailComponent,
    ProjectsListComponent
  ],
  imports: [
    ProjectsRoutingModule,
    SharedModule,
    RequirementsModule,
    DefinitionsModule
  ]
})
export class ProjectsModule { }
