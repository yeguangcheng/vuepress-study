import{d as n}from"./app.da1461fd.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h2 id="_2\u3001\u5BFC\u5165\u6837\u5F0F\u65F6-\u4F7F\u7528link\u548C-import\u6709\u4EC0\u4E48\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u5BFC\u5165\u6837\u5F0F\u65F6-\u4F7F\u7528link\u548C-import\u6709\u4EC0\u4E48\u533A\u522B" aria-hidden="true">#</a> 2\u3001\u5BFC\u5165\u6837\u5F0F\u65F6\uFF0C\u4F7F\u7528link\u548C@import\u6709\u4EC0\u4E48\u533A\u522B\uFF1F</h2><p><strong>\u4E24\u79CD\u65B9\u5F0F\u7684\u5E38\u89C1\u5199\u6CD5</strong></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">rev</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mycss.css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span> 
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">   
            <span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;./myCss.css&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>   
        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span> 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h5 id="\u4E24\u8005\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u4E24\u8005\u533A\u522B" aria-hidden="true">#</a> \u4E24\u8005\u533A\u522B</h5><p><strong>1. \u4ECE\u5C5E\u5173\u7CFB</strong><br><code>link</code>\u662Fhtml\u7684\u6807\u7B7E\uFF0C\u4E0D\u4EC5\u53EF\u4EE5\u52A0\u8F7D CSS \u6587\u4EF6\uFF0C\u8FD8\u53EF\u4EE5\u5B9A\u4E49 RSS\u3001rel \u8FDE\u63A5\u5C5E\u6027\u7B49\uFF1B\u800C<code>@import</code>\u662Fcss\u7684\u8BED\u6CD5\uFF0C\u53EA\u6709\u5BFC\u5165\u6837\u5F0F\u8868\u7684\u4F5C\u7528\u3002</p><p><strong>2. \u52A0\u8F7D\u987A\u5E8F</strong><br> \u9875\u9762\u88AB\u52A0\u8F7D\u65F6\uFF0Clink\u4F1A\u548Chtml\u540C\u65F6\u88AB\u52A0\u8F7D\u800C\uFF1B<code>@import</code>\u5F15\u5165\u7684 CSS \u5C06\u5728\u9875\u9762\u52A0\u8F7D\u5B8C\u6BD5\u540E\u88AB\u52A0\u8F7D\u3002</p><p><strong>3. \u517C\u5BB9\u6027</strong><br><code>@import</code>\u662F CSS2.1 \u624D\u6709\u7684\u8BED\u6CD5\uFF0C\u6240\u4EE5\u53EA\u80FD\u5728 IE5\u4EE5\u4E0A \u624D\u80FD\u8BC6\u522B\uFF1B\u800Clink\u662F HTML \u6807\u7B7E\uFF0C\u6240\u4EE5\u4E0D\u5B58\u5728\u517C\u5BB9\u6027\u95EE\u9898\u3002</p><p><strong>4. DOM</strong><br> \u53EF\u4EE5\u901A\u8FC7 JS \u64CD\u4F5C DOM \uFF0C\u63D2\u5165<code>link</code>\u6807\u7B7E\u6765\u6539\u53D8\u6837\u5F0F\uFF1B\u7531\u4E8E DOM \u65B9\u6CD5\u662F\u57FA\u4E8E\u6587\u6863\u7684\uFF0C\u65E0\u6CD5\u4F7F\u7528<code>@import</code>\u7684\u65B9\u5F0F\u63D2\u5165\u6837\u5F0F\u3002</p><p><strong>5. \u6743\u91CD</strong><br><code>link</code>\u65B9\u5F0F\u7684\u6837\u5F0F\u6743\u91CD\u9AD8\u4E8E<code>@import</code>\u7684\u6743\u91CD</p>`,9);function p(e,o){return t}var u=s(a,[["render",p]]);export{u as default};