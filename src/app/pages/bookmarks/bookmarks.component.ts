import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {
  images: any;
  page = 1;

  constructor() {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.images = JSON.parse(localStorage.getItem('favorite'));
  }

  handlePageChange(event: number): void {
    this.page = event;
    window.scroll(0, 0);
  }

  removeImage(index: number): void {
    this.images.splice(index, 1);
    localStorage.setItem('favorite', JSON.stringify(this.images));
  }

}
