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

  addChip(column: BoardColumn) {
    let found = false;
    column.playerChips.reverse().forEach(chip => {
      if (chip.colorOfSpace === this.neutralColor && !found) {
        chip.colorOfSpace = this.getPlayerColor();
        found = true;
      }
    });
    column.playerChips.reverse();
    this.playCount++;
    this.endTurn();
  }

  getPlayerColor(): string {
    if (this.isPlayerOne) {
      return this.playerOneColor;
    }
    else {
      return this.playerTwoColor;
    }
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
    if (this.playCount < 7) {
      return false;
    }

    const checkColor = this.isPlayerOne ? this.playerOneColor : this.playerTwoColor;

    for (let i = 0; i < this.boardColumns; i++) {
      let col = this.board[i];
      for (let j = 0; j < this.boardRows; j++) {
        let row = col.playerChips[j];
        if (row.colorOfSpace !== checkColor) {
          break;
        }

        // Right Horizonal
        if (i < this.boardColumns - 3) {
          const isRH =
            this.board[i + 1].playerChips[j].colorOfSpace === checkColor &&
            this.board[i + 2].playerChips[j].colorOfSpace === checkColor &&
            this.board[i + 3].playerChips[j].colorOfSpace === checkColor;

          if (isRH) {
            return true;
          }
        }
        // Left Horizontal
        if (i >= 3) {
          const isLH =
            this.board[i - 1].playerChips[j].colorOfSpace === checkColor &&
            this.board[i - 2].playerChips[j].colorOfSpace === checkColor &&
            this.board[i - 3].playerChips[j].colorOfSpace === checkColor;

          if (isLH) {
            return true;
          }
        }
        // Upper Vertical
        if (j >= 3) {
          const isUV =
            col.playerChips[j - 1].colorOfSpace === checkColor &&
            col.playerChips[j - 2].colorOfSpace === checkColor &&
            col.playerChips[j - 3].colorOfSpace === checkColor;

          if (isUV) {
            return true;
          }
        }
        // Lower Vertical
        if (j < this.boardRows - 3) {
          const isLV =
            col.playerChips[j + 1].colorOfSpace === checkColor &&
            col.playerChips[j + 2].colorOfSpace === checkColor &&
            col.playerChips[j + 3].colorOfSpace === checkColor;

          if (isLV) {
            return true;
          }
        }
        // Diagonal Down Right
        if (i < this.boardColumns - 3 && j < this.boardRows - 3) {
          const isDDR =
            this.board[i + 1].playerChips[j + 1].colorOfSpace === checkColor &&
            this.board[i + 2].playerChips[j + 2].colorOfSpace === checkColor &&
            this.board[i + 3].playerChips[j + 3].colorOfSpace === checkColor;

          if (isDDR) {
            return true;
          }
        }
        // Diagonal Down Left
        if (i >= 3 && j < this.boardRows - 3) {
          const isDDL =
            this.board[i - 1].playerChips[j + 1].colorOfSpace === checkColor &&
            this.board[i - 2].playerChips[j + 2].colorOfSpace === checkColor &&
            this.board[i - 3].playerChips[j + 3].colorOfSpace === checkColor;

          if (isDDL) {
            return true;
          }
        }
        // Diagonal Up Right
        if (i < this.boardColumns - 3 && j >= 3) {
          const isDUR =
            this.board[i + 1].playerChips[j - 1].colorOfSpace === checkColor &&
            this.board[i + 2].playerChips[j - 2].colorOfSpace === checkColor &&
            this.board[i + 3].playerChips[j - 3].colorOfSpace === checkColor;

          if (isDUR) {
            return true;
          }
        }
        // Diagonal Up Left
        if (i >= 3 && j >= 3) {
          const isDUL =
            this.board[i - 1].playerChips[j - 1].colorOfSpace === checkColor &&
            this.board[i - 2].playerChips[j - 2].colorOfSpace === checkColor &&
            this.board[i - 3].playerChips[j - 3].colorOfSpace === checkColor;

          if (isDUL) {
            return true;
          }
        }
      }
    }
    return false;
  }
}

export class BoardColumn {
  playerChips: PlayerChip[] = []
}
