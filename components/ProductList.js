import Image from "next/image";
import Link from "next/link";
import ProductListItem from "./ProductListItem";

const ProductList = ({products}) => {
	return (
		<div className="container grid grid-cols-1 md:grid-cols-2 md:gap-x-8 md:gap-y-16">
			{products.map((product) => (
				<div key={product.node.id}>
					<ProductListItem product={product} />
				</div>
			))}
		</div>
	);
};

export default ProductList;
