import{r as e,o as l,c as o,a as n,b as a,F as c,d as t,e as p}from"./app.b87228d2.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=t('<h3 id="_7-\u4ECB\u7ECD-bfc-\u53CA\u5176\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#_7-\u4ECB\u7ECD-bfc-\u53CA\u5176\u5E94\u7528" aria-hidden="true">#</a> 7.\u4ECB\u7ECD BFC \u53CA\u5176\u5E94\u7528\uFF1F</h3><h3 id="bfc-\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#bfc-\u4ECB\u7ECD" aria-hidden="true">#</a> BFC \u4ECB\u7ECD</h3><p>\u5757\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587\uFF08Block Formatting Context\uFF0CBFC\uFF09\uFF0C\u5B83\u662F\u9875\u9762\u4E2D\u7684\u4E00\u5757\u6E32\u67D3\u533A\u57DF,\u5E76\u4E14\u6709\u4E00\u5957\u6E32\u67D3\u89C4\u5219,\u5B83\u51B3\u5B9A\u4E86\u5176\u5B50\u5143\u7D20\u5982\u4F55\u5B9A\u4F4D,\u4EE5\u53CA\u548C\u5176\u4ED6\u5143\u7D20\u7684\u5173\u7CFB\u548C\u76F8\u4E92\u4F5C\u7528\u3002<br> \u5177\u6709 BFC \u7279\u6027\u7684\u5143\u7D20\u53EF\u4EE5\u770B\u4F5C\u662F<strong>\u9694\u79BB\u4E86\u7684\u72EC\u7ACB\u5BB9\u5668</strong>\uFF0C\u5BB9\u5668\u91CC\u9762\u7684\u5143\u7D20<strong>\u4E0D\u4F1A\u5728\u5E03\u5C40\u4E0A\u5F71\u54CD\u5230\u5916\u9762\u7684\u5143\u7D20</strong>\uFF0C\u5E76\u4E14 BFC \u5177\u6709\u666E\u901A\u5BB9\u5668\u6240\u6CA1\u6709\u7684\u4E00\u4E9B\u7279\u6027.</p><h4 id="\u89E6\u53D1-bfc" tabindex="-1"><a class="header-anchor" href="#\u89E6\u53D1-bfc" aria-hidden="true">#</a> \u89E6\u53D1 BFC</h4><ul><li>\u6839\u5143\u7D20\uFF08<code>&lt;html&gt;</code>\uFF09</li><li>\u6D6E\u52A8\u5143\u7D20\uFF08\u5143\u7D20\u7684 float \u4E0D\u662F none\uFF09</li><li>\u7EDD\u5BF9\u5B9A\u4F4D\u5143\u7D20\uFF08\u5143\u7D20\u7684 position \u4E3A absolute \u6216 fixed\uFF09</li><li>display \u4E3A inline-block\u3001table-cells\u3001flex\u3001grid...</li><li>overflow \u503C\u4E0D\u4E3A visible \u7684\u5757\u5143\u7D20\uFF08hidden\u3001auto\u3001scroll\uFF09</li><li>display \u503C\u4E3A flow-root \u7684\u5143\u7D20</li></ul>',5),k={href:"https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context",target:"_blank",rel:"noopener noreferrer"},b=p("\u8BE6\u7EC6\u53EF\u53C2\u8003\uFF1Aweb \u5F00\u53D1\u6307\u5357-\u5757\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587"),d=t(`<h4 id="bfc-\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#bfc-\u5E94\u7528" aria-hidden="true">#</a> BFC \u5E94\u7528</h4><ul><li><p>\u963B\u6B62\u7236\u5143\u7D20\u9AD8\u5EA6\u584C\u9677 \u7236\u5143\u7D20\u5305\u88F9\u5B50\u5143\u7D20\uFF08\u7236\u5143\u7D20\u9AD8\u5EA6\u81EA\u9002\u5E94\uFF09\uFF0C\u5F53\u5B50\u5143\u7D20\u8BBE\u7F6E\u6D6E\u52A8\u540E\uFF0C\u7236\u5143\u7D20\u4F1A\u5931\u53BB\u9AD8\u5EA6\u3002\u6B64\u65F6\u9700\u8981\u7ED9\u7236\u5143\u7D20\u89E6\u53D1 BFC\uFF0C\u5B9E\u73B0\u7236\u5143\u7D20\u5BF9\u5B50\u5143\u7D20\u7684\u5305\u88F9\u3002</p></li><li><p>\u963B\u6B62\u7236\u5B50\u5143\u7D20 margin-top \u5408\u5E76 \u5B50\u5143\u7D20\u8BBE\u7F6E margin-top \u540E\uFF0C\u4F1A\u7A7F\u900F\u7236\u7EA7\uFF0C\u4F5C\u7528\u4E8E\u7236\u5143\u7D20\u7684\u5916\u8FB9\u8DDD\u3002\u82E5\u300C\u7236\u5B50\u5143\u7D20\u90FD\u8BBE\u7F6E margin\uFF0C\u53D6\u6700\u5927\u300D</p></li><li><p>\u963B\u6B62\u76F8\u90BB\u5143\u7D20 margin \u5408\u5E76 \u76F8\u90BB\u5143\u7D20\uFF08\u4E0A\u4E0B\uFF09margin \u4F1A\u5408\u5E76\uFF0C\u5E76\u4EE5\u300Cmargin \u6700\u5927\u503C\u663E\u793A\u300D</p></li><li><p>\u963B\u6B62\u5143\u7D20\u88AB\u524D\u9762\u6D6E\u52A8\u7684\u5143\u7D20\u8986\u76D6</p></li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- \u4E2D\u95F4\u533A\u57DF\u4F4D\u7F6E --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.left,
    .right</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> sandybrown<span class="token punctuation">;</span>
        <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.right</span> <span class="token punctuation">{</span>
        <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.center</span> <span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> seagreen<span class="token punctuation">;</span>
        <span class="token comment">/* \u89E6\u53D1 BFC\uFF0C  */</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flow-root<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div>`,3),g={href:"https://zhuanlan.zhihu.com/p/371750111",target:"_blank",rel:"noopener noreferrer"},m=p("\u53C2\u8003\u6587\u7AE0\uFF1A\u5E26\u4F60\u5F7B\u5E95\u641E\u61C2 BFC \u53CA\u5176\u5E94\u7528");function h(f,_){const s=e("ExternalLinkIcon");return l(),o(c,null,[i,n("p",null,[n("a",k,[b,a(s)])]),d,n("p",null,[n("a",g,[m,a(s)])])],64)}var y=r(u,[["render",h]]);export{y as default};
