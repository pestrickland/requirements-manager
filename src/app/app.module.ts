import { registerLocaleData } from '@angular/common';
import localeENGB from '@angular/common/locales/en-GB';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
// import { DefinitionsModule } from './definitions/definitions.module';
// import { ProjectsModule } from './projects/projects.module';
// import { RequirementsModule } from './requirements/requirements.module';
import { SharedModule } from './shared/shared.module';
import { Router } from '@angular/router';

registerLocaleData(localeENGB);

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase, 'Requirements Manager'),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    FormsModule,
    SharedModule,
    // ProjectsModule,
    // RequirementsModule,
    // DefinitionsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-GB' }],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(router: Router) {
      // Use a custom replacer to display function names in the route configs
      const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

      console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
    }
}

