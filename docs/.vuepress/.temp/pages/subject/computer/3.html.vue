<template><h3 id="什么是-ast-有什么应用场景" tabindex="-1"><a class="header-anchor" href="#什么是-ast-有什么应用场景" aria-hidden="true">#</a> 什么是 AST？有什么应用场景？</h3>
<h4 id="ast-抽象语法树" tabindex="-1"><a class="header-anchor" href="#ast-抽象语法树" aria-hidden="true">#</a> AST 抽象语法树</h4>
<p>在传统的编译语言的流程中,程序的一段源代码在执行之前会经历三个步骤,统称为&quot;编译&quot;：</p>
<ul>
<li>
<p>分词/词法分析<br>
这个过程会将由字符组成的字符串分解成有意义的代码块,这些代码块统称为词法单元(token).</p>
</li>
<li>
<p>解析/语法分析<br>
这个过程是将词法单元流转换成一个由元素嵌套所组成的代表了程序语法结构的树,这个树被称为&quot;抽象语法树&quot;（abstract syntax code，AST）</p>
</li>
<li>
<p>代码生成<br>
将 AST 转换成可执行代码的过程被称为代码生成.</p>
</li>
</ul>
<p>抽象语法树（abstract syntax code，AST）是源代码的抽象语法结构的树状表示，树上的每个节点都表示源代码中的一种结构，之所以说是抽象的，抽象表示把 js 代码进行了结构化的转化，转化为一种数据结构，这种数据结构其实就是一个大的 json 对象。</p>
<p>简单理解,就是<strong>把我们写的代码按照一定的规则转换成一种树形结构</strong></p>
<h4 id="ast-的应用" tabindex="-1"><a class="header-anchor" href="#ast-的应用" aria-hidden="true">#</a> AST 的应用</h4>
<p>AST 的作用不仅仅是用来在 JavaScript 引擎的编译上，我们在实际的开发过程中也是经常使用的。</p>
<ul>
<li>常用的 babel 插件将 ES6 转化成 ES5</li>
<li>使用 UglifyJS 来压缩代码</li>
<li>css 预处理器</li>
<li>开发 WebPack 插件</li>
<li>Vue-cli 前端自动化工具</li>
</ul>
<h4 id="ast-的结构" tabindex="-1"><a class="header-anchor" href="#ast-的结构" aria-hidden="true">#</a> AST 的结构</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 原代码</span>
<span class="token keyword">const</span> team <span class="token operator">=</span> <span class="token string">'大转转FE'</span>

<span class="token comment">// 转换成AST结构后</span>
<span class="token punctuation">{</span>
  <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"Program"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"start"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token string-property property">"end"</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  <span class="token string-property property">"body"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"VariableDeclaration"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"start"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token string-property property">"end"</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
      <span class="token string-property property">"declarations"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"VariableDeclarator"</span><span class="token punctuation">,</span>
          <span class="token string-property property">"start"</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
          <span class="token string-property property">"end"</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
          <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"Identifier"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"start"</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
            <span class="token string-property property">"end"</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"team"</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token string-property property">"init"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"Literal"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"start"</span><span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span>
            <span class="token string-property property">"end"</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
            <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"大转转FE"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"raw"</span><span class="token operator">:</span> <span class="token string">"'大转转FE'"</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">"kind"</span><span class="token operator">:</span> <span class="token string">"const"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">"sourceType"</span><span class="token operator">:</span> <span class="token string">"module"</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h4 id="相关插件使用" tabindex="-1"><a class="header-anchor" href="#相关插件使用" aria-hidden="true">#</a> 相关插件使用</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> esprima <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'esprima'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> estraverse <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'estraverse'</span><span class="token punctuation">)</span> 
<span class="token keyword">const</span> escodegen <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'escodegen'</span><span class="token punctuation">)</span>
<span class="token comment">// 原代码</span>
<span class="token keyword">let</span> code <span class="token operator">=</span> <span class="token string">'const company = "zhuanzhuan" '</span>
<span class="token comment">// 生成AST</span>
<span class="token keyword">const</span> ast <span class="token operator">=</span> esprima<span class="token punctuation">.</span><span class="token function">parseScript</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span>
<span class="token comment">// 遍历解析进行操作</span>
estraverse<span class="token punctuation">.</span><span class="token function">traverse</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">enter</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        node<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'team'</span>
        node<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">'大转转FE'</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// AST转换为代码</span>
<span class="token keyword">const</span> transformCode <span class="token operator">=</span> escodegen<span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span>ast<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>transformCode<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p><a href="https://mp.weixin.qq.com/s/EDqBmkLMPLrGUhUsxdr0ZA" target="_blank" rel="noopener noreferrer">参考文章：AST详解与运用<ExternalLinkIcon/></a></p>
</template>
