// localStorage.clear()
// is there anywhere I could utilize passing in arguments or any other
// strategies to tidy up code?
var game = new Game()
function instantiatePlayers() {
  var human = new Player({ name: 'Human', emoji: '👩🏻' });
  var computer = new Player({ name: 'Computer', emoji: '💻' });
  game.players.push(human)
  game.players.push(computer)
}
instantiatePlayers()

game.players[0].retrieveWinsFromStorage()
game.players[1].retrieveWinsFromStorage()

var leftColumn = document.querySelector('#leftColumn')
var rightColumn = document.querySelector('#rightColumn')
var subHeader = document.querySelector('#subHeader')

var classicGameBtn = document.querySelector('#classicGameBtn')
var difficultGameBtn = document.querySelector('#difficultGameBtn')
var changeGameBtn = document.querySelector('#changeGameBtn')
var classicGame = document.querySelector('#classicGame')
var difficultGame = document.querySelector('#difficultGame')

window.addEventListener('load', populateDynamicSides)
classicGameBtn.addEventListener('click', showClassicGame)
difficultGameBtn.addEventListener('click', showDifficultGame)
leftColumn.addEventListener('click', game.resetBoard);

// is this better than injecting that section's HTML and event bubbling?
var rockImg = document.querySelector('#rockImg')
var paperImg = document.querySelector('#paperImg')
var scissorsImg = document.querySelector('#scissorsImg')
var lizardImg = document.querySelector('#lizardImg')
var alienImg = document.querySelector('#alienImg')
rockImg.addEventListener('click', humanChoseRock)
paperImg.addEventListener('click', humanChoseRock)
scissorsImg.addEventListener('click', humanChoseRock)
lizardImg.addEventListener('click', humanChoseRock)
alienImg.addEventListener('click', humanChoseRock)

function populateDynamicSides() {
  leftColumn.innerHTML = `
    <figure>${game.players[0].emoji}</figure>
    <aside>${game.players[0].name}</aside>
    <aside class="wins">Wins: ${game.players[0].wins}</aside>`
  rightColumn.innerHTML = `
    <figure>${game.players[1].emoji}</figure>
    <aside>${game.players[1].name}</aside>
    <aside class="wins">Wins: ${game.players[1].wins}</aside>`
}

function showClassicGame() {
  game.gameType = 'classic'
  transitionToGame()
  toggle(classicGame)
  assignComputerChoice()
}

function showDifficultGame() {
  game.gameType = 'difficult'
  transitionToGame() 
  toggle(classicGame)
  toggle(difficultGame)
  assignComputerChoice()
}

function transitionToGame() {
  toggle(classicGameBtn)
  toggle(difficultGameBtn)
  subHeader.innerText = `Choose your fighter!`
  leftColumn.innerHTML += `<button class="change-game" id="changeGameBtn">Change Game?</button>`
}

function handleChangeGameClick(e) {
  if (e.target.id === "changeGameBtn") {
    hide(classicGame)
    hide(difficultGame)
    toggle(classicGameBtn)
    toggle(difficultGameBtn)
    subHeader.innerText = `Choose your game!`
    populateDynamicSides()
  }
}

function assignComputerChoice() {
  var computerChoice;
  if (game.gametype === 'classic') {
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

function humanChoseRock() {
  game.players[0].choice = 'Rock';
  game.whoWon()
}

function humanChosePaper() {
  game.players[0].choice = 'Paper';
  game.whoWon()
}

function humanChoseScissors() {
  game.players[0].choice = 'Scissors';
  game.whoWon()
}

function humanChoseLizard() {
  game.players[0].choice = 'Lizard';
  game.whoWon()
}

function humanChoseAlien() {
  game.players[0].choice = 'Alien';
  game.whoWon()
}

function showWinner() {
  hide(classicGame)
  hide(difficultGame)
  if (game.winner === 'draw') {
    subHeader.innerText = `😭 It's a draw! 😭`
    
  } else if (game.winner === game.players[0].name) {
    subHeader.innerText = `${game.players[0].emoji} ${game.players[0].name} WON! ${game.players[0].emoji}`
    
  } else {
    subHeader.innerText = `${game.players[1].emoji} ${game.players[1].name} WON! ${game.players[1].emoji}`
    
  }  
}  
















function toggle(e) {
  e.classList.toggle('hidden')
}

function hide(e) {
  e.classList.add('hidden')
}

function getRandomInt(max) {
  min = Math.ceil(1);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}