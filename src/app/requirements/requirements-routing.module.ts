import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RequirementsListComponent } from './requirements-list/requirements-list.component';
import { RequirementsDetailComponent } from './requirements-detail/requirements-detail.component';

const requirementsRoutes: Routes = [
    { path: 'reqs', component: RequirementsListComponent },
    { path: 'reqs/:id', component: RequirementsDetailComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(requirementsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class RequirementsRoutingModule { }
