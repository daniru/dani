import { StoppointsComponent } from './components/stoppoints/stoppoints.component';
import { StatusComponent } from './components/status/status.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TflComponent } from './components/tfl/tfl.component';

const routes: Routes = [
  { path: '', component: TflComponent },
  { path: 'status', component: StatusComponent, data: { title: 'Current Status' } },
  { path: 'stoppoints', component: StoppointsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TflRoutingModule { }
