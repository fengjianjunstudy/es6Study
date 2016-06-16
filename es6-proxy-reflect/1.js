/**
 * Created by fengjj on 2016/5/27.
 */
/*
    Proxy  对外界对象的访问进行过滤和改写    代理器   目前只有Firefix 49+ 支持
* */
'use strict';
let obj = new Proxy({},{
    get:function(target,key,receiver) {
        console.log('====get====');
        return Reflect.get(target,key,receiver);
    },
    set: function (target,key,value,receiver) {
        console.log('=====set====');
        return Reflect.set(target,key,value,receiver);
    }
});
obj.count = 1;
console.log(obj.count);