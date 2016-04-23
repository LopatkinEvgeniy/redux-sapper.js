import { List, Map, fromJS } from 'immutable';
import {
  FIELD_GENERATE,
  FIELD_SET_OPTIONS,
  FIELD_OPEN_CELLS_ACTION,
} from '../../constants/actions';

import {
  // CELL_STATUS_CLOSED,
  CELL_STATUS_OPENED,
  // CELL_STATUS_QUESTION,
  // CELL_STATUS_MARK,
} from '../../constants/field';

const initialState = new Map({
  rows: new List,
  rowsCount: 20,
  colsCount: 30,
  bombsFactor: 0.1,
});

export default function toastsImmutable(state = initialState, action) {
  switch (action.type) {
    case FIELD_GENERATE: {
      return state.set('rows', fromJS(action.rows));
    }

    case FIELD_SET_OPTIONS: {
      return state.withMutations((mutable) => {
        mutable
          .set('rowsCount', action.rowsCount)
          .set('colsCount', action.colsCount)
          .set('bombsFactor', action.bombsFactor);
      });
    }

    case FIELD_OPEN_CELLS_ACTION: {
      const { rowKey, cellKey } = action;

      return state.update(
        'rows',
        rows =>
          rows.update(rowKey, row =>
            row.update(cellKey, cell =>
              cell.set('status', CELL_STATUS_OPENED)))
      );
    }

    default: {
      return state;
    }
  }
}
