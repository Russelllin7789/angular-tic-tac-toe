import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})

export class GameBoardComponent implements OnInit {
  winner: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  showWinner(winner: string) {
    this.winner = winner
  }

}
