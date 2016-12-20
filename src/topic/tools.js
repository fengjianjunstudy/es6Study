/**
 * Created by fengjj on 2016/7/8.
 */
(function(window,undefined){
    var Tools = {};
    Tools.Type = (function() {
        var typeArr = ['Object','Array','Date','Function','Number','String','Boolean'],
            typeObj = {};
        typeArr.forEach(function(v) {
            typeObj['is'+v] = (function(type) {
                return function(parm) {
                    return Object.prototype.toString.call(parm) === '[object ' + type + ']';
                }
            })(v);
        });
        return typeObj;
    })();
    Tools.ShortMethod = {
        push:Array.prototype.push,
        slice:Array.prototype.slice,
        concat:Array.prototype.concat
    }
    //深浅拷贝
    Tools.extend = function() {
        var deep = false,
            target = arguments[0] || {},
            options,
            name,
            src,
            copy,
            copyIsArray,
            clone,
            i = 1,
            length = arguments.length;
        if(Tools.Type.isBoolean(target)) {
            deep = true;
            target = arguments[1] || {};
            i = 2;
        }
        if(typeof target !== 'object' || !Tools.Type.isFunction(target)) {
            target = {};
        }
        if(length < 1) {
            target = this;
            --i;
        }
        for(;i<length;i++) {
            if((options = arguments[i]) !=  null) {
                for(name in options) {
                    src = target[name];
                    copy = options[name];
                    if(deep && copy && (copyIsArray = Tools.Type.isArray(copy) || Tools.Type.isObject(copy))){
                        if(copyIsArray) {
                            copyIsArray = false;
                            clone = src && (Tools.Type.isArray(src)?src : []);
                        }else{
                            clone = src && (Tools.Type.isObject(src)?src : {});
                        }
                        target[name] = Tools.extend(deep,clone,copy);
                    }else if(copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        }
        return target;
    }
    window.Tools = Tools;
})(window);
console.log(Tools.extend({name:'xiaoming'},{name:'xiaohua',age:10}));