import getProductByHandle from "lib/getProductByHandle";
import {getAllProducts} from "lib/shopify";
// import Image from "next/image";
import ProductDetails from "components/product-page/ProductDetails";
// import {motion, useAnimation} from "framer-motion";

function Product({productData}) {
	return (
		<>
			<div className="relative">
				<div className="absolute z-10 w-full">
					<div className="max-w-5xl mx-auto">
						<img src={productData.images.edges[0].node.url} />
					</div>
				</div>
				<div className="absolute z-20 w-full">
					<div className="container">
						<ProductDetails productData={productData} />
					</div>
				</div>
			</div>
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
