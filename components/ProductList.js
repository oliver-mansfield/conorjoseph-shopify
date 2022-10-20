import Image from "next/image";
import Link from "next/link";
import ProductListItem from "./ProductListItem";
import {gsap} from "gsap";
import {useRef, useEffect} from "react";

const ProductList = ({products}) => {
	// useEffect(() => {
	// 	console.log("go");
	// 	gsap.from(myRef.current, {
	// 		autoAlpha: 0,
	// 		ease: "none",
	// 		delay: 1,
	// 	});
	// }, []);

	const productItemRefs = useRef([]);

	// const animateChild = () => {
	// 	productItemRefs[2].showAlert();
	// };

	useEffect(() => {
		console.log(productItemRefs);
	}, []);

	return (
		<div className="container grid grid-cols-1 md:grid-cols-2 md:gap-x-8 md:gap-y-16">
			{products.map((product, index) => (
				<div key={product.node.id}>
					<button onClick={() => productItemRefs.current[index].showAlert()}>
						Click
					</button>
					<ProductListItem
						product={product}
						ref={(ref) => {
							productItemRefs.current[index] = ref;
						}}
						index={index}
					/>
				</div>
			))}
		</div>
	);
};

export default ProductList;
