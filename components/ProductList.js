import Image from "next/image";
import styles from "./ProductList.module.scss";
import Link from "next/link";

const ProductList = ({products}) => {
	return (
		<>
			<p>This is the ProductList</p>
			{products.map((product) => (
				<div key={product.node.id}>
					<Link href={`/products/${product.node.handle}`}>
						<div>
							<h2>{product.node.title}</h2>
							<p>{product.node.images.edges[0].node.originalSrc}</p>
							<Image
								src={product.node.images.edges[0].node.originalSrc}
								alt={product.node.images.edges[0].node.altText}
								height="100"
								width="200"
							/>
						</div>
					</Link>
				</div>
			))}
		</>
	);
};

export default ProductList;
