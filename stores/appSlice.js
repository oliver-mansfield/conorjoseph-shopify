import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	splashVisible: false,
	// isTransitioning: false,
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
		// startPageTransition: (state) => {
		// 	state.isTransitioning = true;
		// },
		// endPageTransition: (state) => {
		// 	state.isTransitioning = false;
		// },
	},
});

// Action creators are generated for each case reducer function
export const {
	splashVisible,
	showSplash,
	hideSplash,
	startPageTransition,
	endPageTransition,
} = appSlice.actions;

export default appSlice.reducer;
