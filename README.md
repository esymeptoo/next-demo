## next.js

#### 服务器端渲染-SSR
1. 服务端渲染（SSR: Server Side Rendering）,html页面由服务器渲染好，客户端请求的是完整的html页面。
2. 随着vue和react的盛行，单页应用越来越多，为了解决SEO的问题，分别推出了nuxt.js和next.js

#### 安装
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



















