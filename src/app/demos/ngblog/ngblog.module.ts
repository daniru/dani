import { NgblogService } from './services/ngblog.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule, MdIconModule, MdButtonModule, MdMenuModule, MdTooltipModule, MdTabsModule,
MdProgressSpinnerModule, MdListModule } from '@angular/material';

import { NgblogRoutingModule } from './ngblog-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { ListComponent } from './components/list/list.component';
import { ItemComponent } from './components/item/item.component';
import { ItemHeaderComponent } from './components/item-header/item-header.component';
import { ItemSectionComponent } from './components/item-section/item-section.component';
import { ItemCommentsComponent } from './components/item-comments/item-comments.component';
import { ItemFilesComponent } from './components/item-files/item-files.component';

@NgModule({
  imports: [
    CommonModule,
    NgblogRoutingModule,
    SharedModule,
    MdCardModule, MdIconModule, MdButtonModule, MdMenuModule, MdTooltipModule, MdTabsModule, MdProgressSpinnerModule, MdListModule
  ],
  providers: [ NgblogService ],
  declarations: [ListComponent, ItemComponent, ItemHeaderComponent, ItemSectionComponent, ItemCommentsComponent, ItemFilesComponent]
})
export class NgblogModule { }
