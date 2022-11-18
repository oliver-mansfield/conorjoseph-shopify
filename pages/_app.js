import "../styles/globals.css";
import Header from "components/Header";
import {store} from "../store";
import {Provider} from "react-redux";

function MyApp({Component, pageProps}) {
	return (
		<Provider store={store}>
			<div>
				<Header />
				<Component {...pageProps} />;
			</div>
		</Provider>
	);
}

export default MyApp;
