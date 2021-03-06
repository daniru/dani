import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { AngularFireDatabase } from 'angularfire2/database';
import moment from 'moment-es6';
import * as _ from 'lodash';
import 'rxjs/Rx';
import { AuthService } from '../../../services/auth.service';
import { Blog } from './models/blog';

@Injectable()
export class NgblogService {

  private _blogSubject: Subject<Blog[]>;

  constructor(public afdb: AngularFireDatabase, public authService: AuthService) {

    this._blogSubject = new Subject<Blog[]>();

  }

  // method to get all blogs
  getBlogs(): Observable<Blog[]> {
    return this.afdb.list('/blog')
      .valueChanges()
      .map((x: Blog[]) => x);
  }

  // method to get on blog by key
  getBlog(key: string): Observable<Blog> {
    return this.afdb.list(`/blog`, ref => {
      return ref.orderByChild('key')
        .equalTo(key)
        .limitToFirst(1)
      })
      .valueChanges()
      .filter((x: Blog[]) => x[0].date_published !== null && moment(x[0].date_published).isSameOrBefore(moment.utc()))
      .map((x: Blog[]) => x ? x[0] : null);
  }

}
