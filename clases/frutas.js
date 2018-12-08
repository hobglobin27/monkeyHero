function Frutas(posicionX, posicionY, width, height, velocidadY){
  this.x=posicionX;
  this.y=posicionY;
  this.width=width;
  this.height=height;
  this.velocidadY=velocidadY;
  this.puntosFruta;
  this.tipoFruta;

  //Constantes
  this.limon=0;
  this.pera=1;
  this.pinia=2;
  this.platanos=3;
  this.sandia=4;
  this.uvas=5;
  this.coco=6;
  this.balasIfPlatanos=50;

  //Imagen fruta
  this.img =new Image();
}

//Llena Imagene Fruta
Frutas.prototype.cargaImagen=function(fruta){
  switch(fruta){
    case this.limon:
      this.puntosFruta=10;
      this.img.src=arrayRutaFrutas[this.limon];
      this.img.onload = function(){
        console.log("Imagen Fruta limon cargada");
      }.bind(this);
    break;
    case this.pera:
      this.puntosFruta=15;
      this.img.src=arrayRutaFrutas[this.pera];
      this.img.onload = function(){
        console.log("Imagen Fruta pera cargada");
      }.bind(this);
    break;
    case this.pinia:
      this.puntosFruta=20;
      this.img.src=arrayRutaFrutas[this.pinia];
      this.img.onload = function(){
        console.log("Imagen Fruta pinia cargada");
      }.bind(this);
    break;
    case this.platanos:
      this.puntosFruta=0;
      this.img.src=arrayRutaFrutas[this.platanos];
      this.img.onload = function(){
        console.log("Imagen Fruta platanos cargada");
      }.bind(this);
    break;
    case this.sandia:
      this.puntosFruta=30;
      this.img.src=arrayRutaFrutas[this.sandia];
      this.img.onload = function(){
        console.log("Imagen Fruta sandia cargada");
      }.bind(this);
    break;
    case this.uvas:
      this.puntosFruta=25;
      this.img.src=arrayRutaFrutas[this.uvas];
      this.img.onload = function(){
        console.log("Imagen Fruta uvas cargada");
      }.bind(this);
    break;
    case this.coco:
      this.puntosFruta=0;
      this.img.src=arrayRutaFrutas[this.coco];
      this.img.onload = function(){
        console.log("Imagen Fruta coco cargada");
      }.bind(this);
    break;
  }
}

//Dibuja fruta
Frutas.prototype.draw=function(){
   ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
}

//Ejecuta movimientos
Frutas.prototype.moveDown=function(){
  this.y+=this.velocidadY;
}


//Valida colisiones
Frutas.prototype.left=function(){
   return this.x-10;
}

Frutas.prototype.right=function(){
   return this.x+(this.width-10);
}

Frutas.prototype.top=function(){
   return this.y+11;
}

Frutas.prototype.bottom=function(){
   return (this.y+this.height);
}

Frutas.prototype.frutaTomada = function(monkeyHero) {
  return !((this.bottom() < monkeyHero.top())    ||
           (this.top()    > monkeyHero.bottom()) ||
           (this.right()  < monkeyHero.left())   ||
           (this.left()   > monkeyHero.right()));
}
