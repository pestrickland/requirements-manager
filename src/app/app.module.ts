import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // NgModel lives here.
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HazardComponent } from './hazard/hazard.component';
import { HazardEditorComponent } from './hazard-editor/hazard-editor.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HazardComponent,
    HazardEditorComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),

    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    Title
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
