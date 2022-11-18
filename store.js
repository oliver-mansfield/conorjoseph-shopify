import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./stores/cartSlice";
import appReducer from "stores/appSlice";

export const store = configureStore({
	reducer: {
		app: appReducer,
		cart: cartReducer,
	},
});
