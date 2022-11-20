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
