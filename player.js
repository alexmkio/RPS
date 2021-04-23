class Player {
  constructor(thisPlayer) {
    this.name = thisPlayer.name;
    this.emoji = thisPlayer.emoji;
    this.wins = 0;
    this.choice;
  }
  saveWinsToStorage() {
    localStorage.setItem(this.name, JSON.stringify(this.wins))
  }
  retrieveWinsFromStorage() {
    var parsed = JSON.parse(localStorage.getItem(this.name));
    if (parsed) {
      this.wins = parsed;
    }
  }
  takeTurn() {
    
  }
}