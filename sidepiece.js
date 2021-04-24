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
leftColumn.addEventListener('click', handleChangeGameClick);


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
  transitionToGame()
  toggle(classicGame)
}

function showDifficultGame() {
  transitionToGame() 
  toggle(difficultGame)
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











function toggle(e) {
  e.classList.toggle('hidden')
}

function hide(e) {
  e.classList.add('hidden')
}