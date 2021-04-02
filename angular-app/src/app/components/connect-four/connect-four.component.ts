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

  constructor() { }

  ngOnInit(): void {
  }

  startGame() { }
  addChip() { }
  endTurn() { }
  checkBoardForWin() { }

}

export class BoardColumn {
  playerChips: PlayerChip[] = []
}
