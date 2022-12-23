// tsc script.ts --outFile script.js
var board = document.getElementById('board');
var board2 = document.getElementById('board2');
var gameBoard = (function () {
    var createBoard = function (board) {
        // create 3 divs with 3 squares in each
        for (var i = 0; i < 3; i++) {
            var group = document.createElement('div');
            group.classList.add('group');
            board.appendChild(group);
            for (var i_1 = 0; i_1 < 3; i_1++) {
                var square = document.createElement('div');
                square.classList.add('square');
                group.appendChild(square);
            }
        }
    };
    return { createBoard: createBoard };
})();
gameBoard.createBoard(board);
gameBoard.createBoard(board2);
