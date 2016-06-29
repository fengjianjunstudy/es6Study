/**
 * Created by fengjj on 2016/6/29.
 */
/*
   标签模板字面量
* */
'use strict';
function tag(strArr,...values) {
    console.log(strArr.raw[0]);
    let result = '';
    let len = strArr.length;
    strArr.forEach((v,index) => {
        console.log(v,'=====',values[index]);
        result += v;
        if(index < (len-1)){
            result += values[index];
        }
    });
    return result;
}
let name = 'xiaoming';
let city = 'BeiJing';
let result = tag`Hello ${name},welcome to ${city}!`;
console.log(result);