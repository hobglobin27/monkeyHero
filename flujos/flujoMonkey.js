window.onload = function () {
  cargaImagenes();

  function update(){
    frames++;
    ctx.clearRect(0,0, canvas.width, canvas.height);
    board.draw();

    if(!cocosTime  && puntosCocosTime>=200 && !controlEntroCocos){
      cocosTime=true;
      document.getElementById("audioGolpePiso").play();
      iniciaCocosTime();
    }

    if(cocosTime){
      //////////////////////////Funcionalidad MonkeyHero////////////////////////
      //Mueve Heroe
      if(keyPressedRight)
        moveIfRight();

      if(keyPressedLeft)
        moveIfLeft();

      mueveHeroe();

      //Salto Heroe
      saltoHeroe();

      //Disparos Heroe
      disparaHeroe();

      ////////////////////////////////Funcionalidad Score///////////////////////
      //Pinta puntuacion y balas restantes
      pintaScore();

      //////////////////////////////////Funcionalidad Frutas////////////////////
      if(frames>128){
        //Crea Frutas
        creaFrutas();

        //Mueve frutas
        mueveFrutas();

        //Valida recoge Frutas
        //recogeFruta();
      }

      //////////////////////////////Pinta Cocos/////////////////////////////////
      if(frames>=0 && frames <=128){
        pintaCocos();
      }

      if(frames%2000===0){
        cocosTime=false;
        iniciaCocosTime();
      }
    }

    if(!cocosTime && !controlEntroCocos){
      //////////////////////////Funcionalidad MonkeyHero////////////////////////
      //Mueve Heroe
      if(keyPressedRight)
        moveIfRight();

      if(keyPressedLeft)
        moveIfLeft();

      mueveHeroe();

      //Salto Heroe
      saltoHeroe();

      //Disparos Heroe
      disparaHeroe();

      //////////////////////////////Funcionalidad Gorilas///////////////////////
      //Crea Gorilas
      creaGorilas();

      //Mueve gorilas
      mueveGorilas();

      //////////////////////////////Funcionalidad Loros/////////////////////////
      //Crea Loros
      creaLoros();

      //Mueve loros
      mueveLoros();

      //////////////////////////////////Funcionalidad Frutas////////////////////
      //Crea Frutas
      creaFrutas();

      //Mueve frutas
      mueveFrutas();

      //Valida recoge Frutas
      recogeFruta();

      ////////////////////////////////Funcionalidad Score///////////////////////
      //Pinta puntuacion y balas restantes
      pintaScore();

      ///////////////////////////////Funcionalidad Impactos/////////////////////
      //Valida impacto balas Gorilas
      impactoBalasGorilas();

      //Valida impacto balas Loros
      impactoBalasLoros();

      //Pinta Impactos
      pintaImpactos();

      //////////////////////////////Pinta Ready/////////////////////////////////
      if(frames>=0 && frames <=128 && !controlEntroCocos){
        pintaReady();
      }
    }

    if(!cocosTime && controlEntroCocos){
      //////////////////////////////Pinta WAR/////////////////////////////////
      if(frames>=0 && frames <=128){
        pintaWar();
      }

      //////////////////////////Funcionalidad MonkeyHero////////////////////////
      //Mueve Heroe
      if(keyPressedRight)
        moveIfRight();

      if(keyPressedLeft)
        moveIfLeft();

      mueveHeroe();

      //Salto Heroe
      saltoHeroe();

      //Disparos Heroe
      disparaHeroe();

      //////////////////////////////Funcionalidad Gorila Chief//////////////////
      //Crea GorilaChief
      if(gorilaChief===null)
        creaGorilaChief();

      //Mueve gorilas
      mueveGorilaChief();

      /////////////////////////////Funcionalidad Cocos//////////////////////////
      mueveCocos();

      //////////////////////////////Funcionalidad Loros/////////////////////////
      //Crea Loros
      creaLoros();

      //Mueve loros
      mueveLoros();

      ///////////////////////////////Funcionalidad Impactos/////////////////////
      //Valida impacto balas Loros
      impactoBalasLoros();

      ////////////////////////////////Funcionalidad Score///////////////////////
      //Pinta puntuacion y balas restantes
      pintaScore();

      ////////////////////////////////Funcionalidad Health Gorila///////////////
      //Pinta health Gorila
      pintaHealth();

      ///////////////////////////////Funcionalidad Impactos/////////////////////
      //Valida impacto balas Gorilas
      impactoBalasGorilaChief();

      //Pinta Impactos
      pintaImpactos();

    }
    /////////////////////////////////////Valida fin juego///////////////////////
    gameOver();
  }

  function startGame(){
    interval = setInterval(update, 1000/60)
  }

  document.getElementById("start").onclick = function() {
    document.getElementById("principal").style.display="none";
    document.getElementById("monkey").style.display="block";
    document.getElementById("audioIntro").src="";
    document.getElementById("audioIntro").src="./audio/introMonkey.mp3";
    document.getElementById("audioIntro").play();
    document.getElementById("audioIntro").loop="true";
    document.getElementById("audioFight").play();
    iniciaJuego();
    startGame();
  }
}
