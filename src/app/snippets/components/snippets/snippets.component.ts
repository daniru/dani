import { AuthService } from './../../../services/auth.service';
import * as _ from 'lodash';
import { Snippet } from './../../models/snippet';
import { Observable } from 'rxjs/Observable';
import { SnippetService } from './../../services/snippet.service';
import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';

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
  searchTerm = '';
  language = null;

  private _source: Observable<Snippet[]>;

  constructor(
    public authService: AuthService,
    private _snippetService: SnippetService,
    private _cdr: ChangeDetectorRef ) {}

  ngOnInit() {

    this._source = this._snippetService
      .getSnippets()
      .do((snippets: Snippet[]) => {
        if (this.searchTerm && this.searchTerm.length > 0) {
          snippets = _.filter(snippets, (snippet: Snippet) => snippet.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >= 0);
        }
        if (this.language === null || !_.some(snippets, (x: Snippet) => x.language === this.language)) {
          this.language = _.first(_.sortBy(_.map(snippets, (snippet) => snippet.language)));
        }
      });

    this.languages = this._source
      .map(snippets => {
        if (this.searchTerm && this.searchTerm.length > 0) {
          snippets = _.filter(snippets, (snippet: Snippet) => snippet.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >= 0);
        }
        const list = _.sortBy(_.uniq(_.map(snippets, (snippet) => snippet.language)))
        if (list.indexOf(this.language) < 0) {
          this.language = list[0];
          this._cdr.detectChanges();
        }
        return list;
      });

    this.snippets = this._source
      .map(snippets => {
        if (this.searchTerm && this.searchTerm.length > 0) {
          return  _.filter(snippets, (snippet: Snippet) => snippet.language === this.language && snippet.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >= 0);
        }
        return _.filter(snippets, (snippet: Snippet) => snippet.language === this.language);
      });


  }

  selectLanguage(language: string) {
    this.language = language;
    this._snippetService.refresh();
  }

  editSnippet(snippet: Snippet) {
    console.log('editSnippet', snippet);
    this.snippetToEdit = snippet
  }

  finishEdit(snippet: Snippet) {
    this.snippetToEdit = null;
  }

  onChangeFilter(text: string) {
    this.searchTerm = text;
    this._snippetService.refresh();
  }

}
