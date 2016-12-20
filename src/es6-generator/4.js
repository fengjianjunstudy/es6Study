/**
 * Created by feifei on 2016/7/7.
 */
'use strict';
// for of
function * gen() {
    let [pre,cur] = [0,1];
    for(;;) {
        [pre,cur] = [cur,cur+pre];
        yield cur;
    }
}
let g = gen();
for(let n of g) {
    if(n>1000) {
        break;
    }
    console.log(n);
}