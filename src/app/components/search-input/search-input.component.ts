import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit, OnDestroy {
  private readonly subscriptions$ = new Subscription();

  form = new FormControl('');
  @Input() placeholder = '';
  @Output() searchValue = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    this.onWordInput();
  }

  clearField(): void {
    this.form.setValue('');
  }

  onWordInput(): void {
    this.subscriptions$.add(
      this.form
        .valueChanges
        .pipe(debounceTime(300))
        .subscribe(res => this.searchValue.emit(res))
    );
  }

  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }


}
