import { Subscription } from 'rxjs/Subscription';
import { FormControl } from '@angular/forms';
import { Component, OnInit, Input, OnChanges, EventEmitter, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'dr-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit, OnChanges, OnDestroy {

  @Input() placeholder: string;
  @Output() textChanged = new EventEmitter<string>();

  term = new FormControl();
  private _previousValue: string;
  private _searchStream: Subscription;

  constructor() { }

  ngOnInit() {
    this._previousValue = '';
    this._searchStream = this.term.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .do((data) => {
        if (this._previousValue !== data) {
          this.textChanged.emit(data);
          this._previousValue = data;
        }
      })
      .subscribe(() => {});
  }

  ngOnChanges() {
    this.placeholder = this.placeholder || 'Search';
  }

  ngOnDestroy() {
    if (this._searchStream) { this._searchStream.unsubscribe(); }
  }
}
