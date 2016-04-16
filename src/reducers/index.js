import { fromJS } from 'immutable';

const initialState = fromJS({
  nextId: 0,
  items: [],
});

export default function toastsImmutable(state = initialState, action) {
  switch (action.type) {

    default: {
      return state;
    }
  }
}
