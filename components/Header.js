import Link from "next/link";
import Cart from "components/Cart";
import {gsap} from "gsap";
import {useRef, useEffect} from "react";

const Header = () => {
	const headerRef = useRef(null);

	// useEffect(() => {
	// 	console.log(logoRef);
	// 	gsap.from(logoRef.current, {
	// 		autoAlpha: 0,
	// 		ease: "none",
	// 		delay: 1,
	// 	});
	// }, []);

	return (
		<header
			className="p-2 flex justify-between sticky top-0 z-50"
			ref={headerRef}
		>
			<Link href="/">
				<div className="perspective-container p-4">
					<h3 className="perspective-text">Conor Joseph</h3>
				</div>
			</Link>
			<p className="bg-black p-4">Cart</p>
			<Cart />
		</header>
	);
};

export default Header;
