<template><h3 id="_1、最长公共前缀" tabindex="-1"><a class="header-anchor" href="#_1、最长公共前缀" aria-hidden="true">#</a> 1、最长公共前缀</h3>
<p>编写一个函数来查找字符串数组中的最长公共前缀。如果不存在公共前缀，返回空字符串 &quot;&quot;。</p>
<p><strong>示例 1：</strong></p>
<p>输入：<code>strs = [&quot;flower&quot;,&quot;flow&quot;,&quot;flight&quot;]</code><br>
输出：<code>&quot;fl&quot;</code></p>
<p><strong>示例 2：</strong></p>
<p>输入：<code>strs = [&quot;dog&quot;,&quot;racecar&quot;,&quot;car&quot;]</code><br>
输出：<code>&quot;&quot;</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token keyword">var</span> <span class="token function-variable function">longestCommonPrefix</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">strs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> first <span class="token operator">=</span> strs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> pre <span class="token operator">=</span> <span class="token string">''</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> first<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 用第一个字符串的第一个字母与后面的字符串从头开始逐个比对</span>
        <span class="token keyword">let</span> char <span class="token operator">=</span> first<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> strs<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 当遇到不相同的字母时比对结束，返回前缀</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">!==</span> strs<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> pre
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 当一个字母通过所有比对后，添加到公共前缀中</span>
        pre <span class="token operator">=</span> pre <span class="token operator">+</span> char
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> pre
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div></template>
