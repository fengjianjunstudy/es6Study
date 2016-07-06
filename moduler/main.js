/**
 * Created by fengjj on 2016/7/5.
 */


/*

1.html

//import { firstName, lastName } from './moduleA';
import { f, l } from './moduleA';
//function importModuleB() {
//    import { moduleB } from './moduleB';   //throw Error
//}
//importModuleB();

import { moduleB } from './moduleB';
import  * as calculate  from './moduleC';
console.log(f,l,moduleB);
console.log(calculate.area(6))
console.log(calculate.circumference(6))*/

//2.html

import { name } from './moduleD';
console.log(name); //xiaoming
setTimeout(() => {
    console.log(name); //xiaohua
},1500);
