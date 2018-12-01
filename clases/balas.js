//Balas platano
function Balas(posicionX, posicionY, width, height, velocidadX, mueveDerecha){
  this.x=posicionX;
  this.y=posicionY;
  this.width=width;
  this.height=height;
  this.velocidadX=velocidadX;
  this.mueveDerecha=mueveDerecha;

  //Imagen bala
  this.img =new Image();
  if(mueveDerecha)
    this.img.src=rutaBalasDerecha;
  else
    this.img.src=rutaBalasIzquierda;
  this.img.onload = function(){
    console.log("Imagen bala cargada");
    this.draw();
  }.bind(this);
}

//Dibuja balas
Balas.prototype.draw=function(){
   ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
}

//Ejecuta movimientos
Balas.prototype.moveLeft=function(){
  this.x-=this.velocidadX;
}

Balas.prototype.moveRight=function(){
  this.x+=this.velocidadX;
}