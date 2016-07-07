/**
 * Created by feifei on 2016/7/6.
 */
/*
    Generator理解：
        语法上：状态机
        遍历器对象生成函数
        yield 内部值输出到外部
        next(参数)  外部值输入到内部  参数是上一条yield的返回值，没有参数时返回undefined
* */
'use strict';
//function* gen(){
//}
//let g = gen();
//console.log(g[Symbol.iterator]() === g);



function* gen() {
    for(let i = 0;true;i++) {
        let r = yield i;
        if(r) {
            i = -1;
        }
    }
}
let g = gen();
console.log(g.next());  //console.log(g.next());
console.log(g.next(2)); //{ value: 0, done: false }
console.log(g.next()); //{ value: 1, done: false }
