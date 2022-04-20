<template><h3 id="http状态码有哪些" tabindex="-1"><a class="header-anchor" href="#http状态码有哪些" aria-hidden="true">#</a> http状态码有哪些？</h3>
<h4 id="状态码分类" tabindex="-1"><a class="header-anchor" href="#状态码分类" aria-hidden="true">#</a> 状态码分类</h4>
<table class="table">
    <tr>
        <th>类型</th>
        <th>已定义范围</th>
        <th>分类</th>
    </tr>
    <tr>
        <td>1XX</td>
        <td>100-101</td>
        <td>信息提示</td>
    </tr>
    <tr>
        <td>2XX</td>
        <td>200-206</td>
        <td>成功</td>
    </tr>
    <tr>
        <td>3XX</td>
        <td>300-305</td>
        <td>重定向</td>
    </tr>
    <tr>
        <td>4XX</td>
        <td>400-415</td>
        <td>客户端错误</td>
    </tr>
    <tr>
        <td>5XX</td>
        <td>500-505</td>
        <td>服务器错误</td>
    </tr>
</table>
<h4 id="常见状态码" tabindex="-1"><a class="header-anchor" href="#常见状态码" aria-hidden="true">#</a> 常见状态码</h4>
<ul>
<li><strong>200</strong> OK 服务器成功处理了请求（这个是我们见到最多的）</li>
<li><strong>204</strong> No Content(没有内容) response body</li>
<li><strong>301/302</strong> Moved Permanently（重定向）请求的URL已移走。Response中应该包含一个Location URL, 说明资源现在所处的位置。<strong>301和302 非常相似，一个是永久转移，一个是临时转移。</strong></li>
<li><strong>304</strong> Not Modified（未修改）客户的缓存资源是最新的，要客户端使用缓存</li>
<li><strong>400</strong> Bad Request（坏请求) 发送的Request中的数据有错误(比如：表单有错误，Cookie有错误)</li>
<li><strong>403</strong> Forbidden(禁止) 客户端发送的请求被Web服务器拒绝了</li>
<li><strong>404</strong> Not Found 未找到资源 服务器不支持Request中的方法</li>
<li><strong>405</strong> Method Not Allowed(不允许使用的方法)</li>
<li><strong>500</strong> Internal Server Error(内部服务器错误) 服务器遇到错误，使其无法对请求提供服务</li>
<li><strong>501</strong> Not Implemented 客户端发起的请求超出服务器的能力范围</li>
<li><strong>502</strong> Bad Gateway（网关故障）代理使用的服务器遇到了上游的无效响应</li>
<li><strong>505</strong> HTTP Version Not Supported(不支持的HTTP版本)</li>
</ul>
<p><a href="https://www.cnblogs.com/TankXiao/archive/2013/01/08/2818542.html" target="_blank" rel="noopener noreferrer">参考文章：HTTP协议 (六) 状态码详解<ExternalLinkIcon/></a></p>
</template>
