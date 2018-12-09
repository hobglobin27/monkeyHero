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
  this.posicionInicialSalto=posicionY;
  this.saltoArriba=true;
  this.saltando=false;
  this.disparando=false;
  //Banderas
  this.mueveDerecha=true;
  //Disparos
  this.arregloBalas=[];
}

MonkeyHero.prototype= Object.create(Monkey.prototype);
MonkeyHero.prototype.constructor=MonkeyHero;

//Ejecuta movimientos
MonkeyHero.prototype.moveLeft=function(){
  if(!this.saltando && frames%3===0){
    this.contSecMovLeftRight++;
    if(this.x>200)
      this.x-=this.velocidadX;
    if(this.contSecMovLeftRight===this.arrayImagesMonoCaminandoIzquierda.length)
      this.contSecMovLeftRight=0;
  }
  else {
    if(this.x>200)
      if(this.saltando && monkeyHero.y !== monkeyHero.posicionInicialSalto)
        this.x-=this.velocidadX*1;
  }
  this.mueveDerecha=false;

}

MonkeyHero.prototype.moveRight=function(){
  if(!this.saltando && frames%3===0){
    this.contSecMovLeftRight++;
    if(this.x<970)
      this.x+=this.velocidadX;
    if(this.contSecMovLeftRight===this.arrayImagesMonoCaminandoDerecha.length)
      this.contSecMovLeftRight=0;
  }
  else {
    if(this.x<970)
      if(this.saltando && monkeyHero.y !== monkeyHero.posicionInicialSalto)
        this.x+=this.velocidadX*1;
  }
  this.mueveDerecha=true;

}

MonkeyHero.prototype.jump = function(posicionInicialSalto){
  if(this.y <= (posicionInicialSalto - monkeyHero.height*4))
    this.saltoArriba=false;
  if(this.saltoArriba && (this.y > (posicionInicialSalto - monkeyHero.height*4))){
    if(this.contSecMovLeftRight>1)
      this.y -= this.velocidadY;
  }
  if(!this.saltoArriba && (this.y < posicionInicialSalto)){
    this.y += this.velocidadY;
    if(this.y >= posicionInicialSalto){
      this.y = posicionInicialSalto;
      this.saltoArriba=true;
      this.saltando=false;
      this.contSecMovLeftRight=0;
    }
  }
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
}

//Manejo vidas
MonkeyHero.prototype.agregaVida = function(){
  this.vidas++;
}

//InitMonkey
MonkeyHero.prototype.iniciaMonkey = function(posicionX,posicionY){
  this.siCamina=true;
  this.siSalta=false;
  this.siDispara=false;
  this.siDisparaPow=false;
  this.siResucitando=false;
  this.posicionInicialSalto=posicionY;
  //Control heroe
  this.vidas=3;
  this.balas=30;
  this.puntos=0;
  this.contSecMovLeftRight=0;
  this.saltoArriba=true;
  this.saltando=false;
  this.disparando=false;
  //Banderas
  this.mueveDerecha=true;
  //Disparos
  this.arregloBalas=[];
  this.x=posicionX;
  this.y=posicionY;
}
