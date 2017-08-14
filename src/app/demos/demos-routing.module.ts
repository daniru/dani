import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemosComponent } from './components/demos/demos.component';

const routes: Routes = [
  { path: '', component: DemosComponent },
  { path: 'daniru', loadChildren: 'app/demos/daniru/daniru.module#DaniruModule', data: { title: 'www.daniru.com - My website' } },
  { path: 'tfl', loadChildren: 'app/demos/tfl/tfl.module#TflModule', data: { title: 'Transport For London' } },
  { path: 'ngblog', loadChildren: 'app/demos/ngblog/ngblog.module#NgblogModule', data: { title: 'Create your own Angular Blog step by step' } },
  { path: 'gameoflife', loadChildren: 'app/demos/gameoflife/gameoflife.module#GameoflifeModule', data: { title: 'Game of life' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemosRoutingModule { }
