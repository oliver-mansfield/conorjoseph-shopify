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
				<motion.img
					src={product.product.node.images.edges[0].node.originalSrc}
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					transition={{ease: "easeOut", duration: 1}}
				/>
				<div className="mt-[-3rem] text-center perspective-container">
					<motion.h2
						className="perspective-text"
						initial={{opacity: 0}}
						animate={{opacity: 1}}
						transition={{ease: "easeOut", duration: 5}}
					>
						{product.product.node.title}
					</motion.h2>
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
