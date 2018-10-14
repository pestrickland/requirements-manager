import { registerLocaleData } from '@angular/common';
import localeENGB from '@angular/common/locales/en-GB';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RequirementsModule } from './requirements/requirements.module';
import { SharedModule } from './shared/shared.module';

registerLocaleData(localeENGB);

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: '', loadChildren: './requirements/requirements.module#RequirementsModule'},
  ];

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
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-GB'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
