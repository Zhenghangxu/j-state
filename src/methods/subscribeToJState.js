
export const subscribeToJState = (key, callback) => {
	// check if key exist
	document.addEventListener("j-state-change", (event) => {
		const { key: eventKey } = event.detail;

		if (key === eventKey) {
			callback();
		}
	});
};