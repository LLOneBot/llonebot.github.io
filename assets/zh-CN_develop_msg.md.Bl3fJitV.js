import{_ as e,c as s,a0 as a,o as i}from"./chunks/framework.DNxmPsDJ.js";const g=JSON.parse('{"title":"消息格式详细说明","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/develop/msg.md","filePath":"zh-CN/develop/msg.md","lastUpdated":1723367491000}'),n={name:"zh-CN/develop/msg.md"};function l(d,t,r,h,p,k){return i(),s("div",null,t[0]||(t[0]=[a(`<h1 id="消息格式详细说明" tabindex="-1">消息格式详细说明 <a class="header-anchor" href="#消息格式详细说明" aria-label="Permalink to &quot;消息格式详细说明&quot;">​</a></h1><p>见 <a href="https://docs.go-cqhttp.org/cqcode" target="_blank" rel="noreferrer">https://docs.go-cqhttp.org/cqcode</a></p><h2 id="消息格式支持情况" tabindex="-1">消息格式支持情况 <a class="header-anchor" href="#消息格式支持情况" aria-label="Permalink to &quot;消息格式支持情况&quot;">​</a></h2><table tabindex="0"><thead><tr><th>消息格式</th><th style="text-align:center;">收</th><th style="text-align:center;">发</th><th style="text-align:center;">备注</th></tr></thead><tbody><tr><td>cq码</td><td style="text-align:center;">✔</td><td style="text-align:center;">✔</td><td style="text-align:center;"></td></tr><tr><td>文字</td><td style="text-align:center;">✔</td><td style="text-align:center;">✔</td><td style="text-align:center;"></td></tr><tr><td>表情</td><td style="text-align:center;">✔</td><td style="text-align:center;">✔</td><td style="text-align:center;"></td></tr><tr><td>商城表情</td><td style="text-align:center;">✔</td><td style="text-align:center;">✔</td><td style="text-align:center;">见下方详细说明</td></tr><tr><td>markdown</td><td style="text-align:center;">✔</td><td style="text-align:center;">❌</td><td style="text-align:center;">{type: &quot;markdown&quot;, data: {data: &quot;<code>**markdown内容**</code>&quot;}}</td></tr><tr><td>图片</td><td style="text-align:center;">✔</td><td style="text-align:center;">✔</td><td style="text-align:center;"></td></tr><tr><td>引用消息</td><td style="text-align:center;">✔</td><td style="text-align:center;">✔</td><td style="text-align:center;"></td></tr><tr><td>@群成员</td><td style="text-align:center;">✔</td><td style="text-align:center;">✔</td><td style="text-align:center;"></td></tr><tr><td>语音</td><td style="text-align:center;">✔</td><td style="text-align:center;">✔</td><td style="text-align:center;">支持mp3、wav等多种音频格式直接发送</td></tr><tr><td>json消息</td><td style="text-align:center;">✔</td><td style="text-align:center;">✔</td><td style="text-align:center;">发送需要自行签名token</td></tr><tr><td>转发消息记录</td><td style="text-align:center;">✔</td><td style="text-align:center;">✔</td><td style="text-align:center;"><strong>伪造的消息会以 Bot 身份显示</strong></td></tr><tr><td>视频</td><td style="text-align:center;">✔</td><td style="text-align:center;">✔</td><td style="text-align:center;"></td></tr><tr><td>文件</td><td style="text-align:center;">✔</td><td style="text-align:center;">✔</td><td style="text-align:center;">发送时可以指定<code>name</code>参数自定义文件名，详见扩展api</td></tr><tr><td>音乐卡片</td><td style="text-align:center;">✔</td><td style="text-align:center;">✔</td><td style="text-align:center;">需要在设置中填写音卡签名地址，地址在 QQ 群，不保证长久可用</td></tr><tr><td>红包</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">没有计划支持</td></tr><tr><td>xml</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">没有计划支持</td></tr></tbody></table><h3 id="商城表情" tabindex="-1">商城表情 <a class="header-anchor" href="#商城表情" aria-label="Permalink to &quot;商城表情&quot;">​</a></h3><div class="language-json5 vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json5</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mface&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;url&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://xxxx&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 只有上报时有</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xxx&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 如果不知道key，可以通过上报获取</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;emoji_id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xxx&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;emoji_package_id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xxx&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;summary&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;[表情文字描述]&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,6)]))}const o=e(n,[["render",l]]);export{g as __pageData,o as default};
