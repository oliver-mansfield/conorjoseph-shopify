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
			const addedProduct = state.cartProducts.find(
				(prod) => prod.handle === action.payload.handle
			);

			if (addedProduct) {
				addedProduct.quantity++;
			} else {
				state.cartProducts.push({...action.payload, quantity: 1});
			}

			state.cartVisible = true;
		},

		increaseQty: (state, action) => {
			state.cartVisible = true;

			for (let i = 0; i < state.cartProducts; i++) {
				if (cartProducts[i].handle === action.payload) {
					cartProducts[i].quantity;
				}
			}
		},
	},
});

// Action creators are generated for each case reducer function
export const {showCart, hideCart, addProductToCart, increaseQty} =
	cartSlice.actions;

export default cartSlice.reducer;
