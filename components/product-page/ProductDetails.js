import formatPrice from "lib/formatPrice";
import AddToCartButton from "./AddToCartButton";
import { useEffect, useRef } from "react";
import gsap from "gsap/dist/all";

const ProductDetails = ({ productData }) => {
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
			className="max-w-4xl grid grid-cols-5 gap-4 mx-auto rounded-md z-20 relative"
			ref={detailsRef}
		>
			<div className="col-start-1 col-end-3">
				<h2 className="text-right">{productData.title}</h2>
				<h3 className="text-right mb-6">
					{formatPrice(productData.priceRange.minVariantPrice.amount)}
				</h3>
			</div>

			<div className="col-start-3 col-end-6">
				<p className="font-sansSerif">{productData.description}</p>
				<div className="mt-8">
					<AddToCartButton productData={productData} />
				</div>
			</div>
		</div>

	);
};

export default ProductDetails;
