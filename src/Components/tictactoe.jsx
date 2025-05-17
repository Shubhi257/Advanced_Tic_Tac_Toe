import { useState } from "react";
import Board from "./Board";
import { checkWinner } from "../utils/ticTacToeUtils";

export default function TicTacToe({ size = 3, mToWin = 3 }){
    const [board, setBoard ] = useState(
        Array.from({ length: size }, () =>{
            return Array(size).fill(null);
        })
    );

    const [turnX, setTurnX] = useState(true);
    const winner = checkWinner(board, size);
    //const status = winner?`Winner is ${winner}`: turnX ? "Player X turn" : "Player O turn";
    let status;
if (winner === "Draw") {
    status = "Oops!! It's a Draw😳";
} else if (winner) {
    status = `Player ${winner} wins!🏆`;
} else {
    status = turnX ? "Player X turn" : "Player O turn";
}



    const handleClick = (rowIdx, colIdx) => {
        console.log(rowIdx, colIdx);
        if(board[rowIdx][colIdx] || winner) {
            return;
        }
        const deepCopyOfBoard = JSON.parse(JSON.stringify(board));
        deepCopyOfBoard[rowIdx][colIdx] = turnX ? "X" : "O";
        setBoard(deepCopyOfBoard);
        setTurnX(!turnX);
    };


    const handleReset = () => {
        setBoard(
            Array.from({ length: size }, () => {
                return Array(size).fill(null);
            })
        );
    };
    return (
        <div className="container">
            <Board handleClick={handleClick} board={board} size={size}/>
            <div className="status">{status}</div>
            <button onClick={handleReset}>Reset</button>

    </div>
    );
}