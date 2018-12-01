
addEventListener('keydown', function(e){
  switch(e.keyCode){
    case 37:
      monkeyHero.moveLeft();
      console.log('left',  monkeyHero);
    break;
    case 39:
      monkeyHero.moveRight();
      console.log('right', monkeyHero);
    break;
    case 83:
    case 115:
      monkeyHero.disparaBalas(balasWidth, balasHeight, balasVelocidad, monkeyHero.mueveDerecha);
      console.log("dispara balas", monkeyHero)
    break;
    case 32:
      monkeyHero.saltando=true;
      if(monkeyHero.posicionInicialSalto===monkeyHero.y){
        monkeyHero.contSecMovLeftRight=0;
        monkeyHero.jump(monkeyHero.posicionInicialSalto);
      }
    break;
  }
})
