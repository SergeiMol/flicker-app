import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactivityNotificationComponent } from './inactivity-notification.component';

describe('UnactivityNotificationComponent', () => {
  let component: InactivityNotificationComponent;
  let fixture: ComponentFixture<InactivityNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InactivityNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InactivityNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
