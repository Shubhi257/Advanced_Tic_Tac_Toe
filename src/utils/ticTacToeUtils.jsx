export function checkWinner(board, size, marksToWin) {
    const directions = [
        [0, 1],   
        [1, 0],   
        [1, 1],   
        [1, -1],  
    ];

    const isValid = (x, y) => x >= 0 && y >= 0 && x < size && y < size;

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const cell = board[i][j];
            if (!cell) continue;

            for (const [dx, dy] of directions) {
                let count = 1;

                let x = i + dx;
                let y = j + dy;

                while (
                    isValid(x, y) &&
                    board[x][y] === cell &&
                    count < marksToWin
                ) {
                    count++;
                    x += dx;
                    y += dy;
                }

                if (count === marksToWin) {
                    return cell;
                }
            }
        }
    }

    // Check for draw
    const isDraw = board.every(row => row.every(cell => cell !== null));
    if (isDraw) return "Draw";

    return null;
}
