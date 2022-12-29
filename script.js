// tsc script.ts --outFile script.js
// create board 
var board = document.getElementById('board');
var createBoard = function () {
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
var gameOver = false;
function playerMarking() {
    if (squares[this.id]['taken'] || gameOver) {
        return;
    }
    var move = document.querySelector('.move');
    var takenSquare = document.createElement('div');
    takenSquare.classList.add('taken-square');
    this.appendChild(takenSquare);
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
    checkWin();
}
// write function to see if three in a row using position attribute 
function checkWin() {
    var winningSquares = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    var playerOneSquares = squares.filter(function (s) { return s['player'] === 1; }).map(function (s) { return s['position']; }).sort(function (a, b) { return a - b; });
    var playerTwoSquares = squares.filter(function (s) { return s['player'] === 2; }).map(function (s) { return s['position']; }).sort(function (a, b) { return a - b; });
    for (var _i = 0, winningSquares_1 = winningSquares; _i < winningSquares_1.length; _i++) {
        var winningSquare = winningSquares_1[_i];
        if (playerOneSquares.includes(winningSquare[0]) && playerOneSquares.includes(winningSquare[1]) && playerOneSquares.includes(winningSquare[2])) {
            alert("Player One wins");
            gameOver = true;
        }
        else if (playerTwoSquares.includes(winningSquare[0]) && playerTwoSquares.includes(winningSquare[1]) && playerTwoSquares.includes(winningSquare[2])) {
            alert("Player Two wins");
            gameOver = true;
        }
    }
}
// Clear board for new game 
// function newGame() {
// 	board.innerHTML = "";
// 	const newSquares: Square[] = createBoard();
// 	console.log(newSquares);
// 	return newSquares;
// }
