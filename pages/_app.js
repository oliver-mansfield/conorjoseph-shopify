import "../styles/globals.css";
import {store} from "../store";
import {Provider} from "react-redux";

function MyApp({Component, pageProps}) {
	return (
		<Provider store={store}>
			<div>
				<Component {...pageProps} />;
			</div>
		</Provider>
	);
}

export default MyApp;

//TODO
//Animate cover text better
//Set up local storage to percist cart on browser refresh
//Fade out other items better on page transition
//Get better easing value
//Button styles
//Finish Cart styling
//	--Icon, Header Icon
//Style Intro into something more interesting
//Add correct product date in shopify
//Style the model shots on the product page
//Try to find original product images. The fade to black gradient of the spotlight is rough at the edges.
//Add page change transition for back/forward browser event
