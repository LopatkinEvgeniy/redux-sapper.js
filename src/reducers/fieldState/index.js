import {
  FIELD_GENERATE,
  FIELD_SET_OPTIONS,
  FIELD_OPEN_CELLS,
  FIELD_CLICK_ON_BOMB,
} from '../../constants/actions';

import {
  // CELL_STATUS_CLOSED,
  CELL_STATUS_OPENED,
  // CELL_STATUS_QUESTION,
  // CELL_STATUS_MARK,
  GAME_STATUS_WIN,
  GAME_STATUS_LOOSE,
  GAME_STATUS_GAME,
} from '../../constants/field';

import openCellsRecursive from '../../utils/openCellsRecursive';

const initialState = {
  rows: [],
  rowsCount: 20,
  colsCount: 30,
  bombsFactor: 0.1,
  gameStatus: GAME_STATUS_GAME,
};

export default function fieldState(state = initialState, action) {
  switch (action.type) {
    case FIELD_GENERATE: {
      return Object.assign({}, state, {
        rows: action.rows,
        gameStatus: GAME_STATUS_GAME,
      });
    }

    case FIELD_SET_OPTIONS: {
      return Object.assign({}, state, {
        rowsCount: action.rowsCount,
        colsCount: action.colsCount,
        bombsFactor: action.bombsFactor,
      });
    }

    case FIELD_OPEN_CELLS: {
      const { rowKey, cellKey } = action;
      const newRows = JSON.parse(JSON.stringify(state.rows));

      if (!newRows[rowKey][cellKey].hasBomb &&
        (newRows[rowKey][cellKey].bombsAroundCount === 0)) {
        const rowsLength = newRows.length;
        const cellsLength = newRows[rowKey].length;

        openCellsRecursive({
          rows: newRows,
          rowKey,
          cellKey,
          rowsLength,
          cellsLength });
      } else {
        newRows[rowKey][cellKey].status = CELL_STATUS_OPENED;
      }

      let isVictory = true;

      newRows.forEach(row => row.forEach(cell => {
        if (!cell.hasBomb && cell.status !== CELL_STATUS_OPENED) {
          isVictory = false;
        }
      }));

      if (isVictory) {
        newRows.forEach(row => row.forEach(cell => {
          const currentCell = cell;

          if (currentCell.hasBomb) {
            currentCell.status = CELL_STATUS_OPENED;
          }
        }));
      }

      return Object.assign({}, state, {
        rows: newRows,
        gameStatus: isVictory ? GAME_STATUS_WIN : GAME_STATUS_GAME,
      });
    }

    case FIELD_CLICK_ON_BOMB: {
      const newRows = JSON.parse(JSON.stringify(state.rows));

      newRows.forEach(row => row.forEach(cell => {
        const currentCell = cell;

        if (currentCell.hasBomb) {
          currentCell.status = CELL_STATUS_OPENED;
        }
      }));

      return Object.assign({}, state, {
        rows: newRows,
        gameStatus: GAME_STATUS_LOOSE,
      });
    }

    default: {
      return state;
    }
  }
}
