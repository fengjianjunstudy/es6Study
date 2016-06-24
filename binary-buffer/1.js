/**
 * Created by fengjj on 2016/6/23.
 */
/*
    ArrayBuffer  原始的二进制数据
        不能直接读/写，只能通过视图（TypedArray 和 DataView）读/写
        new ArrayBuffer(n)  分配一段存放数据的连续内存区域   注意：是连续的
        参数n:所需内存的大小（单位：字节）
    typedArray  操作简单类型的二进制数据
        Int8 Uint8 Uint8C Int16 Uint16 Int32 Uint32 Float32 Float64
    DataView    操作复杂的二进制数据
        Int8 Uint8  Int16 Uint16 Int32 Uint32 Float32 Float64
        new DataView(buffer)
    用到二进制数据的操作：
    File API
    XMLHttpRequest
    Fetch API
    Canvas
    WebSokets
* */
'use strict';
let buf = new ArrayBuffer(10);
let dataView = new DataView(buf);
dataView.setInt8(0,6);
console.log(dataView.getInt16(0,true));
console.log(buf.byteLength);

