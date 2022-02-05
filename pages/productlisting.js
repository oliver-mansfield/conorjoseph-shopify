import { getAllProducts } from "../lib/shopify";

export default function ProductListing({ products }) {
	return (
		<div>
			<h2>Product Listing</h2>
			<div>
				{products.map((product) => (
					<div key={product.node.id}>
						<p>{product.node.title}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export async function getStaticProps() {
	const products = await getAllProducts();
	console.log(products);

	return {
		props: { products }, // will be passed to the page component as props
	};
}
