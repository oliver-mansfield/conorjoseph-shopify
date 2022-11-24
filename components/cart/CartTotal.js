import {useSelector} from "react-redux";
import formatPrice from "lib/formatPrice";

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
		<div className="text-right">
			<p>Total</p>
			<p>{formatPrice(getTotalPrice().totalPrice)}</p>
		</div>
	);
};

export default CartTotal;
