import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgblogService } from '../../services/ngblog.service';
import { Blog } from '../../services/models/blog';

@Component({
  selector: 'dr-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  // list of blogs in the view
  list: Observable<Blog[]>;
  loading: boolean;

  constructor(
    public blogService: NgblogService) { }

  ngOnInit() {
    this.loading = true;
    this.list = this.blogService
      .getBlogs()
      .do(x => this.loading = false);
  }


}
