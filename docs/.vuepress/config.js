const { path } = require('@vuepress/utils')

module.exports = {
    plugins: [
        [
            '@vuepress/plugin-search',
            {
                // 指定搜索结果的最大条数
                maxSuggestions: 5,
                // 排除首页
                isSearchable: (page) => page.path !== '/',
                // 允许搜索 Frontmatter 中的 `tags`
                getExtraFields: (page) => page.frontmatter.tags ?? [],
                locales: {
                    '/': {
                        placeholder: '搜索'
                    }
                }
            }
        ]
    ],
    // 站点配置
    lang: 'zh-CN',
    title: '高级前端进修之路',
    description: '高级前端进修之路',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        // 增加一个自定义的 favicon(网页标签的图标)
        ['link', { rel: 'icon', href: '/img/favicon.ico' }]
    ],
    // 这是部署到github相关的配置
    base: '/vuepress-study/',
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    serviceWorker: true,
    extends: '@vuepress/theme-default',
    alias: {
        '@theme/Page.vue': path.resolve(__dirname, './components/Page.vue')
    },
    home: true,
    // 端口配置
    port: 8081,
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: '/img/logo.png',
        navbar: [
            // 导航栏配置
            { text: 'Home', link: '/' },
            { text: '学习路线', link: '/line' },
            { text: '技术文章', link: '/blog' },
            { text: '面试题汇总', link: '/subject/js/1' }
        ],
        // 侧边栏配置
        sidebar: {
            '/': [],
            '/blog': [],
            '/subject': [
                {
                    text: 'JavaScript',
                    collapsible: true,
                    children: [
                        {
                            text: '1、call、apply、bind 的用法以及区别',
                            link: '/subject/js/1'
                        },
                        {
                            text: '2、介绍模块化发展历程',
                            link: '/subject/js/2'
                        },
                        {
                            text: '3、合并数组和合并对象都有哪些方法',
                            link: '/subject/js/3'
                        },
                        {
                            text: '4、讲一下原型和原型链',
                            link: '/subject/js/4'
                        },
                        {
                            text: '5、js数据类型有哪些',
                            link: '/subject/js/5'
                        },
                        {
                            text: '6、异步加载JS的方式有哪些？会阻塞什么？',
                            link: '/subject/js/6'
                        },
                        {
                            text: '7、什么是防抖和节流？有什么区别？如何实现？',
                            link: '/subject/js/7'
                        },
                        {
                            text: '8、setTimeout、Promise、Async/Await 的区别',
                            link: '/subject/js/8'
                        },
                        {
                            text: '9、简单说说 js 中有哪几种内存泄露的情况',
                            link: '/subject/js/9'
                        },
                        {
                            text: '10、Async/Await 是如何通过同步的方式实现异步？',
                            link: '/subject/js/10'
                        },
                        {
                            text: '11、介绍下 Set、Map、WeakSet 和 WeakMap 的区别？',
                            link: '/subject/js/11'
                        }
                    ]
                },
                {
                    text: 'HTML',
                    collapsible: true,
                    children: [
                        {
                            text: '1、行内元素有哪些？块级元素有哪些？空(void)元素有哪些',
                            link: '/subject/html/1'
                        },
                        {
                            text: '2、导入样式时，使用link和@import有什么区别',
                            link: '/subject/html/2'
                        },
                        {
                            text: '3、title和h1的区别、b与strong的区别、i与em的区别？',
                            link: '/subject/html/3'
                        },
                        {
                            text: '4、img标签的title和alt有什么区别？',
                            link: '/subject/html/4'
                        },
                        {
                            text: '5、input的type类型和attr属性有哪些',
                            link: '/subject/html/5'
                        }
                    ]
                },
                {
                    text: 'CSS',
                    collapsible: true,
                    children: [
                        {
                            text: '1、介绍一下盒子模型',
                            link: '/subject/css/1'
                        },
                        {
                            text: '2、flex: 0 1 auto 表示什么意思',
                            link: '/subject/css/2'
                        },
                        {
                            text: '3、css 的伪类和伪元素有哪些？有什么区别？',
                            link: '/subject/css/3'
                        },
                        {
                            text: '4、清除浮动有几种方式？各自的优缺点？',
                            link: '/subject/css/4'
                        },
                        {
                            text: '5、简述 Rem 及其转换原理',
                            link: '/subject/css/5'
                        },
                        {
                            text: '6、什么是 webp？如何判断浏览器是否支持 webp ？',
                            link: '/subject/css/6'
                        },
                        {
                            text: '7、介绍BFC及其应用？',
                            link: '/subject/css/7'
                        },
                        {
                            text: '8、如何让一个 div 水平垂直居中？',
                            link: '/subject/css/8'
                        },
                        {
                            text: '9、分析比较 opacity: 0、visibility: hidden、display: none',
                            link: '/subject/css/9'
                        },
                        {
                            text: '10、说一下position:sticky',
                            link: '/subject/css/10'
                        }
                    ]
                },
                {
                    text: 'TypeScript',
                    collapsible: true,
                    children: [
                        {
                            text: '1、interface和type的区别',
                            link: '/subject/ts/1'
                        }
                    ]
                },
                {
                    text: 'Vue',
                    collapsible: true,
                    children: [
                        {
                            text: '1、组件传递数据有几种方式',
                            link: '/subject/vue/1'
                        },
                        {
                            text: '2、为什么在 Vue3.0 采用了 Proxy，抛弃了 Object.defineProperty？',
                            link: '/subject/vue/2'
                        },
                        {
                            text: '3、Vue 的父组件和子组件生命周期钩子执行顺序是什么？',
                            link: '/subject/vue/3'
                        },
                        {
                            text: '4、双向绑定和 vuex 是否冲突？',
                            link: '/subject/vue/4'
                        },
                        {
                            text: '5、Vue 中 computed 和 watch 的区别',
                            link: '/subject/vue/5'
                        }
                    ]
                },
                {
                    text: '浏览器',
                    collapsible: true,
                    children: [
                        {
                            text: '1、如何实现浏览器内多个标签页之间的通信？',
                            link: '/subject/browser/1'
                        }
                    ]
                },
                {
                    text: '前端工具',
                    collapsible: true,
                    children: [
                        {
                            text: '1、webpack 中 loader 和 plugin 的区别是什么',
                            link: '/subject/tools/1'
                        }
                    ]
                },
                {
                    text: '编程题',
                    collapsible: true,
                    children: [
                        {
                            text: '1、计算页面中的节点数量、最大嵌套深度、最大子节点数',
                            link: '/subject/handwritten/1'
                        },
                        {
                            text: '2、计算多个区间的交集',
                            link: '/subject/handwritten/2'
                        },
                        {
                            text: '3、请使用原生代码实现一个Events模块',
                            link: '/subject/handwritten/3'
                        },
                        {
                            text: '4、手写 Promise.all',
                            link: '/subject/handwritten/4'
                        },
                        {
                            text: '5、实现颜色 rgb 转换为十六进制有什么方法？',
                            link: '/subject/handwritten/5'
                        },
                        {
                            text: '6、实现数组的扁平化处理方法(flat)',
                            link: '/subject/handwritten/6'
                        }
                    ]
                },
                {
                    text: '计算机',
                    collapsible: true,
                    children: [
                        {
                            text: '1、http状态码有哪些？',
                            link: '/subject/computer/1'
                        },
                        {
                            text: '2、什么情况下会304？协商缓存的头部字段？',
                            link: '/subject/computer/2'
                        },
                        {
                            text: '3、什么是 AST？有什么应用场景？',
                            link: '/subject/computer/3'
                        },
                        {
                            text: '4、简单讲解一下 http2 的多路复用',
                            link: '/subject/computer/4'
                        },
                        {
                            text: '5、简述 HTTP2.0 与 HTTP1.1 相较于之前版本的改进',
                            link: '/subject/computer/5'
                        }
                    ]
                },
                { text: '移动端', link: '/subject/mobile' },
                {
                    text: '算法',
                    collapsible: true,
                    children: [
                        {
                            text: '1、最长公共前缀',
                            link: '/subject/algorithm/1'
                        },
                        {
                            text: '2、数组全排列',
                            link: '/subject/algorithm/2'
                        }
                    ]
                },
                {
                    text: '性能优化',
                    collapsible: true,
                    children: [
                        {
                            text: '1、获取首屏加载时间',
                            link: '/subject/performance/1'
                        }
                    ]
                },
                {
                    text: '网络安全',
                    collapsible: true,
                    children: [
                        {
                            text: '1、如何解决网页被iframe引用导致的安全问题',
                            link: '/subject/safe/1'
                        }
                    ]
                }
            ]
        }
        // 侧边栏显示2级
        // sidebarDepth: 2
    }
}
