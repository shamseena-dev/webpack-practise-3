AFTER STEP3, i did these 

since using .gitignore-node_modules

-run npm install

//this will generate node-modules (i think as per pkg.json file, all necessary for this)
-npm start
==>> empty "dist" folder generatd!!!!

//must be bcz, i changed config file

    "start": "webpack --config webpack.dev.js",
    "build": "webpack --config webpack.prod.js"
------------------------------------------------------------

<7> SPLITTING DEV & PROD

3 CONFIG FILES- dev, prod, common

1.create 3 config files (any names):-

  webpack.dev.js
  webpack.prod.js
  webpack.common.js (can rename existing webpack.config.js to this)

2. make changes like --
================
mode: "development",
	devtool: "none",
	output: {
		filename : "main.js",

================
use:
main.js==in prod
main.[contentHash].js== in dev

DEV==bcz for "dev" ,we will use DEV-SERVER ,which would take files from memory,so its not required to use contenthash for this..it works fine otherwise itself..

3. "scripts": {
    "start": "webpack --config webpack.dev.js",
    "build": "webpack --config webpack.prod.js"
  },

4. WEBPACK_MERGE

//npm install --save-dev webpack-merge//

5. Use:-in prod, dev config files

----------------------------------
const common= require('./webpack.common');
const merge = require("webpack-merge");

module.exports = merge(common, {


--------------------------------

5.
//npm start
dist-> index.html, main.js(not minified too)

--delete dist folder---
6.
//npm run build

dist--> index.html, main.5a2f----.js (minified too)

