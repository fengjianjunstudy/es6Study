/**
 * Created by fengjj on 2016/5/25.
 */
/*
    内置Symbol
* */

Symbol.hasInstance 方法   // 对象使用instanceof 时 调用该方法

Symbol.isConcatSpreadable 属性  // 等于一个布尔值 对象使用Array.prototype.concat()时，是否可以展开

Symbol.species 方法   //构造函数创造实例时，会调用这个方法

Symbol.match