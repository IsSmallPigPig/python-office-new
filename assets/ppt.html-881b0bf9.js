import{_ as p,r as o,o as i,c,a as n,d as a,b as e,e as t}from"./app-41c45999.js";const r={},l=n("h1",{id:"ppt",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ppt","aria-hidden":"true"},"#"),a(" PPT")],-1),d=n("h2",{id:"_1、ppt批量转成-pdf",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1、ppt批量转成-pdf","aria-hidden":"true"},"#"),a(" 1、PPT批量转成 PDF")],-1),u={href:"https://mp.weixin.qq.com/s/T31F-U5AdDd3D-61b_K5Qg",target:"_blank",rel:"noopener noreferrer"},h=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 导入库：python-office，简写为：office</span>
<span class="token keyword">import</span> office

<span class="token comment"># 填入你的ppt目录</span>
office<span class="token punctuation">.</span>ppt<span class="token punctuation">.</span>ppt2pdf<span class="token punctuation">(</span>path<span class="token operator">=</span><span class="token string">&#39;D:\\\\test\\\\temp\\\\ppt&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、把ppt转为一张长图" tabindex="-1"><a class="header-anchor" href="#_2、把ppt转为一张长图" aria-hidden="true">#</a> 2、把PPT转为一张长图</h2>`,2),m={href:"https://www.bilibili.com/video/BV1pu411Y7zz",target:"_blank",rel:"noopener noreferrer"},v=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
<span class="token keyword">import</span> office

office<span class="token punctuation">.</span>ppt<span class="token punctuation">.</span>ppt2img<span class="token punctuation">(</span>input_path<span class="token operator">=</span>ppt_path<span class="token punctuation">,</span>
                   output_path<span class="token operator">=</span>out_dir<span class="token punctuation">,</span>
                   merge<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、合并ppt" tabindex="-1"><a class="header-anchor" href="#_3、合并ppt" aria-hidden="true">#</a> 3、合并PPT</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
<span class="token keyword">import</span> office

office<span class="token punctuation">.</span>ppt<span class="token punctuation">.</span>merge4ppt<span class="token punctuation">(</span>input_path<span class="token operator">=</span><span class="token string">r&#39;d:\\\\程序员晚枫的文件夹&#39;</span><span class="token punctuation">,</span> output_path<span class="token operator">=</span><span class="token string">r&#39;./&#39;</span><span class="token punctuation">,</span> output_name<span class="token operator">=</span><span class="token string">&#39;merge4ppt.pptx&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function k(_,f){const s=o("ExternalLinkIcon");return i(),c("div",null,[l,d,n("p",null,[a("文字说明："),n("a",u,[a("传送门"),e(s)])]),h,n("p",null,[a("视频说明："),n("a",m,[a("传送门"),e(s)])]),v])}const g=p(r,[["render",k],["__file","ppt.html.vue"]]);export{g as default};
