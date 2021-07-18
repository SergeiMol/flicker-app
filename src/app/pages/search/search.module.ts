import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatRippleModule } from '@angular/material/core';
import { EllipsisModule } from 'ngx-ellipsis';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SearchRoutingModule,
    ComponentsModule,
    MatGridListModule,
    MatCardModule,
    NgxPaginationModule,
    MatRippleModule,
    EllipsisModule,
    MatButtonModule
  ]
})
export class SearchModule {
}
