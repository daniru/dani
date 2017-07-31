import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorialComponent } from './components/tutorial/tutorial.component';

const routes: Routes = [
  { path: '', component: TutorialComponent },
  { path: 'ngblog', loadChildren: 'app/tutorial/ngblog/ngblog.module#NgblogModule', data: { title: 'Create your own Angular Blog step by step' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorialRoutingModule { }
