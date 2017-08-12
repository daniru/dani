import { SnippetService } from './services/snippet.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdListModule, MdButtonModule, MdIconModule, MdTooltipModule, MdDialogModule, MdInputModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { SnippetsRoutingModule } from './snippets-routing.module';
import { SnippetsComponent } from './components/snippets/snippets.component';
import { SnippetComponent } from './components/snippet/snippet.component';
import { AddSnippetComponent, DialogResultExampleDialogComponent } from './components/add-snippet/add-snippet.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SnippetsRoutingModule,
    MdListModule,
    SharedModule,
    MdButtonModule,
    MdIconModule,
    MdTooltipModule,
    MdDialogModule,
    MdInputModule
  ],
  providers: [ SnippetService ],
  entryComponents: [ DialogResultExampleDialogComponent ],
  declarations: [ SnippetsComponent, SnippetComponent, AddSnippetComponent, DialogResultExampleDialogComponent ]
})
export class SnippetsModule { }
