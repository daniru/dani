import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdListModule, MdIconModule, MdGridListModule, MdTabsModule, MdSelectModule, MdTableModule,
  MdAutocompleteModule, MdInputModule, MdSlideToggleModule, MdCardModule, MdButtonModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk';
import { TflRoutingModule } from './tfl-routing.module';
import { SharedModule } from './../../shared/shared.module';

import { TflComponent } from './components/tfl/tfl.component';
import { TflService } from './services/tfl.service';
import { StatusComponent } from './components/status/status.component';
import { RouteComponent } from './components/route/route.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { StatusPanelComponent } from './components/status-panel/status-panel.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    TflRoutingModule,
    SharedModule,
    MdListModule,
    MdIconModule,
    MdGridListModule,
    MdTabsModule,
    MdSelectModule,
    MdAutocompleteModule,
    MdInputModule,
    MdSlideToggleModule,
    MdCardModule,
    MdButtonModule,
    MdTableModule,
    CdkTableModule
  ],
  declarations: [
    TflComponent, StatusComponent, RouteComponent, HomeComponent, StatusPanelComponent,
    FooterComponent ],
  providers: [ TflService ]
})
export class TflModule { }
