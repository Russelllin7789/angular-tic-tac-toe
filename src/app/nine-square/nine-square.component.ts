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
        this.checkWinner(this.player)
      } else {
        this.player = 'O'
        document.querySelector(`.square-to-play-${index}`)!.textContent = this.player
        this.isXPlaying = !this.isXPlaying
        this.checkWinner(this.player)
      }
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
    this.winnerEmitter.emit('')
  }

  checkWinner(player: string) {
    console.log('do check winner...')
    if ((document.querySelector(`.square-to-play-0`)!.textContent !== '' && document.querySelector(`.square-to-play-0`)!.textContent === document.querySelector(`.square-to-play-1`)!.textContent && document.querySelector(`.square-to-play-1`)!.textContent === document.querySelector(`.square-to-play-2`)!.textContent) || (document.querySelector(`.square-to-play-3`)!.textContent !== '' && document.querySelector(`.square-to-play-3`)!.textContent === document.querySelector(`.square-to-play-4`)!.textContent && document.querySelector(`.square-to-play-4`)!.textContent === document.querySelector(`.square-to-play-5`)!.textContent) || (document.querySelector(`.square-to-play-6`)!.textContent !== '' && document.querySelector(`.square-to-play-6`)!.textContent === document.querySelector(`.square-to-play-7`)!.textContent && document.querySelector(`.square-to-play-7`)!.textContent === document.querySelector(`.square-to-play-8`)!.textContent) || (document.querySelector(`.square-to-play-0`)!.textContent !== '' && document.querySelector(`.square-to-play-0`)!.textContent === document.querySelector(`.square-to-play-4`)!.textContent && document.querySelector(`.square-to-play-4`)!.textContent === document.querySelector(`.square-to-play-8`)!.textContent) || (document.querySelector(`.square-to-play-2`)!.textContent !== '' && document.querySelector(`.square-to-play-2`)!.textContent === document.querySelector(`.square-to-play-4`)!.textContent && document.querySelector(`.square-to-play-4`)!.textContent === document.querySelector(`.square-to-play-6`)!.textContent) || (document.querySelector(`.square-to-play-0`)!.textContent !== '' && document.querySelector(`.square-to-play-0`)!.textContent === document.querySelector(`.square-to-play-3`)!.textContent && document.querySelector(`.square-to-play-3`)!.textContent === document.querySelector(`.square-to-play-6`)!.textContent) || (document.querySelector(`.square-to-play-1`)!.textContent !== '' && document.querySelector(`.square-to-play-1`)!.textContent === document.querySelector(`.square-to-play-4`)!.textContent && document.querySelector(`.square-to-play-4`)!.textContent === document.querySelector(`.square-to-play-7`)!.textContent) || (document.querySelector(`.square-to-play-2`)!.textContent !== '' && document.querySelector(`.square-to-play-2`)!.textContent === document.querySelector(`.square-to-play-5`)!.textContent && document.querySelector(`.square-to-play-5`)!.textContent === document.querySelector(`.square-to-play-8`)!.textContent)) {
      this.winner = player
      this.winnerEmitter.emit(this.winner)
    } else {
      return
    }
    console.log('winner', this.winner)
    console.log('done check winner!')
  }

}
