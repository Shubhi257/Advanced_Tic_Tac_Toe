// export function checkWinner(board, size){
//     for(let i=0; i<size; i++){
//         const symbol = board[i][0];
//         if(symbol){
//             let winner = true;
//             for(let j=1; j<size; j++){
//                 if(symbol !== board[i][j]){
//                     winner = false;
//                     break;
//                 }
//             }
//             if(winner){
//                 return symbol;
//             }
//         }
//     }
    
//     //check for columns
//     for(let j=0; j<size; j++){
//         const symbol = board[0][j];
//         if(symbol) {
//             let winner = true;
//             for(let i = 1; i<size; i++) {
//                 if(symbol !== board[i][j]) {
//                     winner = false;
//                     break;
//                 }
//             }
//             if (winner) {
//                 return symbol;
//             }
//         }
//     }

//     //check for main diagonal
//     let symbol = board[0][0];
//     let winner = true;
//     if(symbol){
//         for(let i=1; i<size; i++){
//             if(symbol !== board[i][i]){
//                 winner = false;
//                 break;
//             }
//         }
//         if(winner){
//             return symbol;
//         }
//     }

//     //check for anti diagonal
//     symbol = board[0][size-1];
//     winner = true;
//     if(symbol){
//         for(let i =1; i< size; i++){
//             if(symbol !== board[i][size - 1 -i]){
//                 winner = false;
//                 break;
//             }
//         }
//         if(winner){
//             return symbol; 
//         }
//     }

//     //check for draw
//     const isDraw = board.every(row => row.every(cell => cell !== null));
//     if (isDraw) {
//         return "Draw";
//     }

//     return null;
// }

export function checkWinner(board, size, marksToWin) {
    const directions = [
        [0, 1],   // Horizontal →
        [1, 0],   // Vertical ↓
        [1, 1],   // Diagonal ↘
        [1, -1],  // Anti-diagonal ↙
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

    // ✅ Check for draw
    const isDraw = board.every(row => row.every(cell => cell !== null));
    if (isDraw) return "Draw";

    return null;
}
