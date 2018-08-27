import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequirementsComponent } from './requirements/requirements.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RequirementEditorComponent } from './requirement-editor/requirement-editor.component';

const routes: Routes = [
    { path: 'requirements', component: RequirementsComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    { path: 'detail/:id', component: RequirementEditorComponent },
];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
