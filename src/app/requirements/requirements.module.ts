import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { RequirementsDashboardComponent } from './requirements-dashboard/requirements-dashboard.component';
import { RequirementsDetailComponent } from './requirements-detail/requirements-detail.component';
import { RequirementsListComponent } from './requirements-list/requirements-list.component';

import { RequirementsRoutingModule } from './requirements-routing.module';

@NgModule({
  imports: [
    SharedModule,
    RequirementsRoutingModule
  ],
  declarations: [
    RequirementsDashboardComponent,
    RequirementsListComponent,
    RequirementsDetailComponent
  ]
})
export class RequirementsModule { }
