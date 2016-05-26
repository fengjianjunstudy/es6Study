/**
 * Created by fengjj on 2016/5/25.
 */
/*
    Symbol 消除魔法字符串   解耦
* */
'use strict';

/*
 Symbol 属性遍历   不会出现在 for in   , for of ,Object.keys() Object.getOwnPrppertyNames() 中
 可以使用Object.getOwnPropertySmybols()获取
* */
let obj = {
    first:'a',
    second:'b',
    length: 2,
    * [Symbol.iterator] () {
        for(let o in this) {
            yield o;
        }
    }
};
let a = Symbol('a'),b = Symbol('b');
obj[a] = 'hello';
obj[b] = 'world';

console.log('===== Object.keys=====',Object.keys(obj));
console.log('===== [...obj] =====',[...obj]);
for (let o in obj) {
    console.log('==== for of ===',o);
}
console.log('====== Object.getOwnPropertyNames ======',Object.getOwnPropertyNames(obj));
console.log('==== Object.getOwnPropertySymbols ====',Object.getOwnPropertySymbols(obj));

/*
    Reflect  在node 5.x 自己测试还不支持   可以在babel-node中测试成功
    Reflect.ownKeys()   可以返回常规键名和Symbol键名
* */
console.log('==== Reflect.ownKeys =====', Reflect.ownKeys(obj));