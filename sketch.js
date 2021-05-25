var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var form, user, game;

var arr = []
console.log(arr)

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database;
  game = new App();
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
