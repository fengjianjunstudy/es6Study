/*require("!style!css!./style.css") // 载入 style.css
document.write('It works.')*/
'use strict';
let name = require('./moduler/nodeModule').name;
console.log(name);  //xiaoming
setTimeout(() => {
    console.log(name); //xiaoming
},1500);