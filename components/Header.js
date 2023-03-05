import Link from "next/link";
import Cart from "components/Cart";
import { useDispatch, useSelector } from "react-redux";
import { showCart } from "stores/cartSlice";

const Header = () => {
	const cartVisible = useSelector((state) => state.cart.cartVisible);
	const dispatch = useDispatch();

	return (
		//write a tailwind class for a white 1px border bottom
		<header className="p-2 flex justify-between sticky top-0 z-50 backdrop-filter border-b-[1px]">
			<Link href="/">
				<div className="perspective-container p-4">
					<h3 className="perspective-text">Conor Joseph</h3>
				</div>
			</Link>
			<p
				className="bg-black p-4"
				onClick={() => {
					dispatch(showCart());
				}}
			>
				Cart
			</p>
			{cartVisible && <Cart />}
		</header>
	);
};

export default Header;
