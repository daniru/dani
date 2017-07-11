import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dr-tfl',
  templateUrl: './tfl.component.html',
  styleUrls: ['./tfl.component.scss']
})
export class TflComponent implements OnInit {

  demos: any[] = [];

  constructor() {
  }

  ngOnInit() {
    this.demos.push({text: 'Current Status', cols: 2, rows: 1, color: 'lightblue', link: ['/', 'demos', 'tfl', 'status'] })
    this.demos.push({text: 'Stop Points', cols: 2, rows: 1, color: 'lightyellow', link: ['/', 'demos', 'tfl', 'stoppoints'] })
  }
}
