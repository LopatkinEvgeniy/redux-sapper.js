/*
 * Recursive open all cells that connected to with current zero cell.
 * This function take rows as parameter by ref and modify them.
 * */

import {
  CELL_STATUS_OPENED,
} from '../constants/field';

/* eslint-disable no-param-reassign */
function openCellsRecursive({ rows, rowKey, cellKey, rowsLength, cellsLength }) {
  // open current cell
  rows[rowKey][cellKey].status = CELL_STATUS_OPENED;

  // recursion only for zero cell
  if (rows[rowKey][cellKey].bombsAroundCount !== 0) {
    return;
  }

  const isLeft = (cellKey > 0);
  const isTop = (rowKey > 0);
  const isRight = (cellKey < (cellsLength - 1));
  const isBottom = (rowKey < (rowsLength - 1));

  const isTopLeft = (isTop && isLeft);
  const isTopRight = (isTop && isRight);
  const isBottomLeft = (isBottom && isLeft);
  const isBottomRight = (isBottom && isRight);

  if (isLeft && (rows[rowKey][cellKey - 1].status !== CELL_STATUS_OPENED)) {
    openCellsRecursive({ rows, rowKey, cellKey: (cellKey - 1), rowsLength, cellsLength });
  }

  if (isTop && (rows[rowKey - 1][cellKey].status !== CELL_STATUS_OPENED)) {
    openCellsRecursive({ rows, rowKey: (rowKey - 1), cellKey, rowsLength, cellsLength });
  }

  if (isRight && (rows[rowKey][cellKey + 1].status !== CELL_STATUS_OPENED)) {
    openCellsRecursive({ rows, rowKey, cellKey: (cellKey + 1), rowsLength, cellsLength });
  }

  if (isBottom && (rows[rowKey + 1][cellKey].status !== CELL_STATUS_OPENED)) {
    openCellsRecursive({ rows, rowKey: (rowKey + 1), cellKey, rowsLength, cellsLength });
  }

  if (isTopLeft && (rows[rowKey - 1][cellKey - 1].status !== CELL_STATUS_OPENED)) {
    openCellsRecursive({ rows, rowKey: (rowKey - 1),
      cellKey: (cellKey - 1), rowsLength, cellsLength });
  }

  if (isTopRight && (rows[rowKey - 1][cellKey + 1].status !== CELL_STATUS_OPENED)) {
    openCellsRecursive({ rows, rowKey: (rowKey - 1),
      cellKey: (cellKey + 1), rowsLength, cellsLength });
  }

  if (isBottomLeft && (rows[rowKey + 1][cellKey - 1].status !== CELL_STATUS_OPENED)) {
    openCellsRecursive({ rows, rowKey: (rowKey + 1),
      cellKey: (cellKey - 1), rowsLength, cellsLength });
  }

  if (isBottomRight && (rows[rowKey + 1][cellKey + 1].status !== CELL_STATUS_OPENED)) {
    openCellsRecursive({ rows, rowKey: (rowKey + 1),
      cellKey: (cellKey + 1), rowsLength, cellsLength });
  }
}

export default openCellsRecursive;
