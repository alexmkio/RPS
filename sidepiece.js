var leftColumn = document.querySelector('#leftSide')
var rightColumn = document.querySelector('#rightSide')





window.addEventListener('load', populateDynamicSides)






function populateDynamicSides() {
  leftColumn.innerHTML = `
    <p>${game.players[0].emoji}<br>
    ${game.players[0].name}<br>
    Wins: ${game.players[0].wins}</p>`
    rightColumn.innerHTML = `
    <p>${game.players[1].emoji}<br>
    ${game.players[1].name}<br>
    Wins: ${game.players[1].wins}</p>`
}