import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Blog } from '../../services/models/blog';
import { BlogService } from '../../services/blog.service';
import { SubtitleService } from '../../../../services/subtitle.service';

@Component({
  selector: 'dr-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, OnDestroy {

  public blog: Blog;
  private _blogSubscription: Subscription;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _blogService: BlogService,
    private _subtitleService: SubtitleService) { }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      const key = params['key'];
      this._blogSubscription = this._blogService.getBlog(key).subscribe((data: any) => {
        if (data) {
          this.blog = data;
          this._subtitleService.setSubstitle(this.blog.title);
        } else if (data === undefined) {
          this._router.navigate(['/']);
        }
      });
    });
  }

  ngOnDestroy() {
    if (this._blogSubscription) { this._blogSubscription.unsubscribe(); }
  }
}
