import AddToCartButton from "components/product-page/AddToCartButton";

const ProductDetails = (productData) => {
	return (
		<>
			<h2>{productData.productData.title}</h2>

			<AddToCartButton />
		</>
	);
};

export default ProductDetails;
