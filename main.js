var game = new Game();

function instantiatePlayers() {
  var human = new Player({ name: 'Human', emoji: '👩🏻' });
  var computer = new Player({ name: 'Computer', emoji: '💻' });
  game.players.push(human);
  game.players.push(computer);
};

instantiatePlayers();

game.players[0].retrieveWinsFromStorage();
game.players[1].retrieveWinsFromStorage();

var leftBottom = document.querySelector('#leftBottom');
var rightBottom = document.querySelector('#rightBottom');
var subHeaderMobile = document.querySelector('#subHeaderMobile');
var classicGameBtnMobile = document.querySelector('#classicGameBtnMobile');
var difficultGameBtnMobile = document.querySelector('#difficultGameBtnMobile');
var changeGameBtnMobile = document.querySelector('#changeGameBtnMobile');
var choseFighterMobile = document.querySelector('#choseFighterMobile');
var difficultLineBreakMobile = document.querySelector('#difficultLineBreakMobile');
var rockImgMobile = document.querySelector('#rockImgMobile');
var paperImgMobile = document.querySelector('#paperImgMobile');
var scissorsImgMobile = document.querySelector('#scissorsImgMobile');
var lizardImgMobile = document.querySelector('#lizardImgMobile');
var alienImgMobile = document.querySelector('#alienImgMobile');
var rockImgDrawMobile = document.querySelector('#rockImgDrawMobile');
var paperImgDrawMobile = document.querySelector('#paperImgDrawMobile');
var scissorsImgDrawMobile = document.querySelector('#scissorsImgDrawMobile');
var lizardImgDrawMobile = document.querySelector('#lizardImgDrawMobile');
var alienImgDrawMobile = document.querySelector('#alienImgDrawMobile');
var allImages = document.querySelectorAll('img');

var leftColumn = document.querySelector('#leftColumn');
var rightColumn = document.querySelector('#rightColumn');
var subHeader = document.querySelector('#subHeader');
var classicGameBtn = document.querySelector('#classicGameBtn');
var difficultGameBtn = document.querySelector('#difficultGameBtn');
var changeGameBtn = document.querySelector('#changeGameBtn');
var choseFighter = document.querySelector('#choseFighter');
var difficultLineBreak = document.querySelector('#difficultLineBreak');
var rockImg = document.querySelector('#rockImg');
var paperImg = document.querySelector('#paperImg');
var scissorsImg = document.querySelector('#scissorsImg');
var lizardImg = document.querySelector('#lizardImg');
var alienImg = document.querySelector('#alienImg');
var rockImgDraw = document.querySelector('#rockImgDraw');
var paperImgDraw = document.querySelector('#paperImgDraw');
var scissorsImgDraw = document.querySelector('#scissorsImgDraw');
var lizardImgDraw = document.querySelector('#lizardImgDraw');
var alienImgDraw = document.querySelector('#alienImgDraw');

window.addEventListener('load', populateDynamicSides);

classicGameBtnMobile.addEventListener('click', updateGametypeClassic);
difficultGameBtnMobile.addEventListener('click', updateGametypeDifficult);
changeGameBtnMobile.addEventListener('click', game.resetBoard);
rockImgMobile.addEventListener('click', humanChoseRock);
paperImgMobile.addEventListener('click', humanChosePaper);
scissorsImgMobile.addEventListener('click', humanChoseScissors);
lizardImgMobile.addEventListener('click', humanChoseLizard);
alienImgMobile.addEventListener('click', humanChoseAlien);

classicGameBtn.addEventListener('click', updateGametypeClassic);
difficultGameBtn.addEventListener('click', updateGametypeDifficult);
changeGameBtn.addEventListener('click', game.resetBoard);
rockImg.addEventListener('click', humanChoseRock);
paperImg.addEventListener('click', humanChosePaper);
scissorsImg.addEventListener('click', humanChoseScissors);
lizardImg.addEventListener('click', humanChoseLizard);
alienImg.addEventListener('click', humanChoseAlien);

function populateDynamicSides() {
  leftBottom.innerHTML = `
    <figure alt="Emoji of a person for the player">${game.players[0].emoji}</figure>
    <aside>${game.players[0].name}</aside>
    <aside class="wins">Wins: ${game.players[0].wins}</aside>`
  rightBottom.innerHTML = `
    <figure alt="Emoji of a computer for the opponent">${game.players[1].emoji}</figure>
    <aside>${game.players[1].name}</aside>
    <aside class="wins">Wins: ${game.players[1].wins}</aside>`
  leftColumn.innerHTML = `
    <figure alt="Emoji of a person for the player">${game.players[0].emoji}</figure>
    <aside>${game.players[0].name}</aside>
    <aside class="wins">Wins: ${game.players[0].wins}</aside>`
  rightColumn.innerHTML = `
    <figure alt="Emoji of a computer for the opponent">${game.players[1].emoji}</figure>
    <aside>${game.players[1].name}</aside>
    <aside class="wins">Wins: ${game.players[1].wins}</aside>`
};

function updateGametypeClassic() {
  game.gameType = 'classic';
  showClassicGame();
};

function updateGametypeDifficult() {
  game.gameType = 'difficult';
  showClassicGame();
  showDifficultGame();
};

function showClassicGame() {
  show(changeGameBtnMobile);
  show(changeGameBtn);
  transitionToGame();
  show(choseFighterMobile);
  show(choseFighter);
  imgShow(rockImgMobile);
  imgShow(rockImg);
  imgShow(paperImgMobile);
  imgShow(paperImg);
  imgShow(scissorsImgMobile);
  imgShow(scissorsImg);
};

function showDifficultGame() {
  show(difficultLineBreakMobile);
  show(difficultLineBreak);
  imgShow(lizardImgMobile);
  imgShow(lizardImg);
  imgShow(alienImgMobile);
  imgShow(alienImg);
};

function transitionToGame() {
  hide(classicGameBtnMobile);
  hide(classicGameBtn);
  hide(difficultGameBtnMobile);
  hide(difficultGameBtn);
  subHeaderMobile.innerText = `Choose your fighter!`;
  subHeader.innerText = `Choose your fighter!`;
  assignComputerChoice();
};

function assignComputerChoice() {
  var computerChoice;
  if (game.gameType === 'classic') {
    computerChoice = getRandomInt(4);
  } else {
    computerChoice = getRandomInt(6);
  };
  
  if (computerChoice === 1) {
    game.players[1].choice = 'Rock';
  } else if (computerChoice === 2) {
    game.players[1].choice = 'Paper';
  } else if (computerChoice === 3) {
    game.players[1].choice = 'Scissors';
  } else if (computerChoice === 4) {
    game.players[1].choice = 'Lizard';
  } else {
    game.players[1].choice = 'Alien';
  };
};

function humanChoseRock() {
  game.players[0].choice = 'Rock';
  game.whoWon();
};

function humanChosePaper() {
  game.players[0].choice = 'Paper';
  game.whoWon();
};

function humanChoseScissors() {
  game.players[0].choice = 'Scissors';
  game.whoWon();
};

function humanChoseLizard() {
  game.players[0].choice = 'Lizard';
  game.whoWon();
};

function humanChoseAlien() {
  game.players[0].choice = 'Alien';
  game.whoWon();
};

function showWinnerHeading() {
  populateDynamicSides();
  imgHide(rockImgMobile);
  imgHide(rockImg);
  imgHide(paperImgMobile);
  imgHide(paperImg);
  imgHide(scissorsImgMobile);
  imgHide(scissorsImg);
  hide(difficultLineBreakMobile);
  hide(difficultLineBreak);
  imgHide(lizardImgMobile);
  imgHide(lizardImg);
  imgHide(alienImgMobile);
  imgHide(alienImg);

  if (game.winner === 'draw') {
    subHeaderMobile.innerText = `😭 It's a draw! 😭`;
    subHeader.innerText = `😭 It's a draw! 😭`;
    showDraw();
  } else if (game.winner === game.players[0].name) {
    subHeaderMobile.innerText = `${game.players[0].emoji} ${game.players[0].name} won this round! ${game.players[0].emoji}`;
    subHeader.innerText = `${game.players[0].emoji} ${game.players[0].name} won this round! ${game.players[0].emoji}`;
    showWinner();
  } else {
    subHeaderMobile.innerText = `${game.players[1].emoji} ${game.players[1].name} won this round! ${game.players[1].emoji}`;
    subHeader.innerText = `${game.players[1].emoji} ${game.players[1].name} won this round! ${game.players[1].emoji}`;
    showWinner();
  };
};

function showDraw() {
  if (game.players[0].choice === 'Rock') {
    show(rockImgMobile);
    show(rockImgDrawMobile);
    show(rockImg);
    show(rockImgDraw);
  } else if (game.players[0].choice === 'Paper') {
    show(paperImgMobile);
    show(paperImgDrawMobile);
    show(paperImg);
    show(paperImgDraw);
  } else if (game.players[0].choice === 'Scissors') {
    show(scissorsImgMobile);
    show(scissorsImgDrawMobile);
    show(scissorsImg);
    show(scissorsImgDraw);
  } else if (game.players[0].choice === 'Lizard') {
    show(lizardImgMobile);
    show(lizardImgDrawMobile);
    show(lizardImg);
    show(lizardImgDraw);
  } else {
    show(alienImgMobile);
    show(alienImgDrawMobile);
    show(alienImg);
    show(alienImgDraw);
  };
  clearAfterTimeout();
};

function showWinner() {
  if (game.players[0].choice === 'Rock') {
    show(rockImgMobile);
    show(rockImg);
  } else if (game.players[0].choice === 'Paper') {
    show(paperImgMobile);
    show(paperImg);
  } else if (game.players[0].choice === 'Scissors') {
    show(scissorsImgMobile);
    show(scissorsImg);
  } else if (game.players[0].choice === 'Lizard') {
    show(lizardImgMobile);
    show(lizardImg);
  } else {
    show(alienImgMobile);
    show(alienImg);
  };
  
  if (game.players[1].choice === 'Rock') {
    show(rockImgDrawMobile);
    show(rockImgDraw);
  } else if (game.players[1].choice === 'Paper') {
    show(paperImgDrawMobile);
    show(paperImgDraw);
  } else if (game.players[1].choice === 'Scissors') {
    show(scissorsImgDrawMobile);
    show(scissorsImgDraw);
  } else if (game.players[1].choice === 'Lizard') {
    show(lizardImgDrawMobile);
    show(lizardImgDraw);
  } else {
    show(alienImgDrawMobile);
    show(alienImgDraw);
  };
  clearAfterTimeout();
};

function clearAfterTimeout() {
  document.getElementById('changeGameBtnMobile').disabled = true;
  document.getElementById('changeGameBtn').disabled = true;
  document.getElementById('choseFighterMobile').style.pointerEvents = 'none'
  document.getElementById('choseFighter').style.pointerEvents = 'none'
  var timeout = setTimeout(function() {
    hideAllImages();
    showWhichGame();
  }, 2000);
};

function hideAllImages() {
  for (var i = 0; i < allImages.length; i++) {
		imgHide(allImages[i]);
	};
};

function showWhichGame() {
  document.getElementById('changeGameBtnMobile').disabled = false;
  document.getElementById('changeGameBtn').disabled = false;
  document.getElementById('choseFighterMobile').style.pointerEvents = 'auto'
  document.getElementById('choseFighter').style.pointerEvents = 'auto'
  if (game.gameType === 'classic') {
    showClassicGame();
  } else {
    showClassicGame();
    showDifficultGame();
  };
};

function changeGame() {
  hideAllImages();
  hide(choseFighterMobile);
  hide(choseFighter);
  show(classicGameBtnMobile);
  show(classicGameBtn);
  show(difficultGameBtnMobile);
  show(difficultGameBtn);
  subHeaderMobile.innerText = `Choose your game!`;
  subHeader.innerText = `Choose your game!`;
  populateDynamicSides();
};

function show(e) {
  e.classList.remove('hidden');
};

function hide(e) {
  e.classList.add('hidden');
};

function imgShow(e) {
  e.classList.remove('hidden');
  e.classList.add('pointer');
};

function imgHide(e) {
  e.classList.add('hidden');
  e.classList.remove('pointer');
};

function getRandomInt(max) {
  min = Math.ceil(1);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};