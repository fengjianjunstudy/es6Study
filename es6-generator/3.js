/**
 * Created by feifei on 2016/7/7.
 */
'use strict';
function* gen() {
    console.log('begin');
    console.log(`1,${yield}`);
    console.log(`2,${yield}`);
    console.log('end');
}
let g = gen();
g.next();
g.next('ok')
g.next();