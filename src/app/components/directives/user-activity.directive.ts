import { Directive, HostListener, OnDestroy, Output } from '@angular/core';
import { UserIdleService } from 'angular-user-idle';
import { MatDialog } from '@angular/material/dialog';
import { InactivityNotificationComponent } from '../inactivity-notification/inactivity-notification.component';
import { Subscription } from 'rxjs';
import { EventEmitter } from '@angular/core';

@Directive({
  selector: '[appUserActivity]'
})
export class UserActivityDirective implements OnDestroy {
  private readonly subscriptions$ = new Subscription();
  @Output() appScrollToEnd = new EventEmitter();


  constructor(private userIdle: UserIdleService,
              private matDialog: MatDialog) {
    this.userIdle.startWatching();
    this.showInactiveNotification();
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
    if (document.hidden || (!document.hidden && this.matDialog.openDialogs.length)) {
      this.userIdle.stopWatching();
    } else {
      this.userIdle.startWatching();
    }
  }

  private showInactiveNotification(): void {
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

  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}
