import { List, Map, fromJS } from 'immutable';
import {
  FIELD_GENERATE,
} from '../../constants/actions';

const initialState = new Map({
  rows: new List,
});

export default function toastsImmutable(state = initialState, action) {
  switch (action.type) {
    case FIELD_GENERATE: {
      return state.set('rows', fromJS(action.rows));
    }

    default: {
      return state;
    }
  }
}
