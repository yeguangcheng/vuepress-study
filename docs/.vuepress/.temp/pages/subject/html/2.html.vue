<template><h2 id="_2、导入样式时-使用link和-import有什么区别" tabindex="-1"><a class="header-anchor" href="#_2、导入样式时-使用link和-import有什么区别" aria-hidden="true">#</a> 2、导入样式时，使用link和@import有什么区别？</h2>
<p><strong>两种方式的常见写法</strong></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">rev</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mycss.css<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span> 
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token style"><span class="token language-css">   
            <span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"./myCss.css"</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>   
        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span> 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h5 id="两者区别" tabindex="-1"><a class="header-anchor" href="#两者区别" aria-hidden="true">#</a> 两者区别</h5>
<p><strong>1. 从属关系</strong><br>
<code>link</code>是html的标签，不仅可以加载 CSS 文件，还可以定义 RSS、rel 连接属性等；而<code>@import</code>是css的语法，只有导入样式表的作用。</p>
<p><strong>2. 加载顺序</strong><br>
页面被加载时，link会和html同时被加载而；<code>@import</code>引入的 CSS 将在页面加载完毕后被加载。</p>
<p><strong>3. 兼容性</strong><br>
<code>@import</code>是 CSS2.1 才有的语法，所以只能在 IE5以上 才能识别；而link是 HTML 标签，所以不存在兼容性问题。</p>
<p><strong>4. DOM</strong><br>
可以通过 JS 操作 DOM ，插入<code>link</code>标签来改变样式；由于 DOM 方法是基于文档的，无法使用<code>@import</code>的方式插入样式。</p>
<p><strong>5. 权重</strong><br>
<code>link</code>方式的样式权重高于<code>@import</code>的权重</p>
</template>
