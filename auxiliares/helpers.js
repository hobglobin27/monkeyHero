function generatePipes() {
  if(!(frames % 300 === 0)) return
  let ventanita = 150
  let randomHeight = Math.floor(Math.random() * 250) + 50
  let pipe = new Pipe( 0, randomHeight, true)
  let pipe2 = new Pipe( randomHeight+ventanita, canvas.height - (randomHeight+ventanita))
  obstacles.push(pipe)
  obstacles.push(pipe2)
}
function drawPipes() {
  obstacles.forEach(function(obstacle) {
    obstacle.draw()
  })
}
function checkColition() {
  obstacles.forEach(function (obstacle) {
    if(flappy.isTouching(obstacle)) gameOver()
  })
}
