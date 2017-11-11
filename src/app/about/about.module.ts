import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatListModule, MatIconModule, MatInputModule, MatExpansionModule } from '@angular/material';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatExpansionModule
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
