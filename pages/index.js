import Head from "next/head";
import { useSelector } from "react-redux";

import getAllProducts from "lib/getAllProducts";
import Splash from "components/home/Splash";
import Cover from "../components/home/Cover";
import Intro from "../components/home/Intro";
import Header from "../components/Header";
import ProductList from "components/ProductList";

export default function Home({ products }) {
	const splashVisible = useSelector((state) => state.app.splashVisible);
	// const isTransitioning = useSelector((state) => state.app.isTransitioning);

	return (
		<div>
			<Head>
				<title>Second Skin</title>
				<meta name="description" content="Second Skin - Jewelry" />
				<link rel="icon" href="/favicon-32x32.png" />
				<link rel="manifest" href="/manifest.json" />
				<link rel="apple-touch-icon" href="/icon.png" />
				<meta name="theme-color" content="#ffffff" />
			</Head>

			<Cover />
			<Header />
			<Intro />

			<ProductList products={products} />


			{splashVisible ? <Splash /> : null}
		</div>
	);
}

export async function getStaticProps() {
	const products = await getAllProducts();

	return {
		props: { products }, // will be passed to the page component as props
	};
}
