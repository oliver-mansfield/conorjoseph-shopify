import ShopifyData from "shopify";

export default async function getProductByHandle(handle) {
	const query = `
  {
    product(handle: "${handle}") {
      id
      title
      description
      images(first: 5) {
        edges {
          node {
            url
            altText
          }
        }
      }
      priceRange {
        minVariantPrice {
          amount
        }
      }
    }
  }
`;

	const response = await ShopifyData(query);

	const productDate = response.data.products.edges
		? response.data.products.edges
		: [];

	return productData;
}
