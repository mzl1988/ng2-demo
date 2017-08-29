# ng2-demo

## 升级
1. npm uninstall -g @angular/cli
2. npm cache clean
3. cnpm install -g @angular/cli@latest

## 开发
1. cnpm install -g @angular/cli@latest
2. $ cnpm install
3. $ ng serve 或 ng serve --host 192.168.10.105 --port 4201

打开你的浏览器，访问http://localhost:XXXX/ 或 http://192.168.10.xxx:xxxx

如果你想让加载的包更小，请使用以下方式启动angular-cli内置的轻量级http server

    ng serve --prod --aot

## AOT&TreeShaking

开发状态打出来的bundle体积比较大，在发布到生产环境之前需要进行prod和AOT，用法如下：

打开命令行，进入demo根目录，执行以下命令：
    
    ng build --prod --env=prod --aot

加上--prod参数之后，angular-cli会自动启用TreeShaking（摇树）特性，简而言之，就是把用不到的包全部剔除掉，就像从树上把枯叶子摇下来一样，很形象吧？加上--aot参数是让angular-cli启动预编译特性。

angular-cli会在项目根目录下生成一个dist目录，里面就是编译、压缩好的文件了。仔细观察你会发现，这些文件的体积已经被大幅度压缩，加上gzip之后有一些文件只剩下1/4左右的大小。

## 工程结构
1. angular-cli.json Angular-CLI的配置。 在这个文件中，你可以设置一系列默认值，还能配置当构件项目时应该排除哪些文件。 要了解更多，请参阅Angular-CLI     的官方文档。
2. e2e/* 在e2e/下是端到端（End-to-End）测试。 它们不在src/下，是因为端到端测试实际上和应用是相互独立的，它只适用于测试你的应用而已。 这也就是为什么    它会拥有自己的tsconfig.json。
3. .editorconfig 给你的编辑器看的一个简单配置文件，它用来确保参与你项目的每个人都具有基本的编辑器配置。 大多数的编辑器都支持.editorconfig文件，详情   参见 http://editorconfig.org 。
4. .gitignore 一个Git的配置文件，用来确保某些自动生成的文件不会被提交到源码控制系统中。
5. karma.conf.js 给Karma的单元测试配置，当运行ng test时会用到它。
6. protractor.conf.js 给Protractor使用的端到端测试配置文件，当运行ng e2e的时候会用到它。
7. 给TSLint和Codelyzer用的配置信息，当运行ng lint时会用到。 Lint功能可以帮你保持代码风格的统一。

## UI组件
* ngx-bootstrap http://valor-software.com/ngx-bootstrap/#/
* moment http://momentjs.cn/docs/
* lodash http://lodashjs.com/docs/
* checkbox https://lokesh-coder.github.io/pretty-checkbox/
* bootstrap http://getbootstrap.com/components/
* ngx-perfect-scrollbar https://github.com/zefoy/ngx-perfect-scrollbar
* layer https://github.com/sentsin/layer
* echarts http://echarts.baidu.com/
* ngx-echarts https://github.com/xieziyu/ngx-echarts
* bootstrap-datepicker https://github.com/uxsolutions/bootstrap-datepicker
* bootstrap-daterangepicker http://www.daterangepicker.com/
* ng-select https://basvandenberg.github.io/ng-select
* ngx-pipes https://github.com/danrevah/ngx-pipes

## 图标
1. http://fontawesome.io/icons/ 常用
3. https://materialdesignicons.com/ 常用