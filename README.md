# 高级前端进修之路

本项目是使用vuepress2.0搭建的前端学习博客，同时收录各种经典面试题、最新大厂面试题、前端相关领域的面试题，包含不限于Vue面试题，JS面试题，HTTP面试题，性能优化面试题，CSS面试题，算法面试题，网络安全面试题，高频面试题。  

[点击查看：高级前端进修之路](https://yeguangcheng.github.io/vuepress-study/) :arrow_upper_right:

在这里你可以：  

- 学习如何使用vuepress2.0搭建博客，熟悉各种配置项 :page_facing_up:
- 使用github pages 实现博客自动发布 :computer:
- 学习钻研面试题，对自身知识点查漏补缺 :book:
- 学习最新最前沿的前端技术，成为大神指日可待 :trophy:

## 面试题分类

分类|首题跳转链接|状态
-----|-----|-----
JavaScript|[call、apply、bind 的用法以及区别](https://yeguangcheng.github.io/vuepress-study/subject/js/1.html)|更新中 :rocket:
CSS|[介绍一下盒子模型](https://yeguangcheng.github.io/vuepress-study/subject/css/1.html)|更新中 :rocket:
HTML|[行内元素有哪些？块级元素有哪些？空(void)元素有哪些](https://yeguangcheng.github.io/vuepress-study/subject/html/1.html)|更新中 :rocket:
TypeScript|[interface和type的区别](https://yeguangcheng.github.io/vuepress-study/subject/ts/1.html)|更新中 :rocket:
Vue|[组件传递数据有几种方式？](https://yeguangcheng.github.io/vuepress-study/subject/vue/1.html)|更新中 :rocket:
编程题|[计算页面中的节点数量、最大嵌套深度、最大子节点数](https://yeguangcheng.github.io/vuepress-study/subject/handwritten/1.html)|更新中 :rocket:
计算机|[http状态码有哪些？](https://yeguangcheng.github.io/vuepress-study/subject/computer/1.html)|更新中 :rocket:
算法|[最长公共前缀](https://yeguangcheng.github.io/vuepress-study/subject/algorithm/1.html)|更新中 :rocket:
性能优化|[获取白屏和首屏加载时间](https://yeguangcheng.github.io/vuepress-study/subject/performance/1.html)|更新中 :rocket:
网络安全|[如何解决网页被iframe引用导致的安全问题](https://yeguangcheng.github.io/vuepress-study/subject/safe/1.html)|更新中 :rocket:

## 项目结构

```text
.
├── .github                                     // webpack配置文件
│   ├── workflows                               // github工作流
│   │   └── docs.yml                            // 工作流自动发布博客（含详细注释）
├── docs                                        // 主文件夹
│   ├── .vuepress                               // vuepress配置文件
│   │   └── .cache                              // 缓存文件
│   │   └── .tmp                                // 临时文件
│   │   └── components                          // vue组件
│   │   └── dist                                // 打包目录
│   │   └── public                              // 静态文件
│   │   └── config.js                           // vuepress项目主要配置
│   ├── blog                                    // 博客文章
│   ├── subject                                 // 面试题目
│   ├── README.md                               // 博客首页配置
├── .eslintrc.js                                // eslint校验
├── .gitignore                                  // git忽略配置
├── .prettierrc                                 // prettier插件配置
├── package.json                                // 项目依赖
├── README.md                                   // github主页
.
```

## 项目启动

```
yarn
yarn dev
```