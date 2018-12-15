//gorilaChief
function GorilaChief(posicionX, posicionY, width, height, velocidadX, velocidadY){
  Monkey.call(this, posicionX, posicionY, width, height, velocidadX, velocidadY);
  //Flags acciones
  this.siCamina=true;
  this.siGolpea=false;
  this.siGolpeaPiso=false;
  this.siMuere=false;
  //Control gorilaChief
  this.health=20;
  this.puntos=1000;
  this.contSecMovLeftRight=0;
  //Banderas
  this.mueveDerecha=true;


}

GorilaChief.prototype= Object.create(Monkey.prototype);
GorilaChief.prototype.constructor=GorilaChief;

//Ejecuta movimientos
GorilaChief.prototype.moveLeft=function(){
  this.x-=this.velocidadX;
  this.contSecMovLeftRight++;
  this.mueveDerecha=false;
  if(this.contSecMovLeftRight===this.arrayImagesCaminaJefeIzquierda.length)
    this.contSecMovLeftRight=0;
}

GorilaChief.prototype.moveRight=function(){
  this.x+=this.velocidadX;
  this.contSecMovLeftRight++;
  this.mueveDerecha=true;
  if(this.contSecMovLeftRight===this.arrayImagesCaminaJefeDerecha.length)
    this.contSecMovLeftRight=0;
}

GorilaChief.prototype.deadBala = function(bala) {
  return !((this.bottom() < bala.top())    ||
           (this.top()    > bala.bottom()) ||
           (this.right()  < bala.left())   ||
           (this.left()   > bala.right()));
}
