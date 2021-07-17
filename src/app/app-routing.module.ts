import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'search', pathMatch: 'full'
  },
  {
    path: 'search',
    loadChildren: () => import('src/app/pages/search/search.module').then((m) => m.SearchModule)
  },
  {
    path: 'bookmarks',
    loadChildren: () => import('src/app/pages/bookmarks/bookmarks.module').then((m) => m.BookmarksModule)
  },
  {
    path: '**', redirectTo: 'search'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
