// localStorage.clear()
var game = new Game({ gameType: 'difficult' })
function instantiatePlayers() {
  var human = new Player({ name: 'Human', emoji: '🤷🏽' });
  var computer = new Player({ name: 'HAL 9000', emoji: '💻' });
  game.players.push(human)
  game.players.push(computer)
}
instantiatePlayers()

game.players[0].retrieveWinsFromStorage()
game.players[1].retrieveWinsFromStorage()

function getRandomInt(max) {
  min = Math.ceil(1);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// can I use arguments?
// chooseClassicGame() {
//   // Update DOM
// }
// chooseDifficultGame() {
//   // Update DOM
// }

// can I pass in an argument for gameType(classic/difficult?)

function assignComputerChoice(gametype) {
  var computerChoice;
  if (gametype === 'classic') {
    computerChoice = getRandomInt(4);
  } else {
    computerChoice = getRandomInt(6);
  }
  if (computerChoice === 1) {
    game.players[1].choice = 'Rock';
  } else if (computerChoice === 2) {
    game.players[1].choice = 'Paper';
  } else if (computerChoice === 3) {
    game.players[1].choice = 'Scissors';
  } else if (computerChoice === 4) {
    game.players[1].choice = 'Lizard';
  } else if (computerChoice === 5) {
    game.players[1].choice = 'Alien';
  }
}
assignComputerChoice(game.gameType)

// can I pass in an argument for string from eventListener?!?!
function assignHumanChoice() {
  game.players[0].choice = 'Rock'
}
assignHumanChoice()

game.whoWon()

