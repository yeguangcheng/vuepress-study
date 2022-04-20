<template><h3 id="_5、input的type类型和attr属性有哪些" tabindex="-1"><a class="header-anchor" href="#_5、input的type类型和attr属性有哪些" aria-hidden="true">#</a> 5、input的type类型和attr属性有哪些</h3>
<h4 id="type-类型" tabindex="-1"><a class="header-anchor" href="#type-类型" aria-hidden="true">#</a> type 类型</h4>
<p><strong>传统类型</strong></p>
<ul>
<li>text 定义单行的输入字段，用户可在其中输入文本</li>
<li>password 定义密码字段该字段中的字符被掩码</li>
<li>file 定义输入字段和 &quot;浏览&quot;按钮，供文件上传</li>
<li>radio 定义单选按钮</li>
<li>checkbox 定义复选框</li>
<li>hidden 定义隐藏的输入字段</li>
<li>button 定义可点击按钮（多数情况下，用于通过JavaScript启动脚本）</li>
<li>image 定义图像形式的提交按钮</li>
<li>reset 定义重置按钮重置按钮会清除表单中的所有数据</li>
<li>submit 定义提交按钮提交按钮会把表单数据发送到服务器</li>
</ul>
<p><strong>H5新增类型</strong></p>
<ul>
<li>color 定义调色板</li>
<li>tel 定义包含电话号码的输入域</li>
<li>email	定义包含email地址的输入域</li>
<li>url 定义包含URL地址的输入域</li>
<li>search 定义搜索域</li>
<li>number 定义包含数值的输入域</li>
<li>range 定义包含一定范围内数字值的输入域</li>
<li>date 定义选取日、月、年的输入域</li>
<li>month 定义选取月、年的输入域</li>
<li>week 定义选取周、年的输入域</li>
<li>time 定义选取月、年的输入域</li>
<li>datetime 定义选取时间、日 月、年的输入域(UTC时间)</li>
<li>datatime-local 定义选取时间、日 月、年的输入域(本地时间)</li>
</ul>
<h4 id="attr-属性" tabindex="-1"><a class="header-anchor" href="#attr-属性" aria-hidden="true">#</a> attr 属性</h4>
<p><strong>传统属性</strong></p>
<ul>
<li>accept 规定通过文件上传来提交的文件的类型</li>
<li>align	值有left、right、top、middle、bottom，不赞成使用，规定图像输入的对齐方式</li>
<li>alt 定义图像输入的替代文本</li>
<li>checked 规定此 input 元素首次加载时应当被选中</li>
<li>disabled 当 input 元素加载时禁用此元素</li>
<li>maxlength 规定输入字段中的字符的最大长度</li>
<li>name 定义 input 元素的名称</li>
<li>readonly 规定输入字段为只读</li>
<li>size 定义输入字段的宽度</li>
<li>src 定义以提交按钮形式显示的图像的 URL</li>
<li>type 规定 input 元素的类型</li>
<li>value 规定 input 元素的值</li>
</ul>
<p><strong>H5新增属性</strong></p>
<ul>
<li>autocomplete 值有on、off，规定是否使用输入字段的自动完成功能</li>
<li>autofocus 规定输入字段在页面加载时是否获得焦点</li>
<li>form 规定输入字段所属的一个或多个表单</li>
<li>formaction 覆盖表单的 action 属性（适用于 type=&quot;submit&quot; 和 type=&quot;image&quot;）</li>
<li>formenctype 覆盖表单的 enctype 属性（适用于 type=&quot;submit&quot; 和 type=&quot;image&quot;）</li>
<li>formmethod 覆盖表单的 method 属性（适用于 type=&quot;submit&quot; 和 type=&quot;image&quot;）</li>
<li>formnovalidate 覆盖表单的 novalidate 属性，如果使用该属性，则提交表单时不进行验证</li>
<li>formtarget 覆盖表单的 target 属性（适用于 type=&quot;submit&quot; 和 type=&quot;image&quot;）</li>
<li>height 定义 input 字段的高度（适用于 type=&quot;image&quot;）</li>
<li>width 定义 input 字段的宽度（适用于 type=&quot;image&quot;）</li>
<li>list 引用包含输入字段的预定义选项的 datalist</li>
<li>max 规定输入字段的最大值</li>
<li>min 规定输入字段的最小值</li>
<li>multiple 如果使用该属性，则允许一个以上的值</li>
<li>pattern 规定输入字段的值的模式或格式</li>
<li>placeholder 规定帮助用户填写输入字段的提示</li>
<li>required 指示输入字段的值是必需的</li>
<li>step 规定输入字的的合法数字间隔</li>
</ul>
</template>
