import{c as n}from"./app.4b00b54f.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h3 id="_1\u3001interface\u548Ctype\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_1\u3001interface\u548Ctype\u7684\u533A\u522B" aria-hidden="true">#</a> 1\u3001interface\u548Ctype\u7684\u533A\u522B</h3><p>\u5B98\u7F51\u63CF\u8FF0\uFF1A</p><ul><li>An interface can be named in an extends or implements clause, but a type alias for an object type literal cannot.</li><li>An interface can have multiple merged declarations, but a type alias for an object type literal cannot.</li></ul><h4 id="\u76F8\u540C\u70B9" tabindex="-1"><a class="header-anchor" href="#\u76F8\u540C\u70B9" aria-hidden="true">#</a> \u76F8\u540C\u70B9</h4><ul><li>\u90FD\u53EF\u4EE5\u63CF\u8FF0\u4E00\u4E2A\u5BF9\u8C61\u6216\u8005\u51FD\u6570</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>
<span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">SetUser</span> <span class="token punctuation">{</span>
    <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">User</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">SetUser</span> <span class="token operator">=</span> <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ul><li>\u90FD\u5141\u8BB8\u62D3\u5C55\uFF08extends\uFF09</li></ul><p>interface \u548C type \u90FD\u53EF\u4EE5\u62D3\u5C55\uFF0C\u5E76\u4E14\u4E24\u8005\u5E76\u4E0D\u662F\u76F8\u4E92\u72EC\u7ACB\u7684\uFF0C\u4E5F\u5C31\u662F\u8BF4 interface \u53EF\u4EE5 extends type, type \u4E5F\u53EF\u4EE5 extends interface \u3002 \u867D\u7136\u6548\u679C\u5DEE\u4E0D\u591A\uFF0C\u4F46\u662F\u4E24\u8005\u8BED\u6CD5\u4E0D\u540C\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>
<span class="token comment">// interface extends interface</span>
<span class="token keyword">interface</span> <span class="token class-name">Name</span> <span class="token punctuation">{</span> 
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">Name</span> <span class="token punctuation">{</span> 
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>

<span class="token comment">// type extends type</span>
<span class="token keyword">type</span> <span class="token class-name">Name</span> <span class="token operator">=</span> <span class="token punctuation">{</span> 
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">User</span> <span class="token operator">=</span> Name <span class="token operator">&amp;</span> <span class="token punctuation">{</span> age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// interface extends type</span>
<span class="token keyword">type</span> <span class="token class-name">Name</span> <span class="token operator">=</span> <span class="token punctuation">{</span> 
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">Name</span> <span class="token punctuation">{</span> 
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>

<span class="token comment">// type extends interface</span>
<span class="token keyword">interface</span> <span class="token class-name">Name</span> <span class="token punctuation">{</span> 
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">User</span> <span class="token operator">=</span> Name <span class="token operator">&amp;</span> <span class="token punctuation">{</span> 
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h4 id="\u4E0D\u540C\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u540C\u70B9" aria-hidden="true">#</a> \u4E0D\u540C\u70B9</h4><ul><li>type \u53EF\u4EE5\u58F0\u660E\u57FA\u672C\u7C7B\u578B\u522B\u540D\uFF0C\u8054\u5408\u7C7B\u578B\uFF0C\u5143\u7EC4\u7B49\u7C7B\u578B</li><li>type \u8BED\u53E5\u4E2D\u8FD8\u53EF\u4EE5\u4F7F\u7528 typeof \u83B7\u53D6\u5B9E\u4F8B\u7684 \u7C7B\u578B\u8FDB\u884C\u8D4B\u503C</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>
<span class="token comment">// \u57FA\u672C\u7C7B\u578B\u522B\u540D</span>
<span class="token keyword">type</span> <span class="token class-name">Name</span> <span class="token operator">=</span> <span class="token builtin">string</span>
 
<span class="token comment">// \u8054\u5408\u7C7B\u578B</span>
<span class="token keyword">interface</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span>
    <span class="token function">wong</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Cat</span> <span class="token punctuation">{</span>
    <span class="token function">miao</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">type</span> <span class="token class-name">Pet</span> <span class="token operator">=</span> Dog <span class="token operator">|</span> Cat
 
<span class="token comment">// \u5177\u4F53\u5B9A\u4E49\u6570\u7EC4\u6BCF\u4E2A\u4F4D\u7F6E\u7684\u7C7B\u578B</span>
<span class="token keyword">type</span> <span class="token class-name">PetList</span> <span class="token operator">=</span> <span class="token punctuation">[</span>Dog<span class="token punctuation">,</span> Pet<span class="token punctuation">]</span>

<span class="token comment">// \u5F53\u4F60\u60F3\u83B7\u53D6\u4E00\u4E2A\u53D8\u91CF\u7684\u7C7B\u578B\u65F6\uFF0C\u4F7F\u7528 typeof</span>
<span class="token keyword">let</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token operator">=</span> <span class="token keyword">typeof</span> div
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><ul><li>interface \u80FD\u591F\u58F0\u660E\u5408\u5E76</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>
<span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    sex<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
User \u63A5\u53E3\u4E3A {
    name: string
    age: number
    sex: string 
}
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,14);function p(t,l){return e}var r=s(a,[["render",p]]);export{r as default};
