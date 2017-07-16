import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dr-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  demos: any[] = [];

  constructor() {
  }

  ngOnInit() {
    this.demos.push({text: 'Current Status', cols: 2, rows: 1, color: 'lightblue', link: ['/', 'demos', 'tfl', 'status'] })
    this.demos.push({text: 'Stop Points', cols: 2, rows: 1, color: 'lightyellow', link: ['/', 'demos', 'tfl', 'stoppoints'] })
  }
}
