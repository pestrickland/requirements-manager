import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { RequirementsDashboardComponent } from './requirements-dashboard/requirements-dashboard.component';
import { RequirementsDetailComponent } from './requirements-detail/requirements-detail.component';
import { RequirementsListComponent } from './requirements-list/requirements-list.component';
import { DefinitionsListComponent } from './definitions-list/definitions-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DefinitionsDashboardComponent } from './definitions-dashboard/definitions-dashboard.component';
import { DefinitionsDetailComponent } from './definitions-detail/definitions-detail.component';

const routes: Routes = [
  { path: 'reqs', component: RequirementsListComponent },
  { path: 'reqs/:id', component: RequirementsDetailComponent },
  { path: 'defs', component: DefinitionsListComponent },
  { path: 'defs/:id', component: DefinitionsDetailComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RequirementsDashboardComponent, RequirementsListComponent,
    RequirementsDetailComponent, DefinitionsListComponent, DashboardComponent, DefinitionsDashboardComponent, DefinitionsDetailComponent]
})
export class RequirementsModule { }
