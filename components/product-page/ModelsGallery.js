const ModelsGallery = ({productData}) => {
	const modelImages = productData.images.edges.slice(1);

	return (
		<>
			{modelImages.map((item, index) => {
				return <img src={item.node.url} index={index} />;
			})}
		</>
	);
};

export default ModelsGallery;
