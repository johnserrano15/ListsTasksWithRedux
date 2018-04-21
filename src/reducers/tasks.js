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
  },
  search: []
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
      return { ...state, data: { ...newState } };
    }

    case 'UPDATE_TASK': {
      // console.log(state.data);
      // console.log(state.data.items);
      // Cuando se da click sobre el li
      return {
        ...state,
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
        ...state,
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
      return { ...state, data: { items: [...newItems], shouldHide: 0 } };
    }

    case 'DELETE_TASK': {
      const items = state.data.items;
      // console.info(items);
      // Limpiando array sin mutar el array siendo -> inmutable
      const newItems = items.filter(e => e.id !== action.payload.id);
      return { ...state, data: { items: [...newItems] } };
    }

    case 'SUBMIT_SEARCH': {
      const list = state.data.items;
      // console.log(list);
      const results = [];
      if (action.payload.query) {
        list.filter(item => {
          const text = item.text.toLowerCase();
          const query = action.payload.query.toLowerCase();
          if (text.includes(query)) {
            // console.log(item);
            results.push(item);
          }
        });
      }

      // console.log(results);

      return { ...state, search: results };
    }

    default:
      return state;
  }
}

export default tasks;
