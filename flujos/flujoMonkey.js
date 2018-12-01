window.onload = function () {
  monkeyHero.cargaImagen(monkeyHero.monoCaminandoDerecha);
  monkeyHero.cargaImagen(monkeyHero.monoCaminandoIzquierda);
  gorilaDer.cargaImagen(gorilaDer.gorilas1Derecha);
  gorilaIzq.cargaImagen(gorilaIzq.gorilas2Izquierda);
  function update(){
    frames++


    ctx.clearRect(0,0, canvas.width, canvas.height)
    //board.draw()

    //Mueve heroe
    if(monkeyHero.mueveDerecha)
      monkeyHero.draw(monkeyHero.arrayImagesMonoCaminandoDerecha[monkeyHero.contSecMovLeftRight]);
    else
      monkeyHero.draw(monkeyHero.arrayImagesMonoCaminandoIzquierda[monkeyHero.contSecMovLeftRight]);

    //Disparos Heroe
    for(let i=0; i<monkeyHero.arregloBalas.length;i++){
      if(monkeyHero.arregloBalas[i].mueveDerecha)
        monkeyHero.arregloBalas[i].moveRight();
      else
        monkeyHero.arregloBalas[i].moveLeft();
      monkeyHero.arregloBalas[i].draw();
    }

    //Mueve Gorila Izquierda
    if(frames%8===0)
      gorilaIzq.moveLeft();
    gorilaIzq.draw(gorilaIzq.arrayImagesGorilas2Izquierda[gorilaIzq.contSecMovLeftRight]);

    //Mueve Gorila Derecha
    if(frames%12===0)
      gorilaDer.moveRight();
    gorilaDer.draw(gorilaDer.arrayImagesGorilas1Derecha[gorilaDer.contSecMovLeftRight]);

    //gameOver()

  }

  function startGame(){
    interval = setInterval(update, 1000/60)
  }

  function gameOver() {
    if(monkeyHero.y < 0 || monkeyHero.y > canvas.height - monkeyHero.height || checkColition() ){
      console.log('perdistes wei')
      clearInterval(interval)
      interval = 0
      ctx.font = "30px Arial";
      ctx.fillText("Game Over",10,50);
    }
  }

  startGame()
}
