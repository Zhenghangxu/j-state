export const createEvent = (key, value) => {
	return new CustomEvent("j-state-change", {
		detail: {
			key,
			value,
		},
	});
};