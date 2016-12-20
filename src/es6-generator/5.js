/**
 * Created by feifei on 2016/7/7.
 */
'use strict';
//遍历对象{name:'xiaoming',age:28}
function* gen() {
    let keys = Object.keys(this);
    for(let k of keys) {
        yield [k,this[k]];
    }
}
let obj = {name:'xiaoming',age:28};
obj[Symbol.iterator] = gen;
for(let [k,v] of obj) {
    console.log(k,v);
}

