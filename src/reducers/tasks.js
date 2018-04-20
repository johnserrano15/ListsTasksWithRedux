function tasks(state, action) {
  switch (action.type) {
    case 'AGG_TASK': {
      if (!action.payload.value.length) {
        return;
      }
      // console.log(state.items);

      const newItem = { text: action.payload.value, id: Date.now() };

      const newState = {
        items: [...state.items, newItem],
        shouldHide: 0
      };
      console.log(state);
      return { ...newState };
    }
    default:
      return state;
  }
}

export default tasks;
