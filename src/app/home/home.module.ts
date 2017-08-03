import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule, MdListModule, MdIconModule } from '@angular/material';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MdCardModule,
    MdListModule,
    MdIconModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
