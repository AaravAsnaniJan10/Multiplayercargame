var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var voiceintro;
var intro;
var form, player, game;
var car1;
var car2;
var car3;
var car4;
var cars;
var car1Img, car2Img, car3Img, car4Img;
var track;
function preload(){
voiceintro = loadSound("Voiceintro.mp3");
track =loadImage("track.jpg");
car1Img = loadImage("car1.png");
car2Img = loadImage("car2.png")
car3Img = loadImage("car3.png")
car4Img = loadImage("car4.png")
}
function setup(){
  voiceintro.play();
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}
function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}