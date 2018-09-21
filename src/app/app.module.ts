import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; // NgModel lives here.
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { RequirementsModule } from './requirements/requirements.module';
// import { RequirementsComponent } from './requirements/requirements.component';
// import { RequirementEditorComponent } from './requirement-editor/requirement-editor.component';
// import { AppRoutingModule } from './app-routing.module';
// import { MessagesComponent } from './messages/messages.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { HttpClientModule } from '@angular/common/http';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';
// import { RequirementSearchComponent } from './requirement-search/requirement-search.component';


const routes: Routes = [
  { path: '', redirectTo: '/req', pathMatch: 'full'},
  { path: '', loadChildren: './requirements/requirements.module#RequirementsModule'},
  ]

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase, 'Requirements Manager'),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    FormsModule,
    RouterModule.forRoot(routes),
    SharedModule,
    RequirementsModule,
    // AppRoutingModule,
    // HttpClientModule,
    // ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
