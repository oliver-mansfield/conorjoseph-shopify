import AddToCartButton from "components/product-page/AddToCartButton";
import formatPrice from "lib/formatPrice";

const ProductDetails = ({productData}) => {
	return (
		<div className="max-w-xs">
			<h2 className="text-center mb-3">{productData.title}</h2>
			<h3 className="text-center text-2xl mb-6">
				{formatPrice(productData.priceRange.minVariantPrice.amount)}
			</h3>
			<p>{productData.description}</p>
			<AddToCartButton />
		</div>
	);
};

export default ProductDetails;
