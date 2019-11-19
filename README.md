## next.js入门到放弃

#### 服务器端渲染-SSR
服务端渲染（SSR: Server Side Rendering）,用户请求服务器，服务器上直接生成 HTML 内容并返回给浏览器。服务器端渲染来，页面的内容是由 Server 端生成的。一般来说，服务器端渲染的页面交互能力有限，如果要实现复杂交互，还是要通过引入 JavaScript 文件来辅助实现。服务器端渲染这个概念，适用于任何后端语言。。

#### 为什么要使用SSR技术
CSR 项目的 SEO 能力极弱，在搜索引擎中基本上不可能有好的排名。因为目前大多数搜索引擎主要识别的内容还是 HTML，对 JavaScript 文件内容的识别都还比较弱。如果一个项目的流量入口来自于搜索引擎，这个时候你使用 CSR 进行开发，就非常不合适了

SSR 的产生，主要就是为了解决上面所说的问题。在 React 中使用 SSR 技术，我们让 React 代码在服务器端先执行一次，使得用户下载的 HTML 已经包含了所有的页面展示内容，这样，页面展示的过程只需要经历一个 HTTP 请求周期，TTFP 时间得到一倍以上的缩减。

同时，由于 HTML 中已经包含了网页的所有内容，所以网页的 SEO 效果也会变的非常好。之后，我们让 React 代码在客户端再次执行，为 HTML 网页中的内容添加数据及事件的绑定，页面就具备了 React 的各种交互能力。

#### 来张图先
![next](https://raw.githubusercontent.com/esymeptoo/next-demo/master/assets/next-detail.png)

#### 安装next.js
1. yarn add next react react-dom
2. 在package.json-scripts添加            
```js
{
  "dev": "next",
  "build": "next build",
  "start": "next start"
}
```

#### 目录结构
  - pages
  - public
  - node_modules
  - .next
  - next.config.js
  - server.js
  - package.json

#### 路由
1. Next.js没有路由配置文件 是通过node文件系统的读取到的路径作为页面的路由 在pages下新增index.js 启动项目就能在localhost:3000下面看到index页
2. 使用next提供了Link组件和Router进行路由跳转 
3. withRouter

#### Dynamic Routing
1. 使用query
2. 不能真正支持params模式

#### meta配置
nuxt.js将页面的head集中到了nuxt.config.js配置文件 next提供了Head组件用于配置页面的meta

#### CSS
1. Built-in CSS support:<style jsx>
2. CSS-in-JS
3. importing css/Sass/Less/Stylus files

#### Custom-Api
pages下的文件目录除了注册页面路由以外 还可以在pages下面新建api文件夹 *.js文件的路径即为请求路径

#### Custom-Server
项目根目录新建server.js

#### next.config.js
设置一些webpack的配置或者next的配置



















