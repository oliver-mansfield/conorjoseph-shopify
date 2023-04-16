import Image from "next/image";

const ProductModelsGallery = ({ productData }) => {
  const modelImages = productData.images.edges.slice(1);
  return (
    <section className="container grid grid-cols-1 md:grid-cols-2 gap-4 mt-16 md:mb-64">
      {modelImages.map((item, index) => {
        return (
          <div className="model-image max-w-screen-md">
            <Image
              src={item.node.url}
              // className={`item.handle + item.index`}
              index={index}
              layout="responsive"
              width="800"
              height="1236"
              quality="90"
            />
          </div>
        );
      })}
    </section>
  );
};

export default ProductModelsGallery;
