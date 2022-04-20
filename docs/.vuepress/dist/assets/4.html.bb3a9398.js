import{d as a}from"./app.e8d229e6.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const s={},e=a(`<h3 id="\u6E05\u9664\u6D6E\u52A8\u6709\u51E0\u79CD\u65B9\u5F0F-\u5404\u81EA\u7684\u4F18\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#\u6E05\u9664\u6D6E\u52A8\u6709\u51E0\u79CD\u65B9\u5F0F-\u5404\u81EA\u7684\u4F18\u7F3A\u70B9" aria-hidden="true">#</a> \u6E05\u9664\u6D6E\u52A8\u6709\u51E0\u79CD\u65B9\u5F0F\uFF1F\u5404\u81EA\u7684\u4F18\u7F3A\u70B9\uFF1F</h3><h4 id="_1-\u7236\u7EA7-div-\u5B9A\u4E49-height" tabindex="-1"><a class="header-anchor" href="#_1-\u7236\u7EA7-div-\u5B9A\u4E49-height" aria-hidden="true">#</a> 1.\u7236\u7EA7 div \u5B9A\u4E49 height</h4><p>\u7236\u7EA7 div \u624B\u52A8\u5B9A\u4E49 height\uFF0C\u5C31\u89E3\u51B3\u4E86\u7236\u7EA7 div \u65E0\u6CD5\u81EA\u52A8\u83B7\u53D6\u5230\u9AD8\u5EA6\u7684\u95EE\u9898\u3002\u4E0D\u63A8\u8350\u4F7F\u7528\uFF0C\u53EA\u5EFA\u8BAE\u9AD8\u5EA6\u56FA\u5B9A\u7684\u5E03\u5C40\u65F6\u4F7F\u7528</p><h4 id="_2-\u7ED3\u5C3E\u5904\u52A0\u7A7A-div-\u6807\u7B7E-clear-both" tabindex="-1"><a class="header-anchor" href="#_2-\u7ED3\u5C3E\u5904\u52A0\u7A7A-div-\u6807\u7B7E-clear-both" aria-hidden="true">#</a> 2.\u7ED3\u5C3E\u5904\u52A0\u7A7A div \u6807\u7B7E clear:both</h4><p>\u6DFB\u52A0\u4E00\u4E2A\u7A7A div\uFF0C\u5229\u7528 css \u63D0\u9AD8\u7684 clear:both \u6E05\u9664\u6D6E\u52A8\uFF0C\u8BA9\u7236\u7EA7 div \u80FD\u81EA\u52A8\u83B7\u53D6\u5230\u9AD8\u5EA6\u3002\u517C\u5BB9\u6027\u597D\uFF0C\u4F46\u4F1A\u591A\u589E\u52A0\u65E0\u610F\u4E49\u7684\u6807\u7B7E\u3002</p><h4 id="_3-\u7236\u7EA7-div-\u5B9A\u4E49-\u4F2A\u7C7B-after-\u548C-zoom" tabindex="-1"><a class="header-anchor" href="#_3-\u7236\u7EA7-div-\u5B9A\u4E49-\u4F2A\u7C7B-after-\u548C-zoom" aria-hidden="true">#</a> 3.\u7236\u7EA7 div \u5B9A\u4E49 \u4F2A\u7C7B:after \u548C zoom</h4><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.clearfloat:after</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.clearfloat</span> <span class="token punctuation">{</span>
    <span class="token property">zoom</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="_4-\u7236\u7EA7div\u5B9A\u4E49-overflow-hidden" tabindex="-1"><a class="header-anchor" href="#_4-\u7236\u7EA7div\u5B9A\u4E49-overflow-hidden" aria-hidden="true">#</a> 4.\u7236\u7EA7div\u5B9A\u4E49 overflow:hidden</h4><p>\u4F7F\u7528overflow:hidden\u65F6\uFF0C\u6D4F\u89C8\u5668\u4F1A\u91CD\u65B0\u8BA1\u7B97\u6D6E\u52A8\u533A\u57DF\u7684\u9AD8\u5EA6\u3002\u517C\u5BB9\u6027\u597D\uFF0C\u7F3A\u70B9\u6EA2\u51FA\u90E8\u5206\u4F1A\u9690\u85CF\u3002</p><h4 id="_5-\u7236\u7EA7div\u5B9A\u4E49-overflow-auto" tabindex="-1"><a class="header-anchor" href="#_5-\u7236\u7EA7div\u5B9A\u4E49-overflow-auto" aria-hidden="true">#</a> 5.\u7236\u7EA7div\u5B9A\u4E49 overflow:auto</h4><p>\u4F7F\u7528overflow:hidden\u65F6\uFF0C\u6D4F\u89C8\u5668\u4F1A\u91CD\u65B0\u8BA1\u7B97\u6D6E\u52A8\u533A\u57DF\u7684\u9AD8\u5EA6\u3002\u517C\u5BB9\u6027\u597D\uFF0C\u7F3A\u70B9\u6EA2\u51FA\u90E8\u5206\u4F1A\u51FA\u73B0\u6EDA\u52A8\u6761\u3002</p><h4 id="_6-\u7236\u7EA7div-\u4E5F\u4E00\u8D77\u6D6E\u52A8" tabindex="-1"><a class="header-anchor" href="#_6-\u7236\u7EA7div-\u4E5F\u4E00\u8D77\u6D6E\u52A8" aria-hidden="true">#</a> 6.\u7236\u7EA7div \u4E5F\u4E00\u8D77\u6D6E\u52A8</h4><p>\u7236\u5B50\u5143\u7D20\u4E00\u8D77\u6D6E\u52A8\uFF0C\u7F3A\u70B9\u662F\u4F1A\u4E3A\u4E86\u6E05\u9664\u6D6E\u52A8\u800C\u6539\u53D8\u5E03\u5C40\uFF0C\u9002\u5408\u5728\u4E0D\u5F71\u54CD\u5E03\u5C40\u65F6\u4F7F\u7528\u3002</p>`,13);function t(p,r){return e}var c=n(s,[["render",t]]);export{c as default};