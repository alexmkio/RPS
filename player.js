class Player {
  constructor(thisPlayer) {
    this.name = thisPlayer.name;
    this.emoji = thisPlayer.emoji;
    this.wins = 0;
    this.choice;
  }
  saveWinsToStorage() {
    localStorage.setItem(this.name, JSON.stringify(this.wins))
    localStorage.setItem('whosTurn', JSON.stringify(game.whosTurn))
  }
  retrieveWinsFromStorage() {
    var parsedWins = JSON.parse(localStorage.getItem(this.name));
    var parsedWhosTurn = JSON.parse(localStorage.getItem('whosTurn'));
    if (parsedWins) {
      this.wins = parsedWins;
      game.whosTurn = parsedWhosTurn;
    }
  }
  takeTurn() {
    if (game.whosTurn === this.name) {
      game.whosTurn = game.players[1].name
    } else {
      game.whosTurn = this.name
    }
  }
}