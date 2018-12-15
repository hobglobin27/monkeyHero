function Monkey(posicionX, posicionY, width, height, velocidadX, velocidadY){
  this.x=posicionX;
  this.y=posicionY;
  this.width=width;
  this.height=height;
  this.velocidadX=velocidadX;
  this.velocidadY=velocidadY;

  //Constantes Derecha
  this.ataque1Derecha="ATAQUE_DERECHA";
  this.ataquePowDerecha="ATAQUE_POW_DERECHA";
  this.golpeCocosDerecha="GOLPE_COCOS_DERECHA";
  this.gorilas1Derecha="GORILAS1_DERECHA"
  this.monoCaminandoDerecha="MONO_CAMINANDO_DERECHA";
  this.saltoDerecha="SALTO_DERECHA";
  this.caminaJefeDerecha="CAMINA_JEFE_DERECHA";
  this.golpeJefeDerecha="GOLPE_JEFE_DERECHA";
  this.golpePisoDerecha="GOLPE_PISO_DERECHA";
  this.muereJefeDerecha="MUERE_JEFE_DERECHA";

  //Constantes Izquierda
  this.ataque1Izquierda="ATAQUE_IZQUIERDA";
  this.ataquePowIzquierda="ATAQUE_POW_IZQUIERDA";
  this.golpeCocosIzquierda="GOLPE_COCOS_IZQUIERDA";
  this.gorilas2Izquierda="GORILAS2_IZQUIERDA";
  this.monoCaminandoIzquierda="MONO_CAMINANDO_IZQUIERDA";
  this.saltoIzquierda="SALTO_IZQUIERDA";
  this.caminaJefeIzquierda="CAMINA_JEFE_IZQUIERDA";
  this.golpeJefeIzquierda="GOLPE_JEFE_IZQUIERDA";
  this.golpePisoIzquierda="GOLPE_PISO_IZQUIERDA";
  this.muereJefeIzquierda="MUERE_JEFE_IZQUIERDA";

  //Arreglos movimiento Derecha
  this.arrayImagesAtaque1Derecha=[];
  this.arrayImagesAtaquePowDerecha=[];
  this.arrayImagesGolpeCocosDerecha=[];
  this.arrayImagesGorilas1Derecha=[];
  this.arrayImagesMonoCaminandoDerecha=[];
  this.arrayImagesSaltoDerecha=[];
  this.arrayImagesCaminaJefeDerecha=[];
  this.arrayImagesGolpeJefeDerecha=[];
  this.arrayImagesGolpePisoDerecha=[];
  this.arrayImagesMuereJefeDerecha=[];

  //Arreglos movimiento Izquierda
  this.arrayImagesAtaque1Izquierda=[];
  this.arrayImagesAtaquePowIzquierda=[];
  this.arrayImagesGolpeCocosIzquierda=[];
  this.arrayImagesGorilas2Izquierda=[];
  this.arrayImagesMonoCaminandoIzquierda=[];
  this.arrayImagesSaltoIzquierda=[];
  this.arrayImagesCaminaJefeIzquierda=[];
  this.arrayImagesGolpeJefeIzquierda=[];
  this.arrayImagesGolpePisoIzquierda=[];
  this.arrayImagesMuereJefeIzquierda=[];
}

//Llena arreglos de imagenes
Monkey.prototype.cargaImagen=function(tipoMovimiento){
  switch(tipoMovimiento){
    case this.ataque1Derecha:
      for(let i=0; i<arrayRutaAtaque1Derecha.length;i++){
        this.arrayImagesAtaque1Derecha.push(new Image());
        this.arrayImagesAtaque1Derecha[i].src=arrayRutaAtaque1Derecha[i];
        this.arrayImagesAtaque1Derecha[i].onload = function(){
          console.log("Imagen ataque1 derecha" + i + " cargada");
        }.bind(this);
      }
    break;
    case this.ataque1Izquierda:
      for(let i=0; i<arrayRutaAtaque1Izquierda.length;i++){
        this.arrayImagesAtaque1Izquierda.push(new Image());
        this.arrayImagesAtaque1Izquierda[i].src=arrayRutaAtaque1Izquierda[i];
        this.arrayImagesAtaque1Izquierda[i].onload = function(){
          console.log("Imagen ataque1 izquierda " + i + " cargada");
        }.bind(this);
      }
    break;
    case this.ataquePowDerecha:
      for(let i=0; i<arrayRutaAtaquePowDerecha.length;i++){
        this.arrayImagesAtaquePowDerecha.push(new Image());
        this.arrayImagesAtaquePowDerecha[i].src=arrayRutaAtaquePowDerecha[i];
        this.arrayImagesAtaquePowDerecha[i].onload = function(){
          console.log("Imagen ataquePow derecha" + i + " cargada");
        }.bind(this);
      }
    break;
    case this.ataquePowIzquierda:
      for(let i=0; i<arrayRutaAtaquePowIzquierda.length;i++){
        this.arrayImagesAtaquePowIzquierda.push(new Image());
        this.arrayImagesAtaquePowIzquierda[i].src=arrayRutaAtaquePowIzquierda[i];
        this.arrayImagesAtaquePowIzquierda[i].onload = function(){
          console.log("Imagen ataquePow izquierda" + i + " cargada");
        }.bind(this);
      }
    break;
    case this.golpeCocosDerecha:
      for(let i=0; i<arrayRutaGolpeCocosDerecha.length;i++){
        this.arrayImagesGolpeCocosDerecha.push(new Image());
        this.arrayImagesGolpeCocosDerecha[i].src=arrayRutaGolpeCocosDerecha[i];
        this.arrayImagesGolpeCocosDerecha[i].onload = function(){
          console.log("Imagen golpeCocos derecha" + i + " cargada");
        }.bind(this);
      }
    break;
    case this.golpeCocosIzquierda:
      for(let i=0; i<arrayRutaGolpeCocosIzquierda.length;i++){
        this.arrayImagesGolpeCocosIzquierda.push(new Image());
        this.arrayImagesGolpeCocosIzquierda[i].src=arrayRutaGolpeCocosIzquierda[i];
        this.arrayImagesGolpeCocosIzquierda[i].onload = function(){
          console.log("Imagen golpeCocos izquierda" + i + " cargada");
        }.bind(this);
      }
    break;
    case this.gorilas1Derecha:
      for(let i=0; i<arrayRutaGorilas1Derecha.length;i++){
        this.arrayImagesGorilas1Derecha.push(new Image());
        this.arrayImagesGorilas1Derecha[i].src=arrayRutaGorilas1Derecha[i];
        this.arrayImagesGorilas1Derecha[i].onload = function(){
          console.log("Imagen gorilas1 derecha" + i + " cargada");
          this.draw(this.arrayImagesGorilas1Derecha[0]);
        }.bind(this);
      }
    break;
    case this.gorilas2Izquierda:
      for(let i=0; i<arrayRutaGorilas2Izquierda.length;i++){
        this.arrayImagesGorilas2Izquierda.push(new Image());
        this.arrayImagesGorilas2Izquierda[i].src=arrayRutaGorilas2Izquierda[i];
        this.arrayImagesGorilas2Izquierda[i].onload = function(){
          console.log("Imagen gorilas2 izquierda" + i + " cargada");
          this.draw(this.arrayImagesGorilas2Izquierda[0]);
        }.bind(this);
      }
    break;
    case this.monoCaminandoDerecha:
      for(let i=0; i<arrayRutaMonoCaminandoDerecha.length;i++){
        this.arrayImagesMonoCaminandoDerecha.push(new Image());
        this.arrayImagesMonoCaminandoDerecha[i].src=arrayRutaMonoCaminandoDerecha[i];
        this.arrayImagesMonoCaminandoDerecha[i].onload = function(){
          console.log("Imagen monoCaminando derecha" + i + " cargada");
          this.draw(this.arrayImagesMonoCaminandoDerecha[0]);
        }.bind(this);
      }
    break;
    case this.monoCaminandoIzquierda:
      for(let i=0; i<arrayRutaMonoCaminandoIzquierda.length;i++){
        this.arrayImagesMonoCaminandoIzquierda.push(new Image());
        this.arrayImagesMonoCaminandoIzquierda[i].src=arrayRutaMonoCaminandoIzquierda[i];
        this.arrayImagesMonoCaminandoIzquierda[i].onload = function(){
          console.log("Imagen monoCaminando izquierda" + i + " cargada");
        }.bind(this);
      }
    break;
    case this.saltoDerecha:
      for(let i=0; i<arrayRutaSaltoDerecha.length;i++){
        this.arrayImagesSaltoDerecha.push(new Image());
        this.arrayImagesSaltoDerecha[i].src=arrayRutaSaltoDerecha[i];
        this.arrayImagesSaltoDerecha[i].onload = function(){
          console.log("Imagen salto derecha" + i + " cargada");
        }.bind(this);
      }
    break;
    case this.saltoIzquierda:
      for(let i=0; i<arrayRutaSaltoIzquierda.length;i++){
        this.arrayImagesSaltoIzquierda.push(new Image());
        this.arrayImagesSaltoIzquierda[i].src=arrayRutaSaltoIzquierda[i];
        this.arrayImagesSaltoIzquierda[i].onload = function(){
          console.log("Imagen salto izquierda" + i + " cargada");
        }.bind(this);
      }
    break;
    case this.caminaJefeDerecha:
      for(let i=0; i<arrayRutaCaminaJefeDerecha.length;i++){
        this.arrayImagesCaminaJefeDerecha.push(new Image());
        this.arrayImagesCaminaJefeDerecha[i].src=arrayRutaCaminaJefeDerecha[i];
        this.arrayImagesCaminaJefeDerecha[i].onload = function(){
          console.log("Imagen camina jefe derecha" + i + " cargada");
        }.bind(this);
      }
    break;
    case this.caminaJefeIzquierda:
      for(let i=0; i<arrayRutaCaminaJefeIzquierda.length;i++){
        this.arrayImagesCaminaJefeIzquierda.push(new Image());
        this.arrayImagesCaminaJefeIzquierda[i].src=arrayRutaCaminaJefeIzquierda[i];
        this.arrayImagesCaminaJefeIzquierda[i].onload = function(){
          console.log("Imagen camina jefe izquierda" + i + " cargada");
          this.draw(this.arrayImagesCaminaJefeIzquierda[0]);
        }.bind(this);
      }
    break;
    case this.golpeJefeDerecha:
      for(let i=0; i<arrayRutaGolpeJefeDerecha.length;i++){
        this.arrayImagesGolpeJefeDerecha.push(new Image());
        this.arrayImagesGolpeJefeDerecha[i].src=arrayRutaGolpeJefeDerecha[i];
        this.arrayImagesGolpeJefeDerecha[i].onload = function(){
          console.log("Imagen golpe jefe derecha" + i + " cargada");
        }.bind(this);
      }
    break;
    case this.golpeJefeIzquierda:
      for(let i=0; i<arrayRutaGolpeJefeIzquierda.length;i++){
        this.arrayImagesGolpeJefeIzquierda.push(new Image());
        this.arrayImagesGolpeJefeIzquierda[i].src=arrayRutaGolpeJefeIzquierda[i];
        this.arrayImagesGolpeJefeIzquierda[i].onload = function(){
          console.log("Imagen golpe jefe izquierda" + i + " cargada");
        }.bind(this);
      }
    break;
    case this.golpePisoDerecha:
      for(let i=0; i<arrayRutaGolpePisoDerecha.length;i++){
        this.arrayImagesGolpePisoDerecha.push(new Image());
        this.arrayImagesGolpePisoDerecha[i].src=arrayRutaGolpePisoDerecha[i];
        this.arrayImagesGolpePisoDerecha[i].onload = function(){
          console.log("Imagen golpe piso derecha" + i + " cargada");
        }.bind(this);
      }
    break;
    case this.golpePisoIzquierda:
      for(let i=0; i<arrayRutaGolpePisoIzquierda.length;i++){
        this.arrayImagesGolpePisoIzquierda.push(new Image());
        this.arrayImagesGolpePisoIzquierda[i].src=arrayRutaGolpePisoIzquierda[i];
        this.arrayImagesGolpePisoIzquierda[i].onload = function(){
          console.log("Imagen golpe piso izquierda" + i + " cargada");
        }.bind(this);
      }
    break;
    case this.muereJefeDerecha:
      for(let i=0; i<arrayRutaMuereJefeDerecha.length;i++){
        this.arrayImagesMuereJefeDerecha.push(new Image());
        this.arrayImagesMuereJefeDerecha[i].src=arrayRutaMuereJefeDerecha[i];
        this.arrayImagesMuereJefeDerecha[i].onload = function(){
          console.log("Imagen muere jefe derecha" + i + " cargada");
        }.bind(this);
      }
    break;
    case this.muereJefeIzquierda:
      for(let i=0; i<arrayRutaMuereJefeIzquierda.length;i++){
        this.arrayImagesMuereJefeIzquierda.push(new Image());
        this.arrayImagesMuereJefeIzquierda[i].src=arrayRutaMuereJefeIzquierda[i];
        this.arrayImagesMuereJefeIzquierda[i].onload = function(){
          console.log("Imagen muere jefe izquierda" + i + " cargada");
        }.bind(this);
      }
    break;
  }
}

//Dibuja Monkey
Monkey.prototype.draw=function(img){
   ctx.drawImage(img, this.x, this.y, this.width, this.height);
}

//Valida colisiones
Monkey.prototype.left=function(){
   return this.x;
}

Monkey.prototype.right=function(){
   return (this.x+(this.width-25));
}

Monkey.prototype.top=function(){
   return this.y+11;
}

Monkey.prototype.bottom=function(){
   return (this.y+this.height);
}

Monkey.prototype.dead = function(enemy) {
  return !((this.bottom() < enemy.top())    ||
           (this.top()    > enemy.bottom()) ||
           (this.right()  < enemy.left())   ||
           (this.left()   > enemy.right()));
}

//Ejecuta movimientos
Monkey.prototype.moveLeft=function(){
  this.x-=this.velocidadX;
}

Monkey.prototype.moveRight=function(){
  this.x+=this.velocidadX;
}
