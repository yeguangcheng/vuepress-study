import{d as n}from"./app.e8d229e6.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const s={},t=n(`<h3 id="_1\u3001\u5982\u4F55\u89E3\u51B3\u7F51\u9875\u88ABiframe\u5F15\u7528\u5BFC\u81F4\u7684\u5B89\u5168\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u5982\u4F55\u89E3\u51B3\u7F51\u9875\u88ABiframe\u5F15\u7528\u5BFC\u81F4\u7684\u5B89\u5168\u95EE\u9898" aria-hidden="true">#</a> 1\u3001\u5982\u4F55\u89E3\u51B3\u7F51\u9875\u88ABiframe\u5F15\u7528\u5BFC\u81F4\u7684\u5B89\u5168\u95EE\u9898</h3><h4 id="\u5BA2\u6237\u7AEF\u9632\u5D4C\u5957" tabindex="-1"><a class="header-anchor" href="#\u5BA2\u6237\u7AEF\u9632\u5D4C\u5957" aria-hidden="true">#</a> \u5BA2\u6237\u7AEF\u9632\u5D4C\u5957</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u68C0\u67E5\u9876\u5C42window\u4E00\u81F4\u6027</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>window <span class="token operator">!=</span> window<span class="token punctuation">.</span>top<span class="token punctuation">)</span><span class="token punctuation">{</span>
    window<span class="token punctuation">.</span>top<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> correctURL<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u68C0\u67E5\u57DF\u540Dhost\u7684\u4E00\u81F4\u6027</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>top<span class="token punctuation">.</span>location<span class="token punctuation">.</span>host <span class="token operator">!=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>host<span class="token punctuation">)</span> <span class="token punctuation">{</span>
\u3000\u3000top<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="x-frame-options" tabindex="-1"><a class="header-anchor" href="#x-frame-options" aria-hidden="true">#</a> X-Frame-Options</h4><p>\u670D\u52A1\u5668\u53EF\u4EE5\u8BBE\u7F6EX-Frame-Options\u54CD\u5E94\u5934\uFF0C\u4E3B\u8981\u662F\u63CF\u8FF0\u670D\u52A1\u5668\u7684\u7F51\u9875\u8D44\u6E90\u7684iframe\u6743\u9650</p><ul><li><code>DENY</code>\uFF1A\u5F53\u524D\u9875\u9762\u4E0D\u80FD\u88AB\u5D4C\u5957iframe\u91CC\uFF0C\u5373\u4FBF\u662F\u5728\u76F8\u540C\u57DF\u540D\u7684\u9875\u9762\u4E2D\u5D4C\u5957\u4E5F\u4E0D\u5141\u8BB8,\u4E5F\u4E0D\u5141\u8BB8\u7F51\u9875\u4E2D\u6709\u5D4C\u5957iframe</li><li><code>SAMEORIGIN</code>\uFF1Aiframe\u9875\u9762\u7684\u5730\u5740\u53EA\u80FD\u4E3A\u540C\u6E90\u57DF\u540D\u4E0B\u7684\u9875\u9762</li><li><code>ALLOW-FROM</code>\uFF1A\u53EF\u4EE5\u5728\u6307\u5B9A\u7684origin url\u7684iframe\u4E2D\u52A0\u8F7D</li></ul>`,6);function e(p,o){return t}var r=a(s,[["render",e]]);export{r as default};
