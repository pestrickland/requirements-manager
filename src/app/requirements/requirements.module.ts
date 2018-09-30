import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { RequirementsDashboardComponent } from './requirements-dashboard/requirements-dashboard.component';
import { RequirementsDetailComponent } from './requirements-detail/requirements-detail.component';
import { RequirementsListComponent } from './requirements-list/requirements-list.component';
import { DefinitionsListComponent } from './definitions-list/definitions-list.component';

const routes: Routes = [
  { path: 'reqs', component: RequirementsListComponent },
  { path: 'reqs/:id', component: RequirementsDetailComponent },
  { path: 'defs', component: DefinitionsListComponent },
  { path: 'dashboard', component: RequirementsDashboardComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RequirementsDashboardComponent, RequirementsListComponent, RequirementsDetailComponent, DefinitionsListComponent]
})
export class RequirementsModule { }
