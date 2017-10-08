import { AuthService } from './../../../services/auth.service';
import { Snippet } from './../../models/snippet';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dr-snippet',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.scss']
})
export class SnippetComponent implements OnInit {

  @Input() item: Snippet;
  @Output() edit = new EventEmitter<Snippet>();

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  editSnippet(snippet: Snippet) {
    console.log('click');
    this.edit.emit(snippet);
  }

}
