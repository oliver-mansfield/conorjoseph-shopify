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

//Generate each product page at build time
//Return an object eg [{ params: { productHandle: "ring-one" } }, { params: { productHandle: "ring-two" } }],
export async function getStaticPaths() {
	const productPaths = await getAllProducts().then((res) => {
		return res.map((product) => {
			return {
				params: {
					productHandle: product.node.handle,
				},
			};
		});
	});

	return {
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
