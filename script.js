const board = document.getElementById('board');

const gameBoard = (() => {
	const createBoard = (board) => {
		// create 3 divs with 3 squares in each
		for (let i = 0; i < 3; i++) {
			const group = document.createElement('div');
			group.classList.add('group');
			board.appendChild(group);
			for (let i = 0; i < 3; i++) {
				const square = document.createElement('div');
				square.classList.add('square');
				group.appendChild(square);
				square.addEventListener('click', () => {
                    const takenSquare = document.createElement('div');
                    takenSquare.classList.add('taken-square');
                    square.appendChild(takenSquare);
                    takenSquare.textContent = 'X';
				})
			}
		}
	}
	return { createBoard }
  })();


gameBoard.createBoard(board);
