import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { JwPaginationModule } from 'jw-angular-pagination';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SearchRoutingModule,
    ComponentsModule,
    JwPaginationModule,
    MatGridListModule,
    MatCardModule
  ]
})
export class SearchModule {
}
