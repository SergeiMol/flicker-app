import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookmarksRoutingModule } from './bookmarks-routing.module';
import { BookmarksComponent } from './bookmarks.component';
import { ComponentsModule } from '../../components/components.module';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [
    BookmarksComponent
  ],
  imports: [
    CommonModule,
    BookmarksRoutingModule,
    ComponentsModule,
    MatRippleModule
  ]
})
export class BookmarksModule {
}
