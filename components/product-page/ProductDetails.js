import formatPrice from "lib/formatPrice";
import AddToCartButton from "./AddToCartButton";
import {useEffect, useRef} from "react";
import gsap from "gsap/dist/all";

const ProductDetails = ({productData}) => {
	const detailsRef = useRef(null);

	useEffect(() => {
		gsap.timeline().from(detailsRef.current, {
			opacity: 0,
			y: "20px",
			duration: 1,
			ease: "power1.inOut",
		});
	}, []);

	return (
		<div
			className="max-w-xs p-5 bg-gradient-to-b from-brown1 to-brown2"
			ref={detailsRef}
		>
			<h2 className="text-center mb-3">{productData.title}</h2>
			<h3 className="text-center text-2xl mb-6">
				{formatPrice(productData.priceRange.minVariantPrice.amount)}
			</h3>
			<p className="text-justify font-sansSerif">{productData.description}</p>

			<div className="mt-4 mx-auto">
				<AddToCartButton productData={productData} />
			</div>
		</div>
	);
};

export default ProductDetails;
