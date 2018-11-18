import { NgModule } from '@angular/core';
import { DefinitionsModule } from '../definitions/definitions.module';
import { RequirementsModule } from '../requirements/requirements.module';
import { SharedModule } from '../shared/shared.module';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectsRoutingModule } from './projects-routing.module';


@NgModule({
  declarations: [
    ProjectDetailComponent,
  ],
  imports: [
    DefinitionsModule,
    ProjectsRoutingModule,
    SharedModule,
    RequirementsModule,
  ]
})
export class ProjectsModule { }
