<template><h3 id="_7-介绍-bfc-及其应用" tabindex="-1"><a class="header-anchor" href="#_7-介绍-bfc-及其应用" aria-hidden="true">#</a> 7.介绍 BFC 及其应用？</h3>
<h3 id="bfc-介绍" tabindex="-1"><a class="header-anchor" href="#bfc-介绍" aria-hidden="true">#</a> BFC 介绍</h3>
<p>块格式化上下文（Block Formatting Context，BFC），它是页面中的一块渲染区域,并且有一套渲染规则,它决定了其子元素如何定位,以及和其他元素的关系和相互作用。<br>
具有 BFC 特性的元素可以看作是<strong>隔离了的独立容器</strong>，容器里面的元素<strong>不会在布局上影响到外面的元素</strong>，并且 BFC 具有普通容器所没有的一些特性.</p>
<h4 id="触发-bfc" tabindex="-1"><a class="header-anchor" href="#触发-bfc" aria-hidden="true">#</a> 触发 BFC</h4>
<ul>
<li>根元素（<code>&lt;html&gt;</code>）</li>
<li>浮动元素（元素的 float 不是 none）</li>
<li>绝对定位元素（元素的 position 为 absolute 或 fixed）</li>
<li>display 为 inline-block、table-cells、flex、grid...</li>
<li>overflow 值不为 visible 的块元素（hidden、auto、scroll）</li>
<li>display 值为 flow-root 的元素</li>
</ul>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context" target="_blank" rel="noopener noreferrer">详细可参考：web 开发指南-块格式化上下文<ExternalLinkIcon/></a></p>
<h4 id="bfc-应用" tabindex="-1"><a class="header-anchor" href="#bfc-应用" aria-hidden="true">#</a> BFC 应用</h4>
<ul>
<li>
<p>阻止父元素高度塌陷
父元素包裹子元素（父元素高度自适应），当子元素设置浮动后，父元素会失去高度。此时需要给父元素触发 BFC，实现父元素对子元素的包裹。</p>
</li>
<li>
<p>阻止父子元素 margin-top 合并
子元素设置 margin-top 后，会穿透父级，作用于父元素的外边距。若「父子元素都设置 margin，取最大」</p>
</li>
<li>
<p>阻止相邻元素 margin 合并
相邻元素（上下）margin 会合并，并以「margin 最大值显示」</p>
</li>
<li>
<p>阻止元素被前面浮动的元素覆盖</p>
</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 中间区域位置 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
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
        <span class="token comment">/* 触发 BFC，  */</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flow-root<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p><a href="https://zhuanlan.zhihu.com/p/371750111" target="_blank" rel="noopener noreferrer">参考文章：带你彻底搞懂 BFC 及其应用<ExternalLinkIcon/></a></p>
</template>
