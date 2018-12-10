let canvas = document.querySelector('#monkey')
let ctx = canvas.getContext('2d')

let monkeyHeroWidth=60;
let monkeyHeroHeight=60;
let monkeyHeroVelX=3.5;
let monkeyHeroVelY=6;
let monkeyHeroPosX=600;
let monkeyHeroPosY=560;
let balasWidth=40;
let balasHeight=40;
let balasVelocidad=3;
let scoreWidth=300;
let scoreHeight=100;
let readyWidth=500;
let readyHeight=500;
let gameOverWidth=500;
let gameOverHeight=500;
let maxTimeImpacto=32;
let imageScore= new Image();
let imageReady= new Image();
let imageGameOver= new Image();
let imageEnter = new Image();
let imageImpacto1 = new Image();
let imageImpacto2 = new Image();

//Arreglos ruta imagenes
let arrayRutaAtaque1Derecha=["./images/Ataque1Derecha/ataque1.png",
                              "./images/Ataque1Derecha/ataque2.png",
                              "./images/Ataque1Derecha/ataque3.png"];

let arrayRutaAtaque1Izquierda=["./images/Ataque1Izquierda/ataque1.png",
                                "./images/Ataque1Izquierda/ataque2.png",
                                "./images/Ataque1Izquierda/ataque3.png"];

let arrayRutaAtaquePowDerecha=["./images/Ataque2Derecha/ataque1Plus.png",
                                "./images/Ataque2Derecha/ataque2Plus.png",
                                "./images/Ataque2Derecha/ataque3Plus.png"];

let arrayRutaAtaquePowIzquierda=["./images/Ataque2Izquierda/ataque1Plus.png",
                                  "./images/Ataque2Izquierda/ataque2Plus.png",
                                  "./images/Ataque2Izquierda/ataque3Plus.png"];

let rutaBalasDerecha="./images/Balas/balaDerecha.png";
let rutaBalasIzquierda="./images/Balas/balaIzquierda.png";

let arrayRutaBalasPowDerecha=["./images/Balas2Derecha/bala2.png",
                              "./images/Balas2Derecha/bala3.png",
                              "./images/Balas2Derecha/bala4.png",
                              "./images/Balas2Derecha/bala5.png",
                              "./images/Balas2Derecha/bala6.png"];

let arrayRutaBalasPowIzquierda=["./images/Balas2Izquierda/bala2.png",
                                "./images/Balas2Izquierda/bala3.png",
                                "./images/Balas2Izquierda/bala4.png",
                                "./images/Balas2Izquierda/bala5.png",
                                "./images/Balas2Izquierda/bala6.png"];

let arrayRutaFrutas=["./images/Frutas/limon.png",
                        "./images/Frutas/pera.png",
                        "./images/Frutas/pinia.png",
                        "./images/Frutas/platanos.png",
                        "./images/Frutas/sandia.png",
                        "./images/Frutas/uvas.png",
                        "./images/Frutas/coco.png"];

let arrayRutaGolpeCocosDerecha=["./images/GolpeCocosDerecha/cocos1.png",
                                "./images/GolpeCocosDerecha/cocos2.png",
                                "./images/GolpeCocosDerecha/cocos3.png",
                                "./images/GolpeCocosDerecha/cocos4.png",
                                "./images/GolpeCocosDerecha/cocos5.png",
                                "./images/GolpeCocosDerecha/cocos6.png",
                                "./images/GolpeCocosDerecha/cocos7.png",
                                "./images/GolpeCocosDerecha/cocos8.png",
                                "./images/GolpeCocosDerecha/cocos9.png"];

let arrayRutaGolpeCocosIzquierda=["./images/GolpeCocosIzquierda/cocos1.png",
                                  "./images/GolpeCocosIzquierda/cocos2.png",
                                  "./images/GolpeCocosIzquierda/cocos3.png",
                                  "./images/GolpeCocosIzquierda/cocos4.png",
                                  "./images/GolpeCocosIzquierda/cocos5.png",
                                  "./images/GolpeCocosIzquierda/cocos6.png",
                                  "./images/GolpeCocosIzquierda/cocos7.png",
                                  "./images/GolpeCocosIzquierda/cocos8.png",
                                  "./images/GolpeCocosIzquierda/cocos9.png"];

let arrayRutaGorilas1Derecha=["./images/Gorilas1/gorila1.png",
                              "./images/Gorilas1/gorila2.png",
                              "./images/Gorilas1/gorila3.png",
                              "./images/Gorilas1/gorila4.png",
                              "./images/Gorilas1/gorila5.png",
                              "./images/Gorilas1/gorila6.png"];

let arrayRutaGorilas2Izquierda=["./images/Gorilas2/gorila1.png",
                                "./images/Gorilas2/gorila2.png",
                                "./images/Gorilas2/gorila3.png",
                                "./images/Gorilas2/gorila4.png",
                                "./images/Gorilas2/gorila5.png"];

let arrayRutaImpactos=["./images/Impactos/impacto1.png",
                        "./images/Impactos/impacto2.png"];


let arrayRutaMonoCaminandoDerecha=["./images/MonoCaminandoDerecha/mono1.png",
                                    "./images/MonoCaminandoDerecha/mono2.png",
                                    "./images/MonoCaminandoDerecha/mono3.png"];

let arrayRutaMonoCaminandoIzquierda=["./images/MonoCaminandoIzquierda/mono1.png",
                                      "./images/MonoCaminandoIzquierda/mono2.png",
                                      "./images/MonoCaminandoIzquierda/mono3.png"];


let arrayRutaSaltoDerecha=["./images/SaltoDerecha/salto1.png",
                            "./images/SaltoDerecha/salto2.png",
                            "./images/SaltoDerecha/salto3.png",
                            "./images/SaltoDerecha/salto3.png",
                            "./images/SaltoDerecha/salto3.png",
                            "./images/SaltoDerecha/salto4.png",
                            "./images/SaltoDerecha/salto5.png",
                            "./images/SaltoDerecha/salto4.png",
                            "./images/SaltoDerecha/salto5.png",
                            "./images/SaltoDerecha/salto4.png",
                            "./images/SaltoDerecha/salto5.png",
                            "./images/SaltoDerecha/salto4.png",
                            "./images/SaltoDerecha/salto5.png",
                            "./images/SaltoDerecha/salto4.png",
                            "./images/SaltoDerecha/salto5.png",
                            "./images/SaltoDerecha/salto6.png"];

let arrayRutaSaltoIzquierda=["./images/SaltoIzquierda/salto1.png",
                              "./images/SaltoIzquierda/salto2.png",
                              "./images/SaltoIzquierda/salto3.png",
                              "./images/SaltoIzquierda/salto3.png",
                              "./images/SaltoIzquierda/salto3.png",
                              "./images/SaltoIzquierda/salto4.png",
                              "./images/SaltoIzquierda/salto5.png",
                              "./images/SaltoIzquierda/salto4.png",
                              "./images/SaltoIzquierda/salto5.png",
                              "./images/SaltoIzquierda/salto4.png",
                              "./images/SaltoIzquierda/salto5.png",
                              "./images/SaltoIzquierda/salto4.png",
                              "./images/SaltoIzquierda/salto5.png",
                              "./images/SaltoIzquierda/salto4.png",
                              "./images/SaltoIzquierda/salto5.png",
                              "./images/SaltoIzquierda/salto6.png"];

let arrayRutaLoroDerecha=["./images/LorosDerecha/loro1.png",
                          "./images/LorosDerecha/loro2.png",
                          "./images/LorosDerecha/loro3.png",
                          "./images/LorosDerecha/loro4.png",
                          "./images/LorosDerecha/loro5.png",
                          "./images/LorosDerecha/loro6.png",
                          "./images/LorosDerecha/loro7.png",
                          "./images/LorosDerecha/loro8.png"];

let arrayRutaLoroIzquierda=["./images/LorosIzquierda/loro1.png",
                            "./images/LorosIzquierda/loro2.png",
                            "./images/LorosIzquierda/loro3.png",
                            "./images/LorosIzquierda/loro4.png",
                            "./images/LorosIzquierda/loro5.png",
                            "./images/LorosIzquierda/loro6.png",
                            "./images/LorosIzquierda/loro7.png",
                            "./images/LorosIzquierda/loro8.png"];

let arrayRutaTrampa=["./images/Trampa/trampa.png"];

let board = new Board();
let monkeyHero = new MonkeyHero(monkeyHeroPosX, monkeyHeroPosY, monkeyHeroWidth, monkeyHeroHeight, monkeyHeroVelX, monkeyHeroVelY);
let interval, frames = 0;
let arregloGorilas = [];
let arregloFrutas = [];
let arregloLoros = [];
let arregloImpactos = [];
let numeroEnemigos = 0;
let numeroFrutas = 0;
let tipoFruta = 0;
let tamañoFruta = 0;
let keyPressedLeft=false;
let keyPressedRight=false;
let tipoGorila="G";
let tipoPajaro="P";
