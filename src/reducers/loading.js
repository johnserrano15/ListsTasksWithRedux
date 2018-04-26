import { IS_LOAGIND } from '../actions/types';

const initialState = {
  active: false
};

const isLoading = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOAGIND:
      return action.payload.value;
    default:
      return state;
  }
};

export default isLoading;
