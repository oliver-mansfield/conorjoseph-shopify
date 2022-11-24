import {useSelector} from "react-redux";

const CartTotal = () => {
	const cartProducts = useSelector((state) => state.cart.cartProducts);

	const getTotalPrice = () => {
		let totalQuantity = 0;
		let totalPrice = 0;

		cartProducts.forEach((prod) => {
			totalQuantity += prod.quantity;
			totalPrice += prod.priceRange.minVariantPrice.amount * prod.quantity;
		});
		return {totalQuantity, totalPrice};
	};
	return (
		<>
			<p>Total</p>
			<p>{getTotalPrice().totalPrice}</p>
			<p>{getTotalPrice().totalQuantity}</p>
		</>
	);
};

export default CartTotal;
