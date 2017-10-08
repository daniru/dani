import { Component, OnChanges, Input, Inject, EventEmitter, Output, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { MatMenuTrigger } from '@angular/material';
import { Blog } from '../../models/blog';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'dr-item-header',
  templateUrl: './item-header.component.html',
  styleUrls: ['./item-header.component.scss']
})
export class ItemHeaderComponent implements OnChanges {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  @Input() blog: Blog;
  @Input() headerLink: boolean;
  @Output() editMode = new EventEmitter();
  @Output() delete = new EventEmitter();

  socialLinks: any[];

  constructor(@Inject(DOCUMENT) private document: any, public authService: AuthService) {
    this.socialLinks = [];
  }

  ngOnChanges() {
    if (this.blog) {
      this._populateSocialLinks();
    }
  }

  onEditClick() {
    this.editMode.emit();
  }

  onDeleteClick() {
    this.delete.emit();
  }

  someMethod() {
    this.trigger.openMenu();
  }

  openWindow(url) {
    window.open(url, 'popupwindow', 'width=800,height=500,left=200,top=5,scrollbars,toolbar=0,resizable');
  }

  private _populateSocialLinks() {
      const shareText = `Have a look the new post by daniru ${this.blog.title}`;
      const shareLink = `${this.document.location.href}${this.blog.key}`;

      this.socialLinks = [
        { name: 'Google+',   url: `https://plus.google.com/share?url=${shareLink}`, icon: 'mdi mdi-google-plus' },
        { name: 'Facebook',  url: `https://www.facebook.com/sharer.php?u=${shareLink}&amp;t=${shareText}`, icon: 'mdi mdi-facebook'  },
        { name: 'Twitter',   url: `https://twitter.com/share?text=${shareText}`, icon: 'mdi mdi-twitter'   },
        { name: 'Pinterest', url: `http://pinterest.com/pin/create/button/?url=${shareLink}&amp;description=${shareText}`, icon: 'mdi mdi-pinterest' },
        { name: 'Linked In', url: `http://www.linkedin.com/shareArticle?mini=true&amp;url={{shareLink}}&amp;title=${shareText}`, icon: 'mdi mdi-linkedin'  }
      ];
  }

}
