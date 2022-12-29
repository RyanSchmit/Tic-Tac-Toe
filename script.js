// tsc script.ts --outFile script.js
// create board 
var createBoard = function () {
    var board = document.getElementById('board');
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
            squareDiv.setAttribute('id', newSquare['position'].toString());
            group.appendChild(squareDiv);
            squareDiv.addEventListener('click', playerMarking);
            currentPosition += 1;
        }
    }
    return squares;
};
var squares = createBoard();
// mark with X or O and change squares object
var playerOneTurn = true;
function playerMarking() {
    var move = document.querySelector('.move');
    var takenSquare = document.createElement('div');
    takenSquare.classList.add('taken-square');
    this.appendChild(takenSquare);
    if (squares[this.id]['taken']) {
        return;
    }
    if (playerOneTurn) {
        takenSquare.textContent = 'X';
        squares[this.id]['player'] = 1;
        playerOneTurn = false;
        move.textContent = 'Player 2 move';
    }
    else {
        takenSquare.textContent = 'O';
        squares[this.id]['player'] = 2;
        playerOneTurn = true;
        move.textContent = 'Player 1 move';
    }
    squares[this.id]['taken'] = true;
    console.log(squares);
}
// write function to see if three in a row using position attribute 
