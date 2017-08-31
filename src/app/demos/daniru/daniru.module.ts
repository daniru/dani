import { MdButtonModule, MdListModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaniruRoutingModule } from './daniru-routing.module';
import { DaniruComponent } from './components/daniru/daniru.component';

@NgModule({
  imports: [
    CommonModule,
    DaniruRoutingModule,
    MdButtonModule,
    MdListModule
  ],
  declarations: [DaniruComponent]
})
export class DaniruModule { }
