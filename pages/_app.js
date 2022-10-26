import "../styles/globals.css";
import Header from "components/Header";
import {CartContextProvider} from "contexts/CartContext";

function MyApp({Component, pageProps}) {
	return (
		<CartContextProvider>
			<div>
				<Header />
				<Component {...pageProps} />;
			</div>
		</CartContextProvider>
	);
}

export default MyApp;
