/**
 * Created by feifei on 2016/7/7.
 */
function typeFn(typeArr) {
    var Type = {};
    for(var i = 0,len = typeArr.length;i<len;i++ ) {
        Type['is'+typeArr[i]] =(function(type){
            return function(obj) {
                return Object.prototype.toString.call(obj) === '[object '+type+']';
            }
        })(typeArr[i]);
    }
    return Type;
}
var typeArr = ['Array','Object','Date','Number','String'];
var Type = typeFn(typeArr);
function uniqueFn(arr) {
    if(!Type.isArray(arr)){
        throw new Error('参数必须是数组');
    }
    var obj = {},
        newArr = [];

    arr.forEach(function(v) {
        var str = Type.isString(v)?'string'+v:'number'+v;
        if(!obj[str]) {
            newArr.push(v);
            obj[str] = true;
        }
    });
    return newArr;
}
function differentSetFn(firstArr,secondArr) {
    if(!Type.isArray(firstArr) || !Type.isArray(secondArr)){
        throw new Error('两个参数必须是数组');
    }
    var newArr = [];
    newArr = firstArr.filter(function(v) {
        return secondArr.indexOf(v) === -1;
    });
    return newArr;
}
var A = [6,3,9,3,2,4,5,7];
var B = [5,8,6,2,1,9];
var uniqueA = uniqueFn(A);
var uniqueB = uniqueFn(B);
var difA = differentSetFn(uniqueA,uniqueB);
var difB = differentSetFn(uniqueB,uniqueA);
console.log(difA.concat(difB));  //[ 3, 4, 7, 8, 1 ]

