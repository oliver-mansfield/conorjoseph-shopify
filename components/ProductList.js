import ProductListItem from "./ProductListItem";
import {useRef, useState} from "react";
import gsap from "gsap/dist/all";

const ProductList = ({products}) => {
	const productItemsRef = useRef([]);

	const handleClick = (product, index) => {
		// const url = `/products/${product.node.handle}`;

		//Create an array of indexes of all the items except the one which was clicked (index)
		const arrayOfIndexes = [];

		for (let i = 0; i < productItemsRef.current.length; i++) {
			if (i !== index) {
				arrayOfIndexes.push(i);
			}
			console.log(arrayOfIndexes);
		}

		for (let i = 0; i < arrayOfIndexes.length; i++) {
			console.log(productItemsRef.current[arrayOfIndexes[i]]);

			gsap.timeline().to(productItemsRef.current[arrayOfIndexes[i]], {
				duration: 1.5,
				opacity: 0,
			});
		}
	};

	return (
		<div className="container grid grid-cols-1 md:grid-cols-2 md:gap-x-8 md:gap-y-16">
			{products.map((product, index) => (
				<div
					key={product.node.id}
					ref={(el) => {
						productItemsRef.current.push(el);
					}}
				>
					<button
						onClick={() => {
							handleClick(product, index);
						}}
						className="cursor-pointer"
					>
						<div>
							<img
								src={product.node.images.edges[0].node.originalSrc}
								// ref={imageRef}
							/>

							<div className="mt-[-3rem] text-center perspective-container">
								<h2 className="perspective-text">{product.node.title}</h2>
								{/* <p>£{product.node.priceRange.minVariantPrice.amount}</p> */}
							</div>
						</div>
					</button>
					{/* <ProductListItem product={product} /> */}
				</div>
			))}
		</div>
	);
};

export default ProductList;
