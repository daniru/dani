import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dr-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  list: any[] = [];

  ngOnInit() {
    this.list.push({text: 'Current Status', link: ['/', 'demos', 'tfl', 'status'] })
    this.list.push({text: 'Stop Points', link: ['/', 'demos', 'tfl', 'stoppoints'] })
  }
}
