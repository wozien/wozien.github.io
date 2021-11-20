"use strict";(self.webpackChunkfe_note=self.webpackChunkfe_note||[]).push([[7452],{3087:(e,a,l)=>{l.r(a),l.d(a,{data:()=>i});const i={key:"v-2c23461a",path:"/summary/browser/render.html",title:"渲染原理",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"浏览器架构",slug:"浏览器架构",children:[{level:3,title:"线程 vs 进程",slug:"线程-vs-进程",children:[]},{level:3,title:"单进程浏览器架构",slug:"单进程浏览器架构",children:[]},{level:3,title:"目前多进程架构",slug:"目前多进程架构",children:[]},{level:3,title:"面向未来的服务架构",slug:"面向未来的服务架构",children:[]}]},{level:2,title:"构建DOM",slug:"构建dom",children:[]},{level:2,title:"样式计算",slug:"样式计算",children:[]},{level:2,title:"布局阶段",slug:"布局阶段",children:[]},{level:2,title:"分层",slug:"分层",children:[]},{level:2,title:"图层绘制",slug:"图层绘制",children:[]},{level:2,title:"光栅化",slug:"光栅化",children:[]},{level:2,title:"合成和显示",slug:"合成和显示",children:[]},{level:2,title:"总结",slug:"总结",children:[]}],filePathRelative:"summary/browser/render.md",git:{updatedTime:1637431429e3}}},9084:(e,a,l)=>{l.r(a),l.d(a,{default:()=>h});const i=(0,l(6252).uE)('<h1 id="渲染原理" tabindex="-1"><a class="header-anchor" href="#渲染原理" aria-hidden="true">#</a> 渲染原理</h1><p>按照渲染的时间顺序，渲染流水线可分为如下几个子阶段：构建 DOM 树、样式计算、布局阶段、分层、绘制、分块、光栅化和合成。在了解各个子任务前，需要理解现代浏览器的多进程架构。</p><h2 id="浏览器架构" tabindex="-1"><a class="header-anchor" href="#浏览器架构" aria-hidden="true">#</a> 浏览器架构</h2><h3 id="线程-vs-进程" tabindex="-1"><a class="header-anchor" href="#线程-vs-进程" aria-hidden="true">#</a> 线程 vs 进程</h3><p>一个进程就是一个程序的运行实例。详细解释就是，启动一个程序的时候，操作系统会为该程序创建一块内存，用来存放代码、运行中的数据和一个执行任务的主线程，我们把这样的一个运行环境叫进程。而线程是依附于进程的，而进程中使用多线程并行处理能提高运行效率。</p><p>进程和线程关系有下面4个特点</p><ul><li>进程重的任意一线程执行出错，会导致整个进程的奔溃</li><li>线程之间可以共享进程的数据</li><li>当一个进程关闭之后，操作系统会回收进程所占用的内存</li><li>进程之间的内容相互隔离</li></ul><h3 id="单进程浏览器架构" tabindex="-1"><a class="header-anchor" href="#单进程浏览器架构" aria-hidden="true">#</a> 单进程浏览器架构</h3><p>单进程浏览器的所有功能模块都是运行在用一个进程里，这些模块包含了网络、插件、JavaScript 运行环境、渲染引擎和页面等。</p><p><img src="https://wozien-cloud-oss.oss-cn-shenzhen.aliyuncs.com/images/blog/6ddad2419b049b0eb2a8036f3dfff1ca.webp" alt=""></p><p>该架构浏览器存在以下的问题</p><ul><li>不稳定。页面的代码或者插件的意外奔溃会导致整个浏览器的奔溃</li><li>不流畅。所有任务都泡在一个线程中，相互阻塞</li><li>不安全。恶意插件，获取OS权限等</li></ul><h3 id="目前多进程架构" tabindex="-1"><a class="header-anchor" href="#目前多进程架构" aria-hidden="true">#</a> 目前多进程架构</h3><p>目前chrome浏览器包括： 1个浏览器主进程，1个GPU进程，1个网络进程，多个渲染进程和多个插件进程。</p><p><img src="https://wozien-cloud-oss.oss-cn-shenzhen.aliyuncs.com/images/blog/b61cab529fa31301bde290813b4587fc.webp" alt=""></p><p>不同进程的作用如下：</p><ul><li>浏览器进程。主要负责界面显示、用户交互、子进程管理，同时提供存储等功能</li><li>渲染进程。将html， css和js文件渲染成网页， 有排版引擎blink和JS引擎V8。默认情况下， chrome会为每个tab标签都创建一个渲染进程，从页面打开同站点页面会复用同一个渲染进程。</li><li>GPU进程。在页面过程渲染过程起到绘制位图的作用。</li><li>网络进程。负责页面的网络资源加载。</li><li>插件进程。负责插件进程。</li></ul><p>多进程架构可以很好的解决早期浏览器的3个缺点，但是存在更高资源占用，更复杂的体系架构的问题</p><h3 id="面向未来的服务架构" tabindex="-1"><a class="header-anchor" href="#面向未来的服务架构" aria-hidden="true">#</a> 面向未来的服务架构</h3><p><img src="https://wozien-cloud-oss.oss-cn-shenzhen.aliyuncs.com/images/blog/329658fe821252db47b0964037a1de2a.webp" alt=""></p><p>原来的各种模块会被重构成独立的服务（Service），每个服务（Service）都可以在独立的进程中运行，访问服务（Service）必须使用定义好的接口，通过 IPC 来通信，从而构建一个更内聚、松耦合、易于维护和扩展的系统，更好实现 Chrome 简单、稳定、高速、安全的目标。</p><p>同时 Chrome 还提供灵活的弹性架构，Chrome 会将很多服务整合到一个进程中，从而节省内存占用。</p><h2 id="构建dom" tabindex="-1"><a class="header-anchor" href="#构建dom" aria-hidden="true">#</a> 构建DOM</h2><p>因为浏览器无法直接理解和使用html文件，需要将html转为节点树结构--DOM树。DOM树的创建是通过HTML解析器来完成的，大概流程如下：</p><p><img src="https://wozien-cloud-oss.oss-cn-shenzhen.aliyuncs.com/images/blog/1bfcd419acf6402c20ffc1a5b1909d8c.webp" alt=""></p><ul><li>通过分词器将字节流转为Token，分为tag token和文本token</li><li>在创建Node节点过程中利用栈来处理，遇到start tag和文本入栈创建对应的dom节点，遇到end tag会匹配栈顶的start tag，匹配成功start tag出栈，表示该节点创建成功。</li></ul><h2 id="样式计算" tabindex="-1"><a class="header-anchor" href="#样式计算" aria-hidden="true">#</a> 样式计算</h2><ol><li>把CSS文件内容转为浏览器理解的结构，CSSOM</li><li>计算样式属性值，比如rem转为px， color转为rbg表示等</li><li>利用CSS的继承和层叠特性计算DOM节点样式</li></ol><h2 id="布局阶段" tabindex="-1"><a class="header-anchor" href="#布局阶段" aria-hidden="true">#</a> 布局阶段</h2><p>根据DOM树和CSSOM计算出布局信息，构建一个布局树，也称渲染树。布局树只包含可见的节点信息：</p><p><img src="https://wozien-cloud-oss.oss-cn-shenzhen.aliyuncs.com/images/blog/8e48b77dd48bdc509958e73b9935710e.webp" alt=""></p><h2 id="分层" tabindex="-1"><a class="header-anchor" href="#分层" aria-hidden="true">#</a> 分层</h2><p>浏览器为了更好的实现复杂的3D变换，页面滚动，或者z-index排序，需要为特性的节点生成专用的图层，并最后生成一颗图层树。</p><p><img src="https://wozien-cloud-oss.oss-cn-shenzhen.aliyuncs.com/images/blog/e8a7e60a2a08e05239456284d2aa4061.webp" alt=""></p><p>并不是所有的节点都会生成图层，大概规则如下</p><ul><li>拥有层叠上下文属性的元素会被提升到单独一层，比如z-index， opacity，position等</li><li>需要剪裁的地方。比如div里面的文本溢出裁剪</li><li>如果一个节点没有对应的层，那么这个节点就从属于父节点的层</li></ul><h2 id="图层绘制" tabindex="-1"><a class="header-anchor" href="#图层绘制" aria-hidden="true">#</a> 图层绘制</h2><p>在得到图层树后，渲染引擎会把一个图层的绘制拆分成很多小的绘制指令，然后在将这些指令按顺序组成一个绘制列表：</p><p><img src="https://wozien-cloud-oss.oss-cn-shenzhen.aliyuncs.com/images/blog/40825a55214a7990bba6b9bec6e54108.webp" alt=""></p><h2 id="光栅化" tabindex="-1"><a class="header-anchor" href="#光栅化" aria-hidden="true">#</a> 光栅化</h2><p>渲染引擎在生成好绘制指令列表后会交给合成线程处理，合成线程会对图层进行分块，优先处理在视口将要展示的图块。对图块进行光栅化处理，也就是生成位图，这个过程可以利用GPU进程进行加速处理。</p><p><img src="https://wozien-cloud-oss.oss-cn-shenzhen.aliyuncs.com/images/blog/a8d954cd8e4722ee03d14afaa14c3987.webp" alt=""></p><h2 id="合成和显示" tabindex="-1"><a class="header-anchor" href="#合成和显示" aria-hidden="true">#</a> 合成和显示</h2><p>一旦所有图块都进行完光栅化后，合成线程就会发送一个绘制图块的命令 <code>DrawQuad</code> 给浏览器主进程，然后浏览器进程将页面内容绘制在内存中，最后将内存显示在屏幕。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>用一张图来总结整个渲染进程</p><p><img src="https://wozien-cloud-oss.oss-cn-shenzhen.aliyuncs.com/images/blog/975fcbf7f83cc20d216f3d68a85d0f37.webp" alt=""></p><p>可见浏览器每一帧的图片生成还是挺复杂的，所以要尽量减少重排和重绘的操作，css动画要进行加速处理，直接进入合成阶段即可。</p>',48),s={},h=(0,l(3744).Z)(s,[["render",function(e,a){return i}]])},3744:(e,a)=>{a.Z=(e,a)=>{for(const[l,i]of a)e[l]=i;return e}}}]);