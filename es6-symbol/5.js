/**
 * Created by fengjj on 2016/5/25.
 */
/*
    Symbol 消除魔法字符串   解耦
* */
'use strict';

/*
 利用Symbol为对象定义一些非私有的   但又希望只用于内部的方法
* */
let size = Symbol('size');
class Collection {
    constructor() {
        this[size] = 0;
    }
    add(item) {
        this[this[size]++] = item;
    }
    static sizeOf(instance) {
        return instance[size];
    }
}
var x = new Collection();
console.log(Collection.sizeOf(x)); // 0

x.add('foo');
console.log(Collection.sizeOf(x)); // 1

console.log(Object.keys(x)); // ['0']
console.log(Object.getOwnPropertyNames(x)); // ['0']
console.log(Object.getOwnPropertySymbols(x)); // [Symbol(size)]