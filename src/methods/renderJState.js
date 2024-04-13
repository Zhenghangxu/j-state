import { readJState } from "./readJState";
export const renderJState = (key, element) => {
	const value = readJState(key);
	const jKey = element.getAttribute("j-key");
	// get a list of component that needs rerender
	// check if value exist
	if (!value) {
		throw new Error("Value is not exist give the key");
	}
	if (!jKey) {
		throw new Error("J-key is not exist on the element");
	}

	// get the cloned nodes
	const clonedNodes = window.jNodes;
	// get the element that needs to be rerendered
	const clonedElement = clonedNodes.querySelector(`[j-bind='${key}'][j-key='${jKey}']`);
	// get the template of the element
	const template = clonedElement.outerHTML;
	// replace the template with the value
	const newTemplate = template.replace(`{{${key}}}`, value);
	// create a template
	const htmlTemplate = document.createElement("template");
	htmlTemplate.innerHTML = newTemplate;
	element.innerHTML = htmlTemplate.content.firstChild.innerHTML;
};
