# NodeJS入门到企业Web开发中的应用

> 慕课网实战视频教程：https://coding.imooc.com/class/package/146.html


### CommonJS: NodeJS自带的模块管理规范

    1. 每个文件都是一个模块，有自己的作用域；
    2. 在模块内部，module 变量代表模块本身；
    3. module.exports 属性代表模块对外提供的接口

### require规则

    1. / 表示根目录绝对路径，./ 表示当前文件所在目录；
    2. 支持 js,json,node 拓展名，不写则依次尝试；
    3. 不写路径则认为该模块是 nodeJS 内建模块或向上各级 node_module 下第三方模块

### require特性

    1. module 被加载的时候执行，加载后缓存；
    2. 如果某个模块被循环依赖，就只输出已执行的部分，未执行的部分不会输出； 
    3. node_modules 并没有把子依赖放在依赖包的原因是为了提高性能

### module.exports 和 exports 的区别
    
    exports是 module.exports 的快捷方式, 如 const exports = module.exports；
    注意exports的指向问题，不能修改。因为exports指向的永远是moudle.exports
    
### fs文件系统增删改查

    1. fsUpdate.readFile/fsUpdate.readFileSync
    2. 
    3. 
    
### global全局对象(无window对象)

    1. CommonJS,Buffer,Process,Console,Timer,SetImmediate；
    2. global.xxx相当于直接把xxx暴露给所有模块；
    3. 模块中直接写const是局部变量，写global是全局变量
    4. global.setImmediate(() => {xxx})事件队列执行顺序(3)

### global.process进程模块

    1. process可以获取主机环境的各种信息；
    2. process.nextTick(() => {xxx})事件队列执行顺序(1)
    3. setTimeout(() => {xxx})事件队列执行顺序(2)
    
### 利用node Inspect 命令和 Chrome 进行调试学习

    1. 
    2. 
    3. 
    
### 内建模块之path

    1. __dirname和__filename总是返回文件的绝对路径
    2. process.cwd()总是返回node命令所在的文件夹
    3. 在require方法中总是相对当前文件所在文件夹
    4. 在其他地方和process.cwd()一样，相对node启动文件夹

### 全局变量之global.buffer

    1. Buffer用于处理二进制数据流
    2. 实例类似整数数组，大小固定(0-255十六进制)
    3. C++代码在V8引擎堆外分配物理内存

### 内建模块之event事件

    1. 
    2. 
    3. 

### 


### 


