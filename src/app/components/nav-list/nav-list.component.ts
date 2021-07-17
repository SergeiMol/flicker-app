import { Component, OnInit } from '@angular/core';
import { INavItem } from '../../core/interfaces/nav-item.interface';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent implements OnInit {
  navItems: INavItem[] = [
    {src: 'assets/icons/flickr.svg', label: 'Поиск', link: '/search', alt: 'flicker logo'},
    {src: 'assets/icons/bookmark.svg', label: 'Закладки', link: '/bookmarks', alt: 'bookmark logo'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
