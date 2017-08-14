import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { HttpModule} from '@angular/http';
import { MdToolbarModule, MdButtonModule, MdInputModule } from '@angular/material';

import { HeaderComponent } from './components/header/header.component';
import { ColumnComponent } from './components/column/column.component';
import { GmapsComponent } from './components/gmaps/gmaps.component';
import { AgmCoreModule } from '@agm/core';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';
import { PrettyfilePipe } from './pipes/prettyfile.pipe';
import { MarkdownPipe } from './pipes/markdown.pipe';
import { ClipboardDirective } from './directives/clipboard.directive';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
    MdToolbarModule,
    MdButtonModule,
    AgmCoreModule,
    FormsModule,
    ReactiveFormsModule,
    MdInputModule
  ],
  declarations: [HeaderComponent, ColumnComponent, GmapsComponent, SubHeaderComponent, PrettyfilePipe, MarkdownPipe, ClipboardDirective, SearchBoxComponent],
  exports: [HeaderComponent, ColumnComponent, GmapsComponent, SubHeaderComponent, PrettyfilePipe, MarkdownPipe, ClipboardDirective, SearchBoxComponent]
})
export class SharedModule { }
