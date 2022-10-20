import "../styles/globals.css";
import Header from "components/Header";
import {CartContextProvider} from "contexts/CartContext";

function MyApp({Component, pageProps}) {
	return (
		<CartContextProvider>
			<>
				<Header />
				<Component {...pageProps} />;
			</>
		</CartContextProvider>
	);
}

export default MyApp;
