import getProductByHandle from "lib/getProductByHandle";
import getAllProducts from "lib/getAllProducts";
import Image from "next/image";
import ProductDetails from "components/product-page/ProductDetails";
import ProductModelsGallery from "components/product-page/ProductModelsGallery";
import Header from "components/Header";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { hideSplash } from "stores/appSlice";

function Product({ productData }) {
	const dispatch = useDispatch();

	//Set splashVisible to false
	//This is to reset for going back to the home page,
	//not for hiding the splash on this page.
	useEffect(() => {
		dispatch(hideSplash());
	}, []);

	return (
		<main className="relative">

			<Header />

			<div className="z-10 w-full mt-10 md:mt-20 md:mb-60">
				<div className="md:max-w-5xl mx-auto">
					<Image
						src={productData.images.edges[0].node.url}
						width="1400"
						height="750"
						layout="responsive"
						priority
						quality="100"
					/>
				</div>
			</div>

			<ProductDetails productData={productData} />
			<ProductModelsGallery productData={productData} />

		</main>
	);
}

//Generate each product page at build time
//Return an object eg [{ params: { productHandle: "ring-one" } }, { params: { productHandle: "ring-two" } }],
// export async function getStaticPaths() {
// 	const productPaths = await getAllProducts().then((res) => {
// 		return res.map((product) => {
// 			return {
// 				params: {
// 					productHandle: product.node.handle,
// 				},
// 			};
// 		});
// 	});

// 	return {
// 		paths: productPaths,
// 		fallback: false,
// 	};
// }

export async function getServerSideProps(context) {
	const productData = await getProductByHandle(context.params.productHandle);

	return {
		props: { productData },
	};
}

export default Product;