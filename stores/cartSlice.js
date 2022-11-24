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

		removeProductFromCart: (state, action) => {
			//.filter creates a new array with the product taken out
			const removeProduct = state.cartProducts.filter(
				(prod) => prod.handle !== action.payload
			);
			state.cartProducts = removeProduct;
		},

		increaseQty: (state, action) => {
			//action.payload here is the product handle, passed from Cart.js
			const product = state.cartProducts.find(
				(prod) => prod.handle === action.payload
			);
			product.quantity++;
		},

		decreaseQty: (state, action) => {
			const product = state.cartProducts.find(
				(prod) => prod.handle === action.payload
			);
			if (product.quantity === 1) {
				console.log("remove");
			} else {
				product.quantity--;
			}
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	showCart,
	hideCart,
	addProductToCart,
	removeProductFromCart,
	increaseQty,
	decreaseQty,
} = cartSlice.actions;

export default cartSlice.reducer;
