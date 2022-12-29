// tsc script.ts --outFile script.js

interface Square {
	position: number,
	taken: boolean,
	player: number
}

// create board 
const board = document.getElementById('board');

const createBoard = (): Square[] => {
	const squares: Square[] = [];
	let currentPosition: number = 0;
	// create 3 divs with 3 squares in each
	for (let i = 0; i < 3; i++) {
		const group = document.createElement('div');
		group.classList.add('group');
		board.appendChild(group);
		for (let i = 0; i < 3; i++) {
			const newSquare: Square = {position: currentPosition, taken: false, player: 0};
			squares.push(newSquare);
			const squareDiv = document.createElement('div');
			squareDiv.classList.add('square');
			squareDiv.setAttribute('id', newSquare['position'].toString());
			group.appendChild(squareDiv);
			squareDiv.addEventListener('click', playerMarking)
			currentPosition += 1;
		}
	}
	return squares;
};

const squares: Square[] = createBoard();

// mark with X or O and change squares object
let playerOneTurn: boolean = true;
let gameOver: boolean = false;

function playerMarking() {
	if (squares[this.id]['taken'] || gameOver) {
		return;
	}
	const move = document.querySelector('.move');
	const takenSquare = document.createElement('div');
	takenSquare.classList.add('taken-square');
	this.appendChild(takenSquare);
	if (playerOneTurn) {
		takenSquare.textContent = 'X';
		squares[this.id]['player'] = 1;
		playerOneTurn = false;
		move.textContent = 'Player 2 move';
	} else {
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
	const winningSquares: number[][] = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
	const playerOneSquares: number[] = squares.filter((s) => s['player'] === 1).map((s) => s['position']).sort((a, b) => a - b);
	const playerTwoSquares: number[] = squares.filter((s) => s['player'] === 2).map((s) => s['position']).sort((a, b) => a - b);
	for (const winningSquare of winningSquares) {
		if (playerOneSquares.includes(winningSquare[0]) && playerOneSquares.includes(winningSquare[1]) && playerOneSquares.includes(winningSquare[2])) {
			alert("Player One wins");
			gameOver = true;
		} else if (playerTwoSquares.includes(winningSquare[0]) && playerTwoSquares.includes(winningSquare[1]) && playerTwoSquares.includes(winningSquare[2])) {
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