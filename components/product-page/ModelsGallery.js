import Image from "next/image";

const ModelsGallery = ({productData}) => {
	const modelImages = productData.images.edges.slice(1);
	return (
		<div className="max-w-md">
			{modelImages.map((item, index) => {
				return (
					<Image
						src={item.node.url}
						index={index}
						layout="responsive"
						width="3300"
						height="5100"
					/>
				);
			})}
		</div>
	);
};

export default ModelsGallery;
