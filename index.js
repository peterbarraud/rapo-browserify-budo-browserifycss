require('./src/styles/main.css');

// a npm lib to check for dom readiness
require("domready");

// to use jQuery comment out the following line:
window.$ = window.jQuery = require('jquery');
// also check the ./src/js/main.js for changes you need to make there

// CSS Libs that are included with a simple require statement:
// require("mini.css");
// require("dead-simple-grid-npm");
// require("flexboxgrid");
// require("normalize.css");
// require("pui-css-buttons");
// require("purecss");

require('./src/js/main');