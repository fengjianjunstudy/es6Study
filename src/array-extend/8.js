/**
 * Created by fengjj on 2016/6/21.
 */
/*
    某个数组是否包含指定的值
    Array.prototype.includes(val,start)  返回布尔值    babel-node 中实现
* */
'use strict';
/*let arr = [1,2,3,4,5,6];
console.log(arr.includes(1));
console.log(arr.includes(1,2));*/


//兼容写法
function includesFn(val,start) {
    if(start) {
        return this.some((v,i) => {
            if(i < start) {
                return false;
            }
            return v === val;
        });
    }else{
        return this.some((v) => {
            return v === val;
        });
    }
}
Array.prototype.includes = Array.prototype.includes ? Array.prototype.includes : includesFn;
let arr = [1,2,3,4,5,6];
console.log(arr.includes(1));
console.log(arr.includes(1,2));





