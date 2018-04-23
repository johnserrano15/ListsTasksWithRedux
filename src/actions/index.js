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

export const aggTask = value => {
  return { type: 'AGG_TASK', payload: { value } };
};

export const deleteTask = id => {
  return { type: 'DELETE_TASK', payload: { id } };
};

export const updateTask = (id, text) => {
  return { type: 'UPDATE_TASK', payload: { value: text, shouldHide: id } };
};

export const changetask = value => {
  return { type: 'CHANGE_TASK', payload: { value } };
};

export const submitUpdate = (id, text) => {
  return { type: 'SUBMIT_UPDATE', payload: { id, text } };
};

export const submitSearch = (query, items) => {
  return { type: 'SUBMIT_SEARCH', payload: { query, items } };
};
