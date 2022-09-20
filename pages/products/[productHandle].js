import getProductByHandle from "lib/getProductByHandle";
import {getAllProducts} from "lib/shopify";
import Image from "next/image";
import AddToCartButton from "components/product-page/AddToCartButton";
import {motion, useAnimation} from "framer-motion";

function Product({productData}) {
	return (
		<>
			<h1>Product Page</h1>
			<h2>{productData.title}</h2>
			{/* <p>{productData.node.images.edges[0].node.originalSrc}</p> */}
			{/* <Image
				src={productData.node.images.edges[0].node.originalSrc}
				alt={productData.node.images.edges[0].node.altText}
				height="100"
				width="200"
			/> */}
			<motion.img
				src={productData.images.edges[0].node.url}
				layoutId={productData.title}
			/>
			<AddToCartButton />
		</>
	);
}

//Generate each product page at build time
//Return an object eg [{ params: { productHandle: "ring-one" } }, { params: { productHandle: "ring-two" } }],
export async function getStaticPaths() {
	const productPaths = await getAllProducts().then((res) => {
		return res.map((product) => {
			return {
				params: {
					productHandle: product.node.handle,
				},
			};
		});
	});

	return {
		paths: productPaths,
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const productData = await getProductByHandle(context.params.productHandle);

	return {
		props: {productData},
	};
}

export default Product;
