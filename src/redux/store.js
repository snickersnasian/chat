const { createStore } = require("redux");
const { mainReducer } = require("./mainReducer");

export const store = createStore(mainReducer)

window.store = store