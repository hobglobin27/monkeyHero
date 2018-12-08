$(document).ready(function(){
  document.getElementById("start").onmouseover = function() {
      document.getElementById("start").src="./images/Fondos/startSubrayado.png";
  };

  document.getElementById("start").onmouseout = function() {
      document.getElementById("start").src="./images/Fondos/start.png";
  };

  document.getElementById("instructions").onmouseover = function() {
      document.getElementById("instructions").src="./images/Fondos/instructionsSubrayado.png";
  };

  document.getElementById("instructions").onmouseout = function() {
      document.getElementById("instructions").src="./images/Fondos/instructions.png";
  };

  document.getElementById("bestPlayers").onmouseover = function() {
      document.getElementById("bestPlayers").src="./images/Fondos/bestPlayersSubrayado.png";
  };

  document.getElementById("bestPlayers").onmouseout = function() {
      document.getElementById("bestPlayers").src="./images/Fondos/bestPlayers.png";
  };

  document.getElementById("back").onmouseover = function() {
      document.getElementById("back").src="./images/Fondos/backSubrayado.png";
  };

  document.getElementById("back").onmouseout = function() {
      document.getElementById("back").src="./images/Fondos/back.png";
  };

  document.getElementById("audioIntro").play();
  document.getElementById("audioIntro").loop="true";
});
