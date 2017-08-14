import { Component } from '@angular/core';
import { MdSliderChange } from '@angular/material';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'dr-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent  {

  constructor(public gameService: GameService) { }

  start(type?: string) {
    this.gameService.stop();
    this.gameService.start(type);
  }

  stop() {
    this.gameService.stop();
  }

  resume() {
    this.gameService.resume();
  }

  onColumnSizeChange(newsize: MdSliderChange) {
    this.gameService.onColumnSizeChange(newsize.value);
  }

}
