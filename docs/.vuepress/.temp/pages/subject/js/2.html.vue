<template><h3 id="_2、介绍模块化发展历程" tabindex="-1"><a class="header-anchor" href="#_2、介绍模块化发展历程" aria-hidden="true">#</a> 2、介绍模块化发展历程</h3>
<p>可从IIFE、AMD、CMD、CommonJS、UMD、webpack(require.ensure)、ESModule、<code>&lt;script type=&quot;module&quot;&gt;&lt;/script&gt;</code>这几个角度考虑</p>
<h5 id="iife-immediately-invoked-function-expression" tabindex="-1"><a class="header-anchor" href="#iife-immediately-invoked-function-expression" aria-hidden="true">#</a> IIFE（Immediately Invoked Function Expression）</h5>
<ul>
<li>使用自执行函数来编写模块化。</li>
<li>在一个单独的函数作用域中执行代码，避免变量冲突</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h5 id="amd-asynchronous-module-definition" tabindex="-1"><a class="header-anchor" href="#amd-asynchronous-module-definition" aria-hidden="true">#</a> AMD（Asynchronous Module Definition）</h5>
<ul>
<li>是 require.js 在推广过程中对模块定义的规范化产出。</li>
<li>依赖前置，需要在定义时就写好需要的依赖，提前执行依赖。</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token comment">// alert.js，无依赖时</span>
<span class="token function">define</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> <span class="token function-variable function">alertName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'I am '</span> <span class="token operator">+</span> str<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        alertName
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// alert.js，还依赖其他模块时</span>
<span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'myLib'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">myLib</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> <span class="token function-variable function">alertName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'I am '</span> <span class="token operator">+</span> str<span class="token punctuation">)</span>
        myLib<span class="token punctuation">.</span><span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        alertName
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 其他文件使用alert.js的方法</span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'alert'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">alert</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    alert<span class="token punctuation">.</span><span class="token function">alertName</span><span class="token punctuation">(</span><span class="token string">'Peter'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h5 id="cmd-common-module-definition" tabindex="-1"><a class="header-anchor" href="#cmd-common-module-definition" aria-hidden="true">#</a> CMD（Common Module Definition）</h5>
<ul>
<li>是 sea.js 在推广过程中对模块定义的规范化产出。</li>
<li>支持动态引入依赖文件。</li>
<li>因为CMD推崇一个文件一个模块，所以经常就用文件名作为模块id</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 定义模块  myModule.js</span>
<span class="token function">define</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">require<span class="token punctuation">,</span> exports<span class="token punctuation">,</span> module</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// require 是一个方法，用来获取其他模块提供的接口  </span>
    <span class="token comment">// exports 是一个对象，用来向外提供模块接口  </span>
    <span class="token comment">// module 是一个对象，上面存储了与当前模块相关联的一些属性和方法  </span>
    <span class="token keyword">var</span> $ <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'jquery.js'</span><span class="token punctuation">)</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span><span class="token string">'active'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 加载模块</span>
seajs<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'myModule.js'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">my</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h5 id="commonjs" tabindex="-1"><a class="header-anchor" href="#commonjs" aria-hidden="true">#</a> CommonJS</h5>
<ul>
<li>是服务器端Node.js引入的模块化规范。</li>
<li>分为<code>require</code>、<code>exports</code>、<code>module</code>三个概念</li>
<li><code>exports</code>实际上是一个对<code>module.exports</code>的引用</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// add.js</span>
exports<span class="token punctuation">.</span><span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span>num1 <span class="token operator">+</span> num2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 其他文件使用add.js的方法</span>
<span class="token keyword">var</span> add <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./add.js'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h5 id="umd" tabindex="-1"><a class="header-anchor" href="#umd" aria-hidden="true">#</a> UMD</h5>
<ul>
<li>为了让模块同时兼容AMD和CommonJS规范而出现的。</li>
<li>先判断是否支持Node.js的模块（exports）是否存在，再判断是否支持AMD（define是否存在）</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 基本原理</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">window<span class="token punctuation">,</span> factory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> exports <span class="token operator">===</span> <span class="token string">'object'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">factory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> define <span class="token operator">===</span> <span class="token string">'function'</span> <span class="token operator">&amp;&amp;</span> define<span class="token punctuation">.</span>amd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">define</span><span class="token punctuation">(</span>factory<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        window<span class="token punctuation">.</span>eventUtil <span class="token operator">=</span> <span class="token function">factory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//module ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h5 id="webpack-require-ensure" tabindex="-1"><a class="header-anchor" href="#webpack-require-ensure" aria-hidden="true">#</a> webpack(require.ensure)</h5>
<ul>
<li>webpack 2.x 版本中的代码分割。</li>
</ul>
<h5 id="es-modules" tabindex="-1"><a class="header-anchor" href="#es-modules" aria-hidden="true">#</a> ES Modules</h5>
<ul>
<li>ES6 引入的模块化，支持import 来引入另一个 js。</li>
<li>ESM 自动采用严格模式，忽略 'use strict'</li>
<li>每个 ES Module 都是运行在单独的私有作用域中</li>
<li>ESM 是通过 CORS 的方式请求外部 JS 模块的</li>
<li>ESM 的 script 标签会延迟执行脚本(浏览器页面渲染后执行)</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token keyword">import</span> <span class="token punctuation">{</span> foo<span class="token punctuation">,</span> bar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./module.mjs'</span>
<span class="token keyword">import</span> fs <span class="token keyword">from</span> <span class="token string">'fs'</span>

<span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">'Peter'</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>
    name
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></template>
