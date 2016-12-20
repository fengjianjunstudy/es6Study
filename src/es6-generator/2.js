/**
 * Created by feifei on 2016/7/7.
 */
'use strict';
//通过封装  达到第一次next时传入参数
function wrapper(generatorFn) {
    return function() {
        let g = generatorFn();
        g.next();
        return g;
    }
}
function* gen() {
    let y = yield 'ok';
    console.log(y);
}
let wrapGen = wrapper(gen);
wrapGen().next('abc');