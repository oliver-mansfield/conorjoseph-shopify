import Link from "next/link";
// import { useRouter } from "next/router";
import {motion, useAnimation} from "framer-motion";
// import Image from "next/image";

const ProductListItem = (product) => {
	return (
		<Link href={`/products/${product.product.node.handle}`}>
			<div className="relative">
				<div className="absolute bottom-0 left-1/4">
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
				<motion.img
					src={product.product.node.images.edges[0].node.originalSrc}
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					transition={{ease: "easeOut", duration: 2}}
				/>
			</div>
		</Link>
	);
};

export default ProductListItem;
