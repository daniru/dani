import { GameService } from './services/game.service';
import { MatCardModule, MatGridListModule, MatButtonModule, MatSliderModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameoflifeRoutingModule } from './gameoflife-routing.module';
import { GameoflifeComponent } from './components/gameoflife/gameoflife.component';
import { BoardComponent } from './components/board/board.component';

@NgModule({
  imports: [
    CommonModule,
    GameoflifeRoutingModule,
    MatCardModule, MatGridListModule, MatButtonModule, MatSliderModule
  ],
  providers: [ GameService ],
  declarations: [GameoflifeComponent, BoardComponent]
})
export class GameoflifeModule { }
