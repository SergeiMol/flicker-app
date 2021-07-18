import { Component, HostListener, OnInit } from '@angular/core';
import { UserIdleService } from 'angular-user-idle';
import { InactivityNotificationComponent } from '../../components/inactivity-notification/inactivity-notification.component';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {
  private readonly subscriptions$ = new Subscription();
  images: any;
  page = 1;

  constructor(private userIdle: UserIdleService,
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
    // @ts-ignore
    this.images = JSON.parse(localStorage.getItem('favorite'));
    this.userIdle.startWatching();
    this.showInactiveNotification();
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
    window.scroll(0, 0);
  }

  removeImage(index: number): void {
    this.images.splice(index, 1);
    localStorage.setItem('favorite', JSON.stringify(this.images));
  }

}
