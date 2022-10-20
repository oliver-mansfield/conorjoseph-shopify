import ProductListItem from "./ProductListItem";

const ProductList = ({products}) => {
	return (
		<div className="container grid grid-cols-1 md:grid-cols-2 md:gap-x-8 md:gap-y-16">
			{products.map((product, index) => (
				<div key={product.node.id}>
					<button onClick={() => productItemRefs.current[index].startAnimate()}>
						Click
					</button>
					<ProductListItem product={product} />
				</div>
			))}
		</div>
	);
};

export default ProductList;
