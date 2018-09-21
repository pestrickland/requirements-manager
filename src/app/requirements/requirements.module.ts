import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { RequirementsDashboardComponent } from './requirements-dashboard/requirements-dashboard.component';
import { RequirementsListComponent } from './requirements-list/requirements-list.component';
import { RequirementsDetailComponent } from './requirements-detail/requirements-detail.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: 'reqs', component: RequirementsListComponent },
  { path: 'reqs/:id', component: RequirementsDetailComponent },
  { path: 'dashboard', component: RequirementsDashboardComponent }
  ];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RequirementsDashboardComponent, RequirementsListComponent, RequirementsDetailComponent]
})
export class RequirementsModule { }
