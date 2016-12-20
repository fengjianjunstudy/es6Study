/**
 * Created by fengjj on 2016/6/21.
 */
/*
作用域   如果参数的默认值是一个变量，则该变量的作用域与其他的作用域规则一样，即先是当前函数的作用域，然后才是全局作用域
* */
'use strict';

/*
let x = 2;
function f(x,y = x){
    console.log(x,y);
}
f(6); // 6 6
*/

/*
function f1(x = y){
    let y = 3;
    console.log(x);
}

*/

/*
let foo = 'outer';
function bar(f = x => foo) {
    let foo = 'inner';
    console.log(f());
}
bar(); //inner
*/

//应用：利用参数的默认值，可以指定某一个参数不能省略
function throwIfMissing() {
    throw new Error('missing parameter');
}
function foo(nustBeProvided = throwIfMissing()) {
 console.log(nustBeProvided);
}

//foo();