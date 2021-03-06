import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { HttpModule} from '@angular/http';
import { MatToolbarModule, MatButtonModule, MatInputModule, MatSnackBarModule, MatDialogModule, MatSidenavModule } from '@angular/material';

import { HeaderComponent } from './components/header/header.component';
import { ColumnComponent } from './components/column/column.component';
import { GmapsComponent } from './components/gmaps/gmaps.component';
// import { AgmCoreModule } from '@agm/core';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';
import { PrettyfilePipe } from './pipes/prettyfile.pipe';
import { MarkdownPipe } from './pipes/markdown.pipe';
import { ClipboardDirective } from './directives/clipboard.directive';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { AuthComponent } from './components/auth/auth.component';
import { AuthDialogComponent } from './components/auth-dialog/auth-dialog.component';
import { OrderByOrderPipe } from './pipes/order-by-order.pipe';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule,
    // AgmCoreModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatSidenavModule
  ],
  declarations: [ HeaderComponent, ColumnComponent, GmapsComponent, SubHeaderComponent, PrettyfilePipe, MarkdownPipe,
    ClipboardDirective, SearchBoxComponent, AuthComponent, AuthDialogComponent, OrderByOrderPipe, MenuComponent ],
  exports: [ HeaderComponent, ColumnComponent, GmapsComponent, SubHeaderComponent, PrettyfilePipe, MarkdownPipe,
    ClipboardDirective, SearchBoxComponent, AuthComponent, AuthDialogComponent, OrderByOrderPipe, MenuComponent ],
  entryComponents: [ AuthDialogComponent ]
})
export class SharedModule { }
