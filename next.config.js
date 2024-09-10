const nextConfig = {
	env: {
		SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN,
		SHOPIFY_STOREFRONT_ACCESSTOKEN: process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN,
	},
	images: {
		domains: ["cdn.shopify.com"],
	},
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
};

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
});

module.exports = withPWA(nextConfig);