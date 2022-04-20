<template><h3 id="_1、获取白屏和首屏加载时间" tabindex="-1"><a class="header-anchor" href="#_1、获取白屏和首屏加载时间" aria-hidden="true">#</a> 1、获取白屏和首屏加载时间</h3>
<h5 id="白屏时间-performance-timing-responsestart-performance-timing-navigationstart" tabindex="-1"><a class="header-anchor" href="#白屏时间-performance-timing-responsestart-performance-timing-navigationstart" aria-hidden="true">#</a> 白屏时间 ：<code>Performance.timing.responseStart - Performance.timing.navigationStart</code></h5>
<h5 id="首屏加载时间-performance-timing-domcontentloadedeventstart-performance-timing-navigationstart" tabindex="-1"><a class="header-anchor" href="#首屏加载时间-performance-timing-domcontentloadedeventstart-performance-timing-navigationstart" aria-hidden="true">#</a> 首屏加载时间 ：<code>performance.timing.domContentLoadedEventStart - performance.timing.navigationStart</code></h5>
<p>Performance是一个做前端性能监控离不开的API，最好在页面完全加载完成之后再使用，因为很多值必须在页面完全加载之后才能得到。</p>
<h4 id="performance-timing-属性列表" tabindex="-1"><a class="header-anchor" href="#performance-timing-属性列表" aria-hidden="true">#</a> Performance.timing 属性列表</h4>
<p>从输入url到用户可以使用页面的全过程时间统计，会返回一个PerformanceTiming对象，单位均为毫秒</p>
<p><img src="/img/performance-timing.png" alt="avatar"></p>
<p>按触发顺序排列所有属性：<br>
<code>navigationStart</code>:在同一个浏览器上下文中，前一个网页（与当前页面不一定同域）unload 的时间戳，如果无前一个网页 unload ，则与 fetchStart 值相等<br>
<code>unloadEventStart</code>:前一个网页（与当前页面同域）unload 的时间戳，如果无前一个网页 unload 或者前一个网页与当前页面不同域，则值为 0<br>
<code>unloadEventEnd</code>:和 <code>unloadEventStart</code> 相对应，返回前一个网页 unload 事件绑定的回调函数执行完毕的时间戳<br>
<code>redirectStart</code>:第一个 HTTP 重定向发生时的时间。有跳转且是同域名内的重定向才算，否则值为 0<br>
<code>redirectEnd</code>:最后一个 HTTP 重定向完成时的时间。有跳转且是同域名内的重定向才算，否则值为 0<br>
<code>fetchStart</code>:浏览器准备好使用 HTTP 请求抓取文档的时间，这发生在检查本地缓存之前<br>
<code>domainLookupStart</code>:DNS 域名查询开始的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等<br>
<code>domainLookupEnd</code>:DNS 域名查询完成的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等<br>
<code>connectStart</code>:HTTP（TCP） 开始建立连接的时间，如果是持久连接，则与 fetchStart 值相等,如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接开始的时间<br>
<code>connectEnd</code>:HTTP（TCP） 完成建立连接的时间（完成握手），如果是持久连接，则与 fetchStart 值相等,如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接完成的时间</p>
<p><strong>注意:这里握手结束，包括安全连接建立完成、SOCKS 授权通过</strong></p>
<p><code>secureConnectionStart</code>:HTTPS 连接开始的时间，如果不是安全连接，则值为 0<br>
<code>requestStart</code>:HTTP 请求读取真实文档开始的时间（完成建立连接），包括从本地读取缓存,连接错误重连时，这里显示的也是新建立连接的时间<br>
<code>responseStart</code>:HTTP 开始接收响应的时间（获取到第一个字节），包括从本地读取缓存<br>
<code>responseEnd</code>:HTTP 响应全部接收完成的时间（获取到最后一个字节），包括从本地读取缓存<br>
<code>domLoading</code>:开始解析渲染 DOM 树的时间，此时 Document.readyState 变为 loading，并将抛出 readystatechange 相关事件<br>
<code>domInteractive</code>:完成解析 DOM 树的时间，Document.readyState 变为 interactive，并将抛出 readystatechange 相关事件</p>
<p><strong>注意:只是 DOM 树解析完成，这时候并没有开始加载网页内的资源</strong></p>
<p><code>domContentLoadedEventStart</code>:DOM 解析完成后，网页内资源加载开始的时间,文档发生 DOMContentLoaded事件的时间<br>
<code>domContentLoadedEventEnd</code>:DOM 解析完成后，网页内资源加载完成的时间（如 JS 脚本加载执行完毕），文档的DOMContentLoaded 事件的结束时间<br>
<code>domComplete</code>:DOM 树解析完成，且资源也准备就绪的时间，Document.readyState 变为 complete，并将抛出 readystatechange 相关事件<br>
<code>loadEventStart</code>:load 事件发送给文档，也即 load 回调函数开始执行的时间,如果没有绑定 load 事件，值为 0<br>
<code>loadEventEnd</code>:load 事件的回调函数执行完毕的时间,如果没有绑定 load 事件，值为 0</p>
</template>
