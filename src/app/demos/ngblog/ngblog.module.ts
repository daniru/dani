import { NgblogService } from './services/ngblog.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatIconModule, MatButtonModule, MatMenuModule, MatTooltipModule, MatTabsModule,
MatProgressSpinnerModule, MatListModule } from '@angular/material';

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
    MatCardModule, MatIconModule, MatButtonModule, MatMenuModule, MatTooltipModule, MatTabsModule, MatProgressSpinnerModule, MatListModule
  ],
  providers: [ NgblogService ],
  declarations: [ListComponent, ItemComponent, ItemHeaderComponent, ItemSectionComponent, ItemCommentsComponent, ItemFilesComponent]
})
export class NgblogModule { }
