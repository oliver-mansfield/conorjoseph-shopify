import Image from "next/image";

const ModelsGallery = ({ productData }) => {
	const modelImages = productData.images.edges.slice(1);
	return (
		<>
			{modelImages.map((item, index) => {
				return (
					<div className="model-image">
						<Image
							src={item.node.originalSrc}
							// className={`item.handle + item.index`}
							index={index}
							layout="responsive"
							width="3300"
							height="5100"
						/>
					</div>
				);
			})}
		</>
	);
};

export default ModelsGallery;
