import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "../features/cartSlice";
import { productApi } from "../services/productApi";

const persistConfig = { 
    key: 'cart',
    storage: storage,
    whitelist: ['cartItems', 'totalQuantity', 'totalPrice'], // which items will be persisted
}

const persistedCartReducer = persistReducer(persistConfig, cartReducer); //cartreducer wrapped by persist reducer with config

const store = configureStore({
    reducer: {
        [productApi.reducerPath] : productApi.reducer,
        cart: persistedCartReducer, // persisted cart reducer in place of cart reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false, // disable for persist 
    }).concat(productApi.middleware)
})

setupListeners(store.dispatch);

export const persistor = persistStore(store); // storage update when state is changed

export default store;