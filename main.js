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
var rockImg = document.querySelector('#rockImg')
var paperImg = document.querySelector('#paperImg')
var scissorsImg = document.querySelector('#scissorsImg')
var lizardImg = document.querySelector('#lizardImg')
var alienImg = document.querySelector('#alienImg')
var rockImgDraw = document.querySelector('#rockImgDraw')
var paperImgDraw = document.querySelector('#paperImgDraw')
var scissorsImgDraw = document.querySelector('#scissorsImgDraw')
var lizardImgDraw = document.querySelector('#lizardImgDraw')
var alienImgDraw = document.querySelector('#alienImgDraw')

window.addEventListener('load', populateDynamicSides)
classicGameBtn.addEventListener('click', updateGametypeClassic)
difficultGameBtn.addEventListener('click', updateGametypeDifficult)
changeGameBtn.addEventListener('click', game.resetBoard);
rockImg.addEventListener('click', humanChoseRock)
paperImg.addEventListener('click', humanChosePaper)
scissorsImg.addEventListener('click', humanChoseScissors)
lizardImg.addEventListener('click', humanChoseLizard)
alienImg.addEventListener('click', humanChoseAlien)

function populateDynamicSides() {
  leftColumn.innerHTML = `
    <figure alt="Emoji of a person for the player">${game.players[0].emoji}</figure>
    <aside>${game.players[0].name}</aside>
    <aside class="wins">Wins: ${game.players[0].wins}</aside>`
  rightColumn.innerHTML = `
    <figure alt="Emoji of a computer for the opponent">${game.players[1].emoji}</figure>
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
  show(changeGameBtn)
  transitionToGame()
  show(choseFighter)
  imgShow(rockImg)
  imgShow(paperImg)
  imgShow(scissorsImg)
}

function showDifficultGame() {
  show(difficultLineBreak)
  imgShow(lizardImg)
  imgShow(alienImg)
}

function transitionToGame() {
  hide(classicGameBtn)
  hide(difficultGameBtn)
  subHeader.innerText = `Choose your fighter!`

  // leftColumn.innerHTML += `<button class="change-game button" id="changeGameBtn">Change Game?</button>`
  assignComputerChoice()
}

function assignComputerChoice() {
  var computerChoice;
  if (game.gameType === 'classic') {
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
  populateDynamicSides()
  imgHide(rockImg)
  imgHide(paperImg)
  imgHide(scissorsImg)
  hide(difficultLineBreak)
  imgHide(lizardImg)
  imgHide(alienImg)
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
  document.getElementById("changeGameBtn").disabled = true;
  var timeout = setTimeout(function() {
    hideAllImages()
    showWhichGame()
  }, 2000)
}

function hideAllImages() {
  imgHide(rockImg)
  imgHide(paperImg)
  imgHide(scissorsImg)
  imgHide(lizardImg)
  imgHide(alienImg)
  imgHide(rockImgDraw)
  imgHide(paperImgDraw)
  imgHide(scissorsImgDraw)
  imgHide(lizardImgDraw)
  imgHide(alienImgDraw)
} 

function showWhichGame() {
  document.getElementById("changeGameBtn").disabled = false;
  if (game.gameType === 'classic') {
    showClassicGame()
  } else {
    showClassicGame()
    showDifficultGame()
  }
}

function changeGame() {
  hideAllImages()
  hide(choseFighter)
  show(classicGameBtn)
  show(difficultGameBtn)
  subHeader.innerText = `Choose your game!`
  populateDynamicSides()
}

function show(e) {
  e.classList.remove('hidden')
}

function hide(e) {
  e.classList.add('hidden')
}

function imgShow(e) {
  e.classList.remove('hidden')
  e.classList.add('pointer')
}

function imgHide(e) {
  e.classList.add('hidden')
  e.classList.remove('pointer')
}

function getRandomInt(max) {
  min = Math.ceil(1);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}