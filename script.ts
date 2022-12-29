// tsc script.ts --outFile script.js

interface Square {
	position: number,
	taken: boolean,
	player: number
}

// create board 
const createBoard = (): Square[] => {
	const board = document.getElementById('board');
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

function playerMarking() {
	const move = document.querySelector('.move');
	const takenSquare = document.createElement('div');
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
	} else {
		takenSquare.textContent = 'O';
		squares[this.id]['player'] = 2;
		playerOneTurn = true;
		move.textContent = 'Player 1 move';
	}
	squares[this.id]['taken'] = true;
	console.log(squares);
}

// write function to see if three in a row using position attribute 
function checkWin() {

}


