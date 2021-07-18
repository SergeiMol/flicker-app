import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchModule } from './pages/search/search.module';
import { BookmarksModule } from './pages/bookmarks/bookmarks.module';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatRippleModule } from '@angular/material/core';
import { UserIdleModule } from 'angular-user-idle';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SearchModule,
    BookmarksModule,
    ComponentsModule,
    HttpClientModule,
    NgxPaginationModule,
    MatRippleModule,
    UserIdleModule.forRoot({idle: 60, timeout: 0})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
