import {useContext} from "react";
import CartContext from "contexts/CartContext";

const Cart = () => {
	const cartContext = useContext(CartContext);
	const cartProducts = cartContext.cartState;

	// showCart = () => {

	// }

	const hideCart = () => {
		cartContext.setCartShown(false);
	};

	// useEffect(() => {

	// }, [cartState])

	return (
		<>
			{cartContext.cartShown && (
				<div className="fixed top-9 right-0 bg-gold p-5">
					<p onClick={hideCart}>Close</p>
					<div>
						{cartProducts.map((product, index) => {
							return <p key={index}>{product.title}</p>;
						})}
						<p>{cartContext.cartState.length}</p>
					</div>
					<button className="button">Checkout</button>
				</div>
			)}
		</>
	);
};

export default Cart;
