import Articulus from "components/products/Articulus";
import Manibus from "components/products/Manibus";
import Pelis from "components/products/Pellis";

const ProductShowcase = ({ products }) => {

	//TODO maybe put the products prop in the global store
	return (
		<>
			<section>
				<Articulus products={products} />
				<Pelis />
				<Manibus />
			</section>
		</>
	);
};

export default ProductShowcase;
