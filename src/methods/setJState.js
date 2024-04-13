export const setJState = (key, value) => {
	// check if key value is empty
	if (!key || !value) {
		throw new Error("Key or value are required");
	}
    try {
        document.documentElement.style.setProperty(`--${key}`, value);
        document.dispatchEvent(createEvent(key, value));
    } catch (error) {
        console.error(error);
    }
};