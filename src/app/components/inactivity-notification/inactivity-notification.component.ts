import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-inactivity-notification',
  templateUrl: './inactivity-notification.component.html',
  styleUrls: ['./inactivity-notification.component.scss']
})
export class InactivityNotificationComponent implements OnInit {

  constructor(public dialog: MatDialogRef<InactivityNotificationComponent>) {
  }

  ngOnInit(): void {
  }

}
