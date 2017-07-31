import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdListModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { TutorialRoutingModule } from './tutorial-routing.module';
import { TutorialComponent } from './components/tutorial/tutorial.component';

@NgModule({
  imports: [
    CommonModule,
    TutorialRoutingModule,
    MdListModule,
    SharedModule
  ],
  declarations: [ TutorialComponent ]
})
export class TutorialModule { }
