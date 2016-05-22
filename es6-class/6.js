/**
 * Created by feifei on 2016/5/22.
 */
    "use strict";
class MyName {
    constructor(name) {
        this.nm = name;
    }
    get myMame() {
        return this.name;
    }
    set myName(name) {
        this.name = name;
    }
}
let n = new MyName('xx');
//n.myMame = "n";
console.log(n.myMame);