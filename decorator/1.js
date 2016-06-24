/**
 * Created by fengjj on 2016/6/24.
 */
/*
    修饰器（decorator）:修改类和方法的行为 (不确定的说法)是在编译时执行，而不是在运行时执行   直白的理解就是一个在编译时执行的函数
    define function decoratorName(target,name,descriptor)
    usage: @decoratorName
    如果想要传一些参数的话，可以用Decorator Factories
* */
function testable(target) {
    target.isTestable = true; // 为MyTest类添加一个静态属性
}
@testable
class MyTest {
}
console.log(MyTest.isTestable);
function Component(opts) {
    return function(target,name,descriptor) {
        target.selector = opts.selector;
    }
}
@Component({selector:'my-app'})
class AppComponent {
    constructor(name = 'xiaoming') {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
console.log(AppComponent.selector); //my-app

function mixins(...list) {

    return function (target,name,descriptor) {
        Object.assign(target.prototype,...list);
        console.log(Object.getOwnPropertyNames(target.prototype));
    }
}

@mixins(AppComponent)
class ABC {

}
let a = new ABC();
console.log(a.selector);  // my-app
