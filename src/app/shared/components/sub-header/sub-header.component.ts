import * as _ from 'lodash';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dr-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {

  @Input() title: string;

  sections: any[];

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const path: string[] = [];
    this.sections = [];
    _.each(this._activatedRoute.pathFromRoot, (p: ActivatedRoute) => {
      if (p.routeConfig && p.routeConfig.path !== '') {
        path.push(p.routeConfig.path);
        this.sections.push({ title: p.routeConfig.data && p.routeConfig.data.title ? p.routeConfig.data.title : p.routeConfig.path, link: [...path] });
      } else {
        path.push('/');
      }
      console.log(p.routeConfig);
    });
    console.log(this._activatedRoute);
  }

}
