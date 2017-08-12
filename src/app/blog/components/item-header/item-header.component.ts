import { Component, OnChanges, Input, Inject, EventEmitter, Output, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { MdMenuTrigger } from '@angular/material';
import { Blog } from '../../models/blog';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'dr-item-header',
  templateUrl: './item-header.component.html',
  styleUrls: ['./item-header.component.scss']
})
export class ItemHeaderComponent implements OnChanges {
  @ViewChild(MdMenuTrigger) trigger: MdMenuTrigger;
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
        { name: 'Google+',   url: `https://plus.google.com/share?url=${shareLink}`, icon: 'fa fa-google' },
        { name: 'Facebook',  url: `https://www.facebook.com/sharer.php?u=${shareLink}&amp;t=${shareText}`, icon: 'fa fa-facebook'  },
        { name: 'Twitter',   url: `https://twitter.com/share?text=${shareText}`, icon: 'fa fa-twitter'   },
        { name: 'Pinterest', url: `http://pinterest.com/pin/create/button/?url=${shareLink}&amp;description=${shareText}`, icon: 'fa fa-pinterest' },
        { name: 'Linked In', url: `http://www.linkedin.com/shareArticle?mini=true&amp;url={{shareLink}}&amp;title=${shareText}`, icon: 'fa fa-linkedin'  }
      ];
  }

}
