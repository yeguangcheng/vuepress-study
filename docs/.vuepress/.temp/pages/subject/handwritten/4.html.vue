<template><h3 id="_4、手写-promise-all" tabindex="-1"><a class="header-anchor" href="#_4、手写-promise-all" aria-hidden="true">#</a> 4、手写 Promise.all</h3>
<p>Promise.all 的完成体应该符合以下特征：</p>
<ul>
<li>输入为 Iterator 类型的参数，可以是 Array，Map， Set，String ，可能也得包括魔改的 Iterator（Symbol.iterator）之类</li>
<li>若输入的可迭代数据里不是 Promise，则也需要原样输出</li>
<li>返回一个 Promise 实例，可以调用 then 和 catch 方法</li>
<li>输出在 then 里体现为保持原顺序的数组</li>
<li>输出在 catch 体现为最早的 reject 返回值</li>
<li>空 Iterator， resolve 返回空数组</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 输入不仅仅只有Array</span>
<span class="token keyword">function</span> <span class="token function">promiseAll</span><span class="token punctuation">(</span><span class="token parameter">args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> promiseResults <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">let</span> iteratorIndex <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token comment">// 已完成的数量，用于最终的返回，不能直接用完成数量作为iteratorIndex</span>
        <span class="token comment">// 输出顺序和完成顺序是两码事</span>
        <span class="token keyword">let</span> fullCount <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token comment">// 用于迭代iterator数据</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// for of 遍历顺序，用于返回正确顺序的结果</span>
            <span class="token comment">// 因iterator用forEach遍历后的key和value一样，所以必须存一份for of的 iteratorIndex</span>
            <span class="token keyword">let</span> resultIndex <span class="token operator">=</span> iteratorIndex
            iteratorIndex <span class="token operator">+=</span> <span class="token number">1</span>
            <span class="token comment">// 包一层，以兼容非promise的情况</span>
            Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                    promiseResults<span class="token punctuation">[</span>resultIndex<span class="token punctuation">]</span> <span class="token operator">=</span> res
                    fullCount <span class="token operator">+=</span> <span class="token number">1</span>
                    <span class="token comment">// Iterator 接口的数据无法单纯的用length和size判断长度，不能局限于Array和 Map类型中</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>fullCount <span class="token operator">===</span> iteratorIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token function">resolve</span><span class="token punctuation">(</span>promiseResults<span class="token punctuation">)</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                    <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 处理空 iterator 的情况</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>iteratorIndex <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span>promiseResults<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Promise<span class="token punctuation">.</span>all<span class="token punctuation">)</span> Promise<span class="token punctuation">.</span>all <span class="token operator">=</span> promiseAll
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div></template>
