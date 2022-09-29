import Link from "next/link";

const Header = () => {
	return (
		<header className="p-8 flex justify-between">
			<Link href="/">
				<div className="perspective-container">
					<h3 className="perspective-text">Conor Joseph</h3>
				</div>
			</Link>
			<p>Cart</p>
		</header>
	);
};

export default Header;
