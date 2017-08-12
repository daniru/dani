import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dr-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.scss']
})
export class DemosComponent implements OnInit {

  list: any[] = [];

  ngOnInit() {
    this.list.push({text: 'Create your own Angular Blog', link: ['/', 'demos', 'ngblog'] });
    this.list.push({text: 'Tranport For London', link: ['/', 'demos', 'tfl'] });
  }

}
