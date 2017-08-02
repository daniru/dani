import { Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class SubtitleService {

  subtitleSubject: Subject<string> = new Subject<string>();

  constructor() { }

  setSubstitle(title: string) {
    this.subtitleSubject.next(title);
  }
}
