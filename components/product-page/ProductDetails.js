import formatPrice from "lib/formatPrice";
import AddToCartButton from "./AddToCartButton";

const ProductDetails = ({productData}) => {
	return (
		<div className="max-w-xs">
			<h2 className="text-center mb-3">{productData.title}</h2>
			<h3 className="text-center text-2xl mb-6">
				{formatPrice(productData.priceRange.minVariantPrice.amount)}
			</h3>
			<p className="text-justify">{productData.description}</p>

			<div className="mt-4 mx-auto">
				<AddToCartButton productData={productData} />
			</div>
		</div>
	);
};

export default ProductDetails;
