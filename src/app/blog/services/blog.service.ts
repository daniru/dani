import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable, Subject } from 'rxjs/Rx';
import { Blog } from '../models/blog';
import moment from 'moment-es6';


@Injectable()
export class BlogService {

  public get page(): number {
    return this._page;
  }

  public get pages(): number[] {
    return Array(Math.ceil(this._count / this._blogsByPage)).fill(null).map((x, i) => i + 1);
  }

  private _count: number;
  private _page = 1;
  private _blogsByPage = 20;
  private _localCache: Blog[] = [];
  private _blogSubject: Subject<Blog[]>;

  // Initialize subject and request JSON file to store in the localCache.
  constructor(
    private _http: Http,
    private _afdb: AngularFireDatabase) {

    this._blogSubject = new Subject<Blog[]>();

    this._afdb.list('/post')
      .do(x => console.log('raw, raw', x))
      .map((x: Blog[]) => x )
      .do((x) => { this._localCache = x; })
      .do((x) => this._blogSubject.next(x))
      .subscribe();
  }

  getBlogs(): Observable<Blog[]> {
    const localObservable = Observable.of(this._localCache);
    return Observable.merge(localObservable, this._blogSubject.asObservable())
      .do(x => console.log('raw', x))
      .map((snippets) => {
        const partial = snippets;
        this._count = partial.length;
        return partial.reverse().slice((this.page - 1) * this._blogsByPage, (this.page) * this._blogsByPage);
      });
  }

  // method to get on blog by key
  getBlog(key: string): Observable<Blog> {
    const blog = this._localCache.filter(x => x.key === key);
    const localObservable = Observable.of(blog);
    return Observable.merge(localObservable, this._blogSubject.asObservable())
      .map(res => res.find(x => x.key === key));
  }

  saveBlog(blog: Blog): Observable<string> {
    const subject = new Subject<string>();
    const key = blog.$key;
    delete blog.$key;

    if (key) {
      this._afdb.list('/post').update(key, blog)
        .then((x) => { subject.next(null); })
        .catch((e: Error) => { subject.next(e.message); });
    } else {
      blog.date_created = moment.utc().format('YYYY-MM-DDTMM:ss');
      this._afdb.list('/post').push(blog)
        .then((x) => { subject.next(null); })
        .catch((e: Error) => {
          console.log('e', e);
          subject.error(e.message);
        } );
    }
     return subject.asObservable();
  }


  /* JSON */

  // Get blogs from the localCache or the observable
  getBlogsFromJson(): Observable<Blog[]> {
    return Observable.of(this._localCache)
      .merge(this._blogSubject.asObservable());
  }

  // Get blog from the localCache or the observable
  getBlogFromJson(key: string): Observable<Blog> {
    const blog = this._localCache.filter(x => x.$key === key);
    const localObservable = Observable.of(blog);
    return Observable
      .merge(localObservable, this._blogSubject.asObservable())
      .map(res => res && res.length === 0 ? null : res.find(x => x.$key === key));
  }

  refresh() {
    this._blogSubject.next(this._localCache);
  }

  setPage(num: number) {
    this._page = num;
    this._blogSubject.next(this._localCache);
  }

  // Convert object to array function

  private _convertObjectToArray(data: any): Blog[] {
    return Object.keys(data).map((key: string) => {
      return <Blog>data[key];
    });
  }

}

