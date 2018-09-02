import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // NgModel lives here.
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { RequirementEditorComponent } from './requirement-editor/requirement-editor.component';
import { AppRoutingModule } from './app-routing.module';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { RequirementSearchComponent } from './requirement-search/requirement-search.component';

@NgModule({
  
  declarations: [
    AppComponent,
    RequirementsComponent,
    RequirementEditorComponent,
    MessagesComponent,
    DashboardComponent,
    RequirementSearchComponent
  ],
  
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'Requirements Manager'),
    AngularFirestoreModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  
  providers: [
    Title
    ],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
