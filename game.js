class Game {
  constructor() {
    this.players = [];
    this.gameType;
    this.whosTurn;
    this.winner;
  }
  whoWon() {
    if (this.players[0].choice === this.players[1].choice) {
      this.winner = 'draw';
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
      this.players[0].wins++;
      this.winner = this.players[0].name;
    } else {
      this.players[1].wins++;
      this.winner = this.players[1].name;
    }
    this.players[0].takeTurn();
    this.players[0].saveWinsToStorage();
    this.players[1].saveWinsToStorage();
    showWinnerHeading();
  }
  resetBoard() {
    changeGame();
  };
};