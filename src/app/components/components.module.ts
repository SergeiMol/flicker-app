import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavListComponent } from './nav-list/nav-list.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [NavListComponent, HeaderComponent, SearchInputComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [NavListComponent, HeaderComponent, SearchInputComponent]
})
export class ComponentsModule {
}
