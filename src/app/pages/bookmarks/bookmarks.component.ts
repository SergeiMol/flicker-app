import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {
  images: any;

  constructor() {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.images = JSON.parse(localStorage.getItem('favorite'));
  }

  removeImage(index: number): void {
    this.images.splice(index, 1);
    localStorage.setItem('favorite', JSON.stringify(this.images));

  }

}
