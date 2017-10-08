import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule, MatTooltipModule } from '@angular/material';

import { DemosRoutingModule } from './demos-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DemosComponent } from './components/demos/demos.component';

@NgModule({
  imports: [
    CommonModule,
    DemosRoutingModule,
    MatListModule, MatTooltipModule,
    SharedModule
  ],
  declarations: [
    DemosComponent
  ],
  bootstrap: [ DemosComponent ]
})
export class DemosModule { }
