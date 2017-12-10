import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dr-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() public opened: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    
  }
}
