import Link from "next/link";
// import { useRouter } from "next/router";
import {motion, useAnimation} from "framer-motion";
// import Image from "next/image";

const ProductListItem = (product) => {
	return (
		<Link
			href={`/products/${product.product.node.handle}`}
			className="cursor-pointer"
		>
			<div className="relative">
				<img src={product.product.node.images.edges[0].node.originalSrc} />
				<div className="mt-[-5rem] text-center">
					<h2>{product.product.node.title}</h2>
					<p>£{product.product.node.priceRange.minVariantPrice.amount}</p>
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
