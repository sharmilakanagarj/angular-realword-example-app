import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {  TimsService} from "./shared/tims.service";

import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HRMSComponent } from './hrms/hrms.component';
import { LemsComponent } from './lems/lems.component';
import { AemsComponent } from './aems/aems.component';
import { TimsComponent } from './tims/tims.component';
import { FamsComponent } from './fams/fams.component';
import { AimsComponent } from './aims/aims.component';
import { SharedComponent } from './shared/shared.component';

@NgModule({
  declarations: [
    AppComponent,
    HRMSComponent,
    LemsComponent,
    AemsComponent,
    TimsComponent,
    FamsComponent,
    AimsComponent,
    SharedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule
    
  ],
  providers: [TimsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
