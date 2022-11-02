import Head from "next/head";
import Image from "next/image";

import getAllProducts from "lib/getAllProducts";
import Splash from "components/home/Splash";
import Cover from "../components/home/Cover";
import Intro from "../components/home/Intro";
import ProductList from "../components/ProductList";

import CartContext from "contexts/CartContext";
import {useContext} from "react";

export default function Home({products}) {
	const cartContext = useContext(CartContext);

	return (
		<div>
			<Head>
				<title>Conor Joseph</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Cover />
			<Intro />
			<ProductList products={products} />

			{cartContext.splashShown && <Splash />}
		</div>
	);
}

export async function getStaticProps() {
	const products = await getAllProducts();

	return {
		props: {products}, // will be passed to the page component as props
	};
}
