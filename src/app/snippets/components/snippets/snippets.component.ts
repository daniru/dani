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
  snippets: Observable<Snippet>;

  selected: string;
  snippetToEdit: Snippet;

  searchTerm = '';
  language = 'IIS';

  constructor(private _snippetService: SnippetService) {}

  ngOnInit() {
    this.languages = this._snippetService
      .getSnippets()
      .do(x => console.log('on snippets', x))
      .map(x => _.uniq(_.map(x, (snippet) => snippet.language)))
      .do(x => this.selectLanguage('IIS'));

    this.getSnippets();
  }

  selectLanguage(language: string) {
    this.language = language;
    this.getSnippets();
  }

  getSnippets() {
    this.snippets = this._snippetService
    .getSnippets()
    .map(snippets => {
      if (this.searchTerm && this.searchTerm.length > 2) {
        return  _.filter(snippets, (snippet: Snippet) => snippet.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >= 0);
      }
      return _.filter(snippets, (snippet: Snippet) => snippet.language === this.language);
    });
  }

  editSnippet(snippet: Snippet) {
    this.snippetToEdit = snippet
  }

  finishEdit(snippet: Snippet) {
    this.snippetToEdit = null;
  }

  onChange(text: string) {
    this.searchTerm = text;
    this.getSnippets();
  }

}
