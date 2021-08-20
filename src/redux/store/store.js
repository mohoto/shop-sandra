import { configureStore, combineReducers, createStore, applyMiddleware } from '@reduxjs/toolkit';
import {composeWithDevTools} from 'redux-devtools-extension';
import filterSlice from '../reducers/filtersSlice'
import cartSlice from '../reducers/cartSlice'
import productSlice from '../reducers/productSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import counterSlice from '../reducers/counterSlice';
import authSlice from '../reducers/authSlice';

/* export const store = configureStore({
    reducer: {
        filters: filterSlice
        
    }
}); */

const rootReducer = combineReducers({
    filters: filterSlice,
    cart: cartSlice,
    products: productSlice,
    counter: counterSlice,
    auth: authSlice
})

 const persistConfig = {
    key: 'root',
    storage,
    //whitelist: ['products, cart'] // only navigation will be persisted
  }
  
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools());

let persistor = persistStore(store); 

//const store = createStore(rootReducer, composeWithDevTools());
//export {store};

export {store, persistor};