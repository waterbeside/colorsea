import{_ as c,M as e,p as l,q as i,N as a,U as t,Q as n,t as s,a1 as u}from"./framework-cbc93935.js";const r={},k=n("h1",{id:"快速上手",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#快速上手","aria-hidden":"true"},"#"),s(" 快速上手")],-1),d=n("h2",{id:"安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),s(" 安装")],-1),m=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(` colorsea 
`)])])],-1),v=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(` colorsea 
`)])])],-1),b=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(` colorsea 
`)])])],-1),f=n("h2",{id:"导入和使用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#导入和使用","aria-hidden":"true"},"#"),s(" 导入和使用")],-1),h=n("h3",{id:"导入",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#导入","aria-hidden":"true"},"#"),s(" 导入")],-1),g=n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" colorsea "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'colorsea'"),s(`
`)])])],-1),_=n("div",{class:"language-javascript","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" colorsea "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'colorsea'"),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1),y=n("div",{class:"language-html","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("path/to/colorsea.js"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"}),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),x=u(`<h3 id="颜色空间转换" tabindex="-1"><a class="header-anchor" href="#颜色空间转换" aria-hidden="true">#</a> 颜色空间转换</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// ----- color conversion</span>
<span class="token function">colorsea</span><span class="token punctuation">(</span><span class="token string">&#39;#ff0000&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">rgb</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// [255, 0, 0]</span>
<span class="token function">colorsea</span><span class="token punctuation">(</span><span class="token string">&#39;#ff0000&#39;</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">rgba</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// [255, 0, 0, 50]</span>
<span class="token comment">// colorsea() 函数可以创建一个Color实例</span>
<span class="token keyword">const</span> color <span class="token operator">=</span> <span class="token function">colorsea</span><span class="token punctuation">(</span><span class="token string">&#39;#405060&#39;</span><span class="token punctuation">)</span>
color<span class="token punctuation">.</span><span class="token function">rgba</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// [255, 0, 0, 50]</span>
color<span class="token punctuation">.</span><span class="token function">xyz</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// [7.09, 7.67, 12.17]</span>
color<span class="token punctuation">.</span><span class="token function">lab</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// [33.29, -1.94, -11.36] </span>
<span class="token comment">// Convert from other color spaces</span>
colorsea<span class="token punctuation">.</span><span class="token function">xyz</span><span class="token punctuation">(</span><span class="token number">7.09</span><span class="token punctuation">,</span> <span class="token number">7.67</span><span class="token punctuation">,</span> <span class="token number">12.17</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">rgb</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// [64, 80, 96]</span>
colorsea<span class="token punctuation">.</span><span class="token function">hsl</span><span class="token punctuation">(</span><span class="token number">210</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">31.37</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">rgb</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// [64, 80, 96]</span>
<span class="token comment">// ... Other color spaces are similar</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="颜色操作" tabindex="-1"><a class="header-anchor" href="#颜色操作" aria-hidden="true">#</a> 颜色操作</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// ---- Color operations</span>
<span class="token keyword">const</span> color <span class="token operator">=</span> <span class="token function">colorsea</span><span class="token punctuation">(</span><span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> newColor <span class="token operator">=</span> color<span class="token punctuation">.</span><span class="token function">darken</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment">// All operations will return a new Color instance object</span>
newColor<span class="token punctuation">.</span><span class="token function">hex</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// #e6e6e6</span>
<span class="token function">colorsea</span><span class="token punctuation">(</span><span class="token string">&#39;#000&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">lighten</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hex</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// #1a1a1a</span>
<span class="token function">colorsea</span><span class="token punctuation">(</span><span class="token string">&#39;#ff0000&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">spin</span><span class="token punctuation">(</span><span class="token number">180</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hex</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// #00ffff</span>
colorsea<span class="token punctuation">.</span><span class="token function">hsl</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">saturate</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hsl</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// [80, 100, 20]</span>
colorsea<span class="token punctuation">.</span><span class="token function">hsl</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">desaturate</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hsl</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// [80, 80, 20]</span>
<span class="token function">colorsea</span><span class="token punctuation">(</span><span class="token string">&#39;#776600&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fadeOut</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">rgba</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// [119, 102, 0, 90]</span>

<span class="token keyword">const</span> color1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token string">&#39;#ff0000&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> color2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token string">&#39;#0000ff&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> color <span class="token operator">=</span> color1<span class="token punctuation">.</span><span class="token function">mix</span><span class="token punctuation">(</span>color2<span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>
color<span class="token punctuation">.</span><span class="token function">hex</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// #cc0033</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="色差计算" tabindex="-1"><a class="header-anchor" href="#色差计算" aria-hidden="true">#</a> 色差计算</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> color1 <span class="token operator">=</span> colorsea<span class="token punctuation">.</span><span class="token function">lab</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">)</span> <span class="token comment">// 标准色（参考色）</span>
<span class="token keyword">const</span> color2 <span class="token operator">=</span> colorsea<span class="token punctuation">.</span><span class="token function">lab</span><span class="token punctuation">(</span><span class="token number">79</span><span class="token punctuation">,</span> <span class="token number">28</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token comment">// 样品色</span>

<span class="token comment">// 使用CMC(1:1)公式</span>
color1<span class="token punctuation">.</span><span class="token function">deltaE</span><span class="token punctuation">(</span>color2<span class="token punctuation">,</span> <span class="token string">&#39;CMC&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 5.754...</span>
<span class="token comment">// 参数二默认为&#39;CMC&#39; 故可省略参数二</span>
color1<span class="token punctuation">.</span><span class="token function">deltaE</span><span class="token punctuation">(</span>color2<span class="token punctuation">)</span>

<span class="token comment">// CMC(2:1)公式, 只需把权重因子l设为2即可 (c默认为1)</span>
color1<span class="token punctuation">.</span><span class="token function">deltaE</span><span class="token punctuation">(</span>color2<span class="token punctuation">,</span> <span class="token string">&#39;CMC&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> l<span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 5.719...</span>

<span class="token comment">// 使用CIE2000公式</span>
color1<span class="token punctuation">.</span><span class="token function">deltaE</span><span class="token punctuation">(</span>color2<span class="token punctuation">,</span> <span class="token string">&#39;CIE2000&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 3.6815...</span>

<span class="token comment">// 使用CIE1994公式</span>
color1<span class="token punctuation">.</span><span class="token function">deltaE</span><span class="token punctuation">(</span>color2<span class="token punctuation">,</span> <span class="token string">&#39;CIE1994&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 3.3725...</span>

<span class="token comment">// 使用CIE1976公式</span>
color1<span class="token punctuation">.</span><span class="token function">deltaE</span><span class="token punctuation">(</span>color2<span class="token punctuation">,</span> <span class="token string">&#39;CIE1976&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 20.1246...</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用颜色名称" tabindex="-1"><a class="header-anchor" href="#使用颜色名称" aria-hidden="true">#</a> 使用颜色名称</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> colorsea <span class="token keyword">from</span> <span class="token string">&#39;colorsea&#39;</span>
<span class="token keyword">import</span> x11 <span class="token keyword">from</span> <span class="token string">&#39;colorsea/colors/x11&#39;</span>
<span class="token comment">// 载入X11颜色名</span>
colorsea<span class="token punctuation">.</span><span class="token function">useNames</span><span class="token punctuation">(</span>x11<span class="token punctuation">)</span>

<span class="token comment">// 此时你可以直接使用X11颜色名称来创建颜色</span>
<span class="token function">colorsea</span><span class="token punctuation">(</span><span class="token string">&#39;Aqua&#39;</span><span class="token punctuation">)</span> <span class="token comment">// color: #00ffff</span>
<span class="token function">colorsea</span><span class="token punctuation">(</span><span class="token string">&#39;Aquamarine&#39;</span><span class="token punctuation">)</span> <span class="token comment">// color: #7fffd4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> chinese <span class="token keyword">from</span> <span class="token string">&#39;colorsea/colors/chinese&#39;</span> <span class="token comment">//中国传统色</span>
<span class="token keyword">import</span> nippon <span class="token keyword">from</span> <span class="token string">&#39;colorsea/colors/nippon&#39;</span> <span class="token comment">//日本传统色</span>
<span class="token comment">// 同时载入两者</span>
colorsea<span class="token punctuation">.</span><span class="token function">useNames</span><span class="token punctuation">(</span>chinese<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">useNames</span><span class="token punctuation">(</span>nippon<span class="token punctuation">)</span>

<span class="token comment">// 使用</span>
<span class="token function">colorsea</span><span class="token punctuation">(</span><span class="token string">&#39;山梗紫&#39;</span><span class="token punctuation">)</span> <span class="token comment">// color: #61649F</span>
<span class="token function">colorsea</span><span class="token punctuation">(</span><span class="token string">&#39;水がき&#39;</span><span class="token punctuation">)</span> <span class="token comment">// color: #B9887D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function C(w,E){const p=e("CodeGroupItem"),o=e("CodeGroup");return l(),i("div",null,[k,d,a(o,null,{default:t(()=>[a(p,{title:"PNPM"},{default:t(()=>[m]),_:1}),a(p,{title:"YARN"},{default:t(()=>[v]),_:1}),a(p,{title:"NPM",active:""},{default:t(()=>[b]),_:1})]),_:1}),f,h,a(o,null,{default:t(()=>[a(p,{title:"ES Module",active:""},{default:t(()=>[g]),_:1}),a(p,{title:"CommonJs"},{default:t(()=>[_]),_:1}),a(p,{title:"Browser"},{default:t(()=>[y]),_:1})]),_:1}),x])}const M=c(r,[["render",C],["__file","QuickStart.html.vue"]]);export{M as default};