import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Blog } from '../../services/models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'dr-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, OnDestroy {

  public blog: Blog;
  public editMode: boolean;
  private _blogSubscription: Subscription;

  constructor(public route: ActivatedRoute, public router: Router, public blogService: BlogService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      const key = params['key'];
      console.log('key', key);
      this._blogSubscription = this.blogService.getBlog(key).subscribe((data: any) => {
        console.log('data', data);
        if (data) {
          this.blog = data;
        } else if (data === undefined) {
          this.router.navigate(['/']);
        }
      });
    });
  }

  ngOnDestroy() {
    if (this._blogSubscription) { this._blogSubscription.unsubscribe(); }
  }
}
