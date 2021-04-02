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

  readonly playerOneColor = 'red';
  readonly playerTwoColor = 'yellow';

  constructor() { }

  ngOnInit(): void {
    for (var i = 0; i < 7; i++) {
      this.board.push(new BoardColumn());
      for (var j = 0; j < 6; j++) {
        const chip = new PlayerChip()
        chip.colorOfSpace = 'white';
        this.board[i].playerChips[j] = chip;
      }
    }
  }

  startGame() {
    this.board.forEach(col => {
      col.playerChips.forEach((row) => {
        row.colorOfSpace = 'white';
      });
    });
  }

  addChip(column: number) {
    
  }

  endTurn() {
    this.checkBoardForWin();
    this.isPlayerOne = !this.isPlayerOne;
  }

  checkBoardForWin() {
    // Check verticals

    // Check diagonals

    // Check Horizonals
  }


}

export class BoardColumn {
  playerChips: PlayerChip[] = []
}
