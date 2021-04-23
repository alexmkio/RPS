var human = new Player({ name: 'Human', emoji: '🤷' })
var computer = new Player({ name: 'HAL 9000', emoji: '💻' })

// getRandomInt(4)
// getRandomInt(6)
function getRandomInt(max) {
  min = Math.ceil(1);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

