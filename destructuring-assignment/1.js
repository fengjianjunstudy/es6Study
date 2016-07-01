/**
 * Created by fengjj on 2016/7/1.
 */
'use strict';
//数组解构 模式匹配   等号的右边不是数组（不具备iterator接口）将会解构失败,只要具有iterator接口就可以采用数组形式的解构
let [a,b,c] = [1,2,3];
console.log(a,b,c);
let [x,[y,z]] = [1,[2,3]];
console.log(x,y,z);
let [m,n] = new Set([1,2]);
console.log(m,n);

function* fibs() {
    let aa = 0;
    let bb = 1;
    while (true) {
        yield aa;
        [aa,bb] = [bb,aa+bb]
    }
}
let [first,second,third,forth,fifth] = fibs();
console.log(first,second,third,forth,fifth);