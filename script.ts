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
			group.appendChild(squareDiv);
			currentPosition += 1;
		}
	}
	return squares;
};

const squares: Square[] = createBoard();
squares.forEach((square) => {
	square.addEventListener('click', playerMarking)
})

// mark with X or O
function playerMarking() {
	let playerOneTurn: boolean = true;
	if (playerOneTurn) {
		this.textContent = 'X';
	} else {
		this.
	}
}

// write function to see if three in a row using position attribute 




