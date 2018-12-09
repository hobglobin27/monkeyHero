window.onload = function () {
  cargaImagenes();

  function update(){
    frames++;
    ctx.clearRect(0,0, canvas.width, canvas.height)
    board.draw()
//////////////////////////Funcionalidad MonkeyHero/////////////////////////
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
    //////////////////////////////Funcionalidad Gorilas/////////////////////////77
    //Crea Gorilas
    creaGorilas();

    //Mueve gorilas
    mueveGorilas();
    //////////////////////////////Funcionalidad Loros/////////////////////////77
    //Crea Loros
    creaLoros();

    //Mueve loros
    mueveLoros();
    //////////////////////////////////Funcionalidad Frutas//////////////////////////
    //Crea Frutas
    creaFrutas();

    //Mueve frutas
    mueveFrutas();

    //Valida recoge Frutas
    recogeFruta();

    ////////////////////////////////Funcionalidad Score//////////////////////////
    //Pinta puntuacion y balas restantes
    pintaScore();

    ///////////////////////////////Funcionalidad Impactos///////////////////////
    //Valida impacto balas Gorilas
    impactoBalasGorilas();

    //Valida impacto balas Loros
    impactoBalasLoros();

    //Pinta Impactos
    pintaImpactos();

    //////////////////////////////Pinta Ready////////////////////////////////////
    if(frames>=0 && frames <=128){
      pintaReady();
    }
/////////////////////////////////////Valida fin juego/////////////////////////////

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
