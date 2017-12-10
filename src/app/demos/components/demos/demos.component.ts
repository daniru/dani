import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dr-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.scss']
})
export class DemosComponent implements OnInit {

  list: any[] = [];

  ngOnInit() {
    this.list = [{
      text: 'My website',
      link: ['/', 'demos', 'daniru'],
      tags: [{
        name: 'Angular',
        icon: 'mdi mdi-angular'
      }],
      hasFirebase: true
    },
    {
      text: 'Create your own Angular Blog',
      link: ['/', 'demos', 'ngblog'],
      tags: [{
        name: 'Angular',
        icon: 'mdi mdi-angular'
      }],
      hasFirebase: true
    },
    {
        text: 'Tranport For London',
        link: ['/', 'demos', 'tfl'] ,
        tags: [
          { name: 'Tfl Api', icon: 'mdi mdi-train' },
          { name: 'Angular', icon: 'mdi mdi-angular' }
        ]
    },
    {
        text: 'Game Of Life',
        link: ['/', 'demos', 'gameoflife'] ,
        tags: [
          { name: 'Angular', icon: 'mdi mdi-angular' }
        ]
    }];
  }

}
