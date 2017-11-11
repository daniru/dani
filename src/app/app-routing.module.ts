import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'about', loadChildren: 'app/about/about.module#AboutModule', data: { title: 'About me' } },
  { path: '', loadChildren: 'app/blog/blog.module#BlogModule', data: { title: 'Blog' }},
  { path: 'demos', loadChildren: 'app/demos/demos.module#DemosModule', data: { title: 'Demos' } },
  { path: 'snippets', loadChildren: 'app/snippets/snippets.module#SnippetsModule', data: { title: 'Code Snippets' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
