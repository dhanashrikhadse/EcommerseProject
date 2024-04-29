// import HandleCart from "./handleCart"
// import addItems from "./addItems";
// import { combineReducers} from "redux";

// const rootReducers = combineReducers({
// HandleCart,addItems,
// })
// export default rootReducers;

import { combineReducers } from 'redux';
import handleCartReducer from './handleCart';
import addItemsReducer from './addItems';

const rootReducer = combineReducers({
  handleCart: handleCartReducer,
  addItems: addItemsReducer,
  // Add other reducers here if needed
});

export default rootReducer;
