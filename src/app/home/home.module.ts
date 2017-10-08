import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatListModule, MatIconModule, MatInputModule, MatExpansionModule } from '@angular/material';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatExpansionModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
