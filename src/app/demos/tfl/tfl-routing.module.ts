import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TflComponent } from './components/tfl/tfl.component';
import { HomeComponent } from './components/home/home.component';
import { RouteComponent } from './components/route/route.component';
import { StatusComponent } from './components/status/status.component';

const routes: Routes = [
  {
    path: '',
    component: TflComponent,
    children: [
      { path: '', component: HomeComponent, data: { title: 'Home' } },
      { path: 'status', component: StatusComponent, data: { title: 'Current Status' } },
      { path: 'stoppoints', component: RouteComponent, data: { title: 'Routes' } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TflRoutingModule { }
