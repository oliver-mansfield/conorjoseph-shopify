import Link from "next/link";
import Cart from "components/Cart";
import {gsap} from "gsap";
import {useRef, useEffect} from "react";

const Header = () => {
	const logoRef = useRef(null);

	useEffect(() => {
		console.log(logoRef);
		gsap.from(logoRef.current, {
			autoAlpha: 0,
			ease: "none",
			delay: 1,
		});
	}, []);

	return (
		<header className="p-8 flex justify-between" ref={logoRef}>
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
