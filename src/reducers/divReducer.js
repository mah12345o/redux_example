// src/reducers/divReducer.js
const initialState = {
    isDivVisible: false,
  };
  
  function divReducer(state = initialState, action) {
    switch (action.type) {
      case 'TOGGLE_DIV':
        return {
          ...state,
          isDivVisible: !state.isDivVisible,
        };
      default:
        return state;
    }
  }
  
  export default divReducer;
  