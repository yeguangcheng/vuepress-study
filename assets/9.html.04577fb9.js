import{d as n}from"./app.b87228d2.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const s={},e=n(`<h3 id="_9\u3001\u7B80\u5355\u8BF4\u8BF4-js-\u4E2D\u6709\u54EA\u51E0\u79CD\u5185\u5B58\u6CC4\u9732\u7684\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#_9\u3001\u7B80\u5355\u8BF4\u8BF4-js-\u4E2D\u6709\u54EA\u51E0\u79CD\u5185\u5B58\u6CC4\u9732\u7684\u60C5\u51B5" aria-hidden="true">#</a> 9\u3001\u7B80\u5355\u8BF4\u8BF4 js \u4E2D\u6709\u54EA\u51E0\u79CD\u5185\u5B58\u6CC4\u9732\u7684\u60C5\u51B5</h3><h4 id="\u5185\u5B58\u6CC4\u6F0F\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5185\u5B58\u6CC4\u6F0F\u5B9A\u4E49" aria-hidden="true">#</a> \u5185\u5B58\u6CC4\u6F0F\u5B9A\u4E49</h4><p>\u6307\u4E00\u5757\u88AB\u5206\u914D\u7684\u5185\u5B58\u65E2\u4E0D\u80FD\u4F7F\u7528\uFF0C\u53C8\u4E0D\u80FD\u56DE\u6536\uFF0C\u76F4\u5230\u6D4F\u89C8\u5668\u8FDB\u7A0B\u7ED3\u675F\u3002</p><h4 id="_1-\u95ED\u5305" tabindex="-1"><a class="header-anchor" href="#_1-\u95ED\u5305" aria-hidden="true">#</a> 1.\u95ED\u5305</h4><p>\u8FD9\u662F\u6211\u4EEC\u6545\u610F\u6CC4\u9732\u51FA\u6765\u4EE5\u8FBE\u5230\u6211\u4EEC\u76EE\u7684\u7684\u4E00\u79CD\u65B9\u5F0F\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">bindEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> obj <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;XXX&#39;</span><span class="token punctuation">)</span>
    obj<span class="token punctuation">.</span><span class="token function-variable function">\u03BFnclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u5B9A\u4E49\u4E8B\u4EF6\u56DE\u8C03\u65F6\uFF0C\u7531\u4E8E\u662F\u51FD\u6570\u5185\u5B9A\u4E49\u51FD\u6570\uFF0C\u5E76\u4E14\u5185\u90E8\u51FD\u6570\u2014\u2014\u4E8B\u4EF6\u56DE\u8C03\u7684\u5F15\u7528\u5916\u66B4\u4E86\uFF0C\u5F62\u6210\u4E86\u95ED\u5305\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="_2-\u610F\u5916\u7684\u5168\u5C40\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_2-\u610F\u5916\u7684\u5168\u5C40\u53D8\u91CF" aria-hidden="true">#</a> 2.\u610F\u5916\u7684\u5168\u5C40\u53D8\u91CF</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">leak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a <span class="token operator">=</span> <span class="token string">&#39;xxx&#39;</span> <span class="token comment">// a\u6210\u4E3A\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF\uFF0C\u4E0D\u4F1A\u88AB\u56DE\u6536</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="_3-\u672A\u6E05\u9664\u7684\u5B9A\u65F6\u5668" tabindex="-1"><a class="header-anchor" href="#_3-\u672A\u6E05\u9664\u7684\u5B9A\u65F6\u5668" aria-hidden="true">#</a> 3.\u672A\u6E05\u9664\u7684\u5B9A\u65F6\u5668</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> someResouce <span class="token operator">=</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> node <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;Node&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        node<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>someResouce<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token comment">// \u4EE3\u7801\u672A\u505A\u6E05\u9664\u5B9A\u65F6\u5668\u5904\u7406</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="_4-\u672A\u88AB\u9500\u6BC1\u7684\u4E8B\u4EF6\u76D1\u542C" tabindex="-1"><a class="header-anchor" href="#_4-\u672A\u88AB\u9500\u6BC1\u7684\u4E8B\u4EF6\u76D1\u542C" aria-hidden="true">#</a> 4.\u672A\u88AB\u9500\u6BC1\u7684\u4E8B\u4EF6\u76D1\u542C</h4><h4 id="_5-\u8131\u79BB-dom-\u7684\u5F15\u7528" tabindex="-1"><a class="header-anchor" href="#_5-\u8131\u79BB-dom-\u7684\u5F15\u7528" aria-hidden="true">#</a> 5.\u8131\u79BB DOM \u7684\u5F15\u7528</h4><p>\u5F15\u7528\u4E86\u5DF2\u7ECF\u5378\u8F7D\u7684 DOM \u5143\u7D20\uFF0C\u8BE5 DOM \u5143\u7D20\u4F1A\u4E00\u76F4\u5728\u5185\u5B58\u5F53\u4E2D\u3002\u6BD4\u5982\u4F7F\u7528 document.getElementByID \u83B7\u53D6\u5230\u4E86 DOM \u5143\u7D20\uFF0C\u4F46\u5728\u968F\u540E\u7684\u64CD\u4F5C\u4E2D\uFF0C\u5378\u8F7D\u4E86\u8BE5 DOM\uFF0C\u90A3\u4E48 DOM \u4E0D\u4F1A\u88AB\u91CA\u653E\u3002</p>`,13);function p(t,c){return e}var l=a(s,[["render",p]]);export{l as default};
