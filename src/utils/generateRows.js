import {
  CELL_STATUS_CLOSED,
} from '../constants/field';

export default function generateRows({ rowsCount, colsCount, bombsFactor }) {
  const rows = [];

  // fill cells with bombs
  for (let rowIndex = 0; rowIndex < rowsCount; rowIndex++) {
    const row = [];

    for (let cellIndex = 0; cellIndex < colsCount; cellIndex++) {
      const hasBomb = !!Math.floor(Math.random() + bombsFactor);

      const currentCell = {
        status: CELL_STATUS_CLOSED,
        hasBomb,
      };

      row.push(currentCell);
    }

    rows.push(row);
  }

  return rows;
}
