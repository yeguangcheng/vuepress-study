<template><h3 id="_7-介绍bfc及其应用" tabindex="-1"><a class="header-anchor" href="#_7-介绍bfc及其应用" aria-hidden="true">#</a> 7.介绍BFC及其应用？</h3>
<h3 id="bfc介绍" tabindex="-1"><a class="header-anchor" href="#bfc介绍" aria-hidden="true">#</a> BFC介绍</h3>
<p>块格式化上下文（Block Formatting Context，BFC），它是页面中的一块渲染区域,并且有一套渲染规则,它决定了其子元素如何定位,以及和其他元素的关系和相互作用。<br>
具有 BFC 特性的元素可以看作是<strong>隔离了的独立容器</strong>，容器里面的元素<strong>不会在布局上影响到外面的元素</strong>，并且 BFC 具有普通容器所没有的一些特性</p>
<h4 id="触发bfc" tabindex="-1"><a class="header-anchor" href="#触发bfc" aria-hidden="true">#</a> 触发BFC</h4>
<ul>
<li>根元素（<code>&lt;html&gt;</code>）</li>
<li>浮动元素（元素的 float 不是 none）</li>
<li>绝对定位元素（元素的 position 为 absolute 或 fixed）</li>
<li>display 为 inline-block、table-cells、flex、grid...</li>
<li>overflow 值不为 visible 的块元素（hidden、auto、scroll）</li>
<li>display 值为 flow-root 的元素</li>
</ul>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context" target="_blank" rel="noopener noreferrer">详细可参考：web开发指南-块格式化上下文<ExternalLinkIcon/></a></p>
<h4 id="bfc应用" tabindex="-1"><a class="header-anchor" href="#bfc应用" aria-hidden="true">#</a> BFC应用</h4>
</template>
