/**
 * Created by fengjj on 2016/6/21.
 */
/*
    箭头函数
    使用注意事项：
        1、this对象是定义是所在的对象，不是运行时的对象
        2、不可以当做构造函数
        3、不能是用arguments，可以用rest参数
        4、不能使用yield命令，箭头函数不能用作Generator函数
* */
'use strict';
let f = v => v;
console.log(f(6)); //6
let bar = () => ({name:'xiaoming'});
console.log(bar()); //{ name: 'xiaoming' }

let arr = [1,2,3];
let arr_map = arr.map((x) => x*2);
console.log(arr_map);


function Timer() {
    this.seconds = 0;
    setInterval(() => {this.seconds++},1000);  //此处的this是Timer实例对象
}
let timer = new Timer();
setTimeout(() => {
    console.log(timer.seconds);   //3
},3100);

//部署管道机制
let pipeLine = (...funcs) => val => {return funcs.reduce((val,fn) => fn(val),val)}
let plus1 = x => x + 1;
let plus2 = x => x * 2;
console.log(pipeLine(plus1,plus2)(30));  //62



