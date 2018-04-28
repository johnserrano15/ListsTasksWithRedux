// import { fromJS } from 'immutable'; // para objects
import { List as list } from 'immutable'; // para objects
const initialState = list([]);

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      const data = {
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      };

      // return [...state, data];
      return state.push(data);
    }

    case 'TOGGLE_TODO': {
      console.log(state);
      const newState = state.map(t => {
        if (action.payload.id == t.id) {
          t.completed = !t.completed;
        }
        return t;
      });
      // return [...newState];
      return newState;
    }

    default:
      return state;
  }
};

export default todos;
