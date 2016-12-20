/**
 * Created by feifei on 2016/3/12.
 */
//let暂时性死区
var a=1;
if(true){
    console.log(a);
    let a=3;
}