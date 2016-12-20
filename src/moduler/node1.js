/**
 * Created by fengjj on 2016/7/5.
 */
'use strict';
let name = require('./nodeModule').name;
console.log(name);  //xiaoming
setTimeout(() => {
    console.log(name); //xiaoming
},1500)