const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      const data = {
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      };

      return [...state, data];
    }
    case 'TOGGLE_TODO': {
      const newState = state.map(t => {
        if (action.payload.id == t.id) {
          t.completed = !t.completed;
        }
        return t;
      });
      return [...newState];
    }

    default:
      return state;
  }
};

export default todos;
