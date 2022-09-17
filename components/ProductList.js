import Image from "next/image";
import Link from "next/link";
import ProductListItem from "./ProductListItem";

const ProductList = ({products}) => {
	return (
		<div className="container md:grid md:grid-cols-2">
			{products.map((product) => (
				<div key={product.node.id}>
					<ProductListItem product={product} />
				</div>
			))}
		</div>
	);
};

export default ProductList;
