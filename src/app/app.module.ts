import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // NgModel lives here.
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { RequirementComponent } from './requirement/requirement.component';
import { RequirementEditorComponent } from './requirement-editor/requirement-editor.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RequirementComponent,
    RequirementEditorComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'Requirements Manager'),
    AngularFirestoreModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    Title
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
