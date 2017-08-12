import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Section } from './../../models/section';
import { Blog } from './../../models/blog';

@Component({
  selector: 'dr-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnChanges {

  @Input() blog: Blog;
  public firstSection: Section;

  ngOnChanges(changes: SimpleChanges) {
    if (this.blog) {
      this.firstSection = this.blog.sections.find((x) => x.order === 1);
    }
  }

}
