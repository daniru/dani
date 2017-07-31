import { Component, OnInit } from '@angular/core';
import { BlogService } from './../../../../blog/services/blog.service';

@Component({
  selector: 'dr-ngblog',
  templateUrl: './ngblog.component.html',
  styleUrls: ['./ngblog.component.scss']
})
export class NgblogComponent implements OnInit {

  list: any[] = [];

  constructor(private _blogService: BlogService) {
  }

  ngOnInit() {
    this._blogService.getBlogs().subscribe((blogs) => {
      blogs.forEach(blog => {
        this.list.push({text: blog.title, link: ['/', 'tutorial', 'ngblog', blog.key] })
      });
    });
  }

}
