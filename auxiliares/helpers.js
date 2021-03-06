/////////////////////Generales//////////////////////////////////////////////////
function gameOver() {
  for(let i=0; i<arregloGorilas.length; i++){
    if(arregloGorilas[i]!=null && monkeyHero.dead(arregloGorilas[i])){
      clearInterval(interval);
      interval = 0
      pintaGameOver();
    }
  }

  for(let i=0; i<arregloLoros.length; i++){
    if(arregloLoros[i]!=null && monkeyHero.dead(arregloLoros[i])){
      clearInterval(interval);
      interval = 0
      pintaGameOver();
    }
  }

  if(gorilaChief!=null && monkeyHero.dead(gorilaChief)){
    clearInterval(interval);
    interval = 0
    pintaGameOver();
  }

  if(cocosTime || controlEntroCocos){
    for(let i=0; i<arregloFrutas.length; i++){
      if(arregloFrutas[i]!=null && arregloFrutas[i].frutaTomada(monkeyHero)){
        clearInterval(interval);
        interval = 0
        pintaGameOver();
      }
    }
  }
}

function generaAleatorio(min, max){
  return Math.floor(Math.random() * (max - min)) + min;
}

function pintaScore(){
  ctx.drawImage(imageScore,0,0,scoreWidth,scoreHeight);
  ctx.font = "bold 20px Arial";
  ctx.fillStyle ="white";
  ctx.fillText("Cornelius",175,30);
  ctx.fillText("Score:",110,57);
  ctx.fillText("Bullets:",110,82);
  ctx.fillText(monkeyHero.puntos,200,57);
  ctx.fillText(monkeyHero.balas,200,82);
}

function pintaHealth(){
  ctx.drawImage(imageScoreChief,970,0,scoreWidth,scoreHeight);
  ctx.font = "bold 20px Arial";
  ctx.fillStyle ="white";
  ctx.fillText("Gorilla Grodd",1110,30);
  ctx.fillText("Health:",1085,57);
  ctx.fillText(gorilaChief.porcentajeHealth,1175,57);
  ctx.fillText("%",1210,57);
}

function pintaReady(){
    ctx.drawImage(imageReady,450,0,readyWidth,readyHeight);
}

function pintaGameOver(){
  ctx.drawImage(imageGameOver,400,0,gameOverWidth,gameOverHeight);
  ctx.drawImage(imageEnter,350,450,400,100);
  document.getElementById("audioGameOver").play();
}

function pintaImpactos(){
  for(let i=0;i<arregloImpactos.length;i++){
    if(arregloImpactos[i]!=null){
      if(arregloImpactos[i].tipo === tipoGorila)
        ctx.drawImage(imageImpacto2,arregloImpactos[i].posX,arregloImpactos[i].posY,90,90);
      else
        ctx.drawImage(imageImpacto1,arregloImpactos[i].posX,arregloImpactos[i].posY,45,45);
      arregloImpactos[i].time++;
      if(arregloImpactos[i].time>maxTimeImpacto)
        arregloImpactos[i]=null;
    }
  }
}

function cargaImagenes(){
  monkeyHero.cargaImagen(monkeyHero.monoCaminandoDerecha);
  monkeyHero.cargaImagen(monkeyHero.monoCaminandoIzquierda);
  monkeyHero.cargaImagen(monkeyHero.saltoDerecha);
  monkeyHero.cargaImagen(monkeyHero.saltoIzquierda);
  monkeyHero.cargaImagen(monkeyHero.ataque1Derecha);
  monkeyHero.cargaImagen(monkeyHero.ataque1Izquierda);

  imageScore.src="./images/Score/score.png";
  imageScore.onload=function(){
    console.log("Carga Imagen Score");
  };

  imageScoreChief.src="./images/Score/scoreChief.png";
  imageScoreChief.onload=function(){
    console.log("Carga Imagen Score Chief");
  };

  imageReady.src="./images/Fondos/ready.png";
  imageReady.onload=function(){
    console.log("Carga Imagen Ready");
  };

  imageGameOver.src="./images/Fondos/gameOver.png";
  imageGameOver.onload=function(){
    console.log("Carga Imagen Game Over");
  };

  imageEnter.src="./images/Fondos/enter.png";
  imageEnter.onload=function(){
    console.log("Carga Imagen Enter");
  };

  imageImpacto1.src="./images/Impactos/impacto1.png";
  imageImpacto1.onload=function(){
    console.log("Carga Imagen Impacto1");
  };

  imageImpacto2.src="./images/Impactos/impacto2.png";
  imageImpacto2.onload=function(){
    console.log("Carga Imagen Impacto2");
  };

  imageCocos.src="./images/Fondos/cocos.png";
  imageCocos.onload=function(){
    console.log("Carga Imagen Coconuts");
  };

  imageWar.src="./images/Fondos/thisWar.png";
  imageWar.onload=function(){
    console.log("Carga Imagen WAR");
  };

  imageLevel.src="./images/Fondos/levelComplete.png";
  imageLevel.onload=function(){
    console.log("Carga Imagen Level");
  };
}

function iniciaJuego(){
  interval, frames = 0;
  arregloGorilas = [];
  arregloFrutas = [];
  arregloLoros = [];
  arregloImpactos = [];
  numeroEnemigos = 0;
  numeroFrutas = 0;
  tipoFruta = 0;
  tamañoFruta = 0;
  monkeyHero.iniciaMonkey(monkeyHeroPosX,monkeyHeroPosY);
  keyPressedLeft=false;
  keyPressedRight=false;
  cocosTime=false;
  puntosCocosTime=0;
  controlEntroCocos=false;
  if(gorilaChief!=null)
    gorilaChief=null;
}

function iniciaCocosTime(){
  arregloGorilas = [];
  arregloLoros = [];
  arregloImpactos = [];
  arregloFrutas=[];
  numeroEnemigos = 0;
  numeroFrutas = 0;
  tipoFruta = 0;
  tamañoFruta = 0;
  frames=1;
  puntosCocosTime=0;
  controlEntroCocos=true;
}

function pintaCocos(){
  ctx.drawImage(imageCocos,420,0,readyWidth,readyHeight);
}

function pintaWar(){
  ctx.drawImage(imageWar,400,0,warWidth,warHeight);
}

function pintaLevelComplete(){
  ctx.drawImage(imageLevel,380,0,levelWidth,levelHeight);
}

document.getElementById("instructions").onclick = function() {
  document.getElementById("principal").style.display="none";
  document.getElementById("instructionsScreen").style.display="block";
  document.getElementById("audioIntro").src="";
  document.getElementById("audioIntro").src="./audio/introMonkey.mp3";
  document.getElementById("audioIntro").play();
  document.getElementById("audioIntro").loop="true";
}

document.getElementById("back").onclick = function() {
  document.getElementById("principal").style.display="block";
  document.getElementById("instructionsScreen").style.display="none";
  document.getElementById("audioIntro").src="";
  document.getElementById("audioIntro").src="./audio/introMonkey.mp3";
  document.getElementById("audioIntro").play();
  document.getElementById("audioIntro").loop="true";
}
////////////////////////////////////////////////////////////////////////////////

/////////////////////////////Movimientos Heroe//////////////////////////////////
function moveIfLeft(){
  monkeyHero.moveLeft();
  board.move(monkeyHero.mueveDerecha, monkeyHero.velocidadX);

  //Aleja cuando camina izquierda
  for(let i=0;i<arregloLoros.length; i++)
    if(arregloLoros[i]!==null && !arregloLoros[i].mueveDerecha)
      arregloLoros[i].x+=monkeyHero.velocidadX;

  for(let i=0;i<arregloGorilas.length; i++)
    if(arregloGorilas[i]!==null && arregloGorilas[i] instanceof GorilaIzq)
      arregloGorilas[i].x+=monkeyHero.velocidadX;

  for(let i=0; i<monkeyHero.arregloBalas.length;i++)
    if(monkeyHero.arregloBalas[i]!==null && !monkeyHero.mueveDerecha)
      if(monkeyHero.arregloBalas[i].mueveDerecha)
        monkeyHero.arregloBalas[i].x+=monkeyHero.velocidadX;

  //Acerca cuando camina izquierda
  for(let i=0;i<arregloLoros.length; i++)
    if(arregloLoros[i]!==null && arregloLoros[i].mueveDerecha)
      arregloLoros[i].x+=monkeyHero.velocidadX;

  for(let i=0;i<arregloGorilas.length; i++)
    if(arregloGorilas[i]!==null && arregloGorilas[i] instanceof GorilaDer)
      arregloGorilas[i].x+=monkeyHero.velocidadX;

  for(let i=0; i<monkeyHero.arregloBalas.length;i++)
    if(monkeyHero.arregloBalas[i]!==null && !monkeyHero.mueveDerecha)
      if(!monkeyHero.arregloBalas[i].mueveDerecha)
        monkeyHero.arregloBalas[i].x+=monkeyHero.velocidadX;

  for(let i=0;i<arregloFrutas.length; i++)
    if(arregloFrutas[i]!==null)
      arregloFrutas[i].x+=monkeyHero.velocidadX;

  for(let i=0;i<arregloImpactos.length; i++)
    if(arregloImpactos[i]!==null)
      arregloImpactos[i].posX+=monkeyHero.velocidadX;

  if(gorilaChief!==null){
    gorilaChief.x+=monkeyHero.velocidadX;
    golpeaPisoPosXIni+=monkeyHero.velocidadX;
  }

  console.log('left',  monkeyHero);
}

function moveIfRight(){
  monkeyHero.moveRight();
  board.move(monkeyHero.mueveDerecha, monkeyHero.velocidadX);

  //Aleja cuando camina derecha
  for(let i=0;i<arregloLoros.length; i++)
    if(arregloLoros[i]!==null && arregloLoros[i].mueveDerecha)
      arregloLoros[i].x-=monkeyHero.velocidadX;

  for(let i=0;i<arregloGorilas.length; i++)
    if(arregloGorilas[i]!==null && arregloGorilas[i] instanceof GorilaDer)
      arregloGorilas[i].x-=monkeyHero.velocidadX;

  for(let i=0; i<monkeyHero.arregloBalas.length;i++)
    if(monkeyHero.arregloBalas[i]!==null && monkeyHero.mueveDerecha)
      if(!monkeyHero.arregloBalas[i].mueveDerecha)
        monkeyHero.arregloBalas[i].x-=monkeyHero.velocidadX;

  //Acerca cuando camina derecha
  for(let i=0;i<arregloLoros.length; i++)
    if(arregloLoros[i]!==null && !arregloLoros[i].mueveDerecha)
      arregloLoros[i].x-=monkeyHero.velocidadX;

  for(let i=0;i<arregloGorilas.length; i++)
    if(arregloGorilas[i]!==null && arregloGorilas[i] instanceof GorilaIzq)
      arregloGorilas[i].x-=monkeyHero.velocidadX;

  for(let i=0; i<monkeyHero.arregloBalas.length;i++)
    if(monkeyHero.arregloBalas[i]!==null && monkeyHero.mueveDerecha)
      if(monkeyHero.arregloBalas[i].mueveDerecha)
        monkeyHero.arregloBalas[i].x-=monkeyHero.velocidadX;

  for(let i=0;i<arregloFrutas.length; i++)
    if(arregloFrutas[i]!==null)
      arregloFrutas[i].x-=monkeyHero.velocidadX;

  for(let i=0;i<arregloImpactos.length; i++)
    if(arregloImpactos[i]!==null)
      arregloImpactos[i].posX-=monkeyHero.velocidadX;

  if(gorilaChief!==null){
    gorilaChief.x-=monkeyHero.velocidadX;
    golpeaPisoPosXIni-=monkeyHero.velocidadX;
  }

  console.log('right', monkeyHero);
}

function mueveHeroe(){
  if(monkeyHero.mueveDerecha && !monkeyHero.saltando && !monkeyHero.disparando){
    monkeyHero.draw(monkeyHero.arrayImagesMonoCaminandoDerecha[monkeyHero.contSecMovLeftRight]);
  }
  else
    if(!monkeyHero.saltando && !monkeyHero.disparando){
      monkeyHero.draw(monkeyHero.arrayImagesMonoCaminandoIzquierda[monkeyHero.contSecMovLeftRight]);
    }
}

function saltoHeroe(){
  if(monkeyHero.saltando){
    if(monkeyHero.mueveDerecha)
      monkeyHero.draw(monkeyHero.arrayImagesSaltoDerecha[monkeyHero.contSecMovLeftRight]);
    else {
      monkeyHero.draw(monkeyHero.arrayImagesSaltoIzquierda[monkeyHero.contSecMovLeftRight]);
    }
    monkeyHero.disparando=false
  }

  if(frames%1===0){
    if(monkeyHero.saltando){
      if(frames%5===0)
        monkeyHero.contSecMovLeftRight++;
      if(monkeyHero.contSecMovLeftRight===monkeyHero.arrayImagesSaltoDerecha.length)
        monkeyHero.contSecMovLeftRight=monkeyHero.arrayImagesSaltoDerecha.length-1;
      monkeyHero.jump(monkeyHero.posicionInicialSalto);
    }
  }
}

function disparaHeroe(){
  if(monkeyHero.disparando && !monkeyHero.saltando)
    if(monkeyHero.mueveDerecha)
      monkeyHero.draw(monkeyHero.arrayImagesAtaque1Derecha[monkeyHero.contSecMovLeftRight]);
    else {
      monkeyHero.draw(monkeyHero.arrayImagesAtaque1Izquierda[monkeyHero.contSecMovLeftRight]);
    }

  if(monkeyHero.disparando && !monkeyHero.saltando){
    monkeyHero.width=80;
    monkeyHero.height=80;
    monkeyHero.y=540;
    if(frames%4===0)
      monkeyHero.contSecMovLeftRight++;
    if(monkeyHero.contSecMovLeftRight===monkeyHero.arrayImagesAtaque1Derecha.length){
      monkeyHero.contSecMovLeftRight=0;
      monkeyHero.disparando=false;
      monkeyHero.y=560;
    }
  }

  if(!monkeyHero.disparando){
    monkeyHero.width=60;
    monkeyHero.height=60;
  }

  for(let i=0; i<monkeyHero.arregloBalas.length;i++){
    if(monkeyHero.arregloBalas[i]!=null){
      if(monkeyHero.arregloBalas[i].mueveDerecha)
        monkeyHero.arregloBalas[i].moveRight();
      else
        monkeyHero.arregloBalas[i].moveLeft();
      monkeyHero.arregloBalas[i].draw();
    }
  }
}
////////////////////////////////////////////////////////////////////////////////

//////////////////////////Movimientos Gorilas///////////////////////////////////
function creaGorilas(){
  if(frames%480 === 0 || frames ===200){
    numeroEnemigos=generaAleatorio(2,6);
    for(let i=0; i<numeroEnemigos; i++){
      if(i%2===0){
        arregloGorilas.push(new GorilaDer(generaAleatorio(80,180)*-1,500,120,120,generaAleatorio(5,12),generaAleatorio(2,7)));
        arregloGorilas[arregloGorilas.length-1].cargaImagen(arregloGorilas[arregloGorilas.length-1].gorilas1Derecha);
        document.getElementById("audioGorila").play();
      }
      else {
        arregloGorilas.push(new GorilaIzq(generaAleatorio(1200,1300),500,120,120,generaAleatorio(5,12),generaAleatorio(2,7)));
        arregloGorilas[arregloGorilas.length-1].cargaImagen(arregloGorilas[arregloGorilas.length-1].gorilas2Izquierda);
        document.getElementById("audioGorila").play();
      }
    }
  }
}

function mueveGorilas(){
  for(let i=0; i<arregloGorilas.length; i++){
    if(arregloGorilas[i]!=null){
      if(arregloGorilas[i] instanceof GorilaIzq){
        if(frames%8===0)
          arregloGorilas[i].moveLeft();
        arregloGorilas[i].draw(arregloGorilas[i].arrayImagesGorilas2Izquierda[arregloGorilas[i].contSecMovLeftRight]);
      }
      if(arregloGorilas[i] instanceof GorilaDer){
        if(frames%12===0)
          arregloGorilas[i].moveRight();
        arregloGorilas[i].draw(arregloGorilas[i].arrayImagesGorilas1Derecha[arregloGorilas[i].contSecMovLeftRight]);
      }
    }
  }
}

function impactoBalasGorilas(){
  for(let i=0; i<monkeyHero.arregloBalas.length;i++){
    for(let j=0; j<arregloGorilas.length; j++){
      if(arregloGorilas[j]!=null && monkeyHero.arregloBalas[i]!=null && arregloGorilas[j].deadBala(monkeyHero.arregloBalas[i])){
        monkeyHero.puntos+=arregloGorilas[j].puntos;
        puntosCocosTime+=arregloGorilas[j].puntos;
        arregloImpactos.push(new Object);
        arregloImpactos[arregloImpactos.length-1].posX=arregloGorilas[j].x;
        arregloImpactos[arregloImpactos.length-1].posY=arregloGorilas[j].y;
        arregloImpactos[arregloImpactos.length-1].time=0;
        arregloImpactos[arregloImpactos.length-1].tipo=tipoGorila;
        arregloGorilas[j]=null;
        monkeyHero.arregloBalas[i]=null;
        document.getElementById("audioImpacto").play();
      }
    }
  }
}
////////////////////////////////////////////////////////////////////////////////

///////////////////////Movimientos Loros////////////////////////////////////////
function creaLoros(){
  if(frames%1000 === 0 || frames ===100){
    numeroEnemigos=generaAleatorio(2,6);
    for(let i=0; i<numeroEnemigos; i++){
      if(i%2===0){
        arregloLoros.push(new Loros(generaAleatorio(80,180)*-1,generaAleatorio(300,450),50,50,generaAleatorio(5,12),generaAleatorio(2,7)));
        arregloLoros[arregloLoros.length-1].cargaImagen(1);
        arregloLoros[arregloLoros.length-1].mueveDerecha=true;
        document.getElementById("audioPajaro").play();
      }
      else {
        arregloLoros.push(new Loros(generaAleatorio(1200,1300),generaAleatorio(300,450),50,50,generaAleatorio(5,12),generaAleatorio(2,7)));
        arregloLoros[arregloLoros.length-1].cargaImagen(2);
        arregloLoros[arregloLoros.length-1].mueveDerecha=false;
        document.getElementById("audioPajaro").play();
      }
    }
  }
}

function mueveLoros(){
  for(let i=0; i<arregloLoros.length; i++){
    if(arregloLoros[i]!=null){
      if(!arregloLoros[i].mueveDerecha){
        if(frames%8===0)
          arregloLoros[i].moveLeft();
        arregloLoros[i].draw(arregloLoros[i].arrayImagesLoros[arregloLoros[i].contSecMovLeftRight]);
      }
      if(arregloLoros[i].mueveDerecha){
        if(frames%8===0)
          arregloLoros[i].moveRight();
        arregloLoros[i].draw(arregloLoros[i].arrayImagesLoros[arregloLoros[i].contSecMovLeftRight]);
      }
    }
  }
}

function impactoBalasLoros(){
  for(let i=0; i<monkeyHero.arregloBalas.length;i++){
    for(let j=0; j<arregloLoros.length; j++){
      if(arregloLoros[j]!=null && monkeyHero.arregloBalas[i]!=null && arregloLoros[j].deadBala(monkeyHero.arregloBalas[i])){
        monkeyHero.puntos+=arregloLoros[j].puntos;
        puntosCocosTime+=arregloLoros[j].puntos;
        arregloImpactos.push(new Object);
        arregloImpactos[arregloImpactos.length-1].posX=arregloLoros[j].x;
        arregloImpactos[arregloImpactos.length-1].posY=arregloLoros[j].y;
        arregloImpactos[arregloImpactos.length-1].time=0;
        arregloImpactos[arregloImpactos.length-1].tipo=tipoPajaro;
        arregloLoros[j]=null;
        monkeyHero.arregloBalas[i]=null;
        document.getElementById("audioImpacto").play();
      }
    }
  }
}
////////////////////////////////////////////////////////////////////////////////

/////////////////////////Movimientos Frutas/////////////////////////////////////
function creaFrutas(){
  let interFrutas=1000;
  if(cocosTime)
    interFrutas=50;
  if(frames%interFrutas === 0){
    if(!cocosTime)
      numeroFrutas=generaAleatorio(1,5);
    else
      numeroFrutas=generaAleatorio(4,9);
    for(let i=0; i<numeroFrutas; i++){
      if(cocosTime)
        tipoFruta=6;
      else
        tipoFruta=generaAleatorio(0,6);
      switch(tipoFruta){
        case 0:
          tamañoFruta=30;
        break;
        case 1:
          tamañoFruta=40;
        break;
        case 2:
          tamañoFruta=50;
        break;
        case 3:
          tamañoFruta=50;
        break;
        case 4:
          tamañoFruta=55;
        break;
        case 5:
          tamañoFruta=50;
        break;
        case 6:
          tamañoFruta=45;
        break;
      }
      if(!cocosTime)
        arregloFrutas.push(new Frutas(generaAleatorio(200,1000),0,tamañoFruta,tamañoFruta,generaAleatorio(5,15)));
      if(cocosTime)
        arregloFrutas.push(new Frutas(generaAleatorio(-200,1470),0,tamañoFruta,tamañoFruta,generaAleatorio(10,20)));
      arregloFrutas[arregloFrutas.length-1].cargaImagen(tipoFruta);
      arregloFrutas[arregloFrutas.length-1].tipoFruta=tipoFruta;
    }
  }
}

function mueveFrutas(){
  for(let i=0; i<arregloFrutas.length; i++){
    let interFrutas=12;
    if(cocosTime)
      interFrutas=2;
    if(arregloFrutas[i]!=null){
      if(frames%interFrutas===0)
        arregloFrutas[i].moveDown();
      arregloFrutas[i].draw();
    }
  }
}

function recogeFruta(){
  for(let i=0; i<arregloFrutas.length; i++){
    if(arregloFrutas[i]!=null && arregloFrutas[i].frutaTomada(monkeyHero)){
      monkeyHero.puntos+=arregloFrutas[i].puntosFruta;
      puntosCocosTime+=arregloFrutas[i].puntosFruta;
      if(arregloFrutas[i].tipoFruta===3)
        monkeyHero.balas+=arregloFrutas[i].balasIfPlatanos;
      arregloFrutas[i]=null;
      document.getElementById("audioFruta").play();
    }
  }
}

function creaCocos(){
  numeroFrutas=generaAleatorio(8,13);
  tipoFruta=6;
  for(let i=0; i<numeroFrutas; i++){
    tamañoFruta=45;
    arregloFrutas.push(new Frutas(generaAleatorio(-200,1470),0,tamañoFruta,tamañoFruta,generaAleatorio(10,20)));
    arregloFrutas[arregloFrutas.length-1].cargaImagen(tipoFruta);
    arregloFrutas[arregloFrutas.length-1].tipoFruta=tipoFruta;
  }
}

function mueveCocos(){
  for(let i=0; i<arregloFrutas.length; i++){
    let interFrutas=2;
    if(arregloFrutas[i]!=null){
      if(frames%interFrutas===0)
        arregloFrutas[i].moveDown();
      arregloFrutas[i].draw();
    }
  }
}
////////////////////////////////////////////////////////////////////////////////

//////////////////////////Movimientos Gorila Chief//////////////////////////////
function creaGorilaChief(){
  gorilaChief=new GorilaChief(gorilaChiefPosX, gorilaChiefPosY, gorilaChiefWidth, gorilaChiefHeight, gorilaChiefVelX, gorilaChiefVelY);
  gorilaChief.cargaImagen(gorilaChief.caminaJefeIzquierda);
  gorilaChief.cargaImagen(gorilaChief.caminaJefeDerecha);
  gorilaChief.cargaImagen(gorilaChief.golpeJefeIzquierda);
  gorilaChief.cargaImagen(gorilaChief.golpeJefeDerecha);
  gorilaChief.cargaImagen(gorilaChief.golpePisoIzquierda);
  gorilaChief.cargaImagen(gorilaChief.golpePisoDerecha);
  gorilaChief.cargaImagen(gorilaChief.golpeJefeIzquierda);
  gorilaChief.cargaImagen(gorilaChief.golpeJefeDerecha);
}

function mueveGorilaChief(){
  /////////////////////Mueve Izquierda//////////////////////////////////////////
  if(monkeyHero.x<=gorilaChief.x && gorilaChief.siCamina){
    gorilaChief.width=gorilaChiefWidth;
    gorilaChief.height=gorilaChiefHeight;
    gorilaChief.y=gorilaChiefPosY;

    if(frames%4===0)
      gorilaChief.moveLeft();
    golpeaPisoPosXIni=gorilaChief.x;
    if((gorilaChief.contSecMovLeftRight===0 ||
      gorilaChief.contSecMovLeftRight===gorilaChief.arrayImagesCaminaJefeIzquierda.length-1) &&
      frames%8===0)
      document.getElementById("audioGorila").play();
    gorilaChief.draw(gorilaChief.arrayImagesCaminaJefeIzquierda[gorilaChief.contSecMovLeftRight]);
    if(frames%256===0){
      gorilaChief.siGolpeaPiso=true;
      gorilaChief.siCamina=false;
      gorilaChief.contSecMovLeftRight=0;
      frames++;
    }
  }

  if(monkeyHero.x<=gorilaChief.x && gorilaChief.siGolpeaPiso){
    if(gorilaChief.contSecMovLeftRight===0){
      gorilaChief.width=154;
      gorilaChief.height=212;
      gorilaChief.y=408;
      golpeaPisoPosXIni=gorilaChief.x
    }

    if(gorilaChief.contSecMovLeftRight===1){
      gorilaChief.width=120;
      gorilaChief.height=202;
      gorilaChief.y=418;
      golpeaPisoPosXIni=gorilaChief.x;
    }

    if(gorilaChief.contSecMovLeftRight===2){
      gorilaChief.width=206;
      gorilaChief.height=110;
      gorilaChief.y=510;
      gorilaChief.x=golpeaPisoPosXIni+120/2;
      gorilaChief.x-=gorilaChief.width/2;
      if(frames%8)
        document.getElementById("audioGolpePiso").play();
    }

    if(gorilaChief.contSecMovLeftRight===3){
      gorilaChief.width=284;
      gorilaChief.height=90;
      gorilaChief.y=530;
      gorilaChief.x=golpeaPisoPosXIni+120/2;
      gorilaChief.x-=gorilaChief.width/2;
    }

    if(gorilaChief.contSecMovLeftRight===4){
      gorilaChief.width=338;
      gorilaChief.height=90;
      gorilaChief.y=530;
      gorilaChief.x=golpeaPisoPosXIni+120/2;
      gorilaChief.x-=gorilaChief.width/2;
    }

    if(gorilaChief.contSecMovLeftRight===5){
      gorilaChief.width=376;
      gorilaChief.height=116;
      gorilaChief.y=504;
      gorilaChief.x=golpeaPisoPosXIni+120/2;
      gorilaChief.x-=gorilaChief.width/2;
    }

    if(gorilaChief.contSecMovLeftRight===6){
      gorilaChief.width=122;
      gorilaChief.height=126;
      gorilaChief.y=494;
      gorilaChief.x=golpeaPisoPosXIni+120/2;
      gorilaChief.x-=gorilaChief.width/2;
    }

    gorilaChief.draw(gorilaChief.arrayImagesGolpePisoIzquierda[gorilaChief.contSecMovLeftRight]);
    if(frames%8===0)
      gorilaChief.contSecMovLeftRight++;
    if(gorilaChief.arrayImagesGolpePisoIzquierda.length === gorilaChief.contSecMovLeftRight){
      gorilaChief.siGolpeaPiso=false;
      gorilaChief.siCamina=true;
      gorilaChief.contSecMovLeftRight=0;
      frames++;
      creaCocos();
    }
  }
  //////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////Mueve Derecha/////////////////////////////////
  if(monkeyHero.x>=gorilaChief.x && gorilaChief.siCamina){
    gorilaChief.width=gorilaChiefWidth;
    gorilaChief.height=gorilaChiefHeight;
    gorilaChief.y=gorilaChiefPosY;

    if(frames%4===0)
      gorilaChief.moveRight();
    golpeaPisoPosXIni=gorilaChief.x;
    if((gorilaChief.contSecMovLeftRight===0 ||
      gorilaChief.contSecMovLeftRight===gorilaChief.arrayImagesCaminaJefeDerecha.length-1) &&
      frames%8===0)
      document.getElementById("audioGorila").play();
    gorilaChief.draw(gorilaChief.arrayImagesCaminaJefeDerecha[gorilaChief.contSecMovLeftRight]);
    if(frames%256===0){
      gorilaChief.siGolpeaPiso=true;
      gorilaChief.siCamina=false;
      gorilaChief.contSecMovLeftRight=0;
      frames++;
    }
  }

  if(monkeyHero.x>=gorilaChief.x && gorilaChief.siGolpeaPiso){
    if(gorilaChief.contSecMovLeftRight===0){
      gorilaChief.width=154;
      gorilaChief.height=212;
      gorilaChief.y=408;
    }

    if(gorilaChief.contSecMovLeftRight===1){
      gorilaChief.width=120;
      gorilaChief.height=202;
      gorilaChief.y=418;
      golpeaPisoPosXIni=gorilaChief.x;
    }

    if(gorilaChief.contSecMovLeftRight===2){
      gorilaChief.width=206;
      gorilaChief.height=110;
      gorilaChief.y=510;
      gorilaChief.x=golpeaPisoPosXIni+120/2;
      gorilaChief.x-=gorilaChief.width/2;
    }

    if(gorilaChief.contSecMovLeftRight===3){
      gorilaChief.width=284;
      gorilaChief.height=90;
      gorilaChief.y=530;
      gorilaChief.x=golpeaPisoPosXIni+120/2;
      gorilaChief.x-=gorilaChief.width/2;
    }

    if(gorilaChief.contSecMovLeftRight===4){
      gorilaChief.width=338;
      gorilaChief.height=90;
      gorilaChief.y=530;
      gorilaChief.x=golpeaPisoPosXIni+120/2;
      gorilaChief.x-=gorilaChief.width/2;
    }

    if(gorilaChief.contSecMovLeftRight===5){
      gorilaChief.width=376;
      gorilaChief.height=116;
      gorilaChief.y=504;
      gorilaChief.x=golpeaPisoPosXIni+120/2;
      gorilaChief.x-=gorilaChief.width/2;
    }

    if(gorilaChief.contSecMovLeftRight===6){
      gorilaChief.width=122;
      gorilaChief.height=126;
      gorilaChief.y=494;
      gorilaChief.x=golpeaPisoPosXIni+120/2;
      gorilaChief.x-=gorilaChief.width/2;
    }

    gorilaChief.draw(gorilaChief.arrayImagesGolpePisoDerecha[gorilaChief.contSecMovLeftRight]);
    if(frames%8===0)
      gorilaChief.contSecMovLeftRight++;
    if(gorilaChief.arrayImagesGolpePisoDerecha.length === gorilaChief.contSecMovLeftRight){
      gorilaChief.siGolpeaPiso=false;
      gorilaChief.siCamina=true;
      gorilaChief.contSecMovLeftRight=0;
      frames++;
      creaCocos();
    }
  }
}

function impactoBalasGorilaChief(){
  for(let i=0; i<monkeyHero.arregloBalas.length;i++){
    if(gorilaChief!=null && monkeyHero.arregloBalas[i]!=null && gorilaChief.deadBala(monkeyHero.arregloBalas[i])){
      gorilaChief.health--;
      gorilaChief.porcentajeHealth=gorilaChief.health*100/gorilaChief.maxHealth;
      arregloImpactos.push(new Object);
      arregloImpactos[arregloImpactos.length-1].posX=golpeaPisoPosXIni-20;
      if(monkeyHero.x>gorilaChief.x)
        arregloImpactos[arregloImpactos.length-1].posX=golpeaPisoPosXIni+60;
      arregloImpactos[arregloImpactos.length-1].posY=620-110;
      arregloImpactos[arregloImpactos.length-1].time=0;
      arregloImpactos[arregloImpactos.length-1].tipo=tipoGorila;
      if(gorilaChief.health<=0){
        monkeyHero.puntos+=gorilaChief.puntos;
        pintaHealth();
        gorilaChief=null;
        clearInterval(interval);
        interval = 0
        pintaLevelComplete();
      }
      monkeyHero.arregloBalas[i]=null;
      document.getElementById("audioImpacto").play();
    }
  }
}
