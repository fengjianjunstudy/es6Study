/**
 * Created by fengjj on 2016/6/23.
 */
/*
    ArrayBuffer实例属性及方法及静态方法

* */
'use strict';
let buffer = new ArrayBuffer(12);
let int8_arr = new Int8Array(buffer);
int8_arr.set([1,2,3]);
//ArrayBuffer.prototype.byteLength
console.log('== ArrayBuffer.prototype.byteLength ==',buffer.byteLength);

// ArrayBuffer.prototype.slice(begin[,end])  返回新的ArrayBuffer对象  1/分配新的内容 2/将原来复制的ArrayBuffer对象复制过去
let new_buf = buffer.slice(0,3);
let new_int8_arr = new Int8Array(new_buf);
console.log('== ArrayBuffer.prototype.slice(begin[,end]) ===',new_int8_arr);


//ArrayBuffer.isView(arg) return Boolean  判断arg是否为ArrayBuffer视图
console.log('== ArrayBuffer.isView(arg) ==',ArrayBuffer.isView(new_int8_arr));
