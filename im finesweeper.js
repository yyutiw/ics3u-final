// ask for size (later lol)

// array stores x and y pos of each box
var boxes = [];

// draw grid
var drawGrid = function(size, boxSize) { // function to draw grid
    stroke(245, 245, 245); // grid colour
    strokeWeight(2);
    fill(214, 214, 214);
    var x; // x pos of rect
    var y = boxSize + 22; // y pos
    for (var i = 0; i < size; i ++) { // set up grid
        x = boxSize + 24;
        for (var j = 0; j < size; j++) { // horizontal rows
            rect(x , y , boxSize , boxSize);
            
            boxes += [x , y]; // add coords to array
            
            x += boxSize; // next box
        }
        y += boxSize; // move down 1 row
    }
};

var areaSel;

drawGrid(10, 30); // draw grid with given size and amt of sides

fill(0, 0, 0);

draw = function() {
    fill (0, 0, 0);
    if (mouseIsPressed) {
        areaSel = [mouseX , mouseY];
        var done = false;
        var k = 0;
        fill(0);
        while (k > 1000) {
            if (boxes[k] <= areaSel[0]) { // its a work in progress pls do not judge
                rect(boxes[k + 1], boxes[k + 1], 20, 20);
            }
            k += 2;
        }
    }
};

text(boxes[1][2], 104, 74, 267, 330); // ignore
