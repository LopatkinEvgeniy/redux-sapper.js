import {
  FIELD_GENERATE,
  FIELD_SET_OPTIONS,
  FIELD_OPEN_CELLS_ACTION,
} from '../constants/actions';

// import {
//   CELL_STATUS_CLOSED,
//   CELL_STATUS_OPENED,
//   CELL_STATUS_QUESTION,
//   CELL_STATUS_MARK,
// } from '../constants/field';

import generateRows from '../utils/generateRows';

export const fieldGenerateAction = ({ rowsCount, colsCount, bombsFactor }) => ({
  type: FIELD_GENERATE,
  rows: generateRows({ rowsCount, colsCount, bombsFactor }),
});

export const fieldSetOptionsAction = ({ rowsCount, colsCount, bombsFactor }) => ({
  type: FIELD_SET_OPTIONS,
  rowsCount,
  colsCount,
  bombsFactor,
});

export const fieldOpenRowAction = ({ rowKey, cellKey }) => ({
  type: FIELD_OPEN_CELLS_ACTION,
  rowKey,
  cellKey,
});
