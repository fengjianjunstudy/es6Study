Array.prototype.contains = function(item){
  return RegExp("\\b"+item+"\\b").test(this);
};
Array.prototype.each = function(fn){
    fn = fn || Function.K;
     var a = [];
     var args = Array.prototype.slice.call(arguments, 1);
     for(var i = 0; i < this.length; i++){
         var res = fn.apply(this,[this[i],i].concat(args));
         if(res != null) a.push(res);
     }
     return a;
};
Array.prototype.uniquelize = function(){
     var ra = new Array();
     for(var i = 0; i < this.length; i ++){
         if(!ra.contains(this[i])){
            ra.push(this[i]);
         }
     }
     return ra;
};


Array.intersect = function(a, b){
     return a.uniquelize().each(function(o){return b.contains(o) ? o : null});
};
Array.union = function(a, b){
     return a.concat(b).uniquelize();
};
Array.complement = function(a, b){
     return Array.minus(Array.union(a, b),Array.intersect(a, b));
};
Array.minus = function(a, b){
     return a.uniquelize().each(function(o){return b.contains(o) ? null : o});
};

var a = [6,3,9,3,2,4,5,7].each(function(x){return x > 2 ? x : null});
var b = [5,8,6,2,1,9].each(function(x){return x < 0 ? x : null});
console.log(a);
console.log(b);
console.log("--------------------------------------------------------------------------");


var m = [6,3,9,3,2,4,5,7];
var n = [5,8,6,2,1,9];

console.log(m);
console.log(n);
console.log("--------------------------------------------------------------------------");

console.log('交集: '+ Array.intersect(m,n));
console.log("--------------------------------------------------------------------------");

console.log('并集: '+ Array.union(m,n));
console.log("--------------------------------------------------------------------------");

console.log('补集: '+ Array.complement(m,n));
console.log("--------------------------------------------------------------------------");

console.log('差集: '+ Array.minus(m,n));
console.log("--------------------------------------------------------------------------");

console.log('差集: '+ Array.minus(n,m));
console.log("--------------------------------------------------------------------------");