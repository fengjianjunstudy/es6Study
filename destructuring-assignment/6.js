/**
 * Created by fengjj on 2016/7/1.
 */
/*
    解构用途
* */
'use strict';
//提取JSON数据
var jsonData = {
    'id':42,
    'status':'ok',
    'data':[1,2]
};
let {id,status,data} = jsonData;
console.log(id,status,data);


//函数默认参数
function fn({name='xiaoming',age=18} = {}) {
    console.log(name,age);
    //取代下面的写法
    //let name = obj.name || 'xiaoming';
    //let age = obj.age || 18;
}
fn({name:'xiaohua'});


