interface Square {
	position: number,
	taken: boolean,
}

const gameBoard: Square[] = [];

const GameBoard = (() => {
	const board = document.getElementById('board');
	if (board === null) {
		return
	 }

	const createSquare = (position: number, taken: boolean): Square => {
		return { position, taken }
	}
	
	const createBoard = () => {
		let currentPosition: number = 0;
		// create 3 divs with 3 squares in each
		for (let i = 0; i < 3; i++) {
			const group = document.createElement('div');
			group.classList.add('group');
			board.appendChild(group);
			for (let i = 0; i < 3; i++) {
				const newSquare: Square = createSquare(currentPosition, false)
				gameBoard.push(newSquare);
				const squareDiv = document.createElement('div');
				squareDiv.classList.add('square');
				squareDiv.setAttribute('id', newSquare['position'].toString());
				group.appendChild(squareDiv);
				currentPosition += 1;
			}
		}
	}

	return { createBoard }
})();


if (GameBoard !== undefined) {
	GameBoard.createBoard();
}


interface Player {
	playerNumber: number,
	squares: number[]
}


const Player = (playerNumber: number, squares: number[]) => {
	return { playerNumber, squares }
}

let player1: Player = Player(1, []);
let player2: Player = Player(2, []);

const GameControl = (() => {
	let gameOver: boolean = false;
	// const startNewGame = () => {
	// 	if (GameBoard === undefined) {
	// 		return
	// 	}
	// 	player1 = Player(1, []);
	// 	player2 = Player(2, []);
	// 	return gameBoard;
	// }


	const playerTurn = (): number => {
		const player = document.querySelector('.move');
		if (player === null ) {
			return 0;
		} else if (player.textContent == 'Player 1 move') {
			player.textContent = 'Player 2 move';
			return 1;
		} else if (player.textContent == 'Player 2 move') {
			player.textContent = 'Player 1 move';
			return 2;
		} else {
			return 0;
		}
	}

	const checkWin = () => {
		const winningSquares: number[][] = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
		const moveText = document.querySelector('.move');
		if (moveText === null) {
			return
		}
		const playerOneSquares: number[] = player1['squares'].sort((a, b) => a - b);
		const playerTwoSquares: number[] = player2['squares'].sort((a, b) => a - b);
		for (const winningSquare of winningSquares) {
			if (playerOneSquares.includes(winningSquare[0]) && playerOneSquares.includes(winningSquare[1]) && playerOneSquares.includes(winningSquare[2])) {
				alert("Player One wins");
				gameOver = true;
				moveText.textContent = 'Game Over';
			} else if (playerTwoSquares.includes(winningSquare[0]) && playerTwoSquares.includes(winningSquare[1]) && playerTwoSquares.includes(winningSquare[2])) {
				alert("Player Two wins");
				gameOver = true;
				moveText.textContent = 'Game Over';
			}
		}
	}
	
	const markPosition = () => {
		const squaresDiv = Array.from(document.querySelectorAll('.square'));
		squaresDiv.forEach((square) => {
			square.addEventListener('click', () => {
			const player: number = playerTurn();
			if (gameBoard[parseInt(square.id)]['taken'] || gameOver) {
				return;
			}
			const takenSquare = document.createElement('div');
			takenSquare.classList.add('taken-square');
			square.appendChild(takenSquare);
			if (player === 1) {
				takenSquare.textContent = 'X';
				player1['squares'].push(parseInt(square.id));
			} else {
				takenSquare.textContent = 'O';
				player2['squares'].push(parseInt(square.id));
			}
			gameBoard[parseInt(square.id)]['taken'] = true;
			checkWin();
			});
		})
	}

	return { markPosition }
})()


GameControl.markPosition();