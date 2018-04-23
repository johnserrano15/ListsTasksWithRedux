export function addTodo(value) {
  return {
    type: 'ADD_TODO',
    payload: { id: Date.now(), text: value }
  };
}

export function toggleTodo(id) {
  return { type: 'TOGGLE_TODO', payload: { id } };
}

export function setVisibilityFilter(filter) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    payload: { filter: filter }
  };
}
