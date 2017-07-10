import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dr-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.scss']
})
export class DemosComponent implements OnInit {

  demos: any[] = [];

  constructor() {
  }

  ngOnInit() {
    this.demos.push({text: 'Tranport For London', cols: 3, rows: 1, color: 'lightblue', link: ['/', 'demos', 'tfl'] })
  }

}
