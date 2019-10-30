export default (state = 1, action) => {
    switch (action.type) {
        case 'ADD_COUNT':
          return state + 1;
        case 'REMOVE_COUNT':
         return state - 1;
        default:
          return state;
      }
};