import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavListComponent } from './nav-list/nav-list.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { InactivityNotificationComponent } from './inactivity-notification/inactivity-notification.component';


@NgModule({
  declarations: [
    NavListComponent,
    HeaderComponent,
    SearchInputComponent,
    InactivityNotificationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatRippleModule
  ],
  exports: [NavListComponent, HeaderComponent, SearchInputComponent]
})
export class ComponentsModule {
}
