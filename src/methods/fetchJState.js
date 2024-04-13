export const fetchJState = () => {
	const elements = document.querySelectorAll("[j-data]");

	// check if elements exist
	if (elements.length === 0) {
		throw new Error("No element with j-data attribute found");
	}

	elements.forEach((element) => {
		const content = element.getAttribute("j-data").split("=");
		const key = content[0];
		const value = content[1];
		// create an unscoped css variable using the key value pair
		document.documentElement.style.setProperty(`--${key}`, value);
		document.dispatchEvent(createEvent(key, value));
	});
};