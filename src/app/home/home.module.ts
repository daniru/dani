import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule, MdListModule, MdIconModule, MdInputModule } from '@angular/material';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MdCardModule,
    MdListModule,
    MdIconModule,
    MdInputModule,
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
