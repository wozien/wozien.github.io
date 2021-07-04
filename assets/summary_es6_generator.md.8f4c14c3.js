import{o as n,c as s,b as a,d as t,e as p,a as o}from"./app.bb25987b.js";const e='{"title":"生成器Generator","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本概念","slug":"基本概念"},{"level":2,"title":"高级迭代器用法","slug":"高级迭代器用法"},{"level":3,"title":"迭代器传参","slug":"迭代器传参"},{"level":3,"title":"在迭代器抛出错误","slug":"在迭代器抛出错误"},{"level":3,"title":"生成器返回值","slug":"生成器返回值"},{"level":3,"title":"委托生成器","slug":"委托生成器"},{"level":2,"title":"异步任务执行","slug":"异步任务执行"},{"level":2,"title":"参考","slug":"参考"}],"relativePath":"summary/es6/generator.md","lastUpdated":1625413241205}',c={},u=t("h1",{id:"生成器generator"},[t("a",{class:"header-anchor",href:"#生成器generator","aria-hidden":"true"},"#"),p(" 生成器Generator")],-1),l=t("p",null,[p("迭代器是es6中一个重要的概念，很多新特性都是基于迭代器概念而铺开的。为了更加方便的创建自定义的迭代器，es6引入了生成器 "),t("code",null,"(Generator)"),p(" 的概念。它是一种可以返回迭代器的特殊函数。有了生成器及它的特性可以让我们创建更加简洁的异步代码。")],-1),k=o('<h2 id="基本概念"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h2><p>通过 <code>function</code> 关键字后面的星号<code>(*)</code>来表示，函数体用 <code>yield</code> 关键字来控制迭代器每次 <code>next()</code> 返回结果：</p><div class="language-js"><pre><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">createIterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">yield</span> <span class="token number">1</span><span class="token punctuation">;</span>\n  <span class="token keyword">yield</span> <span class="token number">2</span><span class="token punctuation">;</span>\n  <span class="token keyword">yield</span> <span class="token number">3</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> iterator <span class="token operator">=</span> <span class="token function">createIterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: 1, done: false }</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: 2, done: false }</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: 3, done: false }</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: undefined, done: true }</span>\n</code></pre></div><p>通过生成器生成的迭代器每次调用 <code>next()</code>执行函数代码时 ，每次执行 <code>yield</code> 语句完后就会自动停止执行。直到再次调用 <code>next()</code> 方法才会继续执行。</p><div class="language-js"><pre><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">createIterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">yield</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">yield</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> iterator <span class="token operator">=</span> <span class="token function">createIterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\niterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>\niterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2 </span>\n</code></pre></div><p><code>yield</code> 关键字只能在生成器内部使用，嵌套的函数也不行：</p><div class="language-js"><pre><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">createIterator</span><span class="token punctuation">(</span><span class="token parameter">items</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  items<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">//  SyntaxError: Unexpected identifier</span>\n    <span class="token keyword">yield</span> item<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>在对象里面定义生成器函数：</p><div class="language-js"><pre><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">createIterator</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token operator">*</span> <span class="token punctuation">(</span>items<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 用es6方式</span>\n<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token operator">*</span><span class="token function">createIterator</span><span class="token punctuation">(</span><span class="token parameter">items</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><blockquote><p><em>注意，生成器函数不支持箭头函数写法</em></p></blockquote><h2 id="高级迭代器用法"><a class="header-anchor" href="#高级迭代器用法" aria-hidden="true">#</a> 高级迭代器用法</h2><h3 id="迭代器传参"><a class="header-anchor" href="#迭代器传参" aria-hidden="true">#</a> 迭代器传参</h3><p>可以给迭代器 <code>next()</code> 方法传递一个参数，这个参数的值会替代生成器内部上一条<code>yield</code> 语句的返回值：</p><div class="language-js"><pre><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">createIterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> first <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token number">1</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> second <span class="token operator">=</span> <span class="token keyword">yield</span> first <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>\n  <span class="token keyword">yield</span> second <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> iterator <span class="token operator">=</span> <span class="token function">createIterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// { value: 1, done: false }</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: 5, done: false }</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: 8, done: false }</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// { value: undefined, done: true }</span>\n</code></pre></div><p>第二次调用 <code>next()</code> 传入4，会作为上一条 <code>yield</code> 语句的返回值，此时first的值为3，而不是1，所以第二次 <code>next</code> 的返回值为5。以此类推，第3次 <code>next()</code>传入5，返回值为8。</p><p>注意，第一次调用 <code>next()</code> 传入参数会被忽略。运行的流程可以如下图：</p><img src="https://blog.inoob.xyz/posts/33ce65af/1.jpg"><h3 id="在迭代器抛出错误"><a class="header-anchor" href="#在迭代器抛出错误" aria-hidden="true">#</a> 在迭代器抛出错误</h3><p>迭代器除了 <code>next()</code> 方法，还有利用 <code>throw()</code> 抛出一个Error对象。错误被抛出后，生成器函数的后面代码会停止执行：</p><div class="language-js"><pre><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">createIterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> first <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token number">1</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> second <span class="token operator">=</span> <span class="token keyword">yield</span> first <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>\n  <span class="token keyword">yield</span> second <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> iterator <span class="token operator">=</span> <span class="token function">createIterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: 1, done: false }</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: 5, done: false }</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">throw</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;boom&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 从生成器中抛出错误</span>\n</code></pre></div><p>在生成器函数内可以用 <code>try...catch</code> 来捕捉错误，后续代码才能继续执行：</p><div class="language-js"><pre><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">createIterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> first <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token number">1</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> second<span class="token punctuation">;</span>\n\n  <span class="token keyword">try</span> <span class="token punctuation">{</span>\n    second <span class="token operator">=</span> <span class="token keyword">yield</span> first <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    second <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">yield</span> second <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> iterator <span class="token operator">=</span> <span class="token function">createIterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: 1, done: false }</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: 5, done: false }</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">throw</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;boom&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: 9, done: false }</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// { value: undefined, done: true }</span>\n</code></pre></div><h3 id="生成器返回值"><a class="header-anchor" href="#生成器返回值" aria-hidden="true">#</a> 生成器返回值</h3><p>因为生成器也是一个函数，所以可以用 <code>return</code> 返回值。在 <code>return</code> 后，结果对象的done立即变为 <code>true</code>，value为返回的值。后续 <code>yield</code> 语句将不会执行：</p><div class="language-js"><pre><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">createIterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">yield</span> <span class="token number">1</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token string">&#39;done&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">yield</span> <span class="token number">2</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> iterator <span class="token operator">=</span> <span class="token function">createIterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// { value: 1, done: false }</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// { value: &#39;done&#39;, done: true }</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// { value: undefined, done: true }</span>\n</code></pre></div><p><code>return</code> 返回值只获取一次，后续调用 <code>next()</code> 都是返回 <code>undefiend</code>。</p><h3 id="委托生成器"><a class="header-anchor" href="#委托生成器" aria-hidden="true">#</a> 委托生成器</h3><p>委托生成器是指在生成器的内用 <code>yield*</code> 语法接上另外一个生成器函数，把数据生成的过程委托给其他迭代器：</p><div class="language-js"><pre><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">createNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">yield</span> <span class="token number">1</span><span class="token punctuation">;</span>\n  <span class="token keyword">yield</span> <span class="token number">2</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">createColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">yield</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">combine</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">yield</span><span class="token operator">*</span> <span class="token function">createNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">yield</span><span class="token operator">*</span> <span class="token function">createColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token string">&#39;combine&#39;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> iterator <span class="token operator">=</span> <span class="token function">combine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: 1, done: false }</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: 2, done: false }</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: &#39;red&#39;, done: false }</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// { value: &#39;combine&#39;, done: true }</span>\n</code></pre></div><h2 id="异步任务执行"><a class="header-anchor" href="#异步任务执行" aria-hidden="true">#</a> 异步任务执行</h2><p>我们用 <code>setTimeout()</code> 来模拟一个异步任务：</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">{</span> code<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> data<span class="token operator">:</span> url <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>把上面的函数改成返回可以接收回调的函数：</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">cb</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">{</span> code<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> data<span class="token operator">:</span> url <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>我们有一个异步任务的生成器函数：</p><div class="language-js"><pre><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> res1 <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token string">&#39;http://www.baidu.com&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> res2 <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token string">&#39;http://www.inoob.xyz&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res1<span class="token punctuation">.</span>data <span class="token operator">+</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> res2<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>要让上面的生成器函数正确执行，我们需要这样调用：</p><div class="language-js"><pre><code><span class="token keyword">let</span> g <span class="token operator">=</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\ng<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> r2 <span class="token operator">=</span> g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  r2<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p>通过在回调函数的执行把控制权重新回到生成器函数，继续执行函数到下一条 <code>yield</code>。我们用递归的方式改写执行函数：</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token parameter">gen</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> g <span class="token operator">=</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">function</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> result <span class="token operator">=</span> g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">.</span>done<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> result<span class="token punctuation">.</span>value <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      result<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      <span class="token function">next</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">run</span><span class="token punctuation">(</span>gen<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p>其实，上面的自动执行生成器函数的方法只适用于回调形式的异步任务，还要考虑返回<code>Promise</code> 形式的异步任务，并且要处理异常的情况。这里推荐一个npm库，该库已经兼容所有情况自动执行 <code>Generator</code>函数。</p><h2 id="参考"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><p><a href="https://github.com/mqyqingfeng/Blog/issues/99" target="_blank" rel="noopener noreferrer">ES6 系列之 Generator 的自动执行</a></p>',43);c.render=function(t,p,o,e,c,i){return n(),s("div",null,[u,l,a("more"),k])};export default c;export{e as __pageData};
