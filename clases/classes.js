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


function Monkey(posicionX, posicionY, width, height, velocidadX, velocidadY){
  this.x=posicionX;
  this.y=posicionY;
  this.width=width;
  this.height=height;
  this.velocidadX=velocidadX;
  this.velocidadY=velocidadY;

  //Constantes
  this.ataque="ATAQUE";
  this.ataquePow="ATAQUE_POW";
  this.golpeCocos="GOLPE_COCOS";
  this.gorilas1="GORILAS1";
  this.gorilas2="GORILAS2";
  this.monoCaminandoDerecha="MONO_CAMINANDO_DERECHA";
  this.monoCaminandoIzquierda="MONO_CAMINANDO_IZQUIERDA";
  this.salto="SALTO";

  //Arreglos movimiento
  this.arrayImagesAtaque=[];
  this.arrayImagesAtaquePow=[];
  this.arrayImagesGolpeCocos=[];
  this.arrayImagesGorilas1=[];
  this.arrayImagesGorilas2=[];
  this.arrayImagesMonoCaminandoDerecha=[];
  this.arrayImagesMonoCaminandoIzquierda=[];
  this.arrayImagesSalto=[];
}

//Llena arreglos de imagenes
Monkey.prototype.cargaImagen=function(tipoMovimiento){

  switch(tipoMovimiento){
    case this.ataque:
      for(let i=0; i<arrayRutaAtaque.length;i++){
        this.arrayImagesAtaque.push(new Image());
        this.arrayImagesAtaque[i].onload = function(){
          console.log("Imagen ataque " + i + " cargada");
        }.bind(this);
      }
    break;
    case this.ataquePow:
      for(let i=0; i<arrayRutaAtaque.length;i++){
        this.arrayImagesAtaquePow.push(new Image());
        this.arrayImagesAtaquePow[i].onload = function(){
          console.log("Imagen ataquePow " + i + " cargada");
        }.bind(this);
      }
    break;
    case this.golpeCocos:
      for(let i=0; i<arrayRutaGolpeCocos.length;i++){
        this.arrayImagesGolpeCocos.push(new Image());
        this.arrayImagesGolpeCocos[i].onload = function(){
          console.log("Imagen golpeCocos " + i + " cargada");
        }.bind(this);
      }
    break;
    case this.gorilas1:
      for(let i=0; i<arrayRutaGorilas1.length;i++){
        this.arrayImagesGorilas1.push(new Image());
        this.arrayImagesGorilas1[i].onload = function(){
          if(i==0)
            this.draw(this.arrayImagesGorilas1[i]);
          else{
            console.log("Imagen gorilas1 " + i + " cargada");
            this.draw(this.arrayImagesGorilas1[0]);
          }
        }.bind(this);
      }
    break;
    case this.gorilas2:
      for(let i=0; i<arrayRutaGorilas2.length;i++){
        this.arrayImagesGorilas2.push(new Image());
        this.arrayImagesGorilas2[i].onload = function(){
          if(i==0)
            this.draw(this.arrayImagesGorilas2[i]);
          else{
            console.log("Imagen gorilas2 " + i + " cargada");
            this.draw(this.arrayImagesGorilas2[0]);
          }
        }.bind(this);
      }
    break;
    case this.monoCaminandoDerecha:
      for(let i=0; i<arrayRutaMonoCaminandoDerecha.length;i++){
        this.arrayImagesMonoCaminandoDerecha.push(new Image());
        this.arrayImagesMonoCaminandoDerecha[i].src=arrayRutaMonoCaminandoDerecha[i];
        this.arrayImagesMonoCaminandoDerecha[i].onload = function(){
          if(i==0)
            this.draw(this.arrayImagesMonoCaminandoDerecha[i]);
          else{
            console.log("Imagen monoCaminando " + i + " cargada");
            this.draw(this.arrayImagesMonoCaminandoDerecha[0]);
          }
        }.bind(this);
      }
    break;
    case this.monoCaminandoIzquierda:
      for(let i=0; i<arrayRutaMonoCaminandoIzquierda.length;i++){
        this.arrayImagesMonoCaminandoIzquierda.push(new Image());
        this.arrayImagesMonoCaminandoIzquierda[i].src=arrayRutaMonoCaminandoIzquierda[i];
        this.arrayImagesMonoCaminandoIzquierda[i].onload = function(){
          console.log("Imagen monoCaminando " + i + " cargada");
        }.bind(this);
      }
    break;
    case this.salto:
      for(let i=0; i<arrayRutaSalto.length;i++){
        this.arrayImagesSalto.push(new Image());
        this.arrayImagesSalto[i].onload = function(){
          console.log("Imagen salto " + i + " cargada");
        }.bind(this);
      }
    break;
  }
}

Monkey.prototype.draw=function(img){
   ctx.drawImage(img, this.x, this.y, this.width, this.height);
}


//Ejecuta movimientos
Monkey.prototype.moveLeft=function(){
  this.x-=this.velocidadX;
}

Monkey.prototype.moveRight=function(){
  this.x+=this.velocidadX;
}

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
}

MonkeyHero.prototype= Object.create(Monkey.prototype);
MonkeyHero.prototype.constructor=MonkeyHero;

MonkeyHero.prototype.jump = function(){
  this.y -=  velocidadY;
}

MonkeyHero.prototype.agregaVida = function(){
  this.vidas++;
}

MonkeyHero.prototype.agregaBalas = function(balas){
  this.balas+=balas;
}

//Valida colisiones
MonkeyHero.prototype.left=function(){
   return this.x;
}

MonkeyHero.prototype.right=function(){
   return (this.x+this.width);
}

MonkeyHero.prototype.top=function(){
   return this.y;
}

MonkeyHero.prototype.bottom=function(){
   return (this.y+this.height);
}

MonkeyHero.prototype.dead = function(enemy) {
  return !((this.bottom() < enemy.top())    ||
           (this.top()    > enemy.bottom()) ||
           (this.right()  < enemy.left())   ||
           (this.left()   > enemy.right()))
}

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



function Pipe( y, height, type){
  this.x = canvas.width
  this.y = y
  this.width = 50
  this.height = height
  this.img = new Image()
  this.img2 = new Image()
  this.img.src = 'https://raw.githubusercontent.com/Jossdz/lab-canvas-flappybirds/master/starter_code/images/obstacle_top.png'
  this.img2.src = 'https://raw.githubusercontent.com/Jossdz/lab-canvas-flappybirds/master/starter_code/images/obstacle_bottom.png'

  this.draw = function(){
    this.x--
    if(type){
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }else{
      ctx.drawImage(this.img2, this.x, this.y, this.width, this.height)
    }
  }
}
