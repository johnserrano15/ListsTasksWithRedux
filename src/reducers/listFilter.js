import { fromJS } from 'immutable';
const initialState = fromJS({
  filter: 'SHOW_ALL'
});

// Un reducer para filtrar
const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      // console.log(action.filter)
      // Aca llega el tipo de filtro Ej: SHOW_ACTIVE
      return state.set('filter', action.payload.filter);
    default:
      return state;
  }
};

export default visibilityFilter;
