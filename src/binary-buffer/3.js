/**
 * Created by fengjj on 2016/6/23.
 */
/*
    视图：同一段内存，不同数据有不同的解读方式
    TypedBuffer视图 9种类型（Int8 Uint8 Uint8C Int16 Uint16 Int32 Uint32 Float32 Float64）
     new TypedArray(length);
     new TypedArray(typedArray);
     new TypedArray(arrayLikeObject);
     new TypedArray(buffer [, byteOffset [, length]]);

     where TypedArray() is one of:

     Int8Array();
     Uint8Array();
     Uint8ClampedArray();
     Int16Array();
     Uint16Array();
     Int32Array();
     Uint32Array();
     Float32Array();
     Float64Array();

    每个视图就像普通的数组，数组的所有方法(除concat)都可以用在上面
    TypedBuffer数组：
        所有的成员都是一个类型
        连续的，不会有空位
        数组成员默认值：0
* */
'use strict';
// new TypedArray(length)
let b = new Int16Array(8);   //可以不通过ArrayBuffer创建，可以直接分配内存  8  代表成员的个数，即8个2字节
console.log('== new TypedArray(length) ==',b);

//new TypedArray(typedArray)
let buf = new ArrayBuffer(8);
let b1 = new Int32Array(buf);
console.log('===new TypedArray(typedArray)=',b1);
let b2 = new Int16Array(buf,2); //注意：16位  2个字节  此处的byteOffset必须是2的倍数
b2.set([1,2],1);
console.log(b2);

//合并多个TypedArray数组
function concatTypedArr(restutConstructor,...arrays) {
    let totalLength = 0;
    for(let arr of arrays) {
        totalLength += arr.length;
    }
    let result = new restutConstructor(totalLength);
    let offset = 0;
    for(let arr of arrays) {
        result.set(arr,offset);
        offset += arr.length;
    }
    return result;
}
let concatArr = concatTypedArr(Int8Array,Int8Array.of(0,1),Int8Array.of(5,6));
console.log(concatArr);

