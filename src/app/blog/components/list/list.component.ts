import { AuthService } from './../../../services/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog';
// import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'dr-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  // list of blogs in the view
  public list: Observable<Blog[]>;
  private _blogSubscription: Subscription;
  private _authSubscription: Subscription;

  constructor(public blogService: BlogService, public authService: AuthService) { }

  ngOnInit() {
    this.list = this.blogService.getBlogs();
    // this._authSubscription = this._authService.userSubject.subscribe((user) => { this.blogService.refresh(); });
  }

  ngOnDestroy() {
    if (this._authSubscription) { this._authSubscription.unsubscribe(); }
  }

  updatePage(page: number) {
    this.blogService.setPage(page);
  }

}
