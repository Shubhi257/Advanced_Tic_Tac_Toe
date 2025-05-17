export default function Board({ size, board, handleClick }) {
  return (
    <div
      className="board"
      style={{ display: "grid", gridTemplateColumns: `repeat(${size}, 50px)` }}
    >
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div onClick={() => handleClick(rowIndex, colIndex)} key={`${rowIndex}-${colIndex}`} className="cell">
            {cell}
          </div>
        ))
      )}
    </div>
  );
}
