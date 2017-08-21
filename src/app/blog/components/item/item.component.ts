import { MdSnackBar } from '@angular/material';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog';
import { AuthService } from '../../../services/auth.service';
import { SubtitleService } from '../../../services/subtitle.service';

@Component({
  selector: 'dr-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, OnDestroy {

  public blog: Blog;
  public editMode: boolean;
  private _blogSubscription: Subscription;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public blogService: BlogService,
    public authService: AuthService,
    public snackBar: MdSnackBar,
    private _subtitleService: SubtitleService) { }

 ngOnInit() {
    this.route.params.forEach((params: Params) => {
      const key = params['key'];

      if (key === 'new') {
        this._subtitleService.setSubstitle('Creating New Blog');
        this.blog = null;
        this.editMode = true;
      } else {
        console.log(key);
        this._blogSubscription = this.blogService.getBlog(key).subscribe((data: any) => {
          if (data) {
            this.blog = data;
            this._subtitleService.setSubstitle(this.blog.title);
          } else if (data === undefined) {
            console.log('data', data);
            this.router.navigate(['/']);
          }
        });
      }
    });
  }

  ngOnDestroy() {
    if (this._blogSubscription) { this._blogSubscription.unsubscribe(); }
  }

  onEditClick() {
    if (this.authService.user.isAdmin) {
      this.editMode = true;
    }
  }

  onSave(blog: Blog) {
    this.editMode = false;
    this.blogService.saveBlog(blog).subscribe(
      (m: string) => {
        if (m) {
          const snackBarRef = this.snackBar.open(m, null, { duration: 3000 });
          this.router.navigate(['/', blog.key]);
        }
      },
      (e: string) => {
        const snackBarRef = this.snackBar.open(e, null, { duration: 3000 });
      });
  }

  onDelete() {
    if (this.authService.user.isAdmin) {
      console.log('deleting', this.blog.key);
    }
  }
}
