import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import * as Rx from 'rxjs/Rx';

@Injectable()
export class GameService {

  board: Subject<number[]>;
  repetitions = 0;
  stopped = false;
  get columns(): number { return this._columns; }

  private _columns = 30;
  private _length = 1600;
  private _cells: Array<number>;
  private _subscription: Subscription;
  private _prevHash: string;
  private _prevHash2: string;

  constructor() {
    this.board = new Subject<number[]>();
    this.board.next(this._cells);
  }

  start(type?: string) {
    this.stop();
    this.repetitions = 0;
    this._prevHash = undefined;
    this._prevHash2 = undefined;

    switch (type) {
      case 'pentadecathlon':
        this._createPentadecathon();
        break;
      default:
        this._createRandomPanel();
    }

    this.board.next(this._cells);
    this._iterate();
  }

  stop() {
    if (this._subscription) {
      this._subscription.unsubscribe();
      this._subscription = null;
      this.stopped = true;
    }
  }

  onColumnSizeChange(size: number) {
    this.stop();
    this._columns = size;
    this._length = this.columns ** 2;
    this.start();
  }

  resume() {
    if (!this._subscription) {
      this._iterate();
    }
  }

  private _createPentadecathon() {
    this._cells = Array(this._length);
    for (let i = 0; i < this._length; i++) {
      this._cells[i] = 0;
    }
    this._cells[this._columns * 5 + 5] = 1;
    this._cells[this._columns * 5 + 6] = 1;
    this._cells[this._columns * 5 + 7] = 1;
    this._cells[this._columns * 6 + 5] = 1;
    this._cells[this._columns * 6 + 7] = 1;
    this._cells[this._columns * 7 + 5] = 1;
    this._cells[this._columns * 7 + 6] = 1;
    this._cells[this._columns * 7 + 7] = 1;
    this._cells[this._columns * 8 + 5] = 1;
    this._cells[this._columns * 8 + 6] = 1;
    this._cells[this._columns * 8 + 7] = 1;
    this._cells[this._columns * 9 + 5] = 1;
    this._cells[this._columns * 9 + 6] = 1;
    this._cells[this._columns * 9 + 7] = 1;
    this._cells[this._columns * 10 + 5] = 1;
    this._cells[this._columns * 10 + 6] = 1;
    this._cells[this._columns * 10 + 7] = 1;
    this._cells[this._columns * 11 + 5] = 1;
    this._cells[this._columns * 11 + 7] = 1;
    this._cells[this._columns * 12 + 5] = 1;
    this._cells[this._columns * 12 + 6] = 1;
    this._cells[this._columns * 12 + 7] = 1;
    this._prevHash = this._cells.toString();
  }

  private _createRandomPanel() {
    this._cells = Array(this._length);
    for (let i = 0; i < this._length; i++) {
      this._cells[i] = Math.round(Math.random());
    }
    this._prevHash = this._cells.toString();
  }

  private _iterate() {
    this.stopped = false;
    this._subscription = Rx.Observable.timer(0, 100).subscribe((x) => {

      const newcells = [... this._cells];
      for (let i = 0; i < this._length; i++) {
        newcells[i] = this._getNextValue(this._cells, this._columns, i);
      }
      this._cells = newcells;
      this.board.next(newcells);

      const hash = newcells.toString();
      if (hash === this._prevHash) {
        this.stop();
      } else {
        if (hash !== this._prevHash2) {
          this.repetitions++;
        }
        this._prevHash2 = this._prevHash;
        this._prevHash = hash;
      }
    });
  }

  private _getNextValue(board: number[], columnSize: number, index: number): number {
    const nei = this._getAdjacentIndex(board, columnSize, index);
    if (board[index] === 0) {
      return nei === 3 ? 1 : 0;
    }
    return nei === 2 || nei === 3 ? 1 : 0;
  }

  private _getAdjacentIndex(board: number[], columnSize: number, index: number): number {
    // first cell
    if (index === 0) {
      return board[1] + board[columnSize] + board[columnSize + 1];
    }
    // last cell first line
    if (index === columnSize - 1) {
      return board[index - 1] + board[index + columnSize - 1] + board[index + columnSize];
    }
    // first line
    if (index < columnSize) {
      return board[index - 1] + board[index + 1] + board[index + columnSize - 1] + board[index + columnSize]
        + board[index + columnSize + 1];
    }
    // last cell
    if (index === board.length - 1) {
      return board[index - 1] + board[index - columnSize - 1] + board[index - columnSize];
    }
    // first cell last line
    if (index === board.length - columnSize) {
      return board[index + 1] + board[index - columnSize] + board[index - columnSize + 1];
    }
    // last line
    if (index > (board.length - columnSize)) {
      return board[index - 1] + board[index + 1] + board[index - columnSize - 1] + board[index - columnSize]
        + board[index - columnSize + 1];
    }
    // first column
    if (index % columnSize === 0) {
      return board[index - columnSize] + board[index - columnSize + 1] + board[index + 1]
        + board[index + columnSize] + board[index + columnSize + 1];
    }
    // last column
    if (index % columnSize === (columnSize - 1)) {
      return board[index - columnSize] + board[index - columnSize - 1] + board[index - 1]
        + board[index + columnSize] + board[index + columnSize - 1];
    }
    // others
    return board[index - columnSize - 1] + board[index - columnSize] + board[index - columnSize + 1]
      + board[index - 1] + board[index + 1] + board[index + columnSize - 1] + board[index + columnSize]
      + board[index + columnSize + 1];
  }

}
