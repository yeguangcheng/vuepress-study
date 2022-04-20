<template><h3 id="_3、css-的伪类和伪元素有哪些-有什么区别" tabindex="-1"><a class="header-anchor" href="#_3、css-的伪类和伪元素有哪些-有什么区别" aria-hidden="true">#</a> 3、css 的伪类和伪元素有哪些？有什么区别？</h3>
<h4 id="伪类" tabindex="-1"><a class="header-anchor" href="#伪类" aria-hidden="true">#</a> 伪类</h4>
<p>伪类用于当已有元素处于的某个状态时，为其添加对应的样式，这个状态是根据用户行为而动态变化的。</p>
<p><strong>状态伪类</strong></p>
<ul>
<li>:link 应用于未被访问过的链接</li>
<li>:hover 应用于鼠标悬停到的元素</li>
<li>:active 应用于被激活的元素</li>
<li>:visited 应用于被访问过的链接，与:link互斥</li>
<li>:focus 应用于拥有键盘输入焦点的元素</li>
</ul>
<p><strong>结构性伪类</strong></p>
<ul>
<li>:first-child 选择某个元素的第一个子元素</li>
<li>:last-child 选择某个元素的最后一个子元素</li>
<li>:nth-child() 选择某个元素的一个或多个特定的子元素</li>
<li>:nth-last-child() 选择某个元素的一个或多个特定的子元素，从这个元素的最后一个子元素开始算</li>
<li>:nth-of-type() 选择指定的元素</li>
<li>:nth-last-of-type() 选择指定的元素，从元素的最后一个开始计算</li>
<li>:first-of-type 选择一个上级元素下的第一个同类子元素</li>
<li>:last-of-type 选择一个上级元素的最后一个同类子元素</li>
<li>:only-child 选择的元素是它的父元素的唯一一个子元素</li>
<li>:only-of-type 选择一个元素是它的上级元素的唯一一个相同类型的子元素</li>
<li>:empty 选择的元素里面没有任何内容</li>
<li>:checked匹配被选中的input元素，这个input元素包括radio和checkbox</li>
<li>:default匹配默认选中的元素，例如：提交按钮总是表单的默认按钮</li>
<li>:disabled匹配禁用的表单元素</li>
<li>:enabled匹配没有设置disabled属性的表单元素</li>
<li>:valid匹配条件验证正确的表单元素</li>
</ul>
<h4 id="伪元素" tabindex="-1"><a class="header-anchor" href="#伪元素" aria-hidden="true">#</a> 伪元素</h4>
<p>伪元素用于创建一些不在文档树中的元素，并为其添加样式。</p>
<ul>
<li>::first-letter 选择元素文本的第一个字（母）。</li>
<li>::first-line 选择元素文本的第一行。</li>
<li>::before 在元素内容的最前面添加新内容。</li>
<li>::after 在元素内容的最后面添加新内容。</li>
<li>::selection匹配用户被用户选中或者处于高亮状态的部分</li>
<li>::placeholder匹配占位符的文本，只有元素设置了placeholder属性时，该伪元素才能生效</li>
</ul>
<h4 id="二者区别" tabindex="-1"><a class="header-anchor" href="#二者区别" aria-hidden="true">#</a> 二者区别</h4>
<ul>
<li>伪类像类选择器一样给已存在某个元素添加额外的样式；伪元素则是给自己虚拟的元素添加样式</li>
<li>语法区别，伪元素是::双冒号，伪类是:单冒号</li>
<li>根本区别：有没有创建一个文档树之外的元素</li>
</ul>
</template>
