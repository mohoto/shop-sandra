import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    items: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items = [...state.items, action.payload];
        },
        updateCart: (state, action) => {    
            //state.items = [...state.items.filter(item => item.id !== action.payload.id), action.payload]
            
            /*Ou alors, on peut faire*/
            state.items.map(item => {
                if(item.id === action.payload.id) {
                    item.quantity = action.payload.quantity
                    return item;
                }
                return item;
            })
        },
        updateName: (state, action) => {
            state.items.map(item => {
                if(item.id === action.payload.id) {
                    item.name = "Gros"
                    return item;
                }
                return item;
            })
        },
        removeItem: (state, action) => {
            state.items = [...state.items.filter(item => item.id !== action.payload.id)];
        }
    }
});

export const {addToCart, updateCart, removeItem, updateName} = cartSlice.actions;
export const selectCart = state => state.cart;

export default cartSlice.reducer;