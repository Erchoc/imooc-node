# NodeJS入门到企业Web开发中的应用

> 由于项目使用了ESLint和Supervisor，请先执行下面的`npm本地工具`。慕课网实战视频教程：https://coding.imooc.com/class/package/146.html

### npm本地工具

    1. npm i -g eslint,supervisor
    2. npm i -g babel-eslint -D
    
### 深入学习内容

    1. Stream(fs/http)
    2. Express/Koa/egg
    3. child_process/Cluster集群
    4. through2
    5. SSR/同构
    6. NodeJS源码
    
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

### 回调地狱之ES6的promise


### 回调地狱之ES7的async await

    1. 引入 util.promisify 处理异步回调
    2. 异步方法使用 const xxx = promisify(zzz.xxx) 转为同步方法
    3. 异步方法调用前使用 await 关键字

### .gitignore

    1. 匹配模式前加 / 代表项目根目录
    2. 匹配模式最后加 / 代表是目录
    3. 匹配模式前加 ! 代表取反
    4. * 代表任意字符，? 代表匹配一个字符， ** 代表匹配多级目录
    
### pre-commit模块：不符合ESLint就不让push
  
    1. 每次git commit会验证ESlint规则并自动修复一部分内容
    2. 自动修复不了的内容会报错，需要手动修改后再次commit

### supervise和pm2管理监视node程序

    1. npm i -g supervisor, pm2
    2. 修改服务端代码不需要重启node程序了

### 模板引擎HandleBars

    1. 安装：
