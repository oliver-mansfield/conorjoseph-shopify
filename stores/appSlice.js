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
			state.splashVisible = false;
		},
	},
});

// Action creators are generated for each case reducer function
export const {splashVisible, showSplash, hideSplash} = appSlice.actions;

export default appSlice.reducer;
