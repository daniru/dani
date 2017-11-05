import * as _ from 'lodash';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Event, ResolveEnd, ActivatedRouteSnapshot  } from '@angular/router';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { Subscription } from 'rxjs/Subscription';
import { SubtitleService } from './../../../services/subtitle.service';
@Component({
  selector: 'dr-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss'],
  // animations: [
  //   trigger('subHeaderState', [
  //     transition('void => *',
  //       animate(1500, keyframes([
  //         style({ height: '0px', opacity: '0', border: '0' }),
  //         style({ height: '36px', opacity: '1', border: '0' })
  //       ]))
  //     ),
  //     transition('* => void',
  //       animate(1500, keyframes([
  //         style({ height: '36px', opacity: '1', border: '0' }),
  //         style({ height: '0px', opacity: '0', border: '0' })
  //       ]))
  //     ),
  //   ]),
  // ]
})
export class SubHeaderComponent implements OnInit, OnDestroy {

  @Input() title: string;

  sections: any[];

  private _subtitleSubcription: Subscription;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _subtitleService: SubtitleService) { }

  ngOnInit() {
    this._subtitleSubcription = this._subtitleService.subtitleSubject.subscribe((title: string) => {
      const key = _.find(this.sections, (x) => x.title === ':key');
      if (key) {
        key.title = title;
      }
    });

    this._router.events.subscribe((event: Event) => {
      if (event instanceof ResolveEnd) {
        const path: string[] = [];
        this.sections = [];
        let current: ActivatedRouteSnapshot = event.state.root;
        while (current.children.length > 0) {
          current = current.children[0];
        }
        _.forEach(current.pathFromRoot, (p: ActivatedRoute, i: number) => {
          if (p.routeConfig && p.routeConfig.path !== '') {
            path.push(p.routeConfig.path);
            this.sections.push({
              title: p.routeConfig.data && p.routeConfig.data.title ? p.routeConfig.data.title : p.routeConfig.path,
              link: [...path]
            });
          } else {
            path.push('/');
          }
        });

        if (this.sections && this.sections.length > 1) {
          _.last(this.sections).link = null;
          if (this.title) {
            _.last(this.sections).title = this.title;
          }
        }
      }
    });

  }

  ngOnDestroy() {
    if (this._subtitleSubcription) {
      this._subtitleSubcription.unsubscribe();
    }
  }

}
