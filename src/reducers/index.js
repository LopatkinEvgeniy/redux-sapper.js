import { fromJS } from 'immutable';

let initialState = fromJS({
  nextId: 0,
  items: []
});

export default function toastsImmutable(state = initialState, action) {
  switch (action.type) {


    default:
      return state;
  }
}
