export const readJState = (key) => {
	// check if key exist
	return getComputedStyle(document.documentElement).getPropertyValue(`--${key}`);
};
