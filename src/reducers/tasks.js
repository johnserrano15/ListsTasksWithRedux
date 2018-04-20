const initialState = {
  items: [
    {
      id: 1,
      text: 'first task'
    }
  ],
  shouldHide: 0,
  value: ''
};

function tasks(state = initialState, action) {
  switch (action.type) {
    case 'AGG_TASK': {
      if (!action.payload.value.length) {
        return;
      }
      // console.log(state.items);

      const newItem = { text: action.payload.value, id: Date.now() };

      const newState = { items: [...state.items, newItem], shouldHide: 0 };
      // console.log(state);
      return { ...newState };
    }

    case 'UPDATE_TASK': {
      return {
        ...state,
        value: action.payload.value,
        shouldHide: action.payload.shouldHide
      };
    }

    case 'CHANGE_TASK': {
      return { ...state, value: action.payload.value };
    }

    case 'SUBMIT_UPDATE': {
      const items = state.items;
      const id = action.payload.id;

      const newItems = items.map(e => {
        // console.log(e)
        // console.info(id)
        if (e.id == id) {
          e.text = action.payload.text;
        }
        return e;
      });
      // console.log(newItems);
      return { items: [...newItems], shouldHide: 0 };
    }

    case 'DELETE_TASK': {
      const items = state.items;
      // console.info(items);
      // Limpiando array sin mutar el array siendo -> inmutable
      const newItems = items.filter(e => e.id !== action.payload.id);
      return { items: [...newItems] };
    }

    default:
      return state;
  }
}

export default tasks;
