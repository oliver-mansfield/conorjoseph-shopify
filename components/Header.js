import Link from "next/link";
import Cart from "components/Cart";
import { useDispatch, useSelector } from "react-redux";
import { showCart } from "stores/cartSlice";

const Header = () => {
	const cartVisible = useSelector((state) => state.cart.cartVisible);
	const dispatch = useDispatch();

	return (
		<header className="p-2 flex justify-between items-center sticky top-0 z-50 backdrop-filter-glass border-b-[1px]">
			<Link href="/">
				<div className="perspective-container p-4 cursor-pointer">
					<h3 className="perspective-text">Conor Joseph</h3>
				</div>
			</Link>


			<button
				className="h-10 w-10 group mr-2 relative"
				onClick={() => {
					dispatch(showCart());
				}}
			>
				<svg className="transition-all absolute top-0" xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 96 960 960" width="35"><path fill="#fff" d="M291.019 957.691q-26.735 0-45.223-18.813-18.487-18.813-18.487-45.706 0-26.894 18.695-45.494 18.695-18.601 45.422-18.601 26.728 0 45.42 18.813t18.692 45.706q0 26.894-18.813 45.494-18.813 18.601-45.706 18.601Zm387.691 0q-26.734 0-45.222-18.813T615 893.172q0-26.894 18.695-45.494 18.695-18.601 45.423-18.601 26.727 0 45.419 18.813 18.693 18.813 18.693 45.706 0 26.894-18.814 45.494-18.813 18.601-45.706 18.601ZM232.692 310.769l111.539 232.616h278.384q3.461 0 6.346-1.731 2.885-1.731 4.424-4.808l118.461-215.307q2.308-4.231.384-7.501-1.923-3.269-6.539-3.269H232.692Zm-23.076-45.384h554.812q24.516 0 37.082 21.193 12.565 21.192.565 42.961l-122.938 222.72q-9.984 16.586-25.62 26.548-15.636 9.961-33.746 9.961H324l-55.231 102.077q-2.692 4.616 0 10.001 2.693 5.385 8.462 5.385H743.23v45.383H283.924q-37.769 0-54.538-26.077-16.77-26.076.307-57.615l64.385-117.23-151.231-319.308H67.924v-45.383h104.307l37.385 79.384Zm134.615 278h285.692-285.692Z" /></svg>

				<svg className="transition-all absolute top-0 group-hover:opacity-100 opacity-0" xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 96 960 960" width="35"><path fill="#fff" d="M291.019 957.691q-26.735 0-45.223-18.813-18.487-18.813-18.487-45.706 0-26.894 18.695-45.494 18.695-18.601 45.422-18.601 26.728 0 45.42 18.813t18.692 45.706q0 26.894-18.813 45.494-18.813 18.601-45.706 18.601Zm387.691 0q-26.734 0-45.222-18.813T615 893.172q0-26.894 18.695-45.494 18.695-18.601 45.423-18.601 26.727 0 45.419 18.813 18.693 18.813 18.693 45.706 0 26.894-18.814 45.494-18.813 18.601-45.706 18.601ZM209.616 265.385h554.812q24.516 0 37.082 21.193 12.565 21.192.565 42.961l-122.938 222.72q-9.984 16.586-25.62 26.548-15.636 9.961-33.746 9.961H324l-55.231 102.077q-2.692 4.616 0 10.001 2.693 5.385 8.462 5.385H743.23v45.383H283.924q-37.769 0-54.538-26.077-16.77-26.076.307-57.615l64.385-117.23-151.231-319.308H67.924v-45.383h104.307l37.385 79.384Z" /></svg>

			</button>
			{cartVisible && <Cart />}
		</header >
	);
};

export default Header;
