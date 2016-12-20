"use strict";
/*
    Map
    对javascript 对象的补充   javascript的键值对对象  键只能是字符串   Map没有此限制
* */
 let m = new Map();
let n = {x:'1'};
m.set(n,'content');
console.log(m.get(n));

// Map接受数组   数组的成员是一个个键值对的数组
let arr = [['name','zhangsan'],['age',18]];
let m1 = new Map(arr);
console.log(m1.get('name'),m1.get('age'));

//实例方法  set  get has  delete  clear
console.log('name',m1.has('name'));
m1.delete('name');
console.log('delete name',m1.has('name'));
//对同一个键多次赋值   后面的值会覆盖前面的值
m1.set('age',20);
console.log(m1.get('age'));


//实例的属性   size
console.log(m1.size);

m1.clear();
console.log(m1.size);


//Map 的遍历方法  keys  values  entires  forEach   Map的默认遍历器接口是entries()方法

let m2 = new Map(arr);
console.log('keys',m2.keys());
console.log('value',m2.values());
console.log('entries',m2.entries());
m2.forEach((v,k,m) => {
    console.log(v,k,m);
})


//数据结构的互相转换

//Map => Array
 let m3 = new Map().set(true,1).set({foo: 3}, ['abc']);
console.log([...m3]);

//Array => Map
let myArr = new Map([[true, 7], [{foo: 3}, ['abc']]]);
console.log(myArr);

//Map => Object
function mapToObject(map) {
    console.log(map);
    let obj = Object.create(null);
    for (let m of map) {
        obj[m[0]] = m[1];
    }
    return obj;
}
console.log('mapToObject====>',mapToObject(m3));

//Object =>  Map
function objectToMap(obj) {
    let m = new Map();
    for(let k in obj) {
        m.set(k,obj[k]);
    }
    return m;
}
console.log({yes: true, no: false});

//Map => JSON
function mapToJson (map) {
    return JSON.stringify(mapToObject(map));
}
let myMap = new Map().set('yes', true).set('no', false);
console.log('mapToJson====>',mapToJson(myMap));

//JSON => Map

function jsonToMap(json) {
    return objectToMap(json);
}
console.log('jsonToMap====>',jsonToMap({"yes":true,"no":false}))


