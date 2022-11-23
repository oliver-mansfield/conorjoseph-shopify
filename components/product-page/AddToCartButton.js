import {useDispatch} from "react-redux";
import {addProductToCart} from "stores/cartSlice";

const AddToCartButton = ({productData}) => {
	const dispatch = useDispatch();

	return (
		<>
			<button
				className="button"
				onClick={() => {
					console.log(productData);
					dispatch(addProductToCart(productData));
				}}
			>
				Add to cart
			</button>
		</>
	);
};

export default AddToCartButton;
