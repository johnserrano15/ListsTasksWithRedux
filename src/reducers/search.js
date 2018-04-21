const initialState = [];

function search(state = initialState, action) {
  switch (action.type) {
    case 'SUBMIT_SEARCH': {
      const list = action.payload.items;
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
      return results;
    }
    default:
      return state;
  }
}

export default search;
