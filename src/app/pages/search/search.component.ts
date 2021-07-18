import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { SearchInputService } from '../../core/services/search-input.service';
import { IPhoto } from '../../core/interfaces/photo.interface';
import { UserIdleService } from 'angular-user-idle';
import { MatDialog } from '@angular/material/dialog';
import { InactivityNotificationComponent } from '../../components/inactivity-notification/inactivity-notification.component';
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

  constructor(private searchInputService: SearchInputService,
              private userIdle: UserIdleService,
              private matDialog: MatDialog) {
  }

  @HostListener('document:keyup', ['$event'])
  @HostListener('document:click', ['$event'])
  @HostListener('document:wheel', ['$event'])
  @HostListener('document:mousemove', ['$event'])
  resetTimer(): void {
    this.userIdle.resetTimer();
  }

  @HostListener('document:visibilitychange', ['$event'])
  setTimerStatus(): void {
    if (document.hidden) {
      this.userIdle.stopWatching();
    } else {
      this.userIdle.startWatching();
    }
  }

  ngOnInit(): void {
    this.getImagesFromStorage();
    this.userIdle.startWatching();
    this.showInactiveNotification();
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

  showInactiveNotification(): void {
    this.subscriptions$.add(
      this.userIdle.onTimerStart().subscribe(count => {
        if (count) {
          this.userIdle.stopWatching();
          this.matDialog.open(InactivityNotificationComponent, {
            maxWidth: '100%',
            width: '500px',
          }).afterClosed().subscribe(() => this.userIdle.startWatching());
        }
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
    arr ? arr.push({title, link: URL}) : arr = [{title, url: URL}];
    localStorage.setItem('favorite', JSON.stringify(arr));
  }

  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}
