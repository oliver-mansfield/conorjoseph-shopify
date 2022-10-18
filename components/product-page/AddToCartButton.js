import {useContext} from "react";
import CartContext from "contexts/CartContext";

const AddToCartButton = ({productData}) => {
	//Update Cart context from here
	//Add the handle of the product
	//Cart.js renders the updated context

	const cartContext = useContext(CartContext);

	// const handleUpdateCartContext = (productData) => {
	// 	// console.log("click" + productData.handle);
	// 	// const {cartState, setCartState} = useContext(CartContextProvider);
	// 	// setCartState([
	// 	// 	{
	// 	// 		handle: "Fake ring ok",
	// 	// 	},
	// 	// 	{
	// 	// 		handle: "Fake ring 2",
	// 	// 	},
	// 	// ]);
	// };

	return (
		<>
			<button
				onClick={() => {
					cartContext.addProductToCart(productData);
					cartContext.setCartShown(true);
				}}
			>
				Add {productData.handle} to cart
			</button>
		</>
	);
};

export default AddToCartButton;
