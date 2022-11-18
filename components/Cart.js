import {useDispatch, useSelector} from "react-redux";
import {hideCart} from "stores/cartSlice";

const Cart = () => {
	const cartVisible = useSelector((state) => state.cart.cartVisible);
	const cartProducts = useSelector((state) => state.cart.cartProducts);
	const dispatch = useDispatch();

	return (
		<>
			{cartVisible && (
				<div className="fixed top-9 right-0 bg-gold p-5">
					<p
						onClick={() => {
							dispatch(hideCart());
						}}
					>
						Close
					</p>
					<div>
						{cartProducts.map((product, index) => {
							return <p key={index}>{product.title}</p>;
						})}
						<p>placeholder</p>
					</div>
					<button className="button">Checkout</button>
				</div>
			)}
		</>
	);
};

export default Cart;
