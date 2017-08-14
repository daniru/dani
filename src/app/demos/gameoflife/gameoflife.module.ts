import { GameService } from './services/game.service';
import { MdCardModule, MdGridListModule, MdButtonModule, MdSliderModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameoflifeRoutingModule } from './gameoflife-routing.module';
import { GameoflifeComponent } from './components/gameoflife/gameoflife.component';
import { BoardComponent } from './components/board/board.component';

@NgModule({
  imports: [
    CommonModule,
    GameoflifeRoutingModule,
    MdCardModule, MdGridListModule, MdButtonModule, MdSliderModule
  ],
  providers: [ GameService ],
  declarations: [GameoflifeComponent, BoardComponent]
})
export class GameoflifeModule { }
