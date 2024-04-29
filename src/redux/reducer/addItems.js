// const addItem = [];

// const addItems = (state = addItem, action) => {
//     switch (action.type) {
//         case "ADDITEM" : return [
//             ...state,
//             action.payload
//         ]
//         break;

//         case "DELITEM" :
//             return state = state.filter((x)=>{
//                 return x.id !== action.payload.id
//             })
//         break;

//         default: return state;
//         break;

        
//     }
// }

// export default addItems;

import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
    },
    deleteItem(state, action) {
      return state.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;