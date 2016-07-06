/**
 * Created by feifei on 2016/3/12.
 */
//let and const
//不存在变量提升
//暂时性死区
//不允许重复声明

var arr=[];
for(let i=0;i<10;i++){
    arr[i]=function(){
        console.log(i);
    }
}
arr[6]();