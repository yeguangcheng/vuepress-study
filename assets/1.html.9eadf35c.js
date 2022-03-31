import{d as e}from"./app.1573f4e3.js";import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";var o="/vuepress-study/img/performance-timing.png";const a={},r=e('<h3 id="_1\u3001\u83B7\u53D6\u767D\u5C4F\u548C\u9996\u5C4F\u52A0\u8F7D\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u83B7\u53D6\u767D\u5C4F\u548C\u9996\u5C4F\u52A0\u8F7D\u65F6\u95F4" aria-hidden="true">#</a> 1\u3001\u83B7\u53D6\u767D\u5C4F\u548C\u9996\u5C4F\u52A0\u8F7D\u65F6\u95F4</h3><h5 id="\u767D\u5C4F\u65F6\u95F4-performance-timing-responsestart-performance-timing-navigationstart" tabindex="-1"><a class="header-anchor" href="#\u767D\u5C4F\u65F6\u95F4-performance-timing-responsestart-performance-timing-navigationstart" aria-hidden="true">#</a> \u767D\u5C4F\u65F6\u95F4 \uFF1A<code>Performance.timing.responseStart - Performance.timing.navigationStart</code></h5><h5 id="\u9996\u5C4F\u52A0\u8F7D\u65F6\u95F4-performance-timing-domcontentloadedeventstart-performance-timing-navigationstart" tabindex="-1"><a class="header-anchor" href="#\u9996\u5C4F\u52A0\u8F7D\u65F6\u95F4-performance-timing-domcontentloadedeventstart-performance-timing-navigationstart" aria-hidden="true">#</a> \u9996\u5C4F\u52A0\u8F7D\u65F6\u95F4 \uFF1A<code>performance.timing.domContentLoadedEventStart - performance.timing.navigationStart</code></h5><p>Performance\u662F\u4E00\u4E2A\u505A\u524D\u7AEF\u6027\u80FD\u76D1\u63A7\u79BB\u4E0D\u5F00\u7684API\uFF0C\u6700\u597D\u5728\u9875\u9762\u5B8C\u5168\u52A0\u8F7D\u5B8C\u6210\u4E4B\u540E\u518D\u4F7F\u7528\uFF0C\u56E0\u4E3A\u5F88\u591A\u503C\u5FC5\u987B\u5728\u9875\u9762\u5B8C\u5168\u52A0\u8F7D\u4E4B\u540E\u624D\u80FD\u5F97\u5230\u3002</p><h4 id="performance-timing-\u5C5E\u6027\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#performance-timing-\u5C5E\u6027\u5217\u8868" aria-hidden="true">#</a> Performance.timing \u5C5E\u6027\u5217\u8868</h4><p>\u4ECE\u8F93\u5165url\u5230\u7528\u6237\u53EF\u4EE5\u4F7F\u7528\u9875\u9762\u7684\u5168\u8FC7\u7A0B\u65F6\u95F4\u7EDF\u8BA1\uFF0C\u4F1A\u8FD4\u56DE\u4E00\u4E2APerformanceTiming\u5BF9\u8C61\uFF0C\u5355\u4F4D\u5747\u4E3A\u6BEB\u79D2</p><p><img src="'+o+'" alt="avatar"></p><p>\u6309\u89E6\u53D1\u987A\u5E8F\u6392\u5217\u6240\u6709\u5C5E\u6027\uFF1A<br><code>navigationStart</code>:\u5728\u540C\u4E00\u4E2A\u6D4F\u89C8\u5668\u4E0A\u4E0B\u6587\u4E2D\uFF0C\u524D\u4E00\u4E2A\u7F51\u9875\uFF08\u4E0E\u5F53\u524D\u9875\u9762\u4E0D\u4E00\u5B9A\u540C\u57DF\uFF09unload \u7684\u65F6\u95F4\u6233\uFF0C\u5982\u679C\u65E0\u524D\u4E00\u4E2A\u7F51\u9875 unload \uFF0C\u5219\u4E0E fetchStart \u503C\u76F8\u7B49<br><code>unloadEventStart</code>:\u524D\u4E00\u4E2A\u7F51\u9875\uFF08\u4E0E\u5F53\u524D\u9875\u9762\u540C\u57DF\uFF09unload \u7684\u65F6\u95F4\u6233\uFF0C\u5982\u679C\u65E0\u524D\u4E00\u4E2A\u7F51\u9875 unload \u6216\u8005\u524D\u4E00\u4E2A\u7F51\u9875\u4E0E\u5F53\u524D\u9875\u9762\u4E0D\u540C\u57DF\uFF0C\u5219\u503C\u4E3A 0<br><code>unloadEventEnd</code>:\u548C <code>unloadEventStart</code> \u76F8\u5BF9\u5E94\uFF0C\u8FD4\u56DE\u524D\u4E00\u4E2A\u7F51\u9875 unload \u4E8B\u4EF6\u7ED1\u5B9A\u7684\u56DE\u8C03\u51FD\u6570\u6267\u884C\u5B8C\u6BD5\u7684\u65F6\u95F4\u6233<br><code>redirectStart</code>:\u7B2C\u4E00\u4E2A HTTP \u91CD\u5B9A\u5411\u53D1\u751F\u65F6\u7684\u65F6\u95F4\u3002\u6709\u8DF3\u8F6C\u4E14\u662F\u540C\u57DF\u540D\u5185\u7684\u91CD\u5B9A\u5411\u624D\u7B97\uFF0C\u5426\u5219\u503C\u4E3A 0<br><code>redirectEnd</code>:\u6700\u540E\u4E00\u4E2A HTTP \u91CD\u5B9A\u5411\u5B8C\u6210\u65F6\u7684\u65F6\u95F4\u3002\u6709\u8DF3\u8F6C\u4E14\u662F\u540C\u57DF\u540D\u5185\u7684\u91CD\u5B9A\u5411\u624D\u7B97\uFF0C\u5426\u5219\u503C\u4E3A 0<br><code>fetchStart</code>:\u6D4F\u89C8\u5668\u51C6\u5907\u597D\u4F7F\u7528 HTTP \u8BF7\u6C42\u6293\u53D6\u6587\u6863\u7684\u65F6\u95F4\uFF0C\u8FD9\u53D1\u751F\u5728\u68C0\u67E5\u672C\u5730\u7F13\u5B58\u4E4B\u524D<br><code>domainLookupStart</code>:DNS \u57DF\u540D\u67E5\u8BE2\u5F00\u59CB\u7684\u65F6\u95F4\uFF0C\u5982\u679C\u4F7F\u7528\u4E86\u672C\u5730\u7F13\u5B58\uFF08\u5373\u65E0 DNS \u67E5\u8BE2\uFF09\u6216\u6301\u4E45\u8FDE\u63A5\uFF0C\u5219\u4E0E fetchStart \u503C\u76F8\u7B49<br><code>domainLookupEnd</code>:DNS \u57DF\u540D\u67E5\u8BE2\u5B8C\u6210\u7684\u65F6\u95F4\uFF0C\u5982\u679C\u4F7F\u7528\u4E86\u672C\u5730\u7F13\u5B58\uFF08\u5373\u65E0 DNS \u67E5\u8BE2\uFF09\u6216\u6301\u4E45\u8FDE\u63A5\uFF0C\u5219\u4E0E fetchStart \u503C\u76F8\u7B49<br><code>connectStart</code>:HTTP\uFF08TCP\uFF09 \u5F00\u59CB\u5EFA\u7ACB\u8FDE\u63A5\u7684\u65F6\u95F4\uFF0C\u5982\u679C\u662F\u6301\u4E45\u8FDE\u63A5\uFF0C\u5219\u4E0E fetchStart \u503C\u76F8\u7B49,\u5982\u679C\u5728\u4F20\u8F93\u5C42\u53D1\u751F\u4E86\u9519\u8BEF\u4E14\u91CD\u65B0\u5EFA\u7ACB\u8FDE\u63A5\uFF0C\u5219\u8FD9\u91CC\u663E\u793A\u7684\u662F\u65B0\u5EFA\u7ACB\u7684\u8FDE\u63A5\u5F00\u59CB\u7684\u65F6\u95F4<br><code>connectEnd</code>:HTTP\uFF08TCP\uFF09 \u5B8C\u6210\u5EFA\u7ACB\u8FDE\u63A5\u7684\u65F6\u95F4\uFF08\u5B8C\u6210\u63E1\u624B\uFF09\uFF0C\u5982\u679C\u662F\u6301\u4E45\u8FDE\u63A5\uFF0C\u5219\u4E0E fetchStart \u503C\u76F8\u7B49,\u5982\u679C\u5728\u4F20\u8F93\u5C42\u53D1\u751F\u4E86\u9519\u8BEF\u4E14\u91CD\u65B0\u5EFA\u7ACB\u8FDE\u63A5\uFF0C\u5219\u8FD9\u91CC\u663E\u793A\u7684\u662F\u65B0\u5EFA\u7ACB\u7684\u8FDE\u63A5\u5B8C\u6210\u7684\u65F6\u95F4</p><p><strong>\u6CE8\u610F:\u8FD9\u91CC\u63E1\u624B\u7ED3\u675F\uFF0C\u5305\u62EC\u5B89\u5168\u8FDE\u63A5\u5EFA\u7ACB\u5B8C\u6210\u3001SOCKS \u6388\u6743\u901A\u8FC7</strong></p><p><code>secureConnectionStart</code>:HTTPS \u8FDE\u63A5\u5F00\u59CB\u7684\u65F6\u95F4\uFF0C\u5982\u679C\u4E0D\u662F\u5B89\u5168\u8FDE\u63A5\uFF0C\u5219\u503C\u4E3A 0<br><code>requestStart</code>:HTTP \u8BF7\u6C42\u8BFB\u53D6\u771F\u5B9E\u6587\u6863\u5F00\u59CB\u7684\u65F6\u95F4\uFF08\u5B8C\u6210\u5EFA\u7ACB\u8FDE\u63A5\uFF09\uFF0C\u5305\u62EC\u4ECE\u672C\u5730\u8BFB\u53D6\u7F13\u5B58,\u8FDE\u63A5\u9519\u8BEF\u91CD\u8FDE\u65F6\uFF0C\u8FD9\u91CC\u663E\u793A\u7684\u4E5F\u662F\u65B0\u5EFA\u7ACB\u8FDE\u63A5\u7684\u65F6\u95F4<br><code>responseStart</code>:HTTP \u5F00\u59CB\u63A5\u6536\u54CD\u5E94\u7684\u65F6\u95F4\uFF08\u83B7\u53D6\u5230\u7B2C\u4E00\u4E2A\u5B57\u8282\uFF09\uFF0C\u5305\u62EC\u4ECE\u672C\u5730\u8BFB\u53D6\u7F13\u5B58<br><code>responseEnd</code>:HTTP \u54CD\u5E94\u5168\u90E8\u63A5\u6536\u5B8C\u6210\u7684\u65F6\u95F4\uFF08\u83B7\u53D6\u5230\u6700\u540E\u4E00\u4E2A\u5B57\u8282\uFF09\uFF0C\u5305\u62EC\u4ECE\u672C\u5730\u8BFB\u53D6\u7F13\u5B58<br><code>domLoading</code>:\u5F00\u59CB\u89E3\u6790\u6E32\u67D3 DOM \u6811\u7684\u65F6\u95F4\uFF0C\u6B64\u65F6 Document.readyState \u53D8\u4E3A loading\uFF0C\u5E76\u5C06\u629B\u51FA readystatechange \u76F8\u5173\u4E8B\u4EF6<br><code>domInteractive</code>:\u5B8C\u6210\u89E3\u6790 DOM \u6811\u7684\u65F6\u95F4\uFF0CDocument.readyState \u53D8\u4E3A interactive\uFF0C\u5E76\u5C06\u629B\u51FA readystatechange \u76F8\u5173\u4E8B\u4EF6</p><p><strong>\u6CE8\u610F:\u53EA\u662F DOM \u6811\u89E3\u6790\u5B8C\u6210\uFF0C\u8FD9\u65F6\u5019\u5E76\u6CA1\u6709\u5F00\u59CB\u52A0\u8F7D\u7F51\u9875\u5185\u7684\u8D44\u6E90</strong></p><p><code>domContentLoadedEventStart</code>:DOM \u89E3\u6790\u5B8C\u6210\u540E\uFF0C\u7F51\u9875\u5185\u8D44\u6E90\u52A0\u8F7D\u5F00\u59CB\u7684\u65F6\u95F4,\u6587\u6863\u53D1\u751F DOMContentLoaded\u4E8B\u4EF6\u7684\u65F6\u95F4<br><code>domContentLoadedEventEnd</code>:DOM \u89E3\u6790\u5B8C\u6210\u540E\uFF0C\u7F51\u9875\u5185\u8D44\u6E90\u52A0\u8F7D\u5B8C\u6210\u7684\u65F6\u95F4\uFF08\u5982 JS \u811A\u672C\u52A0\u8F7D\u6267\u884C\u5B8C\u6BD5\uFF09\uFF0C\u6587\u6863\u7684DOMContentLoaded \u4E8B\u4EF6\u7684\u7ED3\u675F\u65F6\u95F4<br><code>domComplete</code>:DOM \u6811\u89E3\u6790\u5B8C\u6210\uFF0C\u4E14\u8D44\u6E90\u4E5F\u51C6\u5907\u5C31\u7EEA\u7684\u65F6\u95F4\uFF0CDocument.readyState \u53D8\u4E3A complete\uFF0C\u5E76\u5C06\u629B\u51FA readystatechange \u76F8\u5173\u4E8B\u4EF6<br><code>loadEventStart</code>:load \u4E8B\u4EF6\u53D1\u9001\u7ED9\u6587\u6863\uFF0C\u4E5F\u5373 load \u56DE\u8C03\u51FD\u6570\u5F00\u59CB\u6267\u884C\u7684\u65F6\u95F4,\u5982\u679C\u6CA1\u6709\u7ED1\u5B9A load \u4E8B\u4EF6\uFF0C\u503C\u4E3A 0<br><code>loadEventEnd</code>:load \u4E8B\u4EF6\u7684\u56DE\u8C03\u51FD\u6570\u6267\u884C\u5B8C\u6BD5\u7684\u65F6\u95F4,\u5982\u679C\u6CA1\u6709\u7ED1\u5B9A load \u4E8B\u4EF6\uFF0C\u503C\u4E3A 0</p>',12);function n(d,c){return r}var s=t(a,[["render",n]]);export{s as default};