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

  constructor(private searchInputService: SearchInputService) {
  }

  ngOnInit(): void {
  }

  toggleEllipsis(): void {
    this.element?.classList.toggle('text-truncate');
    this.isEllipsis = !this.isEllipsis;
  }

  onChangePage(page: number): void {
    console.log(page);
  }

  findPhotos(word: string): void {
    this.images = this.searchInputService.onSearchFieldInput(word);
    console.log(this.images);
  }

}
