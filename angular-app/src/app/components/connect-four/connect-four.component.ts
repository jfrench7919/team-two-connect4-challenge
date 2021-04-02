import { Component, OnInit } from '@angular/core';
import { PlayerChip } from './models/player-chip';

@Component({
  selector: 'app-connect-four',
  templateUrl: './connect-four.component.html',
  styleUrls: ['./connect-four.component.scss']
})
export class ConnectFourComponent implements OnInit {

  isPlayerOne: boolean = false;
  board: BoardColumn[] = [];
  winner: boolean = false;
  draw: boolean = false;
  playCount = 0;

  readonly boardColumns = 7;
  readonly boardRows = 6;
  readonly playerOneColor = 'red';
  readonly playerTwoColor = 'yellow';
  readonly neutralColor = 'white';

  constructor() { }

  ngOnInit(): void {
    for (var i = 0; i < this.boardColumns; i++) {
      this.board.push(new BoardColumn());
      for (var j = 0; j < this.boardRows; j++) {
        const chip = new PlayerChip()
        chip.colorOfSpace = this.neutralColor;
        this.board[i].playerChips[j] = chip;
      }
    }
  }

  startGame() {
    this.board.forEach(col => {
      col.playerChips.forEach((row) => {
        row.colorOfSpace = this.neutralColor;
      });
    });
    this.isPlayerOne = true;
    this.winner = false;
    this.draw = false;
    this.playCount = 0;
  }

  addChip(column: number) {

    this.playCount++;
    this.endTurn();
  }

  endTurn() {
    if (this.checkBoardForWin()) {
      this.winner = true;
      return;
    }

    if (this.playCount === this.boardColumns * this.boardRows) {
      this.draw = true;
      return;
    }

    this.isPlayerOne = !this.isPlayerOne;
  }

  checkBoardForWin(): boolean {
    const checkColor = this.isPlayerOne ? this.playerOneColor : this.playerTwoColor;

    this.board.forEach((col, i) => {
      col.playerChips.forEach((row, j) => {
        if (row.colorOfSpace !== checkColor) {
          return;
        }

        // Right Horizonal
        if (i < this.boardColumns - 3) {

        }

        // Left Horizontal
        // Upper Vertical
        // Lower Vertical
        // Diagonal Down Right
        // Diagonal Down Left
        // Diagonal Up Right
        // Diagonal Up Left

        
      })

    });

    return false;
  }


}

export class BoardColumn {
  playerChips: PlayerChip[] = []
}
