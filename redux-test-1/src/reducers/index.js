import { combineReducers } from 'redux';

const setName = (state=[], action) => {

  switch(action.type) {
    case "SET_NAME" :
      return [...state, action.payload];
    default :
       return [...state];
  }
};

const getName = (state=[], action) => {

  switch(action.type) {
    case "GET_NAME" :
      return [...state, action.payload];
    default :
      return [...state];
  }
};

export default combineReducers ({
  setName : setName,
  getName : getName,
  todo: () => {return []}
});
