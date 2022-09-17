import Link from "next/link";
// import Image from "next/image";

const ProductListItem = (product) => {
	return (
		<>
			<Link href={`/products/${product.product.node.handle}`}>
				<div className="relative">
					<div className="absolute bottom-0 left-0">
						<h2>{product.product.node.title}</h2>
						<p>£8400</p>
					</div>
					{/* <Image
						src={product.product.node.images.edges[0].node.originalSrc}
						alt={product.product.node.images.edges[0].node.altText}
						width="100%"
						height="100%"
						layout="responsive"
						objectFit="contain"
					/> */}
					<img src={product.product.node.images.edges[0].node.originalSrc} />
				</div>
			</Link>
		</>
	);
};

export default ProductListItem;
