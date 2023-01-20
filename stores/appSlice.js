import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	splashVisible: false,
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

//write a function to sum two numbers

// Action creators are generated for each case reducer function
export const {splashVisible, showSplash, hideSplash} = appSlice.actions;

export default appSlice.reducer;
