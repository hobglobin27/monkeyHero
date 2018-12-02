window.onload = function () {
  monkeyHero.cargaImagen(monkeyHero.monoCaminandoDerecha);
  monkeyHero.cargaImagen(monkeyHero.monoCaminandoIzquierda);
  monkeyHero.cargaImagen(monkeyHero.saltoDerecha);
  monkeyHero.cargaImagen(monkeyHero.saltoIzquierda);

  function update(){
    frames++;

    ctx.clearRect(0,0, canvas.width, canvas.height)
    //board.draw()

//////////////////////////Funcionalidad MonkeyHera/////////////////////////
    //Mueve Heroe
    if(monkeyHero.mueveDerecha && !monkeyHero.saltando)
      monkeyHero.draw(monkeyHero.arrayImagesMonoCaminandoDerecha[monkeyHero.contSecMovLeftRight]);
    else
      if(!monkeyHero.saltando)
        monkeyHero.draw(monkeyHero.arrayImagesMonoCaminandoIzquierda[monkeyHero.contSecMovLeftRight]);

    //Salto Heroe
    if(monkeyHero.saltando)
      if(monkeyHero.mueveDerecha)
        monkeyHero.draw(monkeyHero.arrayImagesSaltoDerecha[monkeyHero.contSecMovLeftRight]);
      else {
        monkeyHero.draw(monkeyHero.arrayImagesSaltoIzquierda[monkeyHero.contSecMovLeftRight]);
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
      numeroEnemigos=generaAleatorio(1,4);
      for(let i=0; i<numeroEnemigos; i++){
        if(i%2===0){
          arregloGorilas.push(new GorilaDer(generaAleatorio(80,180)*-1,470,80,80,generaAleatorio(7,2),generaAleatorio(7,2)));
          arregloGorilas[arregloGorilas.length-1].cargaImagen(arregloGorilas[arregloGorilas.length-1].gorilas1Derecha);
        }
        else {
          arregloGorilas.push(new GorilaIzq(generaAleatorio(1200,1300),470,80,80,generaAleatorio(7,2),generaAleatorio(7,2)));
          arregloGorilas[arregloGorilas.length-1].cargaImagen(arregloGorilas[arregloGorilas.length-1].gorilas2Izquierda);
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

    //Valida impacto balas Gorilas
    impactoBalasGorilas();

/////////////////////////////////////Valida fin juego/////////////////////////////

    gameOver()

  }

  function startGame(){
    interval = setInterval(update, 1000/60)
  }

  function gameOver() {
    for(let i=0; i<arregloGorilas.length; i++){
      if(arregloGorilas[i]!=null && monkeyHero.dead(arregloGorilas[i])){
        clearInterval(interval)
        interval = 0
        ctx.font = "30px Arial";
        ctx.fillText("Game Over",10,50);
      }
    }
  }

  function impactoBalasGorilas(){
    for(let i=0; i<monkeyHero.arregloBalas.length;i++){
      for(let j=0; j<arregloGorilas.length; j++){
        if(arregloGorilas[j]!=null && monkeyHero.arregloBalas[i]!=null && arregloGorilas[j].deadBala(monkeyHero.arregloBalas[i])){
          arregloGorilas[j]=null;
          monkeyHero.arregloBalas[i]=null;
        }
      }
    }
  }

  function generaAleatorio(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
  }

  startGame()
}
