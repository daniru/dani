import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { MdListModule, MdIconModule, MdGridListModule } from '@angular/material';
import { TflRoutingModule } from './tfl-routing.module';
import { SharedModule } from './../../shared/shared.module';

import { TflComponent } from './components/tfl/tfl.component';
import { TflService } from './services/tfl.service';
import { StatusComponent } from './components/status/status.component';
import { StoppointsComponent } from './components/stoppoints/stoppoints.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    TflRoutingModule,
    SharedModule,
    MdListModule,
    MdIconModule,
    MdGridListModule
  ],
  declarations: [TflComponent, StatusComponent, StoppointsComponent],
  providers: [ TflService ]
})
export class TflModule { }
