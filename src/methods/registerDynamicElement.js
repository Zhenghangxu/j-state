export const registerDynamicElement = () => {
	const elements = document.querySelectorAll("[j-bind]");

	// check if elements exist
	if (elements.length === 0) {
		throw new Error("No element with j-bind attribute found");
	}

	// create a cloned node list and return
	const fragment = document.createDocumentFragment();
	elements.forEach((element) => {
		// clone the element
		const clone = element.cloneNode(true);
		fragment.appendChild(clone);
	});
	// store the cloned nodes in window object
	window.jNodes = fragment;
};