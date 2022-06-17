function reducer(store = 0, action) { // ahhaha action - действие 

  if (action.type == 'increment') { 
    return store + 1;
  }
  if (action.type == 'decrement') {
    return store - 1;
  }
  return store;
}

export default reducer;