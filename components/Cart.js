import {useDispatch, useSelector} from "react-redux";
import {hideCart} from "stores/cartSlice";

const Cart = () => {
	const cartVisible = useSelector((state) => state.cart.cartVisible);
	const cartProducts = useSelector((state) => state.cart.cartProducts);
	const dispatch = useDispatch();

	return (
		<>
			{cartVisible && (
				<div className="fixed top-0 left-0 h-full w-full">
					<div className="relative z-20 flex justify-center items-center h-full w-full pointer-events-none">
						<div className="bg-gradient-to-b from-brown1 to-brown2 pointer-events-auto">
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
					</div>
					<div
						onClick={() => {
							dispatch(hideCart());
						}}
						className="opacity-50 bg-black w-full h-full fixed top-0 left-0 z-10"
					></div>
				</div>
			)}
		</>
	);
};

export default Cart;
