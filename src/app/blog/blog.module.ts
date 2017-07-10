import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { BlogService } from './services/blog.service';
import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    BlogRoutingModule
  ],
  providers: [ BlogService ],
  declarations: [ListComponent, ListItemComponent]
})
export class BlogModule { }
