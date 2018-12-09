addEventListener('keydown', function(e){
  switch(e.keyCode){
    case 37:
      keyPressedLeft=true;
    break;
    case 39:
      keyPressedRight=true;      
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

addEventListener('keyup', function(e){
  switch (e.keyCode){
    case 37:
      keyPressedLeft=false;
    break;
    case 39:
    keyPressedRight=false;
    break;
  }
});
