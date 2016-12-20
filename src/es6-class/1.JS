function  Point(x,y){
    this.x = x;
    this.y =y;
}
Point.prototype.changeFn = function (x,y){
    this.x = x;
    this.y = y;
}
console.log(new Point(1,2));