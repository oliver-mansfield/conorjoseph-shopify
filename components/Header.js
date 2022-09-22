import Link from "next/link";

const Header = () => {
	return (
		<header className="p-8 flex justify-between">
			<Link href="/">
				<h3>Conor Joseph</h3>
			</Link>
			<p>Cart</p>
		</header>
	);
};

export default Header;
