import Image from "next/image";
import styles from "./ProductList.module.scss";
import Link from "next/link";

const ProductList = ({products}) => {
	return (
		<div className={styles.productlist}>
			<p className="oliver">oli</p>
			{products.map((product) => (
				<div key={product.node.id}>
					<Link href={`/products/${product.node.handle}`}>
						<div>
							<h2>{product.node.title}</h2>
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
		</div>
	);
};

export default ProductList;
