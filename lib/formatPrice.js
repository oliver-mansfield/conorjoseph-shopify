//TODO add commas to the price
const formatPrice = (price) => {
	return `£${parseInt(price, 0)}`;
};

export default formatPrice;