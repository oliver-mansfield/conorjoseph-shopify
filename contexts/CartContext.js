import {createContext, useContext, useState} from "react";

const CartContext = createContext();

// let rings = [
// 	{
// 		handle: "Fake ring",
// 	},
// 	{
// 		handle: "Fake ring 2",
// 	},
// ];

export function CartContextProvider({children}) {
	const [cartState, setCartState] = useState([]);

	const addProductToCart = (product) => {
		setCartState([...cartState, product]);
	};

	return (
		<CartContext.Provider value={{cartState, addProductToCart}}>
			{children}
		</CartContext.Provider>
	);
}

export default CartContext;

// export function updateCartContext(data) {
// 	console.log("updated");
// 	setCartState([...cartState, data]);
// }

//Is this wrapper needed or can I just call useContext(CartContext) on a page?
// export function useCartContext() {
// 	return useContext(CartContext);
// }
