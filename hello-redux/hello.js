const { createStore } = require('redux');

const initialState = {
  count: 0,
  color: 'Rouge',
};

function reducer(state = initialState, action) {
  console.log('reducer called', action);
  switch (action.type) {
    case 'INCREMENT':
      return {...state, count: state.count + 1 };
    case 'CHANGE_COLOR':
      return {...state, color: action.payload };
    default:
      return state;
  }
}

/** @type {import('redux').Store} */
const store = createStore(reducer);

const state = store.getState();
console.log(state);

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'CHANGE_COLOR', payload: 'Vert' });

