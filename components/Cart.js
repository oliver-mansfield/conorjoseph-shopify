import { useDispatch, useSelector } from "react-redux";
import { hideCart } from "stores/cartSlice";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import Image from "next/image";
import CartTotal from "./cart/CartTotal";
import formatPrice from "lib/formatPrice";
import QuantityControls from "./cart/QuantityControls";

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

		//TODO is this the most effective way to handle the escape key?
		const handleEscape = (e) => {
			if (e.key === "Escape") {
				handleClose();
			}
		};
		document.addEventListener("keydown", handleEscape);
		return () => {
			document.removeEventListener("keydown", handleEscape);
		};
	}, []);

	const handleClose = () => {
		//TODO this overlay only shows in the <Header />
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
			<div className="fixed z-50 top-0 left-0 h-full w-full">
				<div
					className="relative z-20 flex justify-center items-start mt-10 sm:mt-40 h-full w-full pointer-events-none"
					ref={cartContainerRef}
				>
					<div
						className="relative bg-gradient-to-b from-brown1 to-brown2 pointer-events-auto mx-4 w-[700px] p-4 sm:p-10	
					"
					>
						<h4 className="mb-8 pb-4 text-center border-b-[1px]">Your cart</h4>

						<button className="absolute top-2 right-2 cursor-pointer group"
							onClick={() => {
								handleClose();
							}} >
							<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24">
								<path className="transition-all absolute top-0 group-hover:opacity-0" fill="white" d="m336 762.153 144-144 144 144L666.153 720l-144-144 144-144L624 389.847l-144 144-144-144L293.847 432l144 144-144 144L336 762.153Zm144.067 193.846q-78.836 0-148.204-29.92-69.369-29.92-120.682-81.21-51.314-51.291-81.247-120.629-29.933-69.337-29.933-148.173t29.92-148.204q29.92-69.369 81.21-120.682 51.291-51.314 120.629-81.247 69.337-29.933 148.173-29.933t148.204 29.92q69.369 29.92 120.682 81.21 51.314 51.291 81.247 120.629 29.933 69.337 29.933 148.173t-29.92 148.204q-29.92 69.369-81.21 120.682-51.291 51.314-120.629 81.247-69.337 29.933-148.173 29.933ZM480 896q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
							</svg>

							<svg className="transition-all absolute top-0 group-hover:opacity-100 opacity-0" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24">
								<path className="hidden group-hover:block transition-all" fill="white" d="m336 762.153 144-144 144 144L666.153 720l-144-144 144-144L624 389.847l-144 144-144-144L293.847 432l144 144-144 144L336 762.153Zm144.067 193.846q-78.836 0-148.204-29.92-69.369-29.92-120.682-81.21-51.314-51.291-81.247-120.629-29.933-69.337-29.933-148.173t29.92-148.204q29.92-69.369 81.21-120.682 51.291-51.314 120.629-81.247 69.337-29.933 148.173-29.933t148.204 29.92q69.369 29.92 120.682 81.21 51.314 51.291 81.247 120.629 29.933 69.337 29.933 148.173t-29.92 148.204q-29.92 69.369-81.21 120.682-51.291 51.314-120.629 81.247-69.337 29.933-148.173 29.933Z" />
							</svg>
						</button>

						<div>
							{cartProducts.length === 0 ? (
								<p>You have no products in your cart.</p>
							) : (
								cartProducts.map((product, index) => {
									return (
										<div className="flex mb-10" key={index}>
											<div className="h-[90px] w-[120px] overflow-hidden relative border-white border-2 mr-4 hidden xs:block">
												<div className="w-[180px] absolute left-[-25%]">
													<Image
														src={product.images.edges[0].node.url}
														width="1400"
														height="750"
														objectFit="cover"
														quality="100"
													/>
												</div>
											</div>

											<div className="flex grow flex-col justify-between">
												<div className="flex justify-between items-baseline">
													<p className="text-2xl mb-4 mr-4">{product.title}</p>
													<p className="text-right text-xl">
														{formatPrice(
															product.priceRange.minVariantPrice.amount
														)}
													</p>
												</div>
												<QuantityControls product={product} />
											</div>
										</div>
									);
								})
							)}
						</div>
						<CartTotal />
						<div className="flex justify-center mt-10">
							<button className="button">Checkout</button>
						</div>
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
