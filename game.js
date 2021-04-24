class Game {
  constructor(thisGame) {
    this.players = [];
    this.gameType = thisGame.gameType;
    this.whosTurn;
  }
  whoWon() {
    console.log(this.players[0].name, this.players[0].choice)
    console.log(this.players[1].name, this.players[1].choice)
    if (this.players[0].choice === this.players[1].choice) {
      console.log(`DRAW`)
    } else if (this.players[0].choice === 'Rock' && this.players[1].choice === 'Scissors' ||
    this.players[0].choice === 'Rock' && this.players[1].choice === 'Lizard' ||
    this.players[0].choice === 'Paper' && this.players[1].choice === 'Rock' ||
    this.players[0].choice === 'Paper' && this.players[1].choice === 'Alien' ||
    this.players[0].choice === 'Scissors' && this.players[1].choice === 'Paper' ||
    this.players[0].choice === 'Scissors' && this.players[1].choice === 'Lizard' ||
    this.players[0].choice === 'Lizard' && this.players[1].choice === 'Paper' ||
    this.players[0].choice === 'Lizard' && this.players[1].choice === 'Lizard' ||
    this.players[0].choice === 'Alien' && this.players[1].choice === 'Scissors' ||
    this.players[0].choice === 'Alien' && this.players[1].choice === 'Rock'
    ) {
      this.players[0].wins++
      console.log(`${this.players[0].emoji} ${this.players[0].name} WON! ${this.players[0].emoji}`)
    } else {
      this.players[1].wins++
      console.log(`${this.players[1].emoji} ${this.players[1].name} WON! ${this.players[1].emoji}`)
    }
    this.players[0].takeTurn()
    this.players[0].saveWinsToStorage()
    this.players[1].saveWinsToStorage()
    console.log(this.players[0].wins)
    console.log(this.players[1].wins)
    console.log(this.whosTurn)
  }
  resetBoard() {

  }
}