import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DefinitionsDashboardComponent } from './definitions-dashboard/definitions-dashboard.component';
import { DefinitionsDetailComponent } from './definitions-detail/definitions-detail.component';
import { DefinitionsListComponent } from './definitions-list/definitions-list.component';
import { DefinitionsRoutingModule } from './definitions-routing.module';


@NgModule({
  declarations: [
    DefinitionsDashboardComponent,
    DefinitionsDetailComponent,
    DefinitionsListComponent
  ],
  imports: [
    SharedModule,
    DefinitionsRoutingModule
  ]
})
export class DefinitionsModule { }
