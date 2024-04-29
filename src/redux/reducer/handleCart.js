// const cart = [];

// const HandleCart =(state = cart, action) => {
//     const product = action.payload;
//     switch (action.type) {
//         case "ADDITEM":
//             // Check if Product is Already Exist
//             const exist = state.find((x)=> x.id === product.id);
//             if(exist){
//                 // Increase the Quantity
//                 return state.map((x)=>
//                 x.id === product.id ? {...x, qty: x.qty + 1} : x
//                 );
//             }else{
//                 const product = action.payload;
//                 return[
//                     ...state,
//                     {
//                         ...product,
//                         qty: 1,
//                     }
//                 ]
//             }
//             break;

//             case "DELITEM":
//                 const exist1 = state.find((x)=> x.id === product.id);
//                 if(exist1.qty === 1){
//                     return state.filter((x)=> x.id !== exist1.id);
//                 }else{
//                     return state.map((x)=>
//                         x.id === product.id ? {...x, qty: x.qty-1} : x
//                     );
//                 }
//                 break;
    
//         default:
//             return state;
//             break;
//     }

// }

// export default HandleCart;



// // const cart = [];

// // const HandleCart = (state = cart, action) => {
// //     const product = action.payload;
// //     switch (action.type) {
// //         case "ADDITEM":
// //             // Check if Product is Already Exist
// //             const exist = state.find((x) => x.id === product.id);
// //             if (exist) {
// //                 // Increase the Quantity
// //                 return state.map((x) =>
// //                     x.id === product.id ? { ...x, qty: x.qty + 1 } : x
// //                 );
// //             } else {
// //                 return [
// //                     ...state,
// //                     {
// //                         ...product,
// //                         qty: 1,
// //                     },
// //                 ];
// //             }
    
// //         case "DELITEM":
// //             const exist1 = state.find((x) => x.id === product.id);
// //             if (exist1 && exist1.qty === 1) {
// //                 return state.filter((x) => x.id !== exist1.id);
// //             } else {
// //                 return state.map((x) =>
// //                     x.id === product.id ? { ...x, qty: x.qty - 1 } : x
// //                 );
// //             }

// //         default:
// //             return state;
// //     }
// // };

// // export default HandleCart;

const initialState = [];

const HandleCart = (state = initialState, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            const productExist = state.find((x) => x.id === product.id);
            if (productExist) {
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x
                );
            } else {
                return [...state, { ...product, qty: 1 }];
            }

        case "DELITEM":
            const productExist1 = state.find((x) => x.id === product.id);
            if (productExist1 && productExist1.qty === 1) {
                return state.filter((x) => x.id !== productExist1.id);
            } else {
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty - 1 } : x
                );
            }

        default:
            return state;
    }
};

export default HandleCart;


