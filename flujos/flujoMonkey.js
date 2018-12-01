window.onload = function () {
  monkeyHero.cargaImagen(monkeyHero.monoCaminandoDerecha);
  monkeyHero.cargaImagen(monkeyHero.monoCaminandoIzquierda);
  monkeyHero.cargaImagen(monkeyHero.saltoDerecha);
  monkeyHero.cargaImagen(monkeyHero.saltoIzquierda);
  gorilaDer.cargaImagen(gorilaDer.gorilas1Derecha);
  gorilaIzq.cargaImagen(gorilaIzq.gorilas2Izquierda);

  function update(){
    frames++;

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
        monkeyHero.arregloBalas[i].draw();
      }
    }

    if(frames%480 === 0){
      numeroEnemigos=Math.floor(Math.random()*3);
      for(let i=0; i<numeroEnemigos; i++){
        if(i%2===0){
          arregloGorilas.push(new GorilaDer(getAleatorioPosicion(80,180)*-1,470,80,80,getAleatorioVelocidad(7,2),getAleatorioVelocidad(7,2)));
          arregloGorilas[arregloGorilas.length-1].cargaImagen(arregloGorilas[arregloGorilas.length-1].gorilas1Derecha);
        }
        else {
          arregloGorilas.push(new GorilaIzq(getAleatorioPosicion(1200,1300),470,80,80,getAleatorioVelocidad(7,2),getAleatorioVelocidad(7,2)));
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

    //Mueve Gorila Izquierda
    /*if(gorilaIzq!=null){
      if(frames%8===0)
        gorilaIzq.moveLeft();
      gorilaIzq.draw(gorilaIzq.arrayImagesGorilas2Izquierda[gorilaIzq.contSecMovLeftRight]);
    }

    //Mueve Gorila Derecha
    if(gorilaDer!=null){
      if(frames%12===0)
        gorilaDer.moveRight();
      gorilaDer.draw(gorilaDer.arrayImagesGorilas1Derecha[gorilaDer.contSecMovLeftRight]);
    }*/

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
      for(let j=0; j<arregloGorilas.length; j++){
        if(arregloGorilas[j]!=null && monkeyHero.arregloBalas[i]!=null && arregloGorilas[j].deadBala(monkeyHero.arregloBalas[i])){
          arregloGorilas[i]=null;
          monkeyHero.arregloBalas[i]=null;
        }

        /*if(gorilaIzq!=null && monkeyHero.arregloBalas[i]!=null && gorilaIzq.deadBala(monkeyHero.arregloBalas[i])){
          gorilaIzq=null;
          monkeyHero.arregloBalas[i]=null;
        }*/
      }
    }
  }

  function getAleatorioVelocidad(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function getAleatorioPosicion(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
  }

  startGame()
}
