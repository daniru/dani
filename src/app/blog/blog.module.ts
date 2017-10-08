import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { MatCardModule, MatIconModule, MatButtonModule, MatMenuModule, MatTooltipModule, MatTabsModule, MatInputModule,
  MatSnackBarModule } from '@angular/material';
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
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { EditItemFileComponent } from './components/edit-item-file/edit-item-file.component';
import { EditItemSectionComponent } from './components/edit-item-section/edit-item-section.component';
import { PaginationComponent } from './components/pagination/pagination.component';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    BlogRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    SharedModule,
    MatTooltipModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [ BlogService ],
  declarations: [ListComponent, ListItemComponent, ItemHeaderComponent, ItemSectionComponent, ItemFilesComponent,
    ItemComponent, ItemCommentsComponent, EditItemComponent, EditItemFileComponent, EditItemSectionComponent, PaginationComponent]
})
export class BlogModule { }
