import "../styles/globals.css";
import { persistor, store } from "../store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

//TODO see if <PersistGate loading={null} persistor={persistor}> is really needed
//There's no server side rendering, does it block rendering while cartProducts are loaded from local storage?

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<div>
					<Component {...pageProps} />;
				</div>
			</PersistGate>
		</Provider>
	);
}

export default MyApp;

//TODO
//Loading screen
//Animate cover text better DONE
//Set up local storage to percist cart on browser refresh
//Fade out other items better on page transition //DONE - but need to handle nav if it's half way up page
//Get better easing value
//Button styles
//Finish Cart styling
//	--Icon, Header Icon
//Style Intro into something more interesting
//Add correct product data in shopify
//Style the model shots on the product page
//Try to find original product images. The fade to black gradient of the spotlight is rough at the edges.
//Add page change transition for back/forward browser event
//SEO turn off so this fake site doesn't appear under Conor's name
//Optimise images