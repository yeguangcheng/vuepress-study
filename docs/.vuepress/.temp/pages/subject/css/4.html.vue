<template><h3 id="清除浮动有几种方式-各自的优缺点" tabindex="-1"><a class="header-anchor" href="#清除浮动有几种方式-各自的优缺点" aria-hidden="true">#</a> 清除浮动有几种方式？各自的优缺点？</h3>
<h4 id="_1-父级-div-定义-height" tabindex="-1"><a class="header-anchor" href="#_1-父级-div-定义-height" aria-hidden="true">#</a> 1.父级 div 定义 height</h4>
<p>父级 div 手动定义 height，就解决了父级 div 无法自动获取到高度的问题。不推荐使用，只建议高度固定的布局时使用</p>
<h4 id="_2-结尾处加空-div-标签-clear-both" tabindex="-1"><a class="header-anchor" href="#_2-结尾处加空-div-标签-clear-both" aria-hidden="true">#</a> 2.结尾处加空 div 标签 clear:both</h4>
<p>添加一个空 div，利用 css 提高的 clear:both 清除浮动，让父级 div 能自动获取到高度。兼容性好，但会多增加无意义的标签。</p>
<h4 id="_3-父级-div-定义-伪类-after-和-zoom" tabindex="-1"><a class="header-anchor" href="#_3-父级-div-定义-伪类-after-和-zoom" aria-hidden="true">#</a> 3.父级 div 定义 伪类:after 和 zoom</h4>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.clearfloat:after</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">;</span>
    <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.clearfloat</span> <span class="token punctuation">{</span>
    <span class="token property">zoom</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="_4-父级div定义-overflow-hidden" tabindex="-1"><a class="header-anchor" href="#_4-父级div定义-overflow-hidden" aria-hidden="true">#</a> 4.父级div定义 overflow:hidden</h4>
<p>使用overflow:hidden时，浏览器会重新计算浮动区域的高度。兼容性好，缺点溢出部分会隐藏。</p>
<h4 id="_5-父级div定义-overflow-auto" tabindex="-1"><a class="header-anchor" href="#_5-父级div定义-overflow-auto" aria-hidden="true">#</a> 5.父级div定义 overflow:auto</h4>
<p>使用overflow:hidden时，浏览器会重新计算浮动区域的高度。兼容性好，缺点溢出部分会出现滚动条。</p>
<h4 id="_6-父级div-也一起浮动" tabindex="-1"><a class="header-anchor" href="#_6-父级div-也一起浮动" aria-hidden="true">#</a> 6.父级div 也一起浮动</h4>
<p>父子元素一起浮动，缺点是会为了清除浮动而改变布局，适合在不影响布局时使用。</p>
</template>
