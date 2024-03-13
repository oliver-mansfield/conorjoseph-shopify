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

		<div className="w-full z-10 flex justify-center md:mt-[-20rem]">
			<div
				className="max-w-4xl grid grid-cols-5 gap-4 px-4 rounded-md z-20 p-4 mx-4"
				ref={detailsRef}
			>
				<div className="col-start-1 col-end-6 md:col-start-1 md:col-end-3">
					<h2 className="text-center md:text-right">{productData.title}</h2>
					<h3 className="text-center md:text-right text-gray-400">
						{formatPrice(productData.priceRange.minVariantPrice.amount)}
					</h3>
				</div>

				<div className="col-start-1 col-end-6 md:col-start-3 md:col-end-6">
					<p className="font-sansSerif text-gray-400 text-center md:text-left">{productData.description}</p>
					<div className="flex justify-center md:justify-start mt-8">
						<AddToCartButton productData={productData} />
					</div>
				</div>

			</div>
		</div>

	);
};

export default ProductDetails;
