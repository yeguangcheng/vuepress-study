<template><h3 id="_2、带你了解浏览器的回流和重绘" tabindex="-1"><a class="header-anchor" href="#_2、带你了解浏览器的回流和重绘" aria-hidden="true">#</a> 2、带你了解浏览器的回流和重绘</h3>
<h4 id="简单了解浏览器的渲染过程" tabindex="-1"><a class="header-anchor" href="#简单了解浏览器的渲染过程" aria-hidden="true">#</a> 简单了解浏览器的渲染过程</h4>
<p><img src="/img/browser-render.webp" alt="avatar"></p>
<ol>
<li>浏览器解析HTML，生成DOM Tree（Parse HTML）</li>
<li>浏览器解析CSS，生成CSSOM（CSS Object Model）Tree</li>
<li>浏览器将DOM Tree 和 CSSOM Tree 合成渲染树(Render Tree)</li>
<li>布局（Layout）：根据生成的渲染树，进行回流，以计算每个节点的几何信息（位置、大小、字体样式等）</li>
<li>绘制(Painting)：根据渲染树以及回流得到的几何信息，得到节点的绝对像素</li>
<li>展示（Display）：浏览器将会把各层信息发送给图形处理器GPU，GPU将各层合成，最后展示在页面上</li>
</ol>
<h4 id="生成渲染树过程" tabindex="-1"><a class="header-anchor" href="#生成渲染树过程" aria-hidden="true">#</a> 生成渲染树过程</h4>
<p><img src="/img/render-tree.webp" alt="avatar"></p>
<p>为了构建渲染树，浏览器主要完成了以下工作：</p>
<ol>
<li>从DOM树的根节点开始遍历每个可见节点</li>
<li>对于每个可见的节点，找到CSSOM树中对应的规则，并应用它们</li>
<li>根据每个可见节点以及其对应的样式，组合生成渲染树</li>
</ol>
<h4 id="回流" tabindex="-1"><a class="header-anchor" href="#回流" aria-hidden="true">#</a> 回流</h4>
<p>当渲染树(render tree)中的一部分或全部因为元素的尺寸、布局、隐藏等改变时，浏览器重新渲染部分DOM或者全部DOM的过程</p>
<h4 id="重绘" tabindex="-1"><a class="header-anchor" href="#重绘" aria-hidden="true">#</a> 重绘</h4>
<p>当页面元素样式改变不影响元素在文档流中的位置时，如background-color、border-color、visibility等，浏览器只会将新的样式赋予元素并进行重新绘制操作</p>
<p>两者区别：<strong>回流必将引起重绘，而重绘不一定会引起回流</strong></p>
<h4 id="如何减少回流和重绘" tabindex="-1"><a class="header-anchor" href="#如何减少回流和重绘" aria-hidden="true">#</a> 如何减少回流和重绘</h4>
<p><strong>CSS部分</strong></p>
<ul>
<li>避免过多的样式嵌套</li>
<li>避免使用CSS表达式</li>
<li>动画元素使用absolute、fixed定位，脱离文档流</li>
<li>避免使用table布局</li>
<li>尽量不使用float布局</li>
<li>图片最好设置width和height</li>
<li>尽量简化浏览器不必要的任务，减少页面重新布局</li>
<li>使用viewport设置屏幕缩放级别</li>
<li>避免频繁设置样式，最好把新style属性编写完成后，进行一次性更改</li>
<li>避免使用引起回流、重绘的属性</li>
<li>使用CSS3动画，少用JS动画</li>
</ul>
<p><strong>JS部分</strong></p>
<ul>
<li>避免频繁操作DOM，可以讲多个操作合并进行一次处理</li>
<li>绘制过程开销大的属性减少使用</li>
<li>减少绘制所带来的影响区域，不影响到其他地方</li>
<li>避免频繁读取offsetTop、scrollTop、clientTop等元素属性</li>
<li>先隐藏元素，进行修改后在显示改元素，因为display:none上的DOM操作不会引起回流和重绘</li>
</ul>
<p><strong>避免频繁使用属性列表</strong></p>
<ul>
<li>offsetTop、offsetLeft、offsetWidth、offsetHeight</li>
<li>scrollTop、scrollLeft、scrollWidth、scrollHeight</li>
<li>clientTop、clientLeft、clientWidth、clientHeight</li>
<li>getComputedStyle()</li>
<li>getBoundingClientRect</li>
</ul>
<p>以上属性和方法都需要返回最新的布局信息，因此浏览器不得不清空队列，触发回流重绘来返回正确的值。因此，我们在修改样式的时候，<strong>最好避免使用上面列出的属性，他们都会刷新渲染队列</strong>。如果要使用它们，最好将值缓存起来</p>
</template>
