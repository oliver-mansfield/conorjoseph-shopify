import {createContext, useState, useEffect} from "react";

const CartContext = createContext();

// const getInitialState = () => {
// 	const cart = localStorage.getItem("cart");
// 	return cart ? JSON.parse(cart) : [];
// };

export function CartContextProvider({children}) {
	const [cartState, setCartState] = useState([]);
	const [cartShown, setCartShown] = useState(false);
	const [splashShown, setSplashShown] = useState(false);

	const addProductToCart = (product) => {
		setCartState([...cartState, product]);
	};

	// useEffect(() => {
	// 	setCartState(localStorage.getItem("cart"));
	// }, []);

	//Check for localStorage on load
	//Set ProviderState to value of localStorage

	//Upon update of ProviderSate, set localStorage

	//On page load
	// useEffect(() => {
	// 	setCartState(localStorage.getItem("cart"));
	// }, []);

	//On cart update
	// useEffect(() => {
	// 	localStorage.setItem("cart", JSON.stringify(cartState));
	// }, [cartState]);

	return (
		<CartContext.Provider
			value={{
				cartState,
				cartShown,
				setCartShown,
				splashShown,
				setSplashShown,
				addProductToCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

export default CartContext;
