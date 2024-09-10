const domain = process.env.SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN;

export async function ShopifyData(query) {
	const URL = `https://${domain}/api/2022-01/graphql.json`;

	const options = {
		endpoint: URL,
		method: "POST",
		headers: {
			"X-Shopify-Storefront-Access-Token": storefrontAccessToken,
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ query }),
	};

	try {
		// const data = fetch(URL, options).then((response) => {
		// 	return response.json();
		// });

		const response = await fetch(URL, options)
		const data = await response.json();

		return data;
	} catch (error) {
		throw new Error("Products not fetched");
	}
}

export default ShopifyData;

