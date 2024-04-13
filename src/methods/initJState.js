import { fetchJState } from "./fetchJState.js";
import { renderJState } from "./renderJState.js";
import { registerDynamicElement } from "./registerDynamicElement.js";

export const initJState = () => {
	fetchJState();
	registerDynamicElement();
	const bindedElements = document.querySelectorAll("[j-bind]");
	bindedElements.forEach((element) => {
		const anchor = element.getAttribute("j-bind");
		renderJState(anchor, element);
	});
	document.addEventListener("j-state-change", (event) => {
		const { key: eventKey } = event.detail;

		bindedElements.forEach((element) => {
			const key = element.getAttribute("j-bind");
			if (key === eventKey) {
				renderJState(key, element);
			}
		});
	});
};