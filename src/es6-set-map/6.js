"use strict";
/*
    WeakMap
    WeakMap结构与Map结构基本类似，唯一的区别是它只接受对象作为键名（null除外）
    典型应用是，一个对应DOM元素的WeakMap结构，当某个DOM元素被清除，其所对应的WeakMap记录就会自动被移除。基本上，WeakMap的专用场合就是，它的键所对应的对象，可能会在将来消失。WeakMap结构有助于防止内存泄漏
* */

let myElement = document.getElementById('logo');
let myWeakMap = new WeakMap();
myWeakMap.set(myElement,{timesClicked:0});
myElement.addEventListener('click',() => {
    myWeakMap.get(myElement).timesClicked++;
},false);




//部署私有属性
let _counter = new WeakMap();
let _action = new WeakMap();

class CountDown {
    constructor(counter,action) {
        _counter.set(this,counter);
        _action.set(this,action);
    }
    dec() {
        let c = _counter.get(this);
        if(c<1) {
            return ;
        }
        c--;
        _counter.set(this,c);
        if(c === 0){
            _counter.get(this)();
        }
    }
}

let c1 = new CountDown(3,() =>{
    console.log('Done');
});
c1.dec();
c1.dec();
c1.dec();


