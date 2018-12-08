addEventListener('keydown', function(e){
  switch(e.keyCode){
    case 37:
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

      for(let i=0;i<arregloFrutas.length; i++)
        if(arregloFrutas[i]!==null)
          arregloFrutas[i].x+=monkeyHero.velocidadX;


      console.log('left',  monkeyHero);
    break;
    case 39:
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

      for(let i=0;i<arregloFrutas.length; i++)
        if(arregloFrutas[i]!==null)
          arregloFrutas[i].x-=monkeyHero.velocidadX;

      console.log('right', monkeyHero);
    break;
    case 83:
    case 115:
      monkeyHero.disparaBalas(balasWidth, balasHeight, balasVelocidad, monkeyHero.mueveDerecha);
      document.getElementById("audioDisparo").play()
      monkeyHero.disparando=true;
      if(!monkeyHero.saltando)
        monkeyHero.contSecMovLeftRight=0;
      console.log("dispara balas", monkeyHero);
    break;
    case 32:
      monkeyHero.saltando=true;
      if(monkeyHero.posicionInicialSalto===monkeyHero.y){
        monkeyHero.contSecMovLeftRight=0;
        monkeyHero.jump(monkeyHero.posicionInicialSalto);
      }
      document.getElementById("audioSalto").play();
    break;
    case 13:
      document.getElementById("principal").style.display="block";
      document.getElementById("monkey").style.display="none";
      document.getElementById("audioIntro").src="";
      document.getElementById("audioIntro").src="./audio/introMonkey.mp3";
      document.getElementById("audioIntro").play();
      document.getElementById("audioIntro").loop="true";
    break;
  }
});
