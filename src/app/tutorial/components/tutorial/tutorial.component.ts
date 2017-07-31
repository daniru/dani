import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dr-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {

  list: any[] = [];

  ngOnInit() {
    this.list.push({
      text: 'Create your own Angular Blog step by step',
      link: ['/', 'tutorial', 'ngblog'],
      tags: ['angular', 'firebase']
     })
  }

}
