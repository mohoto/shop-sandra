import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    product: null,
    number: 0
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProduct: (state, action) => {
            state.product = action.payload;
            state.number = 1;
        },
        updateProductName: (state, action) => {
            //console.log(state.product);
            //const newState = { ...state.product, name: "Nouveau nom" };
            //state.product = {...state.product, name: "Nouveau nom"};
            const newName = "Nouveau nom"
            state.product.name = newName;
            //state.product.name = "Nouveau nom";
            //return state.product;
            /* return {
                ...state.product,
                    name: "Nouveau nom"
            }; */
            //const {name} = "Nouveau nom";
            //return name;
            //state.number = 2;
            
        }
    }
});

export const {setProduct, updateProductName} = productSlice.actions;
export const selectProduct = state => state.products;

export default productSlice.reducer;