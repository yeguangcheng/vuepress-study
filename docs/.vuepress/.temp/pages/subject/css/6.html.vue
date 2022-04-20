<template><h3 id="_6-什么是-webp-如何判断浏览器是否支持-webp" tabindex="-1"><a class="header-anchor" href="#_6-什么是-webp-如何判断浏览器是否支持-webp" aria-hidden="true">#</a> 6.什么是 webp？如何判断浏览器是否支持 webp ？</h3>
<h4 id="webp" tabindex="-1"><a class="header-anchor" href="#webp" aria-hidden="true">#</a> webp</h4>
<p>WebP 是谷歌开发的一种新图片格式，它是支持有损和无损两种压缩方式的 使用直接色的点阵图。使用 webp 格式的最大优点是是，在相同质量的文件下， 它拥有更小的文件体积。因此它非常适合于网络图片的传输，因为图片体积的减 少，意味着请求时间的减少，这样会提高用户的体验。这是谷歌开发的一种新的 图片格式。</p>
<h4 id="判断浏览器是否支持-webp" tabindex="-1"><a class="header-anchor" href="#判断浏览器是否支持-webp" aria-hidden="true">#</a> 判断浏览器是否支持 webp</h4>
<p>通过创建 Image 对象，将其 src 属性设置为 webp 格式的图片，然后在 onload 事件中获取图片的宽高，如果能够获取，则说明浏览器支持 webp 格式 图片。如果不能获取或者触发了 onerror 函数，那么就说明浏览器不支持 webp 格式的图片。</p>
</template>
