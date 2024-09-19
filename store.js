import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./src/features/user/userSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        // menu: menuReducer,
        // cart: cartReducer,
        // order: orderReducer
    }
});

export default store;