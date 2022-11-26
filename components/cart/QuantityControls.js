import {useDispatch} from "react-redux";
import {
	increaseQty,
	decreaseQty,
	removeProductFromCart,
} from "stores/cartSlice";

const QuantityControls = ({product}) => {
	const dispatch = useDispatch();

	return (
		<>
			<div className="flex">
				<div className="flex justify-between items-center border border-white">
					<button
						className="px-2 py-1 group hover:bg-white"
						onClick={() => {
							dispatch(decreaseQty(product.handle));
						}}
					>
						<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
							<path
								d="M5 13v-2h14v2Z"
								className="fill-white group-hover:fill-black"
							/>
						</svg>
					</button>

					<span className="px-2">{product.quantity}</span>

					<button
						className="px-2 py-1 group hover:bg-white"
						onClick={() => {
							dispatch(increaseQty(product.handle));
						}}
					>
						<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
							<path
								d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6Z"
								className="fill-white group-hover:fill-black"
							/>
						</svg>
					</button>
				</div>
				<button
					className="ml-4 px-4 hover:bg-white hover:text-black text-white border border-white"
					onClick={() => {
						dispatch(removeProductFromCart(product.handle));
					}}
				>
					Remove
				</button>
			</div>
		</>
	);
};

export default QuantityControls;
