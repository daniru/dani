import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { MdCardModule, MdListModule, MdIconModule, MdInputModule, MdTooltipModule } from '@angular/material';
=======
import { MatCardModule, MatListModule, MatIconModule, MatInputModule } from '@angular/material';
>>>>>>> 1f268c7af82a1d0d19f8ec04133780386ecc17e5

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
<<<<<<< HEAD
    MdCardModule,
    MdListModule,
    MdIconModule,
    MdInputModule,
    MdTooltipModule
=======
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
>>>>>>> 1f268c7af82a1d0d19f8ec04133780386ecc17e5
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
