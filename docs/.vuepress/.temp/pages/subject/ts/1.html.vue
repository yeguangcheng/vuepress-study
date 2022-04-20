<template><h3 id="_1、interface和type的区别" tabindex="-1"><a class="header-anchor" href="#_1、interface和type的区别" aria-hidden="true">#</a> 1、interface和type的区别</h3>
<p>官网描述：</p>
<ul>
<li>An interface can be named in an extends or implements clause, but a type alias for an object type literal cannot.</li>
<li>An interface can have multiple merged declarations, but a type alias for an object type literal cannot.</li>
</ul>
<h4 id="相同点" tabindex="-1"><a class="header-anchor" href="#相同点" aria-hidden="true">#</a> 相同点</h4>
<ul>
<li>都可以描述一个对象或者函数</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>
<span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">SetUser</span> <span class="token punctuation">{</span>
    <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">User</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">SetUser</span> <span class="token operator">=</span> <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ul>
<li>都允许拓展（extends）</li>
</ul>
<p>interface 和 type 都可以拓展，并且两者并不是相互独立的，也就是说 interface 可以 extends type, type 也可以 extends interface 。 虽然效果差不多，但是两者语法不同。</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>
<span class="token comment">// interface extends interface</span>
<span class="token keyword">interface</span> <span class="token class-name">Name</span> <span class="token punctuation">{</span> 
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">Name</span> <span class="token punctuation">{</span> 
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>

<span class="token comment">// type extends type</span>
<span class="token keyword">type</span> <span class="token class-name">Name</span> <span class="token operator">=</span> <span class="token punctuation">{</span> 
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">User</span> <span class="token operator">=</span> Name <span class="token operator">&amp;</span> <span class="token punctuation">{</span> age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// interface extends type</span>
<span class="token keyword">type</span> <span class="token class-name">Name</span> <span class="token operator">=</span> <span class="token punctuation">{</span> 
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">Name</span> <span class="token punctuation">{</span> 
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>

<span class="token comment">// type extends interface</span>
<span class="token keyword">interface</span> <span class="token class-name">Name</span> <span class="token punctuation">{</span> 
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">User</span> <span class="token operator">=</span> Name <span class="token operator">&amp;</span> <span class="token punctuation">{</span> 
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h4 id="不同点" tabindex="-1"><a class="header-anchor" href="#不同点" aria-hidden="true">#</a> 不同点</h4>
<ul>
<li>type 可以声明基本类型别名，联合类型，元组等类型</li>
<li>type 语句中还可以使用 typeof 获取实例的 类型进行赋值</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>
<span class="token comment">// 基本类型别名</span>
<span class="token keyword">type</span> <span class="token class-name">Name</span> <span class="token operator">=</span> <span class="token builtin">string</span>
 
<span class="token comment">// 联合类型</span>
<span class="token keyword">interface</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span>
    <span class="token function">wong</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Cat</span> <span class="token punctuation">{</span>
    <span class="token function">miao</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">type</span> <span class="token class-name">Pet</span> <span class="token operator">=</span> Dog <span class="token operator">|</span> Cat
 
<span class="token comment">// 具体定义数组每个位置的类型</span>
<span class="token keyword">type</span> <span class="token class-name">PetList</span> <span class="token operator">=</span> <span class="token punctuation">[</span>Dog<span class="token punctuation">,</span> Pet<span class="token punctuation">]</span>

<span class="token comment">// 当你想获取一个变量的类型时，使用 typeof</span>
<span class="token keyword">let</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token operator">=</span> <span class="token keyword">typeof</span> div
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><ul>
<li>interface 能够声明合并</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>
<span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    sex<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
User 接口为 {
    name: string
    age: number
    sex: string 
}
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></template>
