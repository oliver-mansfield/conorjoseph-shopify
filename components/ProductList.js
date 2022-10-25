import ProductListItem from "./ProductListItem";
import {useRef, useState} from "react";
import Image from "next/image";
import {useRouter} from "next/router";
import gsap from "gsap/dist/all";
import Flip from "gsap/dist/Flip";

const ProductList = ({products}) => {
	const productItemsRef = useRef([]);
	const productImageRef = useRef([]);
	const productTitleRef = useRef([]);
	const router = useRouter();

	const handleClick = (product, index) => {
		// const url = `/products/${product.node.handle}`;

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
				duration: 1,
				ease: "power1.inOut",
				opacity: 0,
			});
		}

		//Fade out clicked item title
		gsap.timeline().to(productTitleRef.current[index], {
			duration: 1,
			ease: "power1.inOut",
			opacity: 0,
		});

		//TODO make this a callback after the gsap timeline plays
		//rather than a setTimeout
		setTimeout(() => {
			const flipState = Flip.getState(productImageRef.current[index]);
			const splash = document.querySelector(".splash");

			splash.appendChild(productImageRef.current[index]);

			Flip.from(flipState, {
				duration: 1,
				ease: "power1.inOut",
				// absolute: true,
				// onComplete: myFunc,
			});
		}, 1000);

		//Finally route to that page
		// setTimeout(() => {
		// 	router.push(`/products/${product.node.handle}`);
		// }, 3000);
	};

	return (
		<div className="container grid grid-cols-1 md:grid-cols-2 md:gap-x-8 md:gap-y-16">
			{products.map((product, index) => (
				<div
					className="h-[200px] min-[420px]:h-[350px]" //TODO get this arbitary media query working or define a tweak point
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
