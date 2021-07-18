import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookmarksRoutingModule } from './bookmarks-routing.module';
import { BookmarksComponent } from './bookmarks.component';
import { ComponentsModule } from '../../components/components.module';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    BookmarksComponent
  ],
  imports: [
    CommonModule,
    BookmarksRoutingModule,
    ComponentsModule,
    MatRippleModule,
    MatCardModule,
    NgxPaginationModule,
    MatButtonModule
  ]
})
export class BookmarksModule {
}
