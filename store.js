import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        menu: menuReducer,
        cart: cartReducer,
        user: userReducer,
        order: orderReducer
    }
});

export default store;