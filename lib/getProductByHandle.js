import ShopifyData from "./shopify";

export default async function getProductByHandle(handle) {
	const query = `
  {
    product(handle: "${handle}") {
      id
      handle
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

	const productData = response.data.product ? response.data.product : [];

	return productData;
}
