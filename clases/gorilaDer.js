//Gorila lado izquierdo
function GorilaDer(posicionX, posicionY, width, height, velocidadX, velocidadY){
  Monkey.call(this, posicionX, posicionY, width, height, velocidadX, velocidadY);
  //Flags acciones

  this.contSecMovLeftRight=0;
  //Banderas
  this.mueveDerecha=true;
}

GorilaDer.prototype= Object.create(Monkey.prototype);
GorilaDer.prototype.constructor=GorilaDer;


//Ejecuta movimientos
GorilaDer.prototype.moveRight=function(){
  this.x+=this.velocidadX;
  this.contSecMovLeftRight++;
  this.mueveDerecha=true;
  if(this.contSecMovLeftRight===this.arrayImagesGorilas1Derecha.length)
    this.contSecMovLeftRight=0;
}

GorilaDer.prototype.deadBala = function(bala) {
  return !((this.bottom() < bala.top())    ||
           (this.top()    > bala.bottom()) ||
           (this.right()  < bala.left())   ||
           (this.left()   > bala.right()));
}
