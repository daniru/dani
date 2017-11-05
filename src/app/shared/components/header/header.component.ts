import { NavigationEnd, Router, Event } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'dr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // animations: [
  //   trigger('headerState', [
  //     state('small', style({ height: '48px' })),
  //     state('big',   style({ height: '200px' })),
  //     transition('void => *', [
  //         style({ height: '0px' }),
  //         animate(1500, style({ height: '200px' }))
  //     ]),
  //     transition('big => small', [
  //         style({ height: '200px' }),
  //         animate(1500, style({ height: '48px' }))
  //     ]),
  //     transition('small => big', [
  //         style({ height: '48px' }),
  //         animate(1500, style({ height: '200px' }))
  //     ]),
  //   ]),

  //   trigger('nameState', [
  //     state('small', style({ fontSize: '1em' })),
  //     state('big', style({ fontSize: '2.5em' })),
  //     transition('void => *', [ style({ fontSize: '1em' }), animate(1500, style({ fontSize: '2.5em' })) ]),
  //     transition('big => small', [ style({ fontSize: '2.5em' }), animate(1500, style({ fontSize: '1em' })) ]),
  //     transition('small => big', [ style({ fontSize: '1em' }), animate(1500, style({ fontSize: '2.5em' })) ]), 
  //   ]),

  //   trigger('logoState', [
  //     state('small', style({ flexDirection: 'row' })),
  //     state('big', style({  flexDirection: 'column' })),
  //     transition('big => small', animate(1500, keyframes([
  //       style({ flexDirection: 'column' }),
  //       style({ flexDirection: 'row' }),
  //       style({ flexDirection: 'row' })
  //     ]))),
  //     transition('small => big', animate(1500, keyframes([
  //       style({ flexDirection: 'row' }),
  //       style({ flexDirection: 'row' }),
  //       style({ flexDirection: 'column' })
  //     ]))),
  //   ]),

  //   trigger('roleState', [
  //     state('small', style({ fontSize: '0.6em', padding: '2px 0px 0px 17px' })),
  //     state('big',   style({ fontSize: '1em' })),
  //     transition('void => big', animate(1500, keyframes([
  //       style({ opacity: 0, fontSize: '0' }),
  //       style({ opacity: 1, fontSize: '1em' }),
  //     ]))),
  //     transition('void => small', animate(1500, keyframes([
  //       style({ opacity: 0, fontSize: '0' }),
  //       style({ opacity: 1, fontSize: '0.6em', padding: '2px 0px 0px 17px' }),
  //     ]))),
  //     transition('big => small', animate(1500, keyframes([
  //       style({ opacity: 1, fontSize: '1em' }),
  //       style({ opacity: .1, fontSize: '0' }),
  //       style({ opacity: .1, fontSize: '0' }),
  //       style({ opacity: .1, fontSize: '0' }),
  //       style({ opacity: 1, fontSize: '0.6em', padding: '2px 0px 0px 17px' }),
  //     ]))),
  //     transition('small => big', animate(1500, keyframes([
  //       style({ opacity: 1, fontSize: '0.6em', padding: '2px 0px 0px 17px' }),
  //       style({ opacity: .1, fontSize: '0' }),
  //       style({ opacity: .1, fontSize: '0' }),
  //       style({ opacity: .1, fontSize: '0' }),
  //       style({ opacity: 1, fontSize: '1em' })
  //     ])))
  //   ]),

  //   trigger('buttonsState', [
  //     state('small', style({ flexDirection: 'row' })),
  //     state('big', style({  flexDirection: 'column' })),
  //     transition('big => small', animate(1500, keyframes([
  //       style({ flexDirection: 'column', transform: 'translateX(0)' }),
  //       style({ flexDirection: 'column', transform: 'translateX(200%)' }),
  //       style({ flexDirection: 'row', transform: 'translateX(0)' }),
  //     ]))),
  //     transition('small => big', animate(1500, keyframes([
  //       style({ flexDirection: 'row', transform: 'translateX(0)' }),
  //       style({ flexDirection: 'row', transform: 'translateX(200%)' }),
  //       style({ flexDirection: 'column', transform: 'translateX(0)' })
  //     ]))),
  //   ]),
  // ]
})
export class HeaderComponent implements OnInit {

  mode: string;

  constructor(private _router: Router) {
    this.mode = 'big';
  }

  ngOnInit() {
    this._router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.mode = event.url === '/' ? 'big' : 'small';
      }
    });
  }

}
