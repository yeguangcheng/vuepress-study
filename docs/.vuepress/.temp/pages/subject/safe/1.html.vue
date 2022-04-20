<template><h3 id="_1、如何解决网页被iframe引用导致的安全问题" tabindex="-1"><a class="header-anchor" href="#_1、如何解决网页被iframe引用导致的安全问题" aria-hidden="true">#</a> 1、如何解决网页被iframe引用导致的安全问题</h3>
<h4 id="客户端防嵌套" tabindex="-1"><a class="header-anchor" href="#客户端防嵌套" aria-hidden="true">#</a> 客户端防嵌套</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 检查顶层window一致性</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>window <span class="token operator">!=</span> window<span class="token punctuation">.</span>top<span class="token punctuation">)</span><span class="token punctuation">{</span>
    window<span class="token punctuation">.</span>top<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> correctURL<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 检查域名host的一致性</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>top<span class="token punctuation">.</span>location<span class="token punctuation">.</span>host <span class="token operator">!=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>host<span class="token punctuation">)</span> <span class="token punctuation">{</span>
　　top<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="x-frame-options" tabindex="-1"><a class="header-anchor" href="#x-frame-options" aria-hidden="true">#</a> X-Frame-Options</h4>
<p>服务器可以设置X-Frame-Options响应头，主要是描述服务器的网页资源的iframe权限</p>
<ul>
<li><code>DENY</code>：当前页面不能被嵌套iframe里，即便是在相同域名的页面中嵌套也不允许,也不允许网页中有嵌套iframe</li>
<li><code>SAMEORIGIN</code>：iframe页面的地址只能为同源域名下的页面</li>
<li><code>ALLOW-FROM</code>：可以在指定的origin url的iframe中加载</li>
</ul>
</template>
