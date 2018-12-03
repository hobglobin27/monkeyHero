//Gorila lado derecho
function GorilaIzq(posicionX, posicionY, width, height, velocidadX, velocidadY){
  Monkey.call(this, posicionX, posicionY, width, height, velocidadX, velocidadY);

  //Flags acciones
  this.contSecMovLeftRight=0;

  //Banderas
  this.mueveDerecha=false;

  //Puntos Gorila
  this.puntos=3;
}

GorilaIzq.prototype= Object.create(Monkey.prototype);
GorilaIzq.prototype.constructor=GorilaIzq;


//Ejecuta movimientos
GorilaIzq.prototype.moveLeft=function(){
  this.x-=this.velocidadX;
  this.contSecMovLeftRight++;
  this.mueveDerecha=false;
  if(this.contSecMovLeftRight===this.arrayImagesGorilas2Izquierda.length)
    this.contSecMovLeftRight=0;
}

GorilaIzq.prototype.deadBala = function(bala) {
  return !((this.bottom() < bala.top())    ||
           (this.top()    > bala.bottom()) ||
           (this.right()  < bala.left())   ||
           (this.left()   > bala.right()));
}
