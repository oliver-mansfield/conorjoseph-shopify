import {useDispatch, useSelector} from "react-redux";
import {hideCart} from "stores/cartSlice";
import {gsap} from "gsap";
import {useRef, useEffect} from "react";

const Cart = () => {
	const cartProducts = useSelector((state) => state.cart.cartProducts);
	const dispatch = useDispatch();

	const overlayRef = useRef(null);
	const cartContainerRef = useRef(null);

	useEffect(() => {
		gsap.timeline().from(overlayRef.current, {
			opacity: 0,
			duration: 0.5,
			ease: "power3.inOut",
		});
		gsap.timeline().from(cartContainerRef.current, {
			y: "30px",
			opacity: 0,
			duration: 0.5,
			delay: 0.2,
			ease: "power3.inOut",
		});
	}, []);

	const handleClose = () => {
		gsap.timeline().to(overlayRef.current, {
			opacity: 0,
			duration: 0.5,
			ease: "power3.inOut",
		});
		gsap.timeline().to(cartContainerRef.current, {
			y: "30px",
			opacity: 0,
			duration: 0.5,
			ease: "power3.inOut",
		});
		setTimeout(() => {
			dispatch(hideCart());
		}, 600);
	};

	return (
		<>
			<div className="fixed top-0 left-0 h-full w-full">
				<div
					className="relative z-20 flex justify-center items-center h-full w-full pointer-events-none"
					ref={cartContainerRef}
				>
					<div className="bg-gradient-to-b from-brown1 to-brown2 pointer-events-auto">
						<p
							onClick={() => {
								handleClose();
							}}
						>
							Close
						</p>
						<div>
							{cartProducts.map((product, index) => {
								return <p key={index}>{product.title}</p>;
							})}
							<p>placeholder</p>
						</div>
						<button className="button">Checkout</button>
					</div>
				</div>
				<div
					onClick={() => {
						handleClose();
					}}
					className="opacity-70 bg-black w-full h-full fixed top-0 left-0 z-10"
					ref={overlayRef}
				></div>
			</div>
		</>
	);
};

export default Cart;
