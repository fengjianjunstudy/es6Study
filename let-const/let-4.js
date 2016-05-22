/**
 * Created by feifei on 2016/3/12.
 */
//ES6的块级作用域
function f1(){
    let n=5;
    if(true){
        let n=10;
    }
    console.log(n);
}
f1();