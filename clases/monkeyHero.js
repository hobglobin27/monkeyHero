//monkeyHero
function MonkeyHero(posicionX, posicionY, width, height, velocidadX, velocidadY){
  Monkey.call(this, posicionX, posicionY, width, height, velocidadX, velocidadY);
  //Flags acciones
  this.siCamina=true;
  this.siSalta=false;
  this.siDispara=false;
  this.siDisparaPow=false;
  this.siResucitando=false;
  //Control heroe
  this.vidas=3;
  this.balas=30;
  this.puntos=0;
  this.contSecMovLeftRight=0;
  //Banderas
  this.mueveDerecha=true;
  this.arregloBalas=[];
}

MonkeyHero.prototype= Object.create(Monkey.prototype);
MonkeyHero.prototype.constructor=MonkeyHero;

//Ejecuta movimientos
MonkeyHero.prototype.moveLeft=function(){
  this.x-=this.velocidadX;
  this.contSecMovLeftRight++;
  this.mueveDerecha=false;
  if(this.contSecMovLeftRight===this.arrayImagesMonoCaminandoIzquierda.length)
    this.contSecMovLeftRight=0;
}

MonkeyHero.prototype.moveRight=function(){
  this.x+=this.velocidadX;
  this.contSecMovLeftRight++;
  this.mueveDerecha=true;
  if(this.contSecMovLeftRight===this.arrayImagesMonoCaminandoDerecha.length)
    this.contSecMovLeftRight=0;
}

MonkeyHero.prototype.jump = function(){
  this.y -=  velocidadY;
}

//Agrega Balas
MonkeyHero.prototype.agregaBalas=function(balas){
  this.balas+=balas;
}

//Dispara Balas
MonkeyHero.prototype.disparaBalas=function(width, height, velocidad, mueveDerecha){
  if(this.balas>0){
    if(mueveDerecha)
      this.arregloBalas.push(new Balas(this.x+this.width/1.5, this.y, width, height, velocidad, mueveDerecha))
    else
      this.arregloBalas.push(new Balas(this.x-this.width/2, this.y, width, height, velocidad, mueveDerecha))
    this.balas--;
  }

//Manejo vidas
MonkeyHero.prototype.agregaVida = function(){
  this.vidas++;
}
}
