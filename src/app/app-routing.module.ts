import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'projects/:id', loadChildren: './projects/projects.module#ProjectDetailComponent' },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ), SharedModule],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
