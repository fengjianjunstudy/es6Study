/**
 * Created by fengjj on 2016/6/29.
 */
/*
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
    String.prototype.indexOf(searchValue[, fromIndex])
    String.prototype.includes(searchString[, position])
    String.prototype.startWidth(searchString[, position])
    String.prototype.endsWidth(searchString[, position])
* */
'use strict';
let str = 'hello word!';
console.log(str.indexOf('hello'));
console.log(str.includes('he'));
console.log(str.startsWith('ell'));
console.log(str.endsWith('word'));