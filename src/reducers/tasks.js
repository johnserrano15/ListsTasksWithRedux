const initialState = {
  data: {
    items: [
      {
        id: 1,
        text: 'first task'
      }
    ],
    shouldHide: 0,
    value: ''
  }
};

function tasks(state = initialState, action) {
  switch (action.type) {
    case 'AGG_TASK': {
      if (!action.payload.value.length) {
        return state;
      }
      // console.log(state.data);

      const newItem = { text: action.payload.value, id: Date.now() };

      const newState = { items: [...state.data.items, newItem], shouldHide: 0 };
      // console.log(state);
      return { data: { ...newState } };
    }

    case 'UPDATE_TASK': {
      // console.log(state.data);
      // console.log(state.data.items);
      // Cuando se da click sobre el li
      return {
        data: {
          items: [...state.data.items],
          value: action.payload.value,
          shouldHide: action.payload.shouldHide
        }
      };
    }

    case 'CHANGE_TASK': {
      // le pasamos todo el data para mantener el state de shoulhiden
      return {
        data: { ...state.data, value: action.payload.value }
      };
    }

    case 'SUBMIT_UPDATE': {
      const items = state.data.items;
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
      return { data: { items: [...newItems], shouldHide: 0 } };
    }

    case 'DELETE_TASK': {
      const items = state.data.items;
      // console.info(items);
      // Limpiando array sin mutar el array siendo -> inmutable
      const newItems = items.filter(e => e.id !== action.payload.id);
      return { data: { items: [...newItems] } };
    }

    default:
      return state;
  }
}

export default tasks;
