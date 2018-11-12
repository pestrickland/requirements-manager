import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefinitionsDetailComponent } from './definitions-detail/definitions-detail.component';
import { DefinitionsListComponent } from './definitions-list/definitions-list.component';


const definitionsRoutes: Routes = [
  { path: 'defs', component: DefinitionsListComponent},
  { path: 'def/:id', component: DefinitionsDetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(definitionsRoutes)
  ]
})
export class DefinitionsRoutingModule { }
