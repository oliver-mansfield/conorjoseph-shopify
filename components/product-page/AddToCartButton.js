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

			<Button text="Add to basket" link={null} onClick={() => {
				dispatch(addProductToCart(productData));
			}} />
		</>
	);
};

export default AddToCartButton;
