import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../services/models/blog';

@Component({
  selector: 'dr-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  // list of blogs in the view
  public list: Observable<Blog[]>;

  constructor(
    public blogService: BlogService) { }

  ngOnInit() {
    this.list = this.blogService.getBlogs();
  }


}
