import Link from "next/link";
import Cart from "components/Cart";

const Header = () => {
	return (
		<header className="p-8 flex justify-between">
			<Link href="/">
				<div className="perspective-container">
					<h3 className="perspective-text">Conor Joseph</h3>
				</div>
			</Link>
			<p>Cart</p>
			<Cart />
		</header>
	);
};

export default Header;
