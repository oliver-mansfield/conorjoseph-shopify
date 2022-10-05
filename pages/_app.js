import "../styles/globals.css";
import Header from "components/Header";
import Cart from "components/Cart";
import {CartContextProvider} from "contexts/CartContext";

function MyApp({Component, pageProps}) {
	return (
		<CartContextProvider>
			<>
				<Header />
				<Component {...pageProps} />;
				<Cart />
			</>
		</CartContextProvider>
	);
}

export default MyApp;
