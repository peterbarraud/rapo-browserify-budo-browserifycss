require('./src/styles/main.css');

// CSS Libs that are included with a simple require statement:
require("mini.css");
// require("dead-simple-grid-npm");
// require("flexboxgrid");
// require("normalize.css");
// require("pui-css-buttons");
// require("purecss");
// IMPORTANT:
// if you use external libs, you're going to have to set the browserify-css flag to -g in the start scriplt

require("domready");
require('./src/js/main');
