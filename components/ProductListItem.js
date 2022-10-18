import Link from "next/link";
// import { useRouter } from "next/router";
// import Image from "next/image";

const ProductListItem = (product) => {
	return (
		<Link
			href={`/products/${product.product.node.handle}`}
			className="cursor-pointer"
		>
			<div>
				<div>
					<img src={product.product.node.images.edges[0].node.originalSrc} />
				</div>
				<div className="mt-[-3rem] text-center perspective-container">
					<h2 className="perspective-text">{product.product.node.title}</h2>
					{/* <p>£{product.product.node.priceRange.minVariantPrice.amount}</p> */}
				</div>
				{/* <Image
						src={product.product.node.images.edges[0].node.originalSrc}
						alt={product.product.node.images.edges[0].node.altText}
						width="100%"
						height="100%"
						layout="responsive"
						objectFit="contain"
					/> */}
			</div>
		</Link>
	);
};

export default ProductListItem;
