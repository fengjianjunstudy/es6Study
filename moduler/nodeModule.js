/**
 * Created by fengjj on 2016/7/5.
 */
'use strict';
let name = 'xiaoming';
setTimeout(() => {
    name = 'xiaohua';
},1000)
module.exports.name = name;
