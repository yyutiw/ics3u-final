// ask for size (later lol)

var gridSize = 10;
var boxSize = 30;

// set up 3d array of rows and columns
var boxes = [];

// add (size) rows to the array consisting of (size) columns
for (var i = 0; i < gridSize; i++) {
    var row = []; // initialize row
    for (var j = 0; j < gridSize; j++) {
        row.push([-1, -1]); // create one row
    }
    boxes.push(row); // add each row to the array
}

// draw grid
var drawGrid = function(size, boxSize) { // function to draw grid
    stroke(245, 245, 245); // grid colour
    strokeWeight(2);
    fill(214, 214, 214);
    var x; // x pos of rect
    var y = boxSize + 22; // y pos
    // will make a specified # of rows
    for (var i = 0; i < gridSize; i++) { // set up grid
        x = boxSize + 24;
        // generates specified number of squares per row
        for (var j = 0; j < gridSize; j++) {
            rect(x , y , boxSize , boxSize); // draw square
            
            // add position of each square to array
            // eg top left = (0 , 0), next is (0 , 1)
            boxes[i][j][0] = i; 
            boxes[i][j][1] = j;
            
            x += boxSize; // next box
        }
        y += boxSize; // move down 1 row
    }
};

var areaSel;

drawGrid(gridSize, boxSize); // draw grid with given size and amt of sides

// when the mouse is pressed
mousePressed = function() {
    fill (255, 255, 255);
    
    // determine which position has been pressed
    // Math.floor takes off the decimal places w/o rounding i think
    var x = Math.floor((mouseX - 54) / 30); 
    var y = Math.floor((mouseY - 52) / 30);
    
    // draws a rectangle in the specified location
    if (x >= 0 && x < 10 && y >= 0 && y < 10) {
        rect(30 * x + 54 , 30 * y + 52 , 30 , 30);
    }
};

// draws a single mine in a specified position
var drawMine = function(mineX , mineY) {
    fill(0);
    rect(mineX , mineY , 30 , 30);
};

// stores position of all mines
var mines = [];
// position of current mine 
var thisMine = [];

var repeat; // declaration

// note: maybe add an array for first square and make it so that the first selected square is never a mine

// generate all mines
for (var i = 0; i < (gridSize * gridSize) * 0.2; i++) {
    // determine random position of mine on the grid
    var ranX = Math.floor(random(0 , 10));
    var ranY = Math.floor(random(0 , 10));
    
    // position of current mine being generated
    thisMine = [ranX , ranY];
    
    // fill black
    fill(0);
    
    // initialize variable as false
    repeat = false; // stores whether or not the mine already exists in the array mines
    
    // checks array of mines to see if this position is already occupied lol
    for (var i = 0; i < mines.length; i++) {
        // if this pos already has a mine
        if (mines[i][0] === ranX && mines[i][1] === ranY) {
            repeat = true;
        }
    }
    // this mine has not been repeated
    if (!repeat) {
        // add this mine to list of all mines
        mines.push(thisMine);
        // add variables for mineX and y?
        // draw the mine in the specified position
        drawMine(30 * ranX + 54 , 30 * ranY + 52);
    } else {
        // extend loop and try a different mine pos until it is not repeated
        i--;
    }
}

// determine how many mines are around each square
for (var i = 0; i < mines.length; i ++) {
    
}
