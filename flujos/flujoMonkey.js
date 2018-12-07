window.onload = function () {
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

  function update(){
    frames++;

    ctx.clearRect(0,0, canvas.width, canvas.height)
    board.draw()

//////////////////////////Funcionalidad MonkeyHera/////////////////////////
    //Mueve Heroe
    if(monkeyHero.mueveDerecha && !monkeyHero.saltando && !monkeyHero.disparando){
      monkeyHero.draw(monkeyHero.arrayImagesMonoCaminandoDerecha[monkeyHero.contSecMovLeftRight]);
    }
    else
      if(!monkeyHero.saltando && !monkeyHero.disparando){
        monkeyHero.draw(monkeyHero.arrayImagesMonoCaminandoIzquierda[monkeyHero.contSecMovLeftRight]);
      }

    //Salto Heroe
    if(monkeyHero.saltando){
      if(monkeyHero.mueveDerecha)
        monkeyHero.draw(monkeyHero.arrayImagesSaltoDerecha[monkeyHero.contSecMovLeftRight]);
      else {
        monkeyHero.draw(monkeyHero.arrayImagesSaltoIzquierda[monkeyHero.contSecMovLeftRight]);
      }
      monkeyHero.disparando=false
    }

    if(frames%2===0){
      if(monkeyHero.saltando){
        if(frames%14===0)
          monkeyHero.contSecMovLeftRight++;
        if(monkeyHero.contSecMovLeftRight===monkeyHero.arrayImagesSaltoDerecha.length)
          monkeyHero.contSecMovLeftRight=monkeyHero.arrayImagesSaltoDerecha.length-1;
        monkeyHero.jump(monkeyHero.posicionInicialSalto);
      }
    }

    //Disparos Heroe
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
      if(frames%8===0)
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


    //////////////////////////////Funcionalidad Gorilas/////////////////////////77

    //Crea Gorilas
    if(frames%480 === 0 || frames ===200){
      numeroEnemigos=generaAleatorio(1,5);
      for(let i=0; i<numeroEnemigos; i++){
        if(i%2===0){
          arregloGorilas.push(new GorilaDer(generaAleatorio(80,180)*-1,500,120,120,generaAleatorio(2,12),generaAleatorio(2,7)));
          arregloGorilas[arregloGorilas.length-1].cargaImagen(arregloGorilas[arregloGorilas.length-1].gorilas1Derecha);
          document.getElementById("audioGorila").play();
        }
        else {
          arregloGorilas.push(new GorilaIzq(generaAleatorio(1200,1300),500,120,120,generaAleatorio(2,12),generaAleatorio(2,7)));
          arregloGorilas[arregloGorilas.length-1].cargaImagen(arregloGorilas[arregloGorilas.length-1].gorilas2Izquierda);
          document.getElementById("audioGorila").play();
        }
      }
    }

    //Mueve gorilas
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

    //////////////////////////////Funcionalidad Loros/////////////////////////77

    //Crea Loros
    if(frames%1000 === 0 || frames ===100){
      numeroEnemigos=generaAleatorio(1,5);
      for(let i=0; i<numeroEnemigos; i++){
        if(i%2===0){
          arregloLoros.push(new Loros(generaAleatorio(80,180)*-1,generaAleatorio(300,450),50,50,generaAleatorio(2,12),generaAleatorio(2,7)));
          arregloLoros[arregloLoros.length-1].cargaImagen(1);
          arregloLoros[arregloLoros.length-1].mueveDerecha=true;
          document.getElementById("audioPajaro").play();
        }
        else {
          arregloLoros.push(new Loros(generaAleatorio(1200,1300),generaAleatorio(300,450),50,50,generaAleatorio(2,12),generaAleatorio(2,7)));
          arregloLoros[arregloLoros.length-1].cargaImagen(2);
          arregloLoros[arregloLoros.length-1].mueveDerecha=false;
          document.getElementById("audioPajaro").play();
        }
      }
    }

    //Mueve loros
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

    //////////////////////////////////Funcionalidad Frutas//////////////////////////

    //Crea Frutas
    if(frames%1000 === 0){
      numeroFrutas=generaAleatorio(1,5);
      for(let i=0; i<numeroFrutas; i++){
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
        }
        arregloFrutas.push(new Frutas(generaAleatorio(200,1000),0,tamañoFruta,tamañoFruta,generaAleatorio(2,15)));
        arregloFrutas[arregloFrutas.length-1].cargaImagen(tipoFruta);
        arregloFrutas[arregloFrutas.length-1].tipoFruta=tipoFruta;
      }
    }

    //Mueve frutas
    for(let i=0; i<arregloFrutas.length; i++){
      if(arregloFrutas[i]!=null){
        if(frames%12===0)
          arregloFrutas[i].moveDown();
        arregloFrutas[i].draw();
      }
    }

    //Pinta puntuacion y balas restantes
    pintaScore();

    //Valida impacto balas Gorilas
    impactoBalasGorilas();

    //Valida impacto balas Loros
    impactoBalasLoros();

    //Valida recoge Frutas
    recogeFruta();

/////////////////////////////////////Valida fin juego/////////////////////////////

    gameOver();

  }

  function startGame(){
    interval = setInterval(update, 1000/60)
  }

  document.getElementById("start").onclick = function() {
    document.getElementById("principal").style.display="none";
    document.getElementById("monkey").style.display="block";
    startGame();
  }

}
