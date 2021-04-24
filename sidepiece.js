var leftColumn = document.querySelector('#leftSide')
var rightColumn = document.querySelector('#rightSide')





window.addEventListener('load', populateDynamicSides)






function populateDynamicSides() {
  leftColumn.innerHTML = `
    <figure>${game.players[0].emoji}</figure>
    <aside>${game.players[0].name}</aside>
    <aside class="wins">Wins: ${game.players[0].wins}</aside>
    <button class="change-game hidden">Change Game?</button>`
  rightColumn.innerHTML = `
    <figure>${game.players[1].emoji}</figure>
    <aside>${game.players[1].name}</aside>
    <aside class="wins">Wins: ${game.players[1].wins}</aside>`
}