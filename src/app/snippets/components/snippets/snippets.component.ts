import * as _ from 'lodash';
import { Snippet } from './../../models/snippet';
import { Observable } from 'rxjs/Observable';
import { SnippetService } from './../../services/snippet.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dr-snippets',
  templateUrl: './snippets.component.html',
  styleUrls: ['./snippets.component.scss']
})
export class SnippetsComponent implements OnInit {

  languages: Observable<string[]>;
  snippets: Observable<Snippet[]>;
  selected: string;

  snippetToEdit: Snippet;

  constructor(private _snippetService: SnippetService) {}

  ngOnInit() {
    this.languages = this._snippetService
      .getSnippets()
      .do(x => console.log('on snippets', x))
      .map(x => _.uniq(_.map(x, (snippet) => snippet.language)))
      .do(x => this.selectLanguage('IIS'));
  }

  selectLanguage(language: string) {
    this.selected = language;
    this.snippets = this._snippetService
      .getSnippets()
      .map(x => _.filter(x, (snippet) => snippet.language === language));
  }

  editSnippet(snippet: Snippet) {
    this.snippetToEdit = snippet
  }

  finishEdit(snippet: Snippet) {
    this.snippetToEdit = null;
  }

}
