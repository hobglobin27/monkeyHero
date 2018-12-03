//Loro lado izquierdo
function Loros(posicionX, posicionY, width, height, velocidadX, velocidadY){
  this.x=posicionX;
  this.y=posicionY;
  this.width=width;
  this.height=height;
  this.velocidadX=velocidadX;
  this.velocidadY=velocidadY;
  
  //Flags acciones
  this.contSecMovLeftRight=0;

  //Banderas
  this.mueveDerecha=true;

  //Puntos Loro
  this.puntos=10;

  //Arreglo Movimientos
  this.arrayImagesLoros=[];
}

Loros.prototype.cargaImagen=function(tipoMovimiento){
  switch(tipoMovimiento){
    case 1:
      for(let i=0; i<arrayRutaLoroDerecha.length;i++){
        this.arrayImagesLoros.push(new Image());
        this.arrayImagesLoros[this.arrayImagesLoros.length-1].src=arrayRutaLoroDerecha[i];
        this.arrayImagesLoros[i].onload = function(){
          console.log("Imagen Loros derecha" + i + " cargada");
        }.bind(this);
      }
    break;
    case 2:
      for(let i=0; i<arrayRutaLoroIzquierda.length;i++){
        this.arrayImagesLoros.push(new Image());
        this.arrayImagesLoros[this.arrayImagesLoros.length-1].src=arrayRutaLoroIzquierda[i];
        this.arrayImagesLoros[i].onload = function(){
          console.log("Imagen Loros izquierda" + i + " cargada");
        }.bind(this);
      }
    break;
  }
}

//Ejecuta movimientos
Loros.prototype.moveRight=function(){
  this.x+=this.velocidadX;
  this.contSecMovLeftRight++;
  this.mueveDerecha=true;
  if(this.contSecMovLeftRight===this.arrayImagesLoros.length)
    this.contSecMovLeftRight=0;
}

Loros.prototype.moveLeft=function(){
  this.x-=this.velocidadX;
  this.contSecMovLeftRight++;
  this.mueveDerecha=false;
  if(this.contSecMovLeftRight===this.arrayImagesLoros.length)
    this.contSecMovLeftRight=0;
}


//Dibuja Loro
Loros.prototype.draw=function(img){
   ctx.drawImage(img, this.x, this.y, this.width, this.height);
}

//Valida colisiones
Loros.prototype.left=function(){
   return this.x;
}

Loros.prototype.right=function(){
   return (this.x+(this.width-25));
}

Loros.prototype.top=function(){
   return this.y+11;
}

Loros.prototype.bottom=function(){
   return (this.y+this.height);
}

Loros.prototype.deadBala = function(bala) {
  return !((this.bottom() < bala.top())    ||
           (this.top()    > bala.bottom()) ||
           (this.right()  < bala.left())   ||
           (this.left()   > bala.right()));
}
