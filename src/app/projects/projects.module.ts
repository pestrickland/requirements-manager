import { NgModule } from '@angular/core';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectsRoutingModule } from './projects-routing.module';


@NgModule({
  declarations: [
    ProjectDetailComponent,
    ProjectsListComponent
  ],
  imports: [
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
