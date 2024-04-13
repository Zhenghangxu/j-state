# Documentation for `j-state.js`

This library contains several helper functions for managing and rendering state in a custom templating framework.
It uses CSS variable as a state management solution; all states are created globally and share across one session

## Get Started
```
import initJState from "./src/methods";
initJState();
```
see this codepen for an example: https://codepen.io/Jsu1049/pen/RwOBwjx

## `fetchJState()`

This function fetches all elements with the `j-data` attribute, and register the data. It returns a NodeList of the  elements with data.

## `registerDynamicElement()`

This function fetches all elements with the `j-bind` attribute, bind them with the corresponding data, and appends them to a DocumentFragment. then stores this DocumentFragment in the `window.jNodes` property as a form of "Virtual DOM".

## `setJState(key, value)`

This function sets a CSS variable with the given key and value. It then dispatches a custom event, `j-state-change`, with the key and value in the event detail. This event is dispatched on the `document` object and pass down to every child.

## `readJState(key)`

This function reads the state and return the state value.

## `subscribeToJState(key, callback)`

This function bind a state name to a callback function, whenever the state is updated, the callback will be trigger.

## `renderJState(key, element)`

This function reads the value of a CSS variable with the given key, finds an element with the `j-bind` attribute equal to the key in the cloned nodes stored in `window.jNodes`, and replaces the inner HTML of the given element with the value of the CSS variable.
(Internal methods, not recommended to use)

## `bindJState()`

This function init the J-state library