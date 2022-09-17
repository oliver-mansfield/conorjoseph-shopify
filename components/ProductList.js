import Image from "next/image";
import Link from "next/link";
import ProductListItem from "./ProductListItem";

const ProductList = ({products}) => {
	return (
		<div className="max-w-7xl grid grid-cols-2">
			{products.map((product) => (
				<div key={product.node.id}>
					<ProductListItem product={product} />
					{/* <Link href={`/products/${product.node.handle}`}>
						<div>
							<h2>{product.node.title}</h2>
							<Image
								src={product.node.images.edges[0].node.originalSrc}
								alt={product.node.images.edges[0].node.altText}
								width="100%"
								height="100%"
								layout="responsive"
								objectFit="contain"
							/>
						</div>
					</Link> */}
				</div>
			))}
		</div>
	);
};

export default ProductList;
