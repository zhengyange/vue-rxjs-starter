# vue-rxjs-starter
vue2.x + rxjs5.x + service，vue项目抽象出一个service层处理Observable数据，完全放弃vuex

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

### 意图
1. vue-resource天然返回Promise，这就为我们使用RxJS提供了很好的基础条件，而实际项目中，
  大多数业务场景是基于http请求的异步操作，这也是RxJS擅长的地方

2. 在项目中抽象出一个service层，来集中处理各种http请求及业务逻辑，  
   组件级的UI交互、状态变更，还是放在组件内操作

3. 完全放弃vuex，使用基于RxJS的service层进行开发，还是比较得心应手的

4. 把与组件无关的流尽量放在service里处理，组件相关的在组件内处理

5. 最终我们的代码还是很简洁的

### 最重要的
```
service采用单例模式，当然实际项目中不经常变的http-result，要做缓存，避免每次请求
```

