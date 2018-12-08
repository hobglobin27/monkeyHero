function gameOver() {
  for(let i=0; i<arregloGorilas.length; i++){
    if(arregloGorilas[i]!=null && monkeyHero.dead(arregloGorilas[i])){
      clearInterval(interval)
      interval = 0
      pintaGameOver();
    }
  }

  for(let i=0; i<arregloLoros.length; i++){
    if(arregloLoros[i]!=null && monkeyHero.dead(arregloLoros[i])){
      clearInterval(interval)
      interval = 0
      pintaGameOver();
    }
  }
}

function impactoBalasGorilas(){
  for(let i=0; i<monkeyHero.arregloBalas.length;i++){
    for(let j=0; j<arregloGorilas.length; j++){
      if(arregloGorilas[j]!=null && monkeyHero.arregloBalas[i]!=null && arregloGorilas[j].deadBala(monkeyHero.arregloBalas[i])){
        monkeyHero.puntos+=arregloGorilas[j].puntos;
        arregloGorilas[j]=null;
        monkeyHero.arregloBalas[i]=null;
        document.getElementById("audioImpacto").play();
      }
    }
  }
}

function impactoBalasLoros(){
  for(let i=0; i<monkeyHero.arregloBalas.length;i++){
    for(let j=0; j<arregloLoros.length; j++){
      if(arregloLoros[j]!=null && monkeyHero.arregloBalas[i]!=null && arregloLoros[j].deadBala(monkeyHero.arregloBalas[i])){
        monkeyHero.puntos+=arregloLoros[j].puntos;
        arregloLoros[j]=null;
        monkeyHero.arregloBalas[i]=null;
        document.getElementById("audioImpacto").play();
      }
    }
  }
}

function recogeFruta(){
  for(let i=0; i<arregloFrutas.length; i++){
    if(arregloFrutas[i]!=null && arregloFrutas[i].frutaTomada(monkeyHero)){
      monkeyHero.puntos+=arregloFrutas[i].puntosFruta;
      if(arregloFrutas[i].tipoFruta===3)
        monkeyHero.balas+=arregloFrutas[i].balasIfPlatanos;
      arregloFrutas[i]=null;
      document.getElementById("audioFruta").play();
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
  ctx.fillText("Player 1",200,30);
  ctx.fillText("Score:",110,57);
  ctx.fillText("Bullets:",110,82);
  ctx.fillText(monkeyHero.puntos,200,57);
  ctx.fillText(monkeyHero.balas,200,82);
}

function pintaReady(){
    ctx.drawImage(imageReady,450,0,readyWidth,readyHeight);
}

function pintaGameOver(){
  ctx.drawImage(imageGameOver,400,0,gameOverWidth,gameOverHeight);
  ctx.drawImage(imageEnter,350,450,400,100);
  document.getElementById("audioGameOver").play();
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
