import {getAllProducts} from "lib/shopify";
import Link from "next/link";

export default function ProductListing({products}) {
	return (
		<div>
			<h2>Product Listing</h2>
			<div>
				{products.map((product) => (
					<div key={product.node.id}>
						<Link href={`/products/${product.node.handle}`}>
							{product.node.title}
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}

export async function getStaticProps() {
	const products = await getAllProducts();

	return {
		props: {products}, // will be passed to the page component as props
	};
}
