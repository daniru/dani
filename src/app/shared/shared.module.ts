import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { HttpModule} from '@angular/http';
import { MdToolbarModule, MdButtonModule } from '@angular/material';

import { HeaderComponent } from './components/header/header.component';
import { ColumnComponent } from './components/column/column.component';
import { GmapsComponent } from './components/gmaps/gmaps.component';
import { AgmCoreModule } from '@agm/core';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
    MdToolbarModule,
    MdButtonModule,
    AgmCoreModule
  ],
  declarations: [HeaderComponent, ColumnComponent, GmapsComponent, SubHeaderComponent],
  exports: [HeaderComponent, ColumnComponent, GmapsComponent, SubHeaderComponent]
})
export class SharedModule { }
