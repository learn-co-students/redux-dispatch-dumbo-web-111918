function changeState(state, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };
    default:
      return state;
  }
}

let state = { count: 0 };
const action = { type: 'INCREASE_COUNT' };

function dispatch(action) {
  state = changeState(state, action);
  render();
}

function render() {
  document.body.textContent = state.count;
}

// changeState(state, action);
dispatch(action);
dispatch(action);
dispatch(action);
dispatch(action);
console.log(state);
render();
