import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nine-square',
  templateUrl: './nine-square.component.html',
  styleUrls: ['./nine-square.component.css']
})

export class NineSquareComponent implements OnInit {
  // who plays now
  isXPlaying: boolean = true
  player: string = ''

  // generate the squares for game
  squares: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  winner: string = ''
  @Output() winnerEmitter = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  playGame(index: number) {
    console.log(document.querySelector(`.square-to-play-${index}`)!.textContent === '')
    if (document.querySelector(`.square-to-play-${index}`)!.textContent === '') {
      if (this.isXPlaying) {
        this.player = 'X'
        document.querySelector(`.square-to-play-${index}`)!.textContent = this.player
        this.isXPlaying = !this.isXPlaying
      } else {
        this.player = 'O'
        document.querySelector(`.square-to-play-${index}`)!.textContent = this.player
        this.isXPlaying = !this.isXPlaying
      }
      this.checkWinner()
    } else {
      return
    }
  }

  cleanBoard() {
    for (let i = 0; i < this.squares.length; i++) {
      document.querySelector(`.square-to-play-${i}`)!.textContent = ''
    }
    // return to the round of player 'X'
    this.isXPlaying = true
  }

  checkWinner() {
    console.log('check winner!')
  }

}
