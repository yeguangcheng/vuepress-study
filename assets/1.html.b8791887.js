import{d as n}from"./app.f4b49b93.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h3 id="\u8BA1\u7B97\u9875\u9762\u4E2D\u7684\u8282\u70B9\u6570\u91CF\u3001\u6700\u5927\u5D4C\u5957\u6DF1\u5EA6\u3001\u6700\u5927\u5B50\u8282\u70B9\u6570" tabindex="-1"><a class="header-anchor" href="#\u8BA1\u7B97\u9875\u9762\u4E2D\u7684\u8282\u70B9\u6570\u91CF\u3001\u6700\u5927\u5D4C\u5957\u6DF1\u5EA6\u3001\u6700\u5927\u5B50\u8282\u70B9\u6570" aria-hidden="true">#</a> \u8BA1\u7B97\u9875\u9762\u4E2D\u7684\u8282\u70B9\u6570\u91CF\u3001\u6700\u5927\u5D4C\u5957\u6DF1\u5EA6\u3001\u6700\u5927\u5B50\u8282\u70B9\u6570</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>
/**
 * DOM \u7684\u4F53\u79EF\u8FC7\u5927\u4F1A\u5F71\u54CD\u9875\u9762\u6027\u80FD\uFF0C\u5047\u5982\u4F60\u60F3\u5728\u7528\u6237\u5173\u95ED\u9875\u9762\u65F6\u7EDF\u8BA1\uFF08\u8BA1\u7B97\u5E76\u53CD\u9988\u7ED9\u670D\u52A1\u5668\uFF09
\u5F53\u524D\u9875\u9762\u4E2D\u5143\u7D20\u8282\u70B9\u7684\u6570\u91CF\u603B\u548C\u3001\u5143\u7D20\u8282\u70B9\u7684\u6700\u5927\u5D4C\u5957\u6DF1\u5EA6\u4EE5\u53CA\u6700\u5927\u5B50\u5143\u7D20\u4E2A\u6570\uFF0C\u8BF7\u7528 JS \u914D\u5408
\u539F\u751F DOM API \u5B9E\u73B0\u8BE5\u9700\u6C42\uFF08\u4E0D\u7528\u8003\u8651\u9648\u65E7\u6D4F\u89C8\u5668\u4EE5\u53CA\u5728\u73B0\u4EE3\u6D4F\u89C8\u5668\u4E2D\u7684\u517C\u5BB9\u6027\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4EFB\u610F
\u6D4F\u89C8\u5668\u7684\u6700\u65B0\u7279\u6027\uFF1B\u4E0D\u7528\u8003\u8651 shadow DOM\uFF09\u3002\u6BD4\u5982\u5728\u5982\u4E0B\u9875\u9762\u4E2D\u8FD0\u884C\u540E\uFF1A
 */
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>f<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>o<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>o<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
// \u4F1A\u8F93\u51FA\uFF1A

{
    totalElementsCount: 7,
    maxDOMTreeDepth: 4,
    maxChildrenCount: 3
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div>`,2);function t(e,l){return p}var u=s(a,[["render",t]]);export{u as default};
