import getProductByHandle from "../../lib/getProductByHandle";
import { getAllProducts } from "../../lib/shopify";

function Product({ productData }) {
	return (
		<>
			<h1>Product Page</h1>
			<h2>{productData.title}</h2>
		</>
	);
}

export async function getStaticPaths() {
	const productPaths = await getAllProducts().then((data) => {
		return data.map((item) => {
			return {
				params: {
					productHandle: item.node.handle,
				},
			};
		});
	});

	return {
		// paths: [{ params: { productID: "1" } }, { params: { productID: "2" } }],
		paths: productPaths,
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const productData = await getProductByHandle(context.params.productHandle);

	return {
		props: { productData },
	};
}

export default Product;
