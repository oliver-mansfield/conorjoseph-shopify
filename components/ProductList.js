import {useRef, useState, useContext, useEffect} from "react";
import Image from "next/image";
import {useRouter} from "next/router";
import gsap from "gsap/dist/all";
import Flip from "gsap/dist/Flip";
import CartContext from "contexts/CartContext";

gsap.registerPlugin(Flip);

const ProductList = ({products}) => {
	const cartContext = useContext(CartContext);

	const productItemsRef = useRef([]);
	const productImageRef = useRef([]);
	const productTitleRef = useRef([]);
	const router = useRouter();

	//Reset
	useEffect(() => {
		cartContext.setSplashShown(false);
	}, []);

	const handleClick = (product, index) => {
		//Create an array of indexes of all the items except the one which was clicked (index)
		const arrayOfIndexes = [];

		for (let i = 0; i < productItemsRef.current.length; i++) {
			if (i !== index) {
				arrayOfIndexes.push(i);
			}
		}

		//FADE OUT OTHER ITEMS
		//Run the animation on all items found in the arrayOfIndexes
		for (let i = 0; i < arrayOfIndexes.length; i++) {
			gsap.timeline().to(productItemsRef.current[arrayOfIndexes[i]], {
				opacity: 0,
				// rotation: 5,
				skewY: 3,
				scale: 0.8,
				y: 30,
				duration: 0.5,
				ease: "power1.inOut",
			});
		}

		//Fade out clicked item title
		gsap.timeline().to(productTitleRef.current[index], {
			duration: 0.1,
			ease: "power1.inOut",
			opacity: 0,
		});

		//Fade in splash from CartContext
		//TODO Theres a split second where the clicked product
		//vanishes because the splash overlay is shown on top of it
		cartContext.setSplashShown(true);

		//TODO make this a callback after the gsap timeline plays
		//rather than a setTimeout
		setTimeout(() => {
			const flipState = Flip.getState(productImageRef.current[index]);
			const splash = document.querySelector(".splash");

			splash.appendChild(productImageRef.current[index]);

			Flip.from(flipState, {
				duration: 0.8,
				ease: "power1.inOut",
				absolute: true,
				// onComplete: myFunc,
			});
		}, 100);

		//Finally route to that page
		setTimeout(() => {
			router.push(`/products/${product.node.handle}`);
		}, 750);
	};

	return (
		<div className="container grid grid-cols-1 md:grid-cols-2 md:gap-x-8 md:gap-y-16">
			{products.map((product, index) => (
				<div
					className="min-h-[200px] sm:min-h-[250px] lg:min-h-[350px]" //TODO get this arbitary media query working or define a tweak point
					key={product.node.id}
					ref={(el) => {
						productItemsRef.current.push(el);
					}}
				>
					<div
						onClick={() => {
							handleClick(product, index);
						}}
						className="cursor-pointer"
					>
						<div>
							<div
								className="image-container"
								ref={(el) => {
									productImageRef.current.push(el);
								}}
							>
								<Image
									src={product.node.images.edges[0].node.originalSrc}
									width="1400"
									height="750"
									layout="responsive"
								/>
							</div>

							<div
								className="mt-[-3rem] text-center perspective-container"
								ref={(el) => {
									productTitleRef.current.push(el);
								}}
							>
								<h2 className="perspective-text">{product.node.title}</h2>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default ProductList;
