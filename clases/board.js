function Board() {
  this.y = 0
  this.x = 0
  this.width = canvas.width
  this.height = canvas.height
  /*this.img = new Image()
  this.img.src = 'https://raw.githubusercontent.com/Jossdz/lab-canvas-flappybirds/master/starter_code/images/bg.png'

  this.img.onload = function(){
    console.log(this)
    this.draw()
  }.bind(this)

  this.move = function () {
    this.x--
    if(this.x < -canvas.width) this.x = 0;
  }*/

  this.draw = function(){
    //this.move()
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    ctx.drawImage(this.img, this.x + this.width, this.y, this.width, this.height)
  }
}
