/**
 * Created by fengjj on 2016/5/25.
 */
/*
    Symbol 消除魔法字符串   解耦
* */
'use strict';
let shapeType = {
    triangle:'Triangle'
}
function getArea(shape,opts) {
    let area = 0;
    switch (shape) {
        case shapeType.triangle :
            area = .5 * opts.width * opts.height;
            break;
    }
    return area;
}
let a = getArea(shapeType.triangle,{width:10,height:10});
console.log('=== area ===',a);

/*
    Symbol 消除魔法字符串的写法
* */

let shapeTypeSym = {
    triangle:Symbol()
};

function getAreaSym(shape,opts) {
    let area = 0;
    switch (shape) {
        case shapeTypeSym.triangle :
            area = .5 * opts.width * opts.height;
            break;
    }
    return area;
}
let a1 = getAreaSym(shapeTypeSym.triangle,{width:100,height:100});
console.log('=== area Symbol ===',a1);
