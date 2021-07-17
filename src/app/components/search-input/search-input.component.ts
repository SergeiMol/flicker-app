import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  form = new FormControl('');
  @Input() placeholder = '';
  @Output() searchValue = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    this.onWordInput();
  }

  onWordInput(): void {
    this.form.valueChanges.pipe(debounceTime(500)).subscribe(res => this.searchValue.emit(res));
  }


}
