import Link from "next/link";
import {gsap} from "gsap";
import {useRef, useEffect, forwardRef, useImperativeHandle} from "react";
// import { useRouter } from "next/router";
// import Image from "next/image";

const ProductListItem = forwardRef(({product, index}, ref) => {
	// const prodRefs = useRef([]);

	// const prodImageRef = useRef(null);
	// const prodTitleRef = useRef(null);

	useImperativeHandle(ref, () => ({
		showAlert() {
			console.log(`Hello from Child Component${index}`);
		},
	}));

	// const myRef = useRef(null);

	// useEffect(() => {
	// 	console.log("go");
	// 	gsap.from(myRef.current, {
	// 		autoAlpha: 0,
	// 		ease: "none",
	// 	});
	// }, []);

	return (
		<Link href={`/products/${product.node.handle}`} className="cursor-pointer">
			<div>
				<img
					src={product.node.images.edges[0].node.originalSrc}
					// ref={(el) => (prodRefs.current[domRef] = el)}
					// ref={myRef}
				/>

				<div className="mt-[-3rem] text-center perspective-container">
					<h2 className="perspective-text">{product.node.title}</h2>
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
});

export default ProductListItem;
