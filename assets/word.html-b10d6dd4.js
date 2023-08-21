import{_ as t,r as i,o as p,c,a as n,d as s,b as e,e as o}from"./app-446c8cc2.js";const l={},r=n("h1",{id:"word",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#word","aria-hidden":"true"},"#"),s(" Word")],-1),d=n("p",null,"Word自动化办公的功能，目前有：",-1),u=n("ul",null,[n("li",null,"1、Word 批量转成 PDF")],-1),m={href:"https://www.bilibili.com/video/BV1pT4y1k7FH",target:"_blank",rel:"noopener noreferrer"},v=o(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 导入python-office，简写为：office</span>
<span class="token keyword">import</span> office 

path <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>  <span class="token comment"># path这里，填写你存放word文件的位置，例如：C:/app/workbook</span>
office<span class="token punctuation">.</span>word<span class="token punctuation">.</span>docx2pdf<span class="token punctuation">(</span>path<span class="token operator">=</span>path<span class="token punctuation">)</span> <span class="token comment"># 程序就可以自动将该目录下的所有word文档，自动转换成pdf文档了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：这个功能，目前只支持docx格式的文件。</p></blockquote><ul><li>2、doc格式 &amp; docx格式 批量互转</li></ul>`,3),k={href:"https://www.bilibili.com/video/BV1so4y1H7rj",target:"_blank",rel:"noopener noreferrer"},h=o(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># pip install python-office</span>
<span class="token keyword">import</span> office

<span class="token comment"># docx2docx</span>
office<span class="token punctuation">.</span>word<span class="token punctuation">.</span>doc2docx<span class="token punctuation">(</span>input_path<span class="token operator">=</span><span class="token string">r&#39;D:\\workplace\\code\\github\\poword\\demo\\doc_docx\\word_file\\aa.doc&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># docx2doc</span>
office<span class="token punctuation">.</span>word<span class="token punctuation">.</span>docx2doc<span class="token punctuation">(</span>input_path<span class="token operator">=</span><span class="token string">r&#39;C:\\Users\\Lenovo\\Desktop\\temp\\test&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>3、Word 批量合并</li></ul>`,2),_={href:"https://mp.weixin.qq.com/s/PjQJ3s4Arr872NDfcr-7YA",target:"_blank",rel:"noopener noreferrer"},f=o(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 下载方式：pip install python-office</span>
<span class="token keyword">import</span> office

office<span class="token punctuation">.</span>word<span class="token punctuation">.</span>merge4docx<span class="token punctuation">(</span>input_path<span class="token operator">=</span><span class="token string">r&#39;D:\\程序员晚枫的文件夹\\word-in&#39;</span><span class="token punctuation">,</span> 
                        output_path<span class="token operator">=</span><span class="token string">r&#39;D:\\程序员晚枫的文件夹\\word-out&#39;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function b(w,g){const a=i("ExternalLinkIcon");return p(),c("div",null,[r,d,u,n("p",null,[s("视频说明："),n("a",m,[s("传送门"),e(a)])]),v,n("p",null,[s("视频说明："),n("a",k,[s("传送门"),e(a)])]),h,n("p",null,[s("视频说明："),n("a",_,[s("传送门"),e(a)])]),f])}const y=t(l,[["render",b],["__file","word.html.vue"]]);export{y as default};