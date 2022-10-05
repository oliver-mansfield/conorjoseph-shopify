import {useContext, useEffect} from "react";
import CartContext from "contexts/CartContext";

const Cart = () => {
	const cartContext = useContext(CartContext);

	useEffect(() => {
		console.log(cartContext.cartState);
	}, []);

	const cartProducts = cartContext.cartState;
	// const [cartProducts, setCartProducts] = useState([]);

	// const add = () => {
	// 	const newProd = {
	// 		handle: "ring-one",
	// 	};
	// 	const updatedProductList = [...cartProducts, newProd];

	// 	setCartProducts(updatedProductList);
	// };

	// let cartProducts = [
	// 	{
	// 		handle: "Fake ring",
	// 	},
	// 	{
	// 		handle: "Fake ring 2",
	// 	},
	// ];

	return (
		<div>
			{cartProducts.map((product, index) => {
				return <p>{product.title}</p>;
			})}
			<p>{cartContext.cartState.length}</p>
		</div>
	);
};

export default Cart;
