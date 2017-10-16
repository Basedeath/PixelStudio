var isPainting = false;

var sColor = "black";

function StartPainting() {
  isPainting = true;
}

function StopPainting() {
  isPainting = false;
}

var lastClicked;

var grid = myGrid(20, 20, function(el, row, col, i) {

  el.className = sColor;
  if (lastClicked) lastClicked.className = sColor;
  lastClicked = el;
});

document.body.appendChild(grid);

function myGrid(rows, cols, callback) {
  var i = 0;
  var grid = document.createElement("table");
  grid.className = "grid";

  for (var r = 0; r < rows; ++r) {
    var tr = grid.appendChild(document.createElement("tr"));
    for (var c = 0; c < cols; ++c) {
      var cell = tr.appendChild(document.createElement("td"));
      cell.addEventListener("mousedown", (function(el, r, c, i) {
        return function() {
          callback(el, r, c, i);
        }
      })(cell, r, c, i), false);
    }
  }
  return grid;
}

//Trying to add color selection
var re = document.getElementById("red");