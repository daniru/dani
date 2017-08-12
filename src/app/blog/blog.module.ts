import { SharedModule } from './../shared/shared.module';
import { MdCardModule, MdIconModule, MdButtonModule, MdMenuModule, MdTooltipModule, MdTabsModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { BlogService } from './services/blog.service';
import { BlogRoutingModule } from './blog-routing.module';
import { ItemHeaderComponent } from './components/item-header/item-header.component';
import { ItemSectionComponent } from './components/item-section/item-section.component';
import { ItemFilesComponent } from './components/item-files/item-files.component';
import { ItemComponent } from './components/item/item.component';
import { ItemCommentsComponent } from './components/item-comments/item-comments.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    BlogRoutingModule,
    MdCardModule,
    MdIconModule,
    MdButtonModule,
    MdMenuModule,
    SharedModule,
    MdTooltipModule,
    MdTabsModule
  ],
  providers: [ BlogService ],
  declarations: [ListComponent, ListItemComponent, ItemHeaderComponent, ItemSectionComponent, ItemFilesComponent, ItemComponent, ItemCommentsComponent]
})
export class BlogModule { }
