import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./stores/cartSlice";

export const store = configureStore({
	reducer: {
		cart: cartReducer,
	},
});
