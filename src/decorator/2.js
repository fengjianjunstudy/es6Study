/**
 * Created by fengjj on 2016/6/24.
 */
/*
    方法修饰器
* */
function readOnly(target,name,descriptor) {
    descriptor.writable = false;
    return descriptor;
}
class A {
    @readOnly
    getName() {
        console.log('xiaohua');
    }
}
console.log(Object.getOwnPropertyNames(A.prototype))
Object.defineProperty(A.prototype,'getName',function(){console.log('xiaoming')});
let a = new A();
console.log(a.getName());