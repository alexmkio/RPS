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
var choseFighter = document.querySelector('#choseFighter')
var difficultLineBreak = document.querySelector('#difficultLineBreak')

window.addEventListener('load', populateDynamicSides)
classicGameBtn.addEventListener('click', updateGametypeClassic)
difficultGameBtn.addEventListener('click', updateGametypeDifficult)
leftColumn.addEventListener('click', game.resetBoard);

// is this better than injecting that section's HTML and event bubbling?
var rockImg = document.querySelector('#rockImg')
var paperImg = document.querySelector('#paperImg')
var scissorsImg = document.querySelector('#scissorsImg')
var lizardImg = document.querySelector('#lizardImg')
var alienImg = document.querySelector('#alienImg')
rockImg.addEventListener('click', humanChoseRock)
paperImg.addEventListener('click', humanChosePaper)
scissorsImg.addEventListener('click', humanChoseScissors)
lizardImg.addEventListener('click', humanChoseLizard)
alienImg.addEventListener('click', humanChoseAlien)
var rockImgDraw = document.querySelector('#rockImgDraw')
var paperImgDraw = document.querySelector('#paperImgDraw')
var scissorsImgDraw = document.querySelector('#scissorsImgDraw')
var lizardImgDraw = document.querySelector('#lizardImgDraw')
var alienImgDraw = document.querySelector('#alienImgDraw')

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

function updateGametypeClassic() {
  game.gameType = 'classic'
  showClassicGame()
}

function updateGametypeDifficult() {
  game.gameType = 'difficult'
  showClassicGame()
  showDifficultGame()
}

function showClassicGame() {
  transitionToGame()
  show(choseFighter)
  show(rockImg)
  show(paperImg)
  show(scissorsImg)
}

function showDifficultGame() {
  show(difficultLineBreak)
  show(lizardImg)
  show(alienImg)
}

function transitionToGame() {
  hide(classicGameBtn)
  hide(difficultGameBtn)
  subHeader.innerText = `Choose your fighter!`
  leftColumn.innerHTML += `<button class="change-game" id="changeGameBtn">Change Game?</button>`
  assignComputerChoice()
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

function showWinnerHeading() {
  hide(rockImg)
  hide(paperImg)
  hide(scissorsImg)
  hide(difficultLineBreak)
  hide(lizardImg)
  hide(alienImg)
  if (game.winner === 'draw') {
    subHeader.innerText = `😭 It's a draw! 😭`
    showDraw()
  } else if (game.winner === game.players[0].name) {
    subHeader.innerText = `${game.players[0].emoji} ${game.players[0].name} won this round! ${game.players[0].emoji}`
    showWinner()
  } else {
    subHeader.innerText = `${game.players[1].emoji} ${game.players[1].name} won this round! ${game.players[1].emoji}`
    showWinner()
  }
}  

function showDraw() {
  if (game.players[0].choice === 'Rock') {
    show(rockImg)
    show(rockImgDraw)
  } else if (game.players[0].choice === 'Paper') {
    show(paperImg)
    show(paperImgDraw)
  } else if (game.players[0].choice === 'Scissors') {
    show(scissorsImg)
    show(scissorsImgDraw)
  } else if (game.players[0].choice === 'Lizard') {
    show(lizardImg)
    show(lizardImgDraw)
  } else {
    show(alienImg)
    show(alienImgDraw)
  }
  clearAfterTimeout()
}

function showWinner() {
  if (game.players[0].choice === 'Rock') {
    show(rockImg)
  } else if (game.players[0].choice === 'Paper') {
    show(paperImg)
  } else if (game.players[0].choice === 'Scissors') {
    show(scissorsImg)
  } else if (game.players[0].choice === 'Lizard') {
    show(lizardImg)
  } else if (game.players[0].choice === 'Alien') {
    show(alienImg)
  }
  if (game.players[1].choice === 'Rock') {
    show(rockImgDraw)
  } else if (game.players[1].choice === 'Paper') {
    show(paperImgDraw)
  } else if (game.players[1].choice === 'Scissors') {
    show(scissorsImgDraw)
  } else if (game.players[1].choice === 'Lizard') {
    show(lizardImgDraw)
  } else if (game.players[1].choice === 'Alien') {
    show(alienImgDraw)
  }
  clearAfterTimeout()
}

function clearAfterTimeout() {
  var timeout = setTimeout(function() {
    hideAllImages()
    populateDynamicSides()
    showWhichGame()
  }, 2000)
}

function hideAllImages() {
  hide(rockImg)
  hide(paperImg)
  hide(scissorsImg)
  hide(lizardImg)
  hide(alienImg)
  hide(rockImgDraw)
  hide(paperImgDraw)
  hide(scissorsImgDraw)
  hide(lizardImgDraw)
  hide(alienImgDraw)
} 

function showWhichGame() {
  if (game.gameType === 'classic') {
    showClassicGame()
  } else {
    showClassicGame()
    showDifficultGame()
  }
}


// can these two be combined
function handleChangeGameClick(e) {
  if (e.target.id === "changeGameBtn") {
    hideAllImages()
    resetBoard()
  }
}

function resetBoard() {
  hide(choseFighter)
  show(classicGameBtn)
  show(difficultGameBtn)
  subHeader.innerText = `Choose your game!`
  populateDynamicSides()
}

function toggle(e) {
  e.classList.toggle('hidden')
}

function hide(e) {
  e.classList.add('hidden')
}

function show(e) {
  e.classList.remove('hidden')
}

function getRandomInt(max) {
  min = Math.ceil(1);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}