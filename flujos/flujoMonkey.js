window.onload = function () {
  monkeyHero.cargaImagen(monkeyHero.monoCaminandoDerecha);
  monkeyHero.cargaImagen(monkeyHero.monoCaminandoIzquierda);
  monkeyHero.cargaImagen(monkeyHero.saltoDerecha);
  monkeyHero.cargaImagen(monkeyHero.saltoIzquierda);
  gorilaDer.cargaImagen(gorilaDer.gorilas1Derecha);
  gorilaIzq.cargaImagen(gorilaIzq.gorilas2Izquierda);
  function update(){
    frames++


    ctx.clearRect(0,0, canvas.width, canvas.height)
    //board.draw()

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
        monkeyHero.arregloBalas[i].draw();7
      }
    }

    //Mueve Gorila Izquierda
    if(gorilaIzq!=null){
      if(frames%8===0)
        gorilaIzq.moveLeft();
      gorilaIzq.draw(gorilaIzq.arrayImagesGorilas2Izquierda[gorilaIzq.contSecMovLeftRight]);
    }

    //Mueve Gorila Derecha
    if(gorilaDer!=null){
      if(frames%12===0)
        gorilaDer.moveRight();
      gorilaDer.draw(gorilaDer.arrayImagesGorilas1Derecha[gorilaDer.contSecMovLeftRight]);
    }

    //Valida impacto Gorilas
    impactoGorilas();

    gameOver()

  }

  function startGame(){
    interval = setInterval(update, 1000/60)
  }

  function gameOver() {
    if(gorilaDer!=null && monkeyHero.dead(gorilaDer)){
      clearInterval(interval)
      interval = 0
      ctx.font = "30px Arial";
      ctx.fillText("Game Over",10,50);
    }

    if(gorilaIzq!=null && monkeyHero.dead(gorilaIzq)){
      clearInterval(interval)
      interval = 0
      ctx.font = "30px Arial";
      ctx.fillText("Game Over",10,50);
    }
  }

  function impactoGorilas(){
    for(let i=0; i<monkeyHero.arregloBalas.length;i++){
      if(gorilaDer!=null && monkeyHero.arregloBalas[i]!=null && gorilaDer.deadBala(monkeyHero.arregloBalas[i])){
        gorilaDer=null;
        monkeyHero.arregloBalas[i]=null;
      }

      if(gorilaIzq!=null && monkeyHero.arregloBalas[i]!=null && gorilaIzq.deadBala(monkeyHero.arregloBalas[i])){
        gorilaIzq=null;
        monkeyHero.arregloBalas[i]=null;
      }
    }
  }

  startGame()
}
