import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule, MatMenuModule, MatTooltipModule, MatExpansionModule, MatSidenavModule, MatButtonModule
  // MatCommonModule, MAT_PLACEHOLDER_GLOBAL_OPTIONS
} from '@angular/material';
// import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth.service';
import { SubtitleService } from './services/subtitle.service';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatDialogModule,
    MatMenuModule,
    MatTooltipModule,
    MatExpansionModule,
    MatSidenavModule,
    MatButtonModule,
    BrowserAnimationsModule,
    SharedModule,
    // AgmCoreModule.forRoot({
    //   apiKey: environment.googleMapsApi
    // }),
    AngularFireModule.initializeApp(environment.firebaseConfig), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // i
  ],
  providers: [
    // {provide: MAT_PLACEHOLDER_GLOBAL_OPTIONS, useValue: { float: 'always' }},
    AuthService,
    SubtitleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
