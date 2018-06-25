/**

 Created by WebStorm.
 User: Erchoc
 Date: 2018/6/25 18:16
 Description:

 **/

// 静态属性和方法：byteLength, isBuffer(), concat()

// 判断字节：node中英文两个，中文三个
console.log(Buffer.byteLength('good'))
console.log(Buffer.byteLength('中国'))

// 是否Buffer对象
console.log(Buffer.isBuffer({}))
console.log(Buffer.isBuffer(Buffer.from(['100', '杨哥'])))

// 拼接Buffer对象
const buf1 = Buffer.from('This')
const buf2 = Buffer.from('is')
const buf3 = Buffer.from('my')
const buf4 = Buffer.from('Buffer')
const buf5 = Buffer.from('Object')
console.log(Buffer.concat([buf1, buf2, buf3, buf4, buf5]).toString())

// Buffer.length计算字节数(空格也算)
const bufA = Buffer.from('This is a Buffer')
const bufB = Buffer.allocUnsafe(10)
bufB[0] = 2
console.log(bufA.length)
console.log(bufB.length)

// Buffer.fill填充数据,默认全部填充
const bufC = Buffer.allocUnsafe(20)
console.log(bufC)
console.log(bufC.fill(12, 0, 3))

// Buffer.equals判断内容是否相等
const bufX = Buffer.from('test')
const bufY = Buffer.from('test')
const bufZ = Buffer.from('test!')
console.log(bufX.equals(bufY))
console.log(bufX.equals(bufZ))

// Buffer.indexOf循环
console.log(bufX.indexOf('t'))
console.log(bufX.indexOf('o'))

// Buffer.copy拷贝
const bufferA = Buffer.allocUnsafe(26)
const bufferB = Buffer.allocUnsafe(26).fill('!');
console.log(bufferA, bufferB)
for (let i = 0; i < 26; i++) {
    // 97 是 'a' 的十进制 ASCII 值
    bufferA[i] = i + 97;
}
bufferA.copy(bufferB, 8, 16, 20);
console.log(bufferB.toString('ascii', 0, 25));

// Buffer乱码问题(node中一个汉子是3个字节)
const reaBuf = Buffer.from('中文字符串！')
for (let i = 0; i < reaBuf.length; i += 5) {
    const b = Buffer.allocUnsafe(5)
    reaBuf.copy(b, 0, i)

    console.log(b.toString())
}
// 使用内建模块处理这个乱码问题(缓存方案)
const StringDecoder = require('string_decoder').StringDecoder
const decoder = new StringDecoder('utf-8')
for (let i = 0; i < reaBuf.length; i += 5) {
    const b = Buffer.allocUnsafe(5)
    reaBuf.copy(b, 0, i)

    console.log(decoder.write(b))
}

