// tsc script.ts --outFile script.js
// create board 
// return object for all 9 squares with interface above
// mark with X or O
// write function to see if three in a row using position attribute 
var board = document.getElementById('board');
var createBoard = function (board) {
    var squares = [];
    var currentPosition = 0;
    // create 3 divs with 3 squares in each
    for (var i = 0; i < 3; i++) {
        var group = document.createElement('div');
        group.classList.add('group');
        board.appendChild(group);
        for (var i_1 = 0; i_1 < 3; i_1++) {
            var newSquare = { position: currentPosition, taken: false, player: 0 };
            squares.push(newSquare);
            var squareDiv = document.createElement('div');
            squareDiv.classList.add('square');
            group.appendChild(squareDiv);
            currentPosition += 1;
        }
    }
    return squares;
};
console.log(createBoard(board));
