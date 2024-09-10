import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	splashVisible: false,
	arrayOfIndexes: []
};

export const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		showSplash: (state) => {
			state.splashVisible = true;
		},
		hideSplash: (state) => {
			console.log("hide splash");
			state.splashVisible = false;
		},

	},
});

export const { splashVisible, showSplash, hideSplash } = appSlice.actions;

export default appSlice.reducer;
