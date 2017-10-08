import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable, Subject } from 'rxjs/Rx';
import { Snippet } from '../models/snippet';
import moment from 'moment-es6';


@Injectable()
export class SnippetService {

  public get page(): number {
    return this._page;
  }

  public get pages(): number[] {
    return Array(Math.ceil(this._count / this._blogsByPage)).fill(null).map((x, i) => i + 1);
  }

  private _count: number;
  private _page = 1;
  private _blogsByPage = 20;
  private _localCache: Snippet[] = [];
  private _snippetSubject: Subject<Snippet[]>;

  // Initialize subject and request JSON file to store in the localCache.
  constructor(
    private _http: Http,
    private _afdb: AngularFireDatabase) {

    this._snippetSubject = new Subject<Snippet[]>();

    this._afdb.list('/snippet')
      .valueChanges()
      .map((x: Snippet[]) => x )
      .do((x) => { this._localCache = x; })
      .do((x) => this._snippetSubject.next(x))
      .subscribe();
  }

  getSnippets(): Observable<Snippet[]> {
    const localObservable = Observable.of(this._localCache);
    return Observable.merge(localObservable, this._snippetSubject.asObservable())
      .do(x => console.log('raw', x))
      .map((snippets) => {
        const partial = snippets;
        this._count = partial.length;
        return partial.reverse().slice((this.page - 1) * this._blogsByPage, (this.page) * this._blogsByPage);
      });
  }

  // method to get on blog by key
  getSnippet(key: string): Observable<Snippet> {
    const blog = this._localCache.filter(x => x.$key === key);
    const localObservable = Observable.of(blog);
    return Observable.merge(localObservable, this._snippetSubject.asObservable())
      .map(res => res.find(x => x.$key === key));
  }

  // refresh() {
  //   this._snippetSubject.publishReplay();
  // }

  saveSnippet(snippet: Snippet): Observable<string> {
    const subject = new Subject<string>();
    const key = snippet.$key;
    delete snippet.$key;

    if (key) {
      this._afdb.list('/snippet').update(key, snippet)
        .then((x) => { subject.next(null); })
        .catch((e: Error) => { subject.next(e.message); });
    } else {
      snippet.date_created = moment.utc().format('YYYY-MM-DDTMM:ss');
      this._afdb.list('/snippet').push(snippet)
        .then((x) => { subject.next(null); })
        // .catch((e: Error) => {
        //   console.log('e', e);
        //   subject.error(e.message);
        // } );
    }
     return subject.asObservable();
  }


  /* JSON */

  // Get blogs from the localCache or the observable
  getSnippetsFromJson(): Observable<Snippet[]> {
    return Observable.of(this._localCache)
      .merge(this._snippetSubject.asObservable());
  }

  // Get blog from the localCache or the observable
  getSnippetFromJson(key: string): Observable<Snippet> {
    const blog = this._localCache.filter(x => x.$key === key);
    const localObservable = Observable.of(blog);
    return Observable
      .merge(localObservable, this._snippetSubject.asObservable())
      .map(res => res && res.length === 0 ? null : res.find(x => x.$key === key));
  }

  refresh() {
    this._snippetSubject.next(this._localCache);
  }

  // Convert object to array function

  private _convertObjectToArray(data: any): Snippet[] {
    return Object.keys(data).map((key: string) => {
      return <Snippet>data[key];
    });
  }

}

