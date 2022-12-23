// tsc script.ts --outFile script.js
const board = document.getElementById('board');

const gameBoard = (() => {
	const createBoard = (board) => {
		// create 3 divs with 3 squares in each
		for (let i: number = 0; i < 3; i++) {
			const group = document.createElement('div');
			group.classList.add('group');
			board.appendChild(group);
			for (let i: number = 0; i < 3; i++) {
				const square = document.createElement('div');
				square.classList.add('square');
				group.appendChild(square);
			}
		}
	}
	return { createBoard }
  })();

gameBoard.createBoard(board);


