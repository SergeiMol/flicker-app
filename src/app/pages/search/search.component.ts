import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchInputService } from '../../core/services/search-input.service';
import { IPhoto } from '../../core/interfaces/photo.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  private readonly subscriptions$ = new Subscription();

  images: IPhoto[] = [];
  element = document.getElementById('ellipsis-ex');
  page = 1;
  total = 0;
  previousWord = '';
  emptyMessage = 'Start typing and see the magic';

  constructor(private searchInputService: SearchInputService) {
  }

  ngOnInit(): void {
    this.getImagesFromStorage();
  }

  getImagesFromStorage(): void {
    this.subscriptions$.add(
      this.searchInputService
        .pages
        .valueChanges
        ?.subscribe(res => {
          this.total = res * 12;
        })
    );
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.images = this.searchInputService.onSearchFieldInput(this.previousWord, this.page);
    window.scroll(0, 0);
  }

  findPhotos(word: string): void {
    if (word !== this.previousWord) {
      this.page = 1;
    }
    this.previousWord = word;
    this.images = this.searchInputService.onSearchFieldInput(word, this.page);
    this.checkContent(word);
  }

  checkContent(word: string): void {
    if (word && this.total) {
      this.emptyMessage = 'Content not found';
    } else {
      this.emptyMessage = 'Start typing and see the magic';
    }
  }

  saveImage(title: string, URL: string): void {
    // @ts-ignore
    let arr = JSON.parse(localStorage.getItem('favorite'));
    arr ? arr.push({title, url: URL}) : arr = [{title, url: URL}];
    localStorage.setItem('favorite', JSON.stringify(arr));
  }

  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}
