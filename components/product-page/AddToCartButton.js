import { useDispatch } from "react-redux";
import { addProductToCart } from "stores/cartSlice";
import Button from "components/elements/Button";

const AddToCartButton = ({ productData }) => {
	const dispatch = useDispatch();


	return (
		<>
			{/* <button
				className="button"
				onClick={() => {
					dispatch(addProductToCart(productData));
				}}
			>
				Add to cart
			</button> */}

			<button className="button" onClick={() => {
				dispatch(addProductToCart(productData));
			}} >Add to cart</button>
		</>
	);
};

export default AddToCartButton;
