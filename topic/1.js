/**
 * Created by fengjj on 2016/7/1.
 */
'use strict';
let A = [6,3,9,3,2,4,5,7];
let B = [5,8,6,2,1,9];
let arr1 =Array.from(new Set(A));
let arr2 = Array.from(new Set(B));
let fn = (arr1,arr2) => {
    return arr1.filter((v) => {
        return !arr2.includes(v);
    })
}
let r1 = fn(arr1,arr2),
    r2 = fn(arr2,arr1);
let result = [...r1,...r2];
console.log(result);
