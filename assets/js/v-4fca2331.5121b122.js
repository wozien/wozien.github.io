"use strict";(self.webpackChunkfe_note=self.webpackChunkfe_note||[]).push([[459],{4918:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-4fca2331",path:"/summary/es6/object.html",title:"对象扩展",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"字面量语法扩展",slug:"字面量语法扩展",children:[]},{level:2,title:"新增对象方法",slug:"新增对象方法",children:[]},{level:2,title:"增量对象的原型",slug:"增量对象的原型",children:[]}],filePathRelative:"summary/es6/object.md",git:{updatedTime:1635152236e3}}},6851:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h1 id="对象扩展" tabindex="-1"><a class="header-anchor" href="#对象扩展" aria-hidden="true">#</a> 对象扩展</h1><p>在es6中通过多种方式来加强对象的使用，通过简单的语法扩展，来提供更多操作对象及与对象交互的方法。</p><h2 id="字面量语法扩展" tabindex="-1"><a class="header-anchor" href="#字面量语法扩展" aria-hidden="true">#</a> 字面量语法扩展</h2><p>当对象属性名和变量名相同时，赋值的时候可以省略变量名:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getObj</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    name<span class="token punctuation">,</span>\n    age\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>对象方法定义的简写。省略 <code>function</code> 关键字和冒号：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;wozien&#39;</span><span class="token punctuation">,</span>\n  <span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// wozien</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>在es5中,如果想要通过计算得到属性名，只能通过对象加方括号的方式在定义变量属性，不能用点：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> lastName <span class="token operator">=</span> <span class="token string">&#39;last name&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token string">&#39;first name&#39;</span><span class="token operator">:</span> <span class="token string">&#39;wozien&#39;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\nperson<span class="token punctuation">[</span>lastName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;zhang&#39;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>在es6中，允许在对象字面量时用方括号来定义可计算的属性，扩展内允许任意的js表达式：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> lastName <span class="token operator">=</span> <span class="token string">&#39;last&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token string">&#39;first name&#39;</span><span class="token operator">:</span> <span class="token string">&#39;wozien&#39;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span>lastName <span class="token operator">+</span> <span class="token string">&#39; name&#39;</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;zhang&#39;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="新增对象方法" tabindex="-1"><a class="header-anchor" href="#新增对象方法" aria-hidden="true">#</a> 新增对象方法</h2><p>利用 <code>Object.is</code> 判断两个值是否全相等：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&#39;5&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// true</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>该方法基本和全等 <code>===</code> 相同，但是判断正负0和<code>NaN</code>有所区别：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">+</span><span class="token number">0</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token operator">+</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">NaN</span> <span class="token operator">===</span> <span class="token number">NaN</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// false</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">,</span> <span class="token number">NaN</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// true</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>利用 <code>Object.assign</code> 合并对象：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> receiver <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nObject<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>\n  receiver<span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    type<span class="token operator">:</span> <span class="token string">&#39;js&#39;</span><span class="token punctuation">,</span>\n    name<span class="token operator">:</span> <span class="token string">&#39;file.js&#39;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    type<span class="token operator">:</span> <span class="token string">&#39;css&#39;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>receiver<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { type: &#39;css&#39;, name: &#39;file.js&#39; }</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>该方法会合并后面的对象到第一个对象，重复的属性值以最后一个对象为准。该方法为浅拷贝，如果属性值为对象，拷贝的是对象的引用。</p><h2 id="增量对象的原型" tabindex="-1"><a class="header-anchor" href="#增量对象的原型" aria-hidden="true">#</a> 增量对象的原型</h2><p>利用<code>Object.setPrototype()</code> 方法修改对象的原型：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;person&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> dog <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;dog&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> friend <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>friend<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// person</span>\nObject<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>friend<span class="token punctuation">,</span> dog<span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>friend<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// dog</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>利用 <code>super</code> 调用原型对象方法：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;person&#39;</span><span class="token punctuation">,</span>\n  <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> friend <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;friend&#39;</span><span class="token punctuation">,</span>\n  <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nObject<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>friend<span class="token punctuation">,</span> person<span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>friend<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// friend</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>上面friend对象的原型设置为person，在friend的say方法中利用 <code>super.say</code> 调用了person的say方法。但是输出的结果却不是&#39;person&#39;。这是利用 <code>super</code> 调用原型方法的时候，会把方法的 <code>this</code> 对象指向<code>super</code> 调用环境的 <code>this</code> 对象。上面代码相当于:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>\n<span class="token comment">// ...</span>\n<span class="token keyword">let</span> friend <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;friend&#39;</span><span class="token punctuation">,</span>\n  <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>friend<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>',26),t={},e=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,p]of s)n[a]=p;return n}}}]);