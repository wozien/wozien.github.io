"use strict";(self.webpackChunkfe_note=self.webpackChunkfe_note||[]).push([[9338],{8034:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-95eb7d16",path:"/summary/tools/nginx.html",title:"Nginx 速查",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"常用命令",slug:"常用命令",children:[{level:3,title:"柔和重启",slug:"柔和重启",children:[]},{level:3,title:"配置文件检查",slug:"配置文件检查",children:[]}]},{level:2,title:"常用配置",slug:"常用配置",children:[{level:3,title:"反向代理",slug:"反向代理",children:[]},{level:3,title:"负载均衡",slug:"负载均衡",children:[]},{level:3,title:"http服务器",slug:"http服务器",children:[]},{level:3,title:"动静分离",slug:"动静分离",children:[]},{level:3,title:"正向代理",slug:"正向代理",children:[]},{level:3,title:"根据文件类型设置过期时间",slug:"根据文件类型设置过期时间",children:[]}]},{level:2,title:"匹配规则",slug:"匹配规则",children:[]},{level:2,title:"常见问题",slug:"常见问题",children:[]}],filePathRelative:"summary/tools/nginx.md",git:{updatedTime:1635477711e3}}},9140:(n,s,a)=>{a.r(s),a.d(s,{default:()=>l});const p=(0,a(6252).uE)('<h1 id="nginx-速查" tabindex="-1"><a class="header-anchor" href="#nginx-速查" aria-hidden="true">#</a> Nginx 速查</h1><p>Nginx是一款轻量级的HTTP服务器，采用事件驱动的异步非阻塞处理方式框架，这让其具有极好的IO性能，时常用于服务端的反向代理和负载均衡。</p><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><h3 id="柔和重启" tabindex="-1"><a class="header-anchor" href="#柔和重启" aria-hidden="true">#</a> 柔和重启</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nginx -s reload\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="配置文件检查" tabindex="-1"><a class="header-anchor" href="#配置文件检查" aria-hidden="true">#</a> 配置文件检查</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nginx -t\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="常用配置" tabindex="-1"><a class="header-anchor" href="#常用配置" aria-hidden="true">#</a> 常用配置</h2><h3 id="反向代理" tabindex="-1"><a class="header-anchor" href="#反向代理" aria-hidden="true">#</a> 反向代理</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>server <span class="token punctuation">{</span>  \n  listen <span class="token number">80</span><span class="token punctuation">;</span>                                                         \n  server_name localhost<span class="token punctuation">;</span>                                               \n  client_max_body_size 1024M<span class="token punctuation">;</span>\n\n  location / <span class="token punctuation">{</span>\n    proxy_pass http://localhost:8080<span class="token punctuation">;</span>\n    proxy_set_header Host <span class="token variable">$host</span><span class="token builtin class-name">:</span><span class="token variable">$server_port</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="负载均衡" tabindex="-1"><a class="header-anchor" href="#负载均衡" aria-hidden="true">#</a> 负载均衡</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>upstream <span class="token builtin class-name">test</span> <span class="token punctuation">{</span>\n  server localhost:8080<span class="token punctuation">;</span>\n  server localhost:8081<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\nserver <span class="token punctuation">{</span>\n  listen <span class="token number">81</span><span class="token punctuation">;</span>                                                         \n  server_name localhost<span class="token punctuation">;</span>                                               \n  client_max_body_size 1024M<span class="token punctuation">;</span>\n\n  location / <span class="token punctuation">{</span>\n    proxy_pass http://test<span class="token punctuation">;</span>\n    proxy_set_header Host <span class="token variable">$host</span><span class="token builtin class-name">:</span><span class="token variable">$server_port</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="http服务器" tabindex="-1"><a class="header-anchor" href="#http服务器" aria-hidden="true">#</a> http服务器</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>server <span class="token punctuation">{</span>\n  listen <span class="token number">80</span><span class="token punctuation">;</span>                                                         \n  server_name localhost<span class="token punctuation">;</span>                                               \n  client_max_body_size 1024M<span class="token punctuation">;</span>\n\n  location / <span class="token punctuation">{</span>\n    root e:<span class="token punctuation">\\</span>wwwroot<span class="token punctuation">;</span>\n    index index.html<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="动静分离" tabindex="-1"><a class="header-anchor" href="#动静分离" aria-hidden="true">#</a> 动静分离</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>upstream test<span class="token punctuation">{</span>  \n  server localhost:8080<span class="token punctuation">;</span>  \n  server localhost:8081<span class="token punctuation">;</span>  \n<span class="token punctuation">}</span>   \n\nserver <span class="token punctuation">{</span>  \n  listen <span class="token number">80</span><span class="token punctuation">;</span>  \n  server_name localhost<span class="token punctuation">;</span>  \n\n  location / <span class="token punctuation">{</span>  \n    root e:<span class="token punctuation">\\</span>wwwroot<span class="token punctuation">;</span>  \n    index index.html<span class="token punctuation">;</span>  \n  <span class="token punctuation">}</span>  \n\n  --所有静态请求都由nginx处理，存放目录为html  \n  location ~ <span class="token punctuation">\\</span>.<span class="token punctuation">(</span>gif<span class="token operator">|</span>jpg<span class="token operator">|</span>jpeg<span class="token operator">|</span>png<span class="token operator">|</span>bmp<span class="token operator">|</span>swf<span class="token operator">|</span>css<span class="token operator">|</span>js<span class="token punctuation">)</span>$ <span class="token punctuation">{</span>  \n    root e:<span class="token punctuation">\\</span>wwwroot<span class="token punctuation">;</span>  \n  <span class="token punctuation">}</span>  \n\n  --所有动态请求都转发给tomcat处理  \n  location ~ <span class="token punctuation">\\</span>.<span class="token punctuation">(</span>jsp<span class="token operator">|</span><span class="token keyword">do</span><span class="token punctuation">)</span>$ <span class="token punctuation">{</span>  \n    proxy_pass http://test<span class="token punctuation">;</span>  \n  <span class="token punctuation">}</span>  \n\n  error_page <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span> /50x.html<span class="token punctuation">;</span>  \n  location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>  \n    root e:<span class="token punctuation">\\</span>wwwroot<span class="token punctuation">;</span>  \n  <span class="token punctuation">}</span>  \n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h3 id="正向代理" tabindex="-1"><a class="header-anchor" href="#正向代理" aria-hidden="true">#</a> 正向代理</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>resolver <span class="token number">114.114</span>.114.114 <span class="token number">8.8</span>.8.8<span class="token punctuation">;</span>\n  server <span class="token punctuation">{</span>\n    resolver_timeout 5s<span class="token punctuation">;</span>\n\n    listen <span class="token number">81</span><span class="token punctuation">;</span>\n\n    access_log e:<span class="token punctuation">\\</span>wwwroot<span class="token punctuation">\\</span>proxy.access.log<span class="token punctuation">;</span>\n    error_log e:<span class="token punctuation">\\</span>wwwroot<span class="token punctuation">\\</span>proxy.error.log<span class="token punctuation">;</span>\n\n    location / <span class="token punctuation">{</span>\n      proxy_pass http://<span class="token variable">$host</span><span class="token variable">$request_uri</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n<span class="token comment">#防盗链</span>\nlocation ~* <span class="token punctuation">\\</span>.<span class="token punctuation">(</span>gif<span class="token operator">|</span>jpg<span class="token operator">|</span>png<span class="token punctuation">)</span>$ <span class="token punctuation">{</span>\n    <span class="token comment"># 只允许 192.168.0.1 请求资源</span>\n    valid_referers none blocked <span class="token number">192.168</span>.0.1<span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$invalid_referer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n       rewrite ^/ http://<span class="token variable">$host</span>/logo.png<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="根据文件类型设置过期时间" tabindex="-1"><a class="header-anchor" href="#根据文件类型设置过期时间" aria-hidden="true">#</a> 根据文件类型设置过期时间</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>location ~.*<span class="token punctuation">\\</span>.css$ <span class="token punctuation">{</span>\n    expires 1d<span class="token punctuation">;</span>\n    <span class="token builtin class-name">break</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\nlocation ~.*<span class="token punctuation">\\</span>.js$ <span class="token punctuation">{</span>\n    expires 1d<span class="token punctuation">;</span>\n    <span class="token builtin class-name">break</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nlocation ~ .*<span class="token punctuation">\\</span>.<span class="token punctuation">(</span>gif<span class="token operator">|</span>jpg<span class="token operator">|</span>jpeg<span class="token operator">|</span>png<span class="token operator">|</span>bmp<span class="token operator">|</span>swf<span class="token punctuation">)</span>$ <span class="token punctuation">{</span>\n    access_log off<span class="token punctuation">;</span>\n    expires 15d<span class="token punctuation">;</span> <span class="token comment">#保存15天</span>\n    <span class="token builtin class-name">break</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="匹配规则" tabindex="-1"><a class="header-anchor" href="#匹配规则" aria-hidden="true">#</a> 匹配规则</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>location <span class="token operator">=</span> / <span class="token punctuation">{</span>\n  <span class="token comment"># 精确匹配 / ，主机名后面不能带任何字符串</span>\n  <span class="token punctuation">[</span> configuration A <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n\nlocation / <span class="token punctuation">{</span>\n  <span class="token comment"># 因为所有的地址都以 / 开头，所以这条规则将匹配到所有请求</span>\n  <span class="token comment"># 但是正则和最长字符串会优先匹配</span>\n  <span class="token punctuation">[</span> configuration B <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n\nlocation /documents/ <span class="token punctuation">{</span>\n  <span class="token comment"># 匹配任何以 /documents/ 开头的地址，匹配符合以后，还要继续往下搜索</span>\n  <span class="token comment"># 只有后面的正则表达式没有匹配到时，这一条才会采用这一条</span>\n  <span class="token punctuation">[</span> configuration C <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n\nlocation ~ /documents/Abc <span class="token punctuation">{</span>\n  <span class="token comment"># 匹配任何以 /documents/Abc 开头的地址，匹配符合以后，还要继续往下搜索</span>\n  <span class="token comment"># 只有后面的正则表达式没有匹配到时，这一条才会采用这一条</span>\n  <span class="token punctuation">[</span> configuration CC <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n\nlocation ^~ /images/ <span class="token punctuation">{</span>\n  <span class="token comment"># 匹配任何以 /images/ 开头的地址，匹配符合以后，停止往下搜索正则，采用这一条。</span>\n  <span class="token punctuation">[</span> configuration D <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n\nlocation ~* <span class="token punctuation">\\</span>.<span class="token punctuation">(</span>gif<span class="token operator">|</span>jpg<span class="token operator">|</span>jpeg<span class="token punctuation">)</span>$ <span class="token punctuation">{</span>\n  <span class="token comment"># 匹配所有以 gif,jpg或jpeg 结尾的请求</span>\n  <span class="token comment"># 然而，所有请求 /images/ 下的图片会被 config D 处理，因为 ^~ 到达不了这一条正则</span>\n  <span class="token punctuation">[</span> configuration E <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n\nlocation /images/ <span class="token punctuation">{</span>\n  <span class="token comment"># 字符匹配到 /images/，继续往下，会发现 ^~ 存在</span>\n  <span class="token punctuation">[</span> configuration F <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n\nlocation /images/abc <span class="token punctuation">{</span>\n  <span class="token comment"># 最长字符匹配到 /images/abc，继续往下，会发现 ^~ 存在</span>\n  <span class="token comment"># F与G的放置顺序是没有关系的</span>\n  <span class="token punctuation">[</span> configuration G <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n\nlocation ~ /images/abc/ <span class="token punctuation">{</span>\n  <span class="token comment"># 只有去掉 config D 才有效：先最长匹配 config G 开头的地址，继续往下搜索，匹配到这一条正则，采用</span>\n    <span class="token punctuation">[</span> configuration H <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># root 和 alias的区别？</span>\n**root**\nlocation /i/ <span class="token punctuation">{</span>\n  root /data/w3<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n真实的路径是root指定的值加上location指定的值,即/data/w3/i/<span class="token punctuation">..</span>.\n\n**alias**\nlocation /i/ <span class="token punctuation">{</span>\n  <span class="token builtin class-name">alias</span> /data/w3/<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n在服务器查找的资源路径是： /data/w3/<span class="token punctuation">..</span>.\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>',24),e={},l=(0,a(3744).Z)(e,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,p]of s)n[a]=p;return n}}}]);