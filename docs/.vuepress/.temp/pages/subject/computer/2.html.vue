<template><h3 id="_2、什么情况下会304-协商缓存的头部字段" tabindex="-1"><a class="header-anchor" href="#_2、什么情况下会304-协商缓存的头部字段" aria-hidden="true">#</a> 2、什么情况下会304？协商缓存的头部字段？</h3>
<h4 id="缓存的概念" tabindex="-1"><a class="header-anchor" href="#缓存的概念" aria-hidden="true">#</a> 缓存的概念</h4>
<p>http缓存的是指:当Web请求抵达缓存时， 如果本地有“已缓存的”副本，就可以从本地存储设备而不是从原始服务器中提取这个文档，此时http状态码为304。</p>
<h4 id="如何判断是否使用缓存" tabindex="-1"><a class="header-anchor" href="#如何判断是否使用缓存" aria-hidden="true">#</a> 如何判断是否使用缓存</h4>
<p>Web服务器通过2种方式来判断浏览器缓存是否是最新的。</p>
<p>第一种， 浏览器把缓存文件的最后修改时间通过 header 中的<code>If-Modified-Since</code>来告诉Web服务器。<br>
第二种， 浏览器把缓存文件的ETag, 通过header <code>If-None-Match</code>, 来告诉Web服务器。</p>
<h4 id="通过最后修改时间判断" tabindex="-1"><a class="header-anchor" href="#通过最后修改时间判断" aria-hidden="true">#</a> 通过最后修改时间判断</h4>
<ol>
<li>浏览器客户端想请求一个文档，  首先检查本地缓存，发现存在这个文档的缓存，  获取缓存中文档的最后修改时间，通过： If-Modified-Since， 发送Request给Web服务器。</li>
<li>Web服务器收到Request，将服务器的文档修改时间（Last-Modified）: 跟request header 中的，If-Modified-Since相比较， 如果时间是一样的， 说明缓存还是最新的， Web服务器将发送304 Not Modified给浏览器客户端， 告诉客户端直接使用缓存里的版本。</li>
<li>假如该文档已经被更新了。Web服务器将发送该文档的最新版本给浏览器客户</li>
</ol>
<img src="/img/http-304-1.png">
<h4 id="通过etag" tabindex="-1"><a class="header-anchor" href="#通过etag" aria-hidden="true">#</a> 通过ETag</h4>
<ul>
<li>ETag是实体标签（Entity Tag）的缩写， 根据实体内容生成的一段hash字符串，可以标识资源的状态</li>
<li>ETag是Web服务端产生的，然后发给浏览器客户端。</li>
<li>为什么使用ETag呢？ 主要是为了解决Last-Modified 无法解决的一些问题。如某些服务器不能精确得到文件的最后修改时间、某些文件的修改非常频繁（小于1秒）、 一些文件的最后修改时间改变了，但是内容并未改变。</li>
</ul>
<img src="/img/http-304-2.png">
<h4 id="如何禁止缓存" tabindex="-1"><a class="header-anchor" href="#如何禁止缓存" aria-hidden="true">#</a> 如何禁止缓存</h4>
<ul>
<li>设置request的headers中Cache-Control: no-cache</li>
<li>Pragma: no-cache 是HTTP 1.0中定义的， 所以为了兼容HTTP 1.0. 所以会同时使用Pragma: no-cache和Cache-Control: no-cache</li>
</ul>
<h4 id="与缓存相关的-headers" tabindex="-1"><a class="header-anchor" href="#与缓存相关的-headers" aria-hidden="true">#</a> 与缓存相关的 headers</h4>
<p><strong>Request</strong></p>
<ul>
<li>Cache-Control: max-age=0	以秒为单位</li>
<li>If-Modified-Since: Mon, 19 Nov 2012 08:38:01 GMT	缓存文件的最后修改时间。</li>
<li>If-None-Match: &quot;0693f67a67cc1:0&quot;	缓存文件的Etag值</li>
<li>Cache-Control: no-cache	不使用缓存</li>
<li>Pragma: no-cache	不使用缓存</li>
</ul>
<p><strong>Response</strong></p>
<ul>
<li>Cache-Control: public	响应被缓存，并且在多用户间共享，  （公有缓存和私有缓存的区别，请看另一节）</li>
<li>Cache-Control: private	响应只能作为私有缓存，不能在用户之间共享</li>
<li>Cache-Control:no-cache	提醒浏览器要从服务器提取文档进行验证</li>
<li>Cache-Control:no-store	绝对禁止缓存（用于机密，敏感文件）</li>
<li>Cache-Control: max-age=60	60秒之后缓存过期（相对时间）</li>
<li>Date: Mon, 19 Nov 2012 08:39:00 GMT	当前response发送的时间</li>
<li>Expires: Mon, 19 Nov 2012 08:40:01 GMT	缓存过期的时间（绝对时间）</li>
<li>Last-Modified: Mon, 19 Nov 2012 08:38:01 GMT	服务器端文件的最后修改时间</li>
<li>ETag: &quot;20b1add7ec1cd1:0&quot;	服务器端文件的Etag值</li>
</ul>
<p><strong>如果同时存在cache-control和Expires</strong><br>
浏览器总是优先使用cache-control，如果没有cache-control才考虑Expires</p>
<p><a href="https://www.cnblogs.com/TankXiao/archive/2012/11/28/2793365.html" target="_blank" rel="noopener noreferrer">参考文章：HTTP协议 (四) 缓存<ExternalLinkIcon/></a></p>
</template>
