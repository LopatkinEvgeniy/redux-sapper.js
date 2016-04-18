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
    const hasTop = rowIndex > 0;
    const hasBottom = rowIndex < (rowsCount - 1);
    const hasLeft = colIndex > 0;
    const hasRight = colIndex < (colsCount - 1);

    // increment bomb count to each neighboring cell
    if (cell.hasBomb) {
      // top cell
      if (hasTop) {
        rows[rowIndex - 1][colIndex].bombsAroundCount++;
      }

      // bottom cell
      if (hasBottom) {
        rows[rowIndex + 1][colIndex].bombsAroundCount++;
      }

      // left cell
      if (hasLeft) {
        rows[rowIndex][colIndex - 1].bombsAroundCount++;
      }

      // right cell
      if (hasRight) {
        rows[rowIndex][colIndex + 1].bombsAroundCount++;
      }

      // top-left cell
      if (hasTop && hasLeft) {
        rows[rowIndex - 1][colIndex - 1].bombsAroundCount++;
      }

      // top-right
      if (hasTop && hasRight) {
        rows[rowIndex - 1][colIndex + 1].bombsAroundCount++;
      }

      // bottom-left
      if (hasBottom && hasLeft) {
        rows[rowIndex + 1][colIndex - 1].bombsAroundCount++;
      }

      // bottom-right
      if (hasBottom && hasRight) {
        rows[rowIndex + 1][colIndex + 1].bombsAroundCount++;
      }
    }

    return cell;
  }));

  return rows;
}
