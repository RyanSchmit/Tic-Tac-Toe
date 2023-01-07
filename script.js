var gameBoard = [];
var GameBoard = (function () {
    var board = document.getElementById('board');
    if (board === null) {
        return;
    }
    var createSquare = function (position, taken) {
        return { position: position, taken: taken };
    };
    var createBoard = function () {
        var currentPosition = 0;
        // create 3 divs with 3 squares in each
        for (var i = 0; i < 3; i++) {
            var group = document.createElement('div');
            group.classList.add('group');
            board.appendChild(group);
            for (var i_1 = 0; i_1 < 3; i_1++) {
                var newSquare = createSquare(currentPosition, false);
                gameBoard.push(newSquare);
                var squareDiv = document.createElement('div');
                squareDiv.classList.add('square');
                squareDiv.setAttribute('id', newSquare['position'].toString());
                group.appendChild(squareDiv);
                currentPosition += 1;
            }
        }
    };
    return { createBoard: createBoard };
})();
if (GameBoard !== undefined) {
    GameBoard.createBoard();
}
var Player = function (playerNumber, squares) {
    return { playerNumber: playerNumber, squares: squares };
};
var player1 = Player(1, []);
var player2 = Player(2, []);
var GameControl = (function () {
    var gameOver = false;
    // const startNewGame = () => {
    // 	if (GameBoard === undefined) {
    // 		return
    // 	}
    // 	player1 = Player(1, []);
    // 	player2 = Player(2, []);
    // 	return gameBoard;
    // }
    var playerTurn = function () {
        var player = document.querySelector('.move');
        if (player === null) {
            return 0;
        }
        else if (player.textContent == 'Player 1 move') {
            player.textContent = 'Player 2 move';
            return 1;
        }
        else if (player.textContent == 'Player 2 move') {
            player.textContent = 'Player 1 move';
            return 2;
        }
    };
    var checkWin = function () {
        var winningSquares = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
        var moveText = document.querySelector('.move');
        if (moveText === null) {
            return;
        }
        var playerOneSquares = player1['squares'].sort(function (a, b) { return a - b; });
        var playerTwoSquares = player2['squares'].sort(function (a, b) { return a - b; });
        for (var _i = 0, winningSquares_1 = winningSquares; _i < winningSquares_1.length; _i++) {
            var winningSquare = winningSquares_1[_i];
            if (playerOneSquares.includes(winningSquare[0]) && playerOneSquares.includes(winningSquare[1]) && playerOneSquares.includes(winningSquare[2])) {
                alert("Player One wins");
                gameOver = true;
                moveText.textContent = 'Game Over';
            }
            else if (playerTwoSquares.includes(winningSquare[0]) && playerTwoSquares.includes(winningSquare[1]) && playerTwoSquares.includes(winningSquare[2])) {
                alert("Player Two wins");
                gameOver = true;
                moveText.textContent = 'Game Over';
            }
        }
    };
    var markPosition = function () {
        var squaresDiv = Array.from(document.querySelectorAll('.square'));
        squaresDiv.forEach(function (square) {
            square.addEventListener('click', function () {
                var player = playerTurn();
                if (gameBoard[parseInt(square.id)]['taken'] || gameOver) {
                    return;
                }
                var takenSquare = document.createElement('div');
                takenSquare.classList.add('taken-square');
                square.appendChild(takenSquare);
                if (player === 1) {
                    takenSquare.textContent = 'X';
                    player1['squares'].push(parseInt(square.id));
                }
                else {
                    takenSquare.textContent = 'O';
                    player2['squares'].push(parseInt(square.id));
                }
                gameBoard[parseInt(square.id)]['taken'] = true;
                checkWin();
            });
        });
    };
    return { markPosition: markPosition };
})();
GameControl.markPosition();
