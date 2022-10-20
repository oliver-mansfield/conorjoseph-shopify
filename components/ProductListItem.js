import Link from "next/link";
import {useRef, useEffect} from "react";
import {gsap} from "gsap";
import Flip from "gsap/dist/Flip";

gsap.registerPlugin(Flip);

const ProductListItem = ({product}) => {
	const imageRef = useRef(null);

	const handleClick = () => {
		const url = `/products/${product.node.handle}`;
		//Fade out all other menu items
		//Fade out clicked item title
		//Enlarge clicked item image
		//Route to product page

		const splash = document.querySelector(".splash");

		//Get current position of image on page
		const flipState = Flip.getState(imageRef.current);

		console.log(splash);

		//Move image to final position, eg full screen
		splash.appendChild(imageRef.current);

		Flip.from(flipState, {
			duration: 1,
			ease: "power1.inOut",
			absolute: true,
			// onComplete: myFunc,
		});
	};

	return (
		<button onClick={handleClick} className="cursor-pointer">
			<div>
				<img
					src={product.node.images.edges[0].node.originalSrc}
					ref={imageRef}
				/>

				<div className="mt-[-3rem] text-center perspective-container">
					<h2 className="perspective-text">{product.node.title}</h2>
					{/* <p>£{product.node.priceRange.minVariantPrice.amount}</p> */}
				</div>
			</div>
		</button>
	);
};

export default ProductListItem;
