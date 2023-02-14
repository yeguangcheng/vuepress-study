import{r as i,o,c as r,a as e,b as t,F as n,d as c,e as l}from"./app.b87228d2.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";var d="/vuepress-study/img/http-304-1.png",s="/vuepress-study/img/http-304-2.png";const p={},u=c('<h3 id="_2\u3001\u4EC0\u4E48\u60C5\u51B5\u4E0B\u4F1A304-\u534F\u5546\u7F13\u5B58\u7684\u5934\u90E8\u5B57\u6BB5" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u4EC0\u4E48\u60C5\u51B5\u4E0B\u4F1A304-\u534F\u5546\u7F13\u5B58\u7684\u5934\u90E8\u5B57\u6BB5" aria-hidden="true">#</a> 2\u3001\u4EC0\u4E48\u60C5\u51B5\u4E0B\u4F1A304\uFF1F\u534F\u5546\u7F13\u5B58\u7684\u5934\u90E8\u5B57\u6BB5\uFF1F</h3><h4 id="\u7F13\u5B58\u7684\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u7F13\u5B58\u7684\u6982\u5FF5" aria-hidden="true">#</a> \u7F13\u5B58\u7684\u6982\u5FF5</h4><p>http\u7F13\u5B58\u7684\u662F\u6307:\u5F53Web\u8BF7\u6C42\u62B5\u8FBE\u7F13\u5B58\u65F6\uFF0C \u5982\u679C\u672C\u5730\u6709\u201C\u5DF2\u7F13\u5B58\u7684\u201D\u526F\u672C\uFF0C\u5C31\u53EF\u4EE5\u4ECE\u672C\u5730\u5B58\u50A8\u8BBE\u5907\u800C\u4E0D\u662F\u4ECE\u539F\u59CB\u670D\u52A1\u5668\u4E2D\u63D0\u53D6\u8FD9\u4E2A\u6587\u6863\uFF0C\u6B64\u65F6http\u72B6\u6001\u7801\u4E3A304\u3002</p><h4 id="\u5982\u4F55\u5224\u65AD\u662F\u5426\u4F7F\u7528\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u5224\u65AD\u662F\u5426\u4F7F\u7528\u7F13\u5B58" aria-hidden="true">#</a> \u5982\u4F55\u5224\u65AD\u662F\u5426\u4F7F\u7528\u7F13\u5B58</h4><p>Web\u670D\u52A1\u5668\u901A\u8FC72\u79CD\u65B9\u5F0F\u6765\u5224\u65AD\u6D4F\u89C8\u5668\u7F13\u5B58\u662F\u5426\u662F\u6700\u65B0\u7684\u3002</p><p>\u7B2C\u4E00\u79CD\uFF0C \u6D4F\u89C8\u5668\u628A\u7F13\u5B58\u6587\u4EF6\u7684\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u901A\u8FC7 header \u4E2D\u7684<code>If-Modified-Since</code>\u6765\u544A\u8BC9Web\u670D\u52A1\u5668\u3002<br> \u7B2C\u4E8C\u79CD\uFF0C \u6D4F\u89C8\u5668\u628A\u7F13\u5B58\u6587\u4EF6\u7684ETag, \u901A\u8FC7header <code>If-None-Match</code>, \u6765\u544A\u8BC9Web\u670D\u52A1\u5668\u3002</p><h4 id="\u901A\u8FC7\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u5224\u65AD" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u5224\u65AD" aria-hidden="true">#</a> \u901A\u8FC7\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u5224\u65AD</h4><ol><li>\u6D4F\u89C8\u5668\u5BA2\u6237\u7AEF\u60F3\u8BF7\u6C42\u4E00\u4E2A\u6587\u6863\uFF0C \u9996\u5148\u68C0\u67E5\u672C\u5730\u7F13\u5B58\uFF0C\u53D1\u73B0\u5B58\u5728\u8FD9\u4E2A\u6587\u6863\u7684\u7F13\u5B58\uFF0C \u83B7\u53D6\u7F13\u5B58\u4E2D\u6587\u6863\u7684\u6700\u540E\u4FEE\u6539\u65F6\u95F4\uFF0C\u901A\u8FC7\uFF1A If-Modified-Since\uFF0C \u53D1\u9001Request\u7ED9Web\u670D\u52A1\u5668\u3002</li><li>Web\u670D\u52A1\u5668\u6536\u5230Request\uFF0C\u5C06\u670D\u52A1\u5668\u7684\u6587\u6863\u4FEE\u6539\u65F6\u95F4\uFF08Last-Modified\uFF09: \u8DDFrequest header \u4E2D\u7684\uFF0CIf-Modified-Since\u76F8\u6BD4\u8F83\uFF0C \u5982\u679C\u65F6\u95F4\u662F\u4E00\u6837\u7684\uFF0C \u8BF4\u660E\u7F13\u5B58\u8FD8\u662F\u6700\u65B0\u7684\uFF0C Web\u670D\u52A1\u5668\u5C06\u53D1\u9001304 Not Modified\u7ED9\u6D4F\u89C8\u5668\u5BA2\u6237\u7AEF\uFF0C \u544A\u8BC9\u5BA2\u6237\u7AEF\u76F4\u63A5\u4F7F\u7528\u7F13\u5B58\u91CC\u7684\u7248\u672C\u3002</li><li>\u5047\u5982\u8BE5\u6587\u6863\u5DF2\u7ECF\u88AB\u66F4\u65B0\u4E86\u3002Web\u670D\u52A1\u5668\u5C06\u53D1\u9001\u8BE5\u6587\u6863\u7684\u6700\u65B0\u7248\u672C\u7ED9\u6D4F\u89C8\u5668\u5BA2\u6237</li></ol><img src="'+d+'"><h4 id="\u901A\u8FC7etag" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7etag" aria-hidden="true">#</a> \u901A\u8FC7ETag</h4><ul><li>ETag\u662F\u5B9E\u4F53\u6807\u7B7E\uFF08Entity Tag\uFF09\u7684\u7F29\u5199\uFF0C \u6839\u636E\u5B9E\u4F53\u5185\u5BB9\u751F\u6210\u7684\u4E00\u6BB5hash\u5B57\u7B26\u4E32\uFF0C\u53EF\u4EE5\u6807\u8BC6\u8D44\u6E90\u7684\u72B6\u6001</li><li>ETag\u662FWeb\u670D\u52A1\u7AEF\u4EA7\u751F\u7684\uFF0C\u7136\u540E\u53D1\u7ED9\u6D4F\u89C8\u5668\u5BA2\u6237\u7AEF\u3002</li><li>\u4E3A\u4EC0\u4E48\u4F7F\u7528ETag\u5462\uFF1F \u4E3B\u8981\u662F\u4E3A\u4E86\u89E3\u51B3Last-Modified \u65E0\u6CD5\u89E3\u51B3\u7684\u4E00\u4E9B\u95EE\u9898\u3002\u5982\u67D0\u4E9B\u670D\u52A1\u5668\u4E0D\u80FD\u7CBE\u786E\u5F97\u5230\u6587\u4EF6\u7684\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u3001\u67D0\u4E9B\u6587\u4EF6\u7684\u4FEE\u6539\u975E\u5E38\u9891\u7E41\uFF08\u5C0F\u4E8E1\u79D2\uFF09\u3001 \u4E00\u4E9B\u6587\u4EF6\u7684\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u6539\u53D8\u4E86\uFF0C\u4F46\u662F\u5185\u5BB9\u5E76\u672A\u6539\u53D8\u3002</li></ul><img src="'+s+'"><h4 id="\u5982\u4F55\u7981\u6B62\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u7981\u6B62\u7F13\u5B58" aria-hidden="true">#</a> \u5982\u4F55\u7981\u6B62\u7F13\u5B58</h4><ul><li>\u8BBE\u7F6Erequest\u7684headers\u4E2DCache-Control: no-cache</li><li>Pragma: no-cache \u662FHTTP 1.0\u4E2D\u5B9A\u4E49\u7684\uFF0C \u6240\u4EE5\u4E3A\u4E86\u517C\u5BB9HTTP 1.0. \u6240\u4EE5\u4F1A\u540C\u65F6\u4F7F\u7528Pragma: no-cache\u548CCache-Control: no-cache</li></ul><h4 id="\u4E0E\u7F13\u5B58\u76F8\u5173\u7684-headers" tabindex="-1"><a class="header-anchor" href="#\u4E0E\u7F13\u5B58\u76F8\u5173\u7684-headers" aria-hidden="true">#</a> \u4E0E\u7F13\u5B58\u76F8\u5173\u7684 headers</h4><p><strong>Request</strong></p><ul><li>Cache-Control: max-age=0 \u4EE5\u79D2\u4E3A\u5355\u4F4D</li><li>If-Modified-Since: Mon, 19 Nov 2012 08:38:01 GMT \u7F13\u5B58\u6587\u4EF6\u7684\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u3002</li><li>If-None-Match: &quot;0693f67a67cc1:0&quot; \u7F13\u5B58\u6587\u4EF6\u7684Etag\u503C</li><li>Cache-Control: no-cache \u4E0D\u4F7F\u7528\u7F13\u5B58</li><li>Pragma: no-cache \u4E0D\u4F7F\u7528\u7F13\u5B58</li></ul><p><strong>Response</strong></p><ul><li>Cache-Control: public \u54CD\u5E94\u88AB\u7F13\u5B58\uFF0C\u5E76\u4E14\u5728\u591A\u7528\u6237\u95F4\u5171\u4EAB\uFF0C \uFF08\u516C\u6709\u7F13\u5B58\u548C\u79C1\u6709\u7F13\u5B58\u7684\u533A\u522B\uFF0C\u8BF7\u770B\u53E6\u4E00\u8282\uFF09</li><li>Cache-Control: private \u54CD\u5E94\u53EA\u80FD\u4F5C\u4E3A\u79C1\u6709\u7F13\u5B58\uFF0C\u4E0D\u80FD\u5728\u7528\u6237\u4E4B\u95F4\u5171\u4EAB</li><li>Cache-Control:no-cache \u63D0\u9192\u6D4F\u89C8\u5668\u8981\u4ECE\u670D\u52A1\u5668\u63D0\u53D6\u6587\u6863\u8FDB\u884C\u9A8C\u8BC1</li><li>Cache-Control:no-store \u7EDD\u5BF9\u7981\u6B62\u7F13\u5B58\uFF08\u7528\u4E8E\u673A\u5BC6\uFF0C\u654F\u611F\u6587\u4EF6\uFF09</li><li>Cache-Control: max-age=60 60\u79D2\u4E4B\u540E\u7F13\u5B58\u8FC7\u671F\uFF08\u76F8\u5BF9\u65F6\u95F4\uFF09</li><li>Date: Mon, 19 Nov 2012 08:39:00 GMT \u5F53\u524Dresponse\u53D1\u9001\u7684\u65F6\u95F4</li><li>Expires: Mon, 19 Nov 2012 08:40:01 GMT \u7F13\u5B58\u8FC7\u671F\u7684\u65F6\u95F4\uFF08\u7EDD\u5BF9\u65F6\u95F4\uFF09</li><li>Last-Modified: Mon, 19 Nov 2012 08:38:01 GMT \u670D\u52A1\u5668\u7AEF\u6587\u4EF6\u7684\u6700\u540E\u4FEE\u6539\u65F6\u95F4</li><li>ETag: &quot;20b1add7ec1cd1:0&quot; \u670D\u52A1\u5668\u7AEF\u6587\u4EF6\u7684Etag\u503C</li></ul><p><strong>\u5982\u679C\u540C\u65F6\u5B58\u5728cache-control\u548CExpires</strong><br> \u6D4F\u89C8\u5668\u603B\u662F\u4F18\u5148\u4F7F\u7528cache-control\uFF0C\u5982\u679C\u6CA1\u6709cache-control\u624D\u8003\u8651Expires</p>',20),f={href:"https://www.cnblogs.com/TankXiao/archive/2012/11/28/2793365.html",target:"_blank",rel:"noopener noreferrer"},g=l("\u53C2\u8003\u6587\u7AE0\uFF1AHTTP\u534F\u8BAE (\u56DB) \u7F13\u5B58");function _(b,m){const a=i("ExternalLinkIcon");return o(),r(n,null,[u,e("p",null,[e("a",f,[g,t(a)])])],64)}var x=h(p,[["render",_]]);export{x as default};
