/**
 * Created by fengjj on 2016/7/1.
 */
Function.prototype.bind = function() {
    var slice = Array.prototype.slice;
    var self = this;
    var thisObj = arguments[0];
    var args = slice.call(arguments,1);
    return function () {
        var argsAll = args.concat(slice.call(arguments,0));
        console.log(argsAll)
        self.apply(thisObj,argsAll);
    }
}
function fn(age,sex){
    console.log(this.name);
    console.log(age);
    console.log(sex);
}
var obj = {
    name:'xiaoming'
}
var fn1 = fn.bind(obj,18);
fn1('girl');