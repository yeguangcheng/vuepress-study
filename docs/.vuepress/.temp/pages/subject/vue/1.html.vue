<template><h3 id="_1、组件传递数据有几种方式" tabindex="-1"><a class="header-anchor" href="#_1、组件传递数据有几种方式" aria-hidden="true">#</a> 1、组件传递数据有几种方式？</h3>
<h4 id="_1-、props-emit" tabindex="-1"><a class="header-anchor" href="#_1-、props-emit" aria-hidden="true">#</a> (1)、props/$emit</h4>
<p>父组件向子组件中传递数据，可以在子组件中通过设置 props 属性来接收传递过来的数据。<br>
子组件向父组件传递数据，通过 $emit 派发事件，父组件中通过 v-on 接收该事件，拿到传递的数据。</p>
<h4 id="_2-、provide-inject" tabindex="-1"><a class="header-anchor" href="#_2-、provide-inject" aria-hidden="true">#</a> (2)、provide/inject</h4>
<p>在祖先组件中增加属性 provide，它的属性值是一个对象或返回一个对象的函数。该对象包含了给子组件要传递的数据。
在子组件中增加属性 inject ，用来接收数据，它的选项是一个字符串数组，或一个对象。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 子组件</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'num'</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// 父组件</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">provide</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h4 id="_3-、-root-parent-children-ref" tabindex="-1"><a class="header-anchor" href="#_3-、-root-parent-children-ref" aria-hidden="true">#</a> (3)、$root/$parent/$children/ref</h4>
<ul>
<li>通过 $root 属性访问根实例 new Vue()。</li>
<li>通过 $parent 属性访问父组件的实例。</li>
<li>通过 $children 属性访问当前实例的直接子组件。需要注意 $children 并不保证顺序，也不是响应式的。</li>
<li>通过 $refs 属性访问子组件中的数据，子组件标签上加 ref 的属性。例如在子组件的dom元素上增加属性 ref = &quot;abc&quot;，就可以使用this.$refs.abc 拿到这个子组件的实例。</li>
<li>ref，如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例</li>
<li>$refs 只会在组件渲染完成之后生效，并且它们不是响应式的。</li>
</ul>
<h4 id="_4-、event-bus" tabindex="-1"><a class="header-anchor" href="#_4-、event-bus" aria-hidden="true">#</a> (4)、event bus</h4>
<p>这种方法可以看作是通过一个空的实例 new Vue()作为事件总线（事件中心），用它来派发和监听事件，可以实现任何组件间的通信，包括父子、兄弟、跨级。缺点：这种传递数据的方式不是响应式</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>{{num}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>blog-count</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>blog-count</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>clickHandle<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>send<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">//创建一个空的vue实例</span>
    <span class="token keyword">const</span> eventbus <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">//子组件</span>
    <span class="token keyword">const</span> blogCount <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;div>{{num}}&lt;/div></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
        <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//监听事件</span>
            eventbus<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">'message'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>num <span class="token operator">=</span> msg
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">10</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            blogCount
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token function">clickHandle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//派发事件</span>
                eventbus<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'message'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>num<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><h4 id="_5-、vuex" tabindex="-1"><a class="header-anchor" href="#_5-、vuex" aria-hidden="true">#</a> (5)、vuex</h4>
<p>Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它的状态存储是响应式的。采用集中式存储管理应用的所有组件的状态，也就是说，对数据的所有操作都要在vuex中进行。</p>
</template>
