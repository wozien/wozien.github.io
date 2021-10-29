"use strict";(self.webpackChunkfe_note=self.webpackChunkfe_note||[]).push([[9203],{9351:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-4b1c40e0",path:"/summary/es6/destruction.html",title:"对象和数组的结构",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"对象解构",slug:"对象解构",children:[]},{level:2,title:"数组解构",slug:"数组解构",children:[]},{level:2,title:"应用场景",slug:"应用场景",children:[]}],filePathRelative:"summary/es6/destruction.md",git:{updatedTime:1635477711e3}}},6501:(n,s,a)=>{a.r(s),a.d(s,{default:()=>l});var p=a(6252);const t=(0,p.uE)('<h1 id="对象和数组的结构" tabindex="-1"><a class="header-anchor" href="#对象和数组的结构" aria-hidden="true">#</a> 对象和数组的结构</h1><p>我们经常需要在对象和数组内提取相关的数据，往往我们需要遍历才能完成。而在es6添加了简化这种任务的新特性：解构。解构是一种打破数据解构，将其拆分成更小部分的过程。</p><h2 id="对象解构" tabindex="-1"><a class="header-anchor" href="#对象解构" aria-hidden="true">#</a> 对象解构</h2><p>基本用法:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> node <span class="token operator">=</span> <span class="token punctuation">{</span>\n  type<span class="token operator">:</span> <span class="token string">&#39;Identifier&#39;</span><span class="token punctuation">,</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> <span class="token punctuation">{</span> type<span class="token punctuation">,</span> name <span class="token punctuation">}</span> <span class="token operator">=</span> node<span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Identifier foo</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>另外，解构必须提供初始值。即等号右边不能为<code>null</code>，<code>undefiend</code> 或者不提供：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token punctuation">{</span> type<span class="token punctuation">,</span> name <span class="token punctuation">}</span><span class="token punctuation">;</span>  <span class="token comment">// Missing initializer in destructuring declaration</span>\n<span class="token keyword">let</span> <span class="token punctuation">{</span> type <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>  <span class="token comment">// undefiend也是不行</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>对已经声明的变量也可以使用解构，但是这时候解构语句要用一对括号包含起来，因为js引擎会把花括号当作语法块处理：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> node <span class="token operator">=</span> <span class="token punctuation">{</span>\n  type<span class="token operator">:</span> <span class="token string">&#39;Identifier&#39;</span><span class="token punctuation">,</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> type <span class="token operator">=</span> <span class="token string">&#39;Listers&#39;</span><span class="token punctuation">,</span>\n  name <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// 用圆括号包含</span>\n<span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token punctuation">,</span> name <span class="token punctuation">}</span> <span class="token operator">=</span> node<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Identifier foo</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>解构的变量名称如果不在对象中会被赋值为 <code>undefiend</code>，我们可以为解构的变量提供一个默认值，在属性名后面添加等号和默认值即可：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> node <span class="token operator">=</span> <span class="token punctuation">{</span>\n  type<span class="token operator">:</span> <span class="token string">&#39;Identifier&#39;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> <span class="token punctuation">{</span> type<span class="token punctuation">,</span> name <span class="token operator">=</span> <span class="token string">&#39;wozien&#39;</span> <span class="token punctuation">}</span> <span class="token operator">=</span> node<span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Identifier wozien</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>当我们需要解构的变量名和对象属性名不同，可以在解构的属性名后面添加冒号和对应的变量名：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> node <span class="token operator">=</span> <span class="token punctuation">{</span>\n  type<span class="token operator">:</span> <span class="token string">&#39;Identifier&#39;</span><span class="token punctuation">,</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> myType<span class="token punctuation">,</span> name<span class="token operator">:</span> myName <span class="token operator">=</span> <span class="token string">&#39;wozien&#39;</span> <span class="token punctuation">}</span> <span class="token operator">=</span> node<span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myType<span class="token punctuation">,</span> myName<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Identifier foo</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>可见，解构表达式冒号左边指的是对象需要解构的属性位置，冒号右边才是需要绑定的变量。所以同名的解构是下面方式的简写：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token punctuation">{</span>\n  type<span class="token operator">:</span> type<span class="token punctuation">,</span>\n  name<span class="token operator">:</span> name\n<span class="token punctuation">}</span> <span class="token operator">=</span> node<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>嵌套对象的解构和字面量写法一样，只要提供更深的花括号即可：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> node <span class="token operator">=</span> <span class="token punctuation">{</span>\n  type<span class="token operator">:</span> <span class="token string">&#39;Identifier&#39;</span><span class="token punctuation">,</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span>\n  loc<span class="token operator">:</span> <span class="token punctuation">{</span>\n    start<span class="token operator">:</span> <span class="token punctuation">{</span>\n      line<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      column<span class="token operator">:</span> <span class="token number">1</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    end<span class="token operator">:</span> <span class="token punctuation">{</span>\n      line<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      column<span class="token operator">:</span> <span class="token number">4</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> <span class="token punctuation">{</span> loc<span class="token operator">:</span> <span class="token punctuation">{</span> start <span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token operator">=</span> node<span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>start<span class="token punctuation">.</span>line<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="数组解构" tabindex="-1"><a class="header-anchor" href="#数组解构" aria-hidden="true">#</a> 数组解构</h2><p>基本用法：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;blue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> <span class="token punctuation">[</span>firstColor<span class="token punctuation">,</span> secondColor<span class="token punctuation">]</span> <span class="token operator">=</span> colors<span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>firstColor<span class="token punctuation">,</span> secondColor<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// red green</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>如果我们只想获取固定位置的元素，可以这样：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;blue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token punctuation">,</span> thirdColor<span class="token punctuation">]</span> <span class="token operator">=</span> colors<span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>thirdColor<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// blue</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>解构赋值给已经声明的变量不需要用圆括号，这和对象解构赋值有区别：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;blue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> firstColor <span class="token operator">=</span> <span class="token string">&#39;yellow&#39;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 不需要括号</span>\n<span class="token punctuation">[</span>firstColor<span class="token punctuation">]</span> <span class="token operator">=</span> colors<span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>firstColor<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// red</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>数组解构也可以使用默认值，当指定位置元素不存在或者为 <code>undefined</code> 时使用：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> <span class="token punctuation">[</span>firstColor<span class="token punctuation">,</span> secondColor <span class="token operator">=</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> colors<span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>firstColor<span class="token punctuation">,</span> secondColor<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//red green</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>嵌套数组解构和对象类似，提供更深的方括号即可：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;green&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;blue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> <span class="token punctuation">[</span>firstColor<span class="token punctuation">,</span> <span class="token punctuation">[</span>secondColor<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> colors<span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>firstColor<span class="token punctuation">,</span> secondColor<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//red green</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>不定参数解构。利用<code>...</code> 可以把数组剩余的数据赋值给一个指定的变量：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;blue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> <span class="token punctuation">[</span>firstColor<span class="token punctuation">,</span> <span class="token operator">...</span>secondColor<span class="token punctuation">]</span> <span class="token operator">=</span> colors<span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>firstColor<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//red </span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>secondColor<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [ &#39;green&#39;, &#39;blue&#39; ]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>混合解构，方便我们提取对象和数组结合的数据：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> node <span class="token operator">=</span> <span class="token punctuation">{</span>\n  type<span class="token operator">:</span> <span class="token string">&#39;Identifier&#39;</span><span class="token punctuation">,</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span>\n  loc<span class="token operator">:</span> <span class="token punctuation">{</span>\n    start<span class="token operator">:</span> <span class="token punctuation">{</span>\n      line<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      column<span class="token operator">:</span> <span class="token number">1</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    end<span class="token operator">:</span> <span class="token punctuation">{</span>\n      line<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      column<span class="token operator">:</span> <span class="token number">4</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  range<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> <span class="token punctuation">{</span>\n  loc<span class="token operator">:</span> <span class="token punctuation">{</span> end <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  range<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> startIndex<span class="token punctuation">]</span>\n<span class="token punctuation">}</span> <span class="token operator">=</span> node<span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>end<span class="token punctuation">.</span>column<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 4</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>startIndex<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h2><p><strong>函数参数的解构</strong>。我们可以为接收一个对象或者数组的函数参数进行解构，这样就不需要在函数体里面进行对应属性的提取，并且可以更加直观的看出对象的传递属性：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">setCookie</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token punctuation">{</span> path<span class="token punctuation">,</span> domain<span class="token punctuation">,</span> expire <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 设置cookie</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> domain<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">setCookie</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> domain<span class="token operator">:</span> <span class="token string">&#39;localhost&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>解构函数参数必须传递参数，不然会抛出错误。这时我们可以利用函数参数默认值解决：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">setCookie</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token punctuation">{</span> path<span class="token punctuation">,</span> domain<span class="token punctuation">,</span> expire <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 设置cookie</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> domain<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">setCookie</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><strong>交换两个变量的值</strong>。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>\n<span class="token punctuation">[</span>b<span class="token punctuation">,</span> a<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 2 1</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>克隆数组</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;blue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> cloneColors <span class="token operator">=</span> colors<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// es5</span>\n\n<span class="token keyword">let</span> <span class="token punctuation">[</span><span class="token operator">...</span>cloneColors<span class="token punctuation">]</span> <span class="token operator">=</span> colors<span class="token punctuation">;</span>  <span class="token comment">// es6</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',41),e={href:"https://www.inoob.xyz/posts/2eca66cf/",target:"_blank",rel:"noopener noreferrer"},o=(0,p.Uk)(">>>原文地址"),c={},l=(0,a(3744).Z)(c,[["render",function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.iD)(p.HY,null,[t,(0,p._)("p",null,[(0,p._)("a",e,[o,(0,p.Wm)(a)])])],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,p]of s)n[a]=p;return n}}}]);