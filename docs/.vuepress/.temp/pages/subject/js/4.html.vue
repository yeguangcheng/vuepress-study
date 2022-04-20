<template><h3 id="_4、讲一下原型和原型链" tabindex="-1"><a class="header-anchor" href="#_4、讲一下原型和原型链" aria-hidden="true">#</a> 4、讲一下原型和原型链</h3>
<h4 id="_1-、原型-prototype" tabindex="-1"><a class="header-anchor" href="#_1-、原型-prototype" aria-hidden="true">#</a> (1)、原型 prototype</h4>
<p>在js中对象分为<code>普通对象</code>和<code>函数对象</code>，每当定义一个对象时候，对象中都会包含一些预定义的属性。其中每个<code>函数对象</code>都有一个 prototype 属性，这个属性指向函数的原型对象。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">18</span>
<span class="token keyword">var</span> person1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person1<span class="token punctuation">.</span>age<span class="token punctuation">)</span> <span class="token comment">// 18</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_2-、构造函数-constructor" tabindex="-1"><a class="header-anchor" href="#_2-、构造函数-constructor" aria-hidden="true">#</a> (2)、构造函数 constructor</h3>
<p>每个原型对象都有一个 constructor 属性指向关联的构造函数。同时实例的 constructor 也指向构造函数。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">===</span> Person <span class="token comment">// true</span>
person1<span class="token punctuation">.</span>constructor <span class="token operator">===</span> Person <span class="token comment">// true</span>

<span class="token comment">// 可以说原型对象（Person.prototype）是 构造函数（Person）的一个实例</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_3-、proto" tabindex="-1"><a class="header-anchor" href="#_3-、proto" aria-hidden="true">#</a> (3)、<strong>proto</strong></h3>
<p>无论是<code>普通对象</code>还是<code>函数对象</code>，都有一个叫做__proto__ 的内置属性，用于<code>指向创建它的构造函数的原型对象</code>。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>person1<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Person</span><span class="token punctuation">.</span>prototype
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div style="text-align: center;">
    <img src="/img/js-prototype.webp" width="700" alt="图片名称" align=center />
</div>
<h3 id="_4-、原型链" tabindex="-1"><a class="header-anchor" href="#_4-、原型链" aria-hidden="true">#</a> (4)、原型链</h3>
<p>由于每个对象都可以通过__proto__指向构造器的原型对象，而每个原型对象也有__proto__属性继续指向，直到某个对象原型为null为止，这种一级一级的链结构就称为原型链。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>person1<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Person</span><span class="token punctuation">.</span>prototype <span class="token comment">// true</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype <span class="token comment">// true</span>
person1<span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype <span class="token comment">// true</span>
person1<span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></template>
