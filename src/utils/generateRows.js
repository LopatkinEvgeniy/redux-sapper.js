import {
  CELL_STATUS_CLOSED,
} from '../constants/field';

export default function generateRows({ rowsCount, colsCount, bombsFactor }) {
  let rows = [];

  // fill cells with bombs
  for (let rowIndex = 0; rowIndex < rowsCount; rowIndex++) {
    const row = [];

    for (let colIndex = 0; colIndex < colsCount; colIndex++) {
      const hasBomb = !!Math.floor(Math.random() + bombsFactor);

      const currentCell = {
        status: CELL_STATUS_CLOSED,
        hasBomb,
        bombsAroundCount: 0,
      };

      row.push(currentCell);
    }

    rows.push(row);
  }

  // calculate bombs around each empty cell
  rows = rows.map((row, rowIndex) => row.map((cell, colIndex) => {
    // increment bomb count to each neighboring cell
    if (cell.hasBomb) {
      // top cell
      if (rowIndex < (rowsCount - 1)) {
        rows[rowIndex + 1][colIndex].bombsAroundCount++;
      }

      // bottom cell
      if (rowIndex > 0) {
        rows[rowIndex - 1][colIndex].bombsAroundCount++;
      }

      // left cell
      if (colIndex > 0) {
        rows[rowIndex][colIndex - 1].bombsAroundCount++;
      }

      // right cell
      if (colIndex < (colsCount - 1)) {
        rows[rowIndex][colIndex + 1].bombsAroundCount++;
      }

      // top-left cell
      if ((rowIndex < (rowsCount - 1)) && (colIndex > 0)) {
        rows[rowIndex + 1][colIndex - 1].bombsAroundCount++;
      }

      // top-right
      if ((rowIndex < (rowsCount - 1)) && (colIndex < (colsCount - 1))) {
        rows[rowIndex + 1][colIndex + 1].bombsAroundCount++;
      }

      // bottom-left
      if ((rowIndex > 0) && (colIndex > 0)) {
        rows[rowIndex - 1][colIndex - 1].bombsAroundCount++;
      }

      // bottom-right
      if ((rowIndex > 0) && (colIndex < (colsCount - 1))) {
        rows[rowIndex - 1][colIndex + 1].bombsAroundCount++;
      }
    }

    return cell;
  }));

  return rows;
}
