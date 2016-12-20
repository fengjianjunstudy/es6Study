/*require("!style!css!./style.css") // 载入 style.css
document.write('It works.')*/
'use strict';
require("./src/assets/index.css");
import { Person } from './src/es6-symbol/index.js'

console.log('ss')
console.log(new Person("xiaoming",19));