// import getProductByHandle from "../../lib/getProductByHandle";
import { getAllProducts } from "../../lib/shopify";

function Product({ productData }) {
	return (
		<>
			<h1>Product Page</h1>
			{/* <h2>{{ title }}</h2> */}
		</>
	);
}

export async function getStaticPaths() {
	const productPaths = await getAllProducts().then((data) => {
		console.log("products", data);

		return data.map((item) => {
			console.log("item", item);
			return {
				params: {
					productID: item.node.handle,
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
	return {
		props: {
			productData: {
				title: "the title",
			},
		}, // will be passed to the page component as props
	};
}

export default Product;
