/**
 * Created by feifei on 2016/5/22.
 */
    "use strict";
class Foo {
    static name = 'fff';
    constructor(args) {
        this.args = args;
    }
    * [Symbol.iterator]() {
        for(let arg of this.args) {
            yield arg;
        }
    }
}
let f = new Foo(['hello','world','！']);
console.log(...f);
console.log(Foo.name);
