let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function handleClick(event) {
    const cellIndex = event.target.dataset.index;

    if (board[cellIndex] === '' && gameActive) {
        board[cellIndex] = currentPlayer;
        event.target.innerHTML = currentPlayer;
        
        if (checkWin()) {
            document.getElementById('message').innerText = `Player ${currentPlayer} wins!`;
            gameActive = false;
        } else if (board.every(cell => cell !== '')) {
            document.getElementById('message').innerText = 'It\'s a draw!';
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('message').innerText = `Player ${currentPlayer}'s turn`;
        }
    }
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });
}

function resetGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;

    document.getElementById('message').innerText = `Player ${currentPlayer}'s turn`;
    document.getElementById('board').childNodes.forEach(cell => cell.innerHTML = '');
}
