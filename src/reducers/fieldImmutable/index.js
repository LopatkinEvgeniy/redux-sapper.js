import { List, Map, fromJS } from 'immutable';
import {
  FIELD_GENERATE,
  FIELD_SET_OPTIONS,
} from '../../constants/actions';

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

    default: {
      return state;
    }
  }
}
