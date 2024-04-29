//import { createStore } from "redux";

// const store = createStore(rootReducers);

// export default store;


import rootReducers from "./reducer/index"
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer:rootReducers,
});

export default store