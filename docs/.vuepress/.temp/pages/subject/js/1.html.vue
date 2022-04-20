<template><h3 id="_1、call、apply、bind-的用法以及区别" tabindex="-1"><a class="header-anchor" href="#_1、call、apply、bind-的用法以及区别" aria-hidden="true">#</a> 1、call、apply、bind 的用法以及区别</h3>
<h5 id="相同之处" tabindex="-1"><a class="header-anchor" href="#相同之处" aria-hidden="true">#</a> 相同之处：</h5>
<ul>
<li>call、apply、bind都是改变函数体内 this 的指向。</li>
<li>第一个参数都是this(对象)</li>
<li>call、apply是立即执行函数</li>
</ul>
<h5 id="不同之处" tabindex="-1"><a class="header-anchor" href="#不同之处" aria-hidden="true">#</a> 不同之处：</h5>
<ul>
<li>call、apply的区别：当函数需要传递多个变量时，apply第二个参数可以接收一个数组作为参数输入，call则是接收一系列的单独变量。</li>
<li>bind：不立即执行。而apply、call 立即执行。</li>
</ul>
<h5 id="代码解析一-改变函数体内-this-的指向" tabindex="-1"><a class="header-anchor" href="#代码解析一-改变函数体内-this-的指向" aria-hidden="true">#</a> 代码解析一（改变函数体内 this 的指向）</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
<span class="token punctuation">}</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">constructor</span><span class="token operator">:</span> Person<span class="token punctuation">,</span>
    <span class="token function-variable function">showName</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">'xxx'</span><span class="token punctuation">)</span>
person<span class="token punctuation">.</span><span class="token function">showName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">var</span> animal <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'yyy'</span>
<span class="token punctuation">}</span>

<span class="token comment">// 让 person.showName()运行后name变成yyy</span>

person<span class="token punctuation">.</span><span class="token function">showName</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>animal<span class="token punctuation">)</span>

person<span class="token punctuation">.</span><span class="token function">showName</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>animal<span class="token punctuation">)</span>

person<span class="token punctuation">.</span><span class="token function">showName</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>animal<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 不会立即执行，需要调用</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h5 id="代码解析二-call、apply接收参数区别" tabindex="-1"><a class="header-anchor" href="#代码解析二-call、apply接收参数区别" aria-hidden="true">#</a> 代码解析二（call、apply接收参数区别）</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span>
Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>Math<span class="token punctuation">,</span> arr<span class="token punctuation">)</span>
Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>Math<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span>
Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>Math<span class="token punctuation">,</span> arr<span class="token punctuation">)</span>
Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>Math<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>apply的第二个参数必须是一个包含多个参数的数组（或类数组对象）</p>
</template>
