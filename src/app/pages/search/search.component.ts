import { Component, OnInit } from '@angular/core';
import { SearchInputService } from '../../core/services/search-input.service';
import { IPhoto } from '../../core/interfaces/photo.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  images: IPhoto[] = [];
  isEllipsis = true;
  element = document.getElementById('ellipsis-ex');
  page = 1;
  total = 0;
  word = '';

  constructor(private searchInputService: SearchInputService) {
  }

  ngOnInit(): void {
    this.searchInputService.pages.valueChanges?.subscribe(res => {
      this.total = res * 10;
    });
  }

  toggleEllipsis(): void {
    this.element?.classList.toggle('text-truncate');
    this.isEllipsis = !this.isEllipsis;
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.images = this.searchInputService.onSearchFieldInput(this.word, this.page);

  }

  findPhotos(word: string): void {
    if (word !== this.word) {
      this.page = 1;
    }
    this.word = word;
    this.images = this.searchInputService.onSearchFieldInput(word, this.page);
  }

}
