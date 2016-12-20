/**
 * Created by fengjj on 2016/6/21.
 */
/*
    尾递归
* */
'use strict';
/*
function factorial(n){
    if(n === 1){
        return n;
    }
    return n * factorial(n-1);
}
console.log(factorial(5));
*/


//尾递归优化
/*
function factorial(n,total){
    if(n === 1){
        return total;
    }
    return factorial(n-1,n*total);
}
console.log(factorial(5,1));
*/
//柯里化
function tailFactorial(n,total){
    if(n === 1){
        return total;
    }
    return tailFactorial(n-1,n*total);
}
function currying(fn,n) {
    return function(m){
        return fn(m,n);
    }
}

let factorial = currying(tailFactorial,1);
console.log(factorial(5));



