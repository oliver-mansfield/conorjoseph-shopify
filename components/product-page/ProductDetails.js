import AddToCartButton from "components/product-page/AddToCartButton";

const ProductDetails = ({productData}) => {
	return (
		<div className="max-w-xs">
			<h2>{productData.title}</h2>
			<p>{productData.description}</p>
			<AddToCartButton />
		</div>
	);
};

export default ProductDetails;
