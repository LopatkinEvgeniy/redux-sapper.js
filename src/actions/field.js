import {
  FIELD_GENERATE,
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
