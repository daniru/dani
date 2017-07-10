import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemosComponent } from './components/demos/demos.component';

const routes: Routes = [
  { path: '', component: DemosComponent },
  { path: 'tfl', loadChildren: 'app/demos/tfl/tfl.module#TflModule', data: { title: 'Transport For London' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemosRoutingModule { }
