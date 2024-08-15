//font size
const FONT = 32;

//map dimensions
const ROWS = 10;
const COLS = 15;

//number of actors per level
const ACTORS = 10;

// a list of all the actors; 0 is the player
let player;
let actorList;
let livingEnemies;

//points to each actor in its position, for quick searching
let actorMap;

function randomInt(max){
  return Math.floor(Math.random() * max);
}

function initActors() {
  //create actors at random locations
  actorList = [];
  actorMap = {};
  for (let e = 0; e < ACTORS; e++) {
    //create new actor
    let actor = { x: 0, y:0, hp:e == 0?3:1 };
    do {
      //pick a random postion that is both a floor and not occupied
      actor.y = randomInt(ROWS);
      actor.x = randomInt(COLS);
    } while ( map[actor.y][actor.x] = '#'|| actorMap[actor.y + "_" + actor.x] != null );
    
    //add references to the actor to the actors list & map
    actorMap[actor.y 
    ]
  }
}

//intialize phaser, call create() once done
const game = new Phaser.Game(COLS * FONT * 0.6, ROWS * FONT, Phaser.AUTO, null, {
  create: create
})

function onKeyUp(event) {
  switch (event.keyCode) {
    case Keyboard.LEFT:
    
    case Keyboard.RIGHT:

    case Keyboard.UP:

    case Keyboard.DOWN:
  }
}

//the structure of the map
let map;

function initMap(){
  //create a new random map
  map = [];
  for (let y = 0; y < ROWS; y++){
    let newRow = [];
    for (var x = 0; x < COLS; x++){
      if (Math.random() > 0.8)
        newRow.push('#');
      else
        newRow.push('.')
    }
    map.push(newRow);
  }
  console.log(map);
}


// the ascii display, as a 2d array of characters
let asciidisplay;

function drawMap(){
  for (let y = 0; y< ROWS; y++)
    for( let x = 0;x < COLS; x++)
      asciidisplay[y][x].setText(map[y][x]);
}
function create(){
  //debug
  console.log('create called')

  //init keyboard commands
  game.input.keyboard.addCallbacks(null, null, onKeyUp);

  //initalize map
  initMap();

  //initialize screen
  asciidisplay = [];
  for (let y = 0; y < ROWS; y++){
    let newRow = [];
    asciidisplay.push(newRow);
    for(let x = 0; x < COLS; x++)
      newRow.push( initCell('', x, y) );
  }
  drawMap();
}
function initCell(chr, x, y){
  //add a single cell in a given position to the ascii display
  const style = {font: FONT + "px monospace", fill:"#fff"};
  return game.add.text(32*x, 32*y, chr, style)
}