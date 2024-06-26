import { useDispatch } from "react-redux";
import {
	increaseQty,
	decreaseQty,
	removeProductFromCart,
} from "stores/cartSlice";

const QuantityControls = ({ product }) => {
	const dispatch = useDispatch();

	return (
		<>
			<div className="sm:flex">
				<div className="flex justify-between items-center border border-white max-w-[110px]">

					<button
						className="px-2 py-1 group hover:bg-white transition"
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
						className="px-2 py-1 group hover:bg-white transition"
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
					className="sm:ml-4 sm:mt-0 mt-4 text-sm text-white underline underline-offset-4"
					onClick={() => {
						dispatch(removeProductFromCart(product.handle));
					}}
				>
					Remove
					{/* <svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"


					>
						<path
							d="M8.25 16.8L12 13.05L15.75 16.8L16.8 15.75L13.05 12L16.8 8.25L15.75 7.2L12 10.95L8.25 7.2L7.2 8.25L10.95 12L7.2 15.75L8.25 16.8ZM12 22C10.6333 22 9.34167 21.7375 8.125 21.2125C6.90833 20.6875 5.84583 19.9708 4.9375 19.0625C4.02917 18.1542 3.3125 17.0917 2.7875 15.875C2.2625 14.6583 2 13.3667 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.02917 5.825 4.9375 4.925C5.84583 4.025 6.90833 3.3125 8.125 2.7875C9.34167 2.2625 10.6333 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3667 21.7375 14.6583 21.2125 15.875C20.6875 17.0917 19.975 18.1542 19.075 19.0625C18.175 19.9708 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20.5C14.3667 20.5 16.375 19.6708 18.025 18.0125C19.675 16.3542 20.5 14.35 20.5 12C20.5 9.63333 19.675 7.625 18.025 5.975C16.375 4.325 14.3667 3.5 12 3.5C9.65 3.5 7.64583 4.325 5.9875 5.975C4.32917 7.625 3.5 9.63333 3.5 12C3.5 14.35 4.32917 16.3542 5.9875 18.0125C7.64583 19.6708 9.65 20.5 12 20.5Z"
							fill="white"
						/>
					</svg> */}


				</button>
			</div>
		</>
	);
};

export default QuantityControls;
