function Board() {
  this.y = 0;
  this.x = 0;
  this.width = canvas.width;
  this.height = canvas.height;
  this.img = new Image();
  this.img.src = "./images/Fondos/fondo.png";

  this.img.onload = function(){
    console.log(this);
    this.draw();
  }.bind(this)
}

/*Board.prototype.move=function(){
  this.x--;
  if(this.x < -canvas.width) this.x = 0;
}*/

Board.prototype.move=function(mueveDerecha, velocidadX){
  if(mueveDerecha){
    this.x-=velocidadX;
    if(this.x < -canvas.width) this.x = 0;
  }
  else{
    this.x+=velocidadX;
    if(this.x > canvas.width) this.x = 0;
  }
}


/*Board.prototype.draw=function(){
  this.move();
  ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  ctx.drawImage(this.img, this.x + this.width, this.y, this.width, this.height);
}*/

Board.prototype.draw=function(){
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      ctx.drawImage(this.img, this.x + this.width, this.y, this.width, this.height);
      ctx.drawImage(this.img, this.x - canvas.width, this.y, this.width, this.height);
}
