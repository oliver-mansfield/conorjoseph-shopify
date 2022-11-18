import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	cartProducts: [],
	cartVisible: false,
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		showCart: (state) => {
			state.cartVisible = true;
		},
		hideCart: (state) => {
			state.cartVisible = false;
		},
		addProductToCart: (state, action) => {
			state.cartVisible = true;
			state.cartProducts = [...state.cartProducts, action.payload];
		},
	},
});

// Action creators are generated for each case reducer function
export const {showCart, hideCart, addProductToCart} = cartSlice.actions;

export default cartSlice.reducer;
