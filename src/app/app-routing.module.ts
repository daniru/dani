import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: 'app/blog/blog.module#BlogModule' },
  { path: 'demos', loadChildren: 'app/demos/demos.module#DemosModule', data: { title: 'Demos' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
