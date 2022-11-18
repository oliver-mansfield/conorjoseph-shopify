import {useDispatch} from "react-redux";
import {addProductToCart} from "stores/cartSlice";

const AddToCartButton = ({productData}) => {
	const dispatch = useDispatch();

	return (
		<>
			<button
				className="button"
				onClick={() => {
					dispatch(addProductToCart(productData));
				}}
			>
				Add {productData.handle} to cart
			</button>
		</>
	);
};

export default AddToCartButton;
