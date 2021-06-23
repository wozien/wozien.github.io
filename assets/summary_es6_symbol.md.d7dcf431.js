import{o as n,c as s,b as a,d as p,e as t,a as o}from"./app.27eb1626.js";const c='{"title":"Symbol类型","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本用法","slug":"基本用法"},{"level":2,"title":"Symbol相关方法","slug":"symbol相关方法"},{"level":2,"title":"well-know Symbol","slug":"well-know-symbol"},{"level":2,"title":"应用场景","slug":"应用场景"},{"level":2,"title":"参考","slug":"参考"}],"relativePath":"summary/es6/symbol.md","lastUpdated":1624464482541}',e={},l=p("h1",{id:"symbol类型"},[p("a",{class:"header-anchor",href:"#symbol类型","aria-hidden":"true"},"#"),t(" Symbol类型")],-1),u=p("p",null,[t("在es5中有五种基本类型分别是字符串，数字，布尔，"),p("code",null,"null"),t(" 和 "),p("code",null,"undefined"),t("，在es6中引入一种新的基本类型 "),p("code",null,"Symbol"),t("，表示独一无二的值。常用于模拟创建对象的私有属性。")],-1),k=o('<h2 id="基本用法"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h2><p>调用全局函数 <code>Symbol</code> 创建，该函数接收一个字符串作为描述参数：</p><div class="language-js"><pre><code><span class="token keyword">let</span> sb <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;sb&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sb<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Symbol(sb)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> sb<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// symbol</span>\n</code></pre></div><p>不能使用 <code>new</code> 调用，因为 <code>Symbol</code> 是基本类型，不是返回对象。</p><p>因为 <code>Symbol</code> 本身表示独一无二的值，所以两个相同描述的 <code>Symbol</code> 是不相等的：</p><div class="language-js"><pre><code><span class="token keyword">let</span> sb <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;sb&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> sb2 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;sb&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sb <span class="token operator">===</span> sb2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n</code></pre></div><p>对象作为描述会先调用对象的 <code>toString</code> 方法：</p><div class="language-js"><pre><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">&#39;Symbol obj&#39;</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> sb <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sb<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Symbol(Symbol obj)</span>\n</code></pre></div><p>不能通过运算强制转换为字符串和数字：</p><div class="language-js"><pre><code><span class="token keyword">let</span> sb <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;sb&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> desc <span class="token operator">=</span> sb <span class="token operator">+</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span> <span class="token comment">// Cannot convert a Symbol value to a string</span>\n<span class="token keyword">let</span> num <span class="token operator">=</span> sb <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// Cannot convert a Symbol value to a number</span>\n</code></pre></div><h2 id="symbol相关方法"><a class="header-anchor" href="#symbol相关方法" aria-hidden="true">#</a> Symbol相关方法</h2><p>有时候我们需要用到同一个 <code>Symbol</code> 来做一些处理，就要用到 <code>Symbol.for</code> 方法来注册一个全局的 <code>Symbol</code>：</p><div class="language-js"><pre><code><span class="token keyword">let</span> sb <span class="token operator">=</span> Symbol<span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string">&#39;sb&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> sb2 <span class="token operator">=</span> Symbol<span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string">&#39;sb&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">[</span>sb<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;12345&#39;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>sb<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 12345</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sb <span class="token operator">===</span> sb2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>sb2<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 12345</span>\n</code></pre></div><p>调用该方法会先在全局的Symbol注册表中查找有没有键为&#39;sb&#39;的 <code>Symbol</code>，如果存在则返回。不存在就先创建一个新的 <code>Symbol</code> ，并在全局表中注册。</p><p><code>Symbol.keyFor</code> 方法返回在Symbol全局注册表中检索与该 <code>Symbol</code> 有关的key：</p><div class="language-js"><pre><code><span class="token keyword">let</span> sb <span class="token operator">=</span> Symbol<span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string">&#39;sb&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Symbol<span class="token punctuation">.</span><span class="token function">keyFor</span><span class="token punctuation">(</span>sb<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// sb</span>\n\n<span class="token keyword">let</span> sb2 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;sb&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Symbol<span class="token punctuation">.</span><span class="token function">keyFor</span><span class="token punctuation">(</span>sb2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// undefined</span>\n</code></pre></div><p>用 <code>Symbol</code> 作为对象的属性无法在 <code>Object.keys</code> 和<code>Object.getOwnPropertyNames</code> 方法返回，es6提供一个<code>Object.getOwnPropertySymbols</code> 方法来返回对象所有的 <code>Symbol</code> 属性。</p><div class="language-js"><pre><code><span class="token keyword">let</span> sb <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;sb&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">[</span>sb<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;12345&#39;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> symbols <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertySymbols</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>symbols<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// [ Symbol(sb) ]</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>symbols<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 12345</span>\n</code></pre></div><h2 id="well-know-symbol"><a class="header-anchor" href="#well-know-symbol" aria-hidden="true">#</a> well-know Symbol</h2><p>es6提供了一些内置的 <code>Symbol</code> 变量，用于改变js中某些行为。比如设置构造函数的<code>Symbol.hasInstance</code> 可以自定义 <code>instanceof</code> 的行为：</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">SpecialNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">//</span>\n<span class="token punctuation">}</span>\n\nObject<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>SpecialNumber<span class="token punctuation">,</span> Symbol<span class="token punctuation">.</span>hasInstance<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">value</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> v <span class="token keyword">instanceof</span> <span class="token class-name">Number</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>v <span class="token operator">&gt;=</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> v <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> zero <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  two <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>zero <span class="token keyword">instanceof</span> <span class="token class-name">SpecialNumber</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>two <span class="token keyword">instanceof</span> <span class="token class-name">SpecialNumber</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n</code></pre></div><p><code>Symbol.toStringTag</code> 可以改变调用 <code>Object.prototype.toString</code> 方法的默认行为:</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>toStringTag<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;Person&#39;</span><span class="token punctuation">;</span>\n\n<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">toString</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;wozien&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [object Person]</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// wozien</span>\n</code></pre></div><p>其他内置的Symbol及用法参考<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol#Well-known_symbols" target="_blank" rel="noopener noreferrer">MDN文档</a></p><h2 id="应用场景"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h2><p><strong>作为对象的属性和方法</strong>，模拟对象的私有化：</p><div class="language-js"><pre><code><span class="token keyword">let</span> myKey <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> myFunc <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">[</span>myKey<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;123&#39;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span>myFunc<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>myKey<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 123</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>myFunc<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// bar</span>\n</code></pre></div><p><strong>定义常量</strong>，防止常量重复定义：</p><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token constant">COLOR_RED</span> <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token constant">COLOR_BLUR</span> <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;blue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token constant">COLOR_PINK</span> <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;pink&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">switch</span> <span class="token punctuation">(</span>color<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">case</span> <span class="token constant">COLOR_RED</span><span class="token operator">:</span>\n    <span class="token keyword">break</span><span class="token punctuation">;</span>\n  <span class="token keyword">case</span> <span class="token constant">COLOR_BLUR</span><span class="token operator">:</span>\n    <span class="token keyword">break</span><span class="token punctuation">;</span>\n  <span class="token comment">//</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>** 作为类型的私有属性 ** 。防止定义的冲突和外部访问：</p><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token constant">PASSWORD</span> <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">class</span> <span class="token class-name">Login</span> <span class="token punctuation">{</span>\n    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> password</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>\n        <span class="token keyword">this</span><span class="token punctuation">[</span><span class="token constant">PASSWORD</span><span class="token punctuation">]</span> <span class="token operator">=</span> password<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">hasPassword</span><span class="token punctuation">(</span><span class="token parameter">pw</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">[</span><span class="token constant">PASSWORD</span><span class="token punctuation">]</span> <span class="token operator">===</span> pw<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>** 自定义对象的迭代行为 ** ：</p><div class="language-js"><pre><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n  data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n    <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> self<span class="token punctuation">.</span>data<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token keyword">return</span> <span class="token punctuation">{</span>\n            value<span class="token operator">:</span> self<span class="token punctuation">.</span>data<span class="token punctuation">[</span>index<span class="token operator">++</span><span class="token punctuation">]</span>\n          <span class="token punctuation">}</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n          <span class="token keyword">return</span> <span class="token punctuation">{</span> done<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> x <span class="token keyword">of</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// hello</span>\n<span class="token comment">// world</span>\n</code></pre></div><h2 id="参考"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol" target="_blank" rel="noopener noreferrer">Symbol-MDN</a></p><p><a href="https://2ality.com/2014/12/es6-symbols.html" target="_blank" rel="noopener noreferrer">symbol的用法和场景</a></p><p><a href="https://www.inoob.xyz/posts/140bf504/" target="_blank" rel="noopener noreferrer">&gt;&gt;&gt;原文地址</a></p>',37);e.render=function(p,t,o,c,e,i){return n(),s("div",null,[l,u,a("more"),k])};export default e;export{c as __pageData};
