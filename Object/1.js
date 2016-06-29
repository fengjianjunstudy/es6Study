/**
 * Created by fengjj on 2016/6/28.
 */
'use strict';
/*
 Object.is(value1, value2); //判断两个值是否相等
* */
console.log('NaN and NaN',NaN === NaN, Object.is(NaN,NaN));
console.log('+0 and -0',+0 === -0, Object.is(+0,-0));
console.log('{} and {}',{} === {}, Object.is({},{}));

// Object.assign(target, ...sources)从sources 对象复制可枚举及自身的属性到target对象
// 返回target对象
// 当target 对象是不可写对象是会报错
// sources为null or  undefined不会抛出错误
