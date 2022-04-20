<template><h3 id="如何实现浏览器内多个标签页之间的通信" tabindex="-1"><a class="header-anchor" href="#如何实现浏览器内多个标签页之间的通信" aria-hidden="true">#</a> 如何实现浏览器内多个标签页之间的通信？</h3>
<h4 id="_1-cookie-setinterval-方式" tabindex="-1"><a class="header-anchor" href="#_1-cookie-setinterval-方式" aria-hidden="true">#</a> 1.cookie + setInterval 方式</h4>
<p>利用 cookie 本地存储的方式进行共享，由于仅仅从 cookie 读取信息不能实时更新，需要手动刷新，因此采用 setInterval 定时器解决，将读取信息的代码封装成一个函数，在定时器内调用即可。</p>
<h4 id="_2-websocket-协议" tabindex="-1"><a class="header-anchor" href="#_2-websocket-协议" aria-hidden="true">#</a> 2.websocket 协议</h4>
<p>使用 Websocket，通信的标签页连接同一个服务器，发送消息到服务器后， 服务器推送消息给所有连接的客户端</p>
<h4 id="_3-localstorage" tabindex="-1"><a class="header-anchor" href="#_3-localstorage" aria-hidden="true">#</a> 3.localstorage</h4>
<p>可以地调用 localStorage，localStorage 在另一个浏览上下文里被添加、 修改或删除时，它都会触发一个 storage 事件，我们可以通过监听 storage 事件，控制它的值来进行页面信息通信</p>
<h4 id="_4-sharedworker" tabindex="-1"><a class="header-anchor" href="#_4-sharedworker" aria-hidden="true">#</a> 4.SharedWorker</h4>
<p>使用 H5 的新特性 SharedWorker，这种是可以多个标签页、iframe 共同使用的。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 新建一个js文件worker.js，不必打包到项目中，直接放到服务器即可</span>
<span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token string">''</span>
<span class="token function-variable function">onconnect</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> port <span class="token operator">=</span> e<span class="token punctuation">.</span>ports<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

    port<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>data <span class="token operator">===</span> <span class="token string">'get'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            port<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            data <span class="token operator">=</span> e<span class="token punctuation">.</span>data
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 这段代码是必须的，打开页面后注册SharedWorker，显示指定worker.port.start()方法建立与worker间的连接</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> Worker <span class="token operator">===</span> <span class="token string">'undefined'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'当前浏览器不支持webworker'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> worker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SharedWorker</span><span class="token punctuation">(</span><span class="token string">'worker.js'</span><span class="token punctuation">)</span>
    worker<span class="token punctuation">.</span>port<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>
        <span class="token string">'message'</span><span class="token punctuation">,</span>
        <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'来自worker的数据：'</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token boolean">false</span>
    <span class="token punctuation">)</span>
    worker<span class="token punctuation">.</span>port<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    window<span class="token punctuation">.</span>worker <span class="token operator">=</span> worker
<span class="token punctuation">}</span>
<span class="token comment">// 获取和发送消息都是调用postMessage方法，我这里约定的是传递'get'表示获取数据。</span>
window<span class="token punctuation">.</span>worker<span class="token punctuation">.</span>port<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token string">'get'</span><span class="token punctuation">)</span>
window<span class="token punctuation">.</span>worker<span class="token punctuation">.</span>port<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token string">'发送信息给worker'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div></template>
