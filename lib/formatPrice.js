const formatPrice = (price) => {
	return `£${parseInt(price, 0).toLocaleString()}`;
};

export default formatPrice;
