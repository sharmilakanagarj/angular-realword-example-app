import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HRMSComponent } from './hrms/hrms.component';
import { AemsComponent } from './aems/aems.component';
import { AimsComponent} from './aims/aims.component';
import { FamsComponent } from './fams/fams.component';
import { LemsComponent } from './lems/lems.component';
import {TimsComponent} from './tims/tims.component';
const routes: Routes = [
  { path: 'hrms', component: HRMSComponent },
  { path: 'aems', component:AemsComponent},
  { path: 'aims', component:AimsComponent},
  { path: 'fams', component:FamsComponent},
  { path: 'lems', component:LemsComponent},
  { path: 'tims', component: TimsComponent },
  { path: '', redirectTo: '/tims', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
