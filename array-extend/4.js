/**
 * Created by fengjj on 2016/6/21.
 */
/*
    Array.prototype.copyWidthin(target,start,end)
    在当前数组内部将指定位置成员复制到其他位置（会覆盖原有成员）,返回当前数组，即，使用该方法会修改当前数组
* */
'use strict';
let arr = [1,2,3,4,5,6];
arr.copyWithin(0,5);
console.log(arr);
