<template><h3 id="_3、合并数组和合并对象都有哪些方法" tabindex="-1"><a class="header-anchor" href="#_3、合并数组和合并对象都有哪些方法" aria-hidden="true">#</a> 3、合并数组和合并对象都有哪些方法</h3>
<h4 id="合并数组" tabindex="-1"><a class="header-anchor" href="#合并数组" aria-hidden="true">#</a> 合并数组</h4>
<ul>
<li>for循环</li>
<li><code>arr.concat(arr2)</code></li>
<li><code>arr.push.apply(arr, arr2)</code></li>
<li>扩展运算符 <code>[...arr, ...arr2]</code></li>
<li><code>arr.push(...arr2)</code></li>
</ul>
<h4 id="合并对象" tabindex="-1"><a class="header-anchor" href="#合并对象" aria-hidden="true">#</a> 合并对象</h4>
<ul>
<li>Object.assign()</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token keyword">var</span> o1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> o2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> o3 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
 
<span class="token keyword">var</span> obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>o1<span class="token punctuation">,</span> o2<span class="token punctuation">,</span> o3<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { a: 1, b: 2, c: 3 }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>o1<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// { a: 1, b: 2, c: 3 }, 且目标对象自身也会改变。&amp;emsp;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>o2<span class="token punctuation">)</span> <span class="token comment">// { b: 2 };</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul>
<li>for in 遍历赋值</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token keyword">var</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string-property property">'a'</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string-property property">'b'</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string-property property">'c'</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> obj2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>obj2<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 此处hasOwnProperty是判断自有属性，使用 for in 循环遍历对象的属性时，原型链上的所有属性都将被访问会避免原型对象扩展带来的干扰</span>
        obj1<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> obj2<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul>
<li>扩展运算符 <code>{...obj1, ...obj2}</code></li>
</ul>
</template>
