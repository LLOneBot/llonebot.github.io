import{_ as i,c as l,o as e,a2 as a}from"./chunks/framework.Bx6qu0xe.js";const g=JSON.parse('{"title":"Api List","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/develop/api.md","filePath":"en-US/develop/api.md","lastUpdated":1709385244000}'),t={name:"en-US/develop/api.md"},s=a(`<h1 id="api-list" tabindex="-1">Api List <a class="header-anchor" href="#api-list" aria-label="Permalink to &quot;Api List&quot;">​</a></h1><h2 id="总览-支持的api" tabindex="-1">总览-支持的API <a class="header-anchor" href="#总览-支持的api" aria-label="Permalink to &quot;总览-支持的API&quot;">​</a></h2><p>目前支持的协议</p><ul><li>[x] http调用api</li><li>[x] http事件上报</li><li>[x] 正向websocket</li><li>[x] 反向websocket</li></ul><p>主要功能:</p><ul><li>[x] 发送好友消息</li><li>[x] 发送群消息</li><li>[x] 获取好友列表</li><li>[x] 获取群列表</li><li>[x] 获取群成员列表</li><li>[x] 撤回消息</li><li>[x] 处理添加好友请求</li><li>[x] 处理加群请求</li><li>[x] 退群</li><li>[x] 上报好友消息</li><li>[x] 上报添加好友请求</li><li>[x] 上报群消息</li><li>[x] 上报好友、群消息撤回</li><li>[x] 上报加群请求</li><li>[x] 上报群员人数变动（尚不支持识别群员人数变动原因）</li><li>[x] 设置群管理员</li><li>[x] 群禁言/全体禁言</li><li>[x] 群踢人</li><li>[x] 群改群成员名片</li><li>[x] 修改群名</li></ul><p>消息格式支持:</p><ul><li>[x] cq码</li><li>[x] 文字</li><li>[x] 表情</li><li>[x] 图片</li><li>[x] 引用消息</li><li>[x] @群成员</li><li>[x] 语音(支持mp3、wav等多种音频格式直接发送)</li><li>[x] json消息(只上报)</li><li>[x] 转发消息记录(目前只能发不能收)</li><li>[x] 视频(上报时暂时只有个空的file)</li><li>[x] 文件(上报时暂时只有个空的file), type为file, data为{file: uri}, 发送时uri支持http://, file://, base64://<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;type&quot;: &quot;file&quot;,</span></span>
<span class="line"><span>    &quot;data&quot;: {</span></span>
<span class="line"><span>        &quot;file&quot;: &quot;file:///D:/1.txt&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div></li><li>[ ] 发送音乐卡片</li><li>[ ] 红包（没有计划支持）</li><li>[ ] xml (没有计划支持)</li></ul><h2 id="support-onebot-v11-api" tabindex="-1">Support onebot v11 api <a class="header-anchor" href="#support-onebot-v11-api" aria-label="Permalink to &quot;Support onebot v11 api&quot;">​</a></h2><ul><li>[x] get_login_info</li><li>[x] send_msg</li><li>[x] send_group_msg</li><li>[x] send_private_msg</li><li>[x] delete_msg</li><li>[x] get_group_list</li><li>[x] get_group_info</li><li>[x] get_group_member_list</li><li>[x] get_group_member_info</li><li>[x] get_friend_list</li><li>[x] set_friend_add_request</li><li>[x] get_msg</li><li>[x] send_like</li><li>[x] set_group_add_request</li><li>[x] set_group_leave</li><li>[x] set_group_kick</li><li>[x] set_group_ban</li><li>[x] set_group_whole_ban</li><li>[x] set_group_kick</li><li>[x] set_group_admin</li><li>[x] set_group_card</li><li>[x] set_group_name</li><li>[x] get_version_info</li><li>[x] get_status</li><li>[x] can_send_image</li><li>[x] can_send_record</li><li>[x] get_image</li><li>[x] get_record</li></ul><h3 id="support-go-cqhtp-api" tabindex="-1">Support go-cqhtp api <a class="header-anchor" href="#support-go-cqhtp-api" aria-label="Permalink to &quot;Support go-cqhtp api&quot;">​</a></h3><ul><li>[x] send_private_forward_msg</li><li>[x] send_group_forward_msg</li><li>[x] get_stranger_info</li></ul>`,12),p=[s];function o(n,_,r,x,u,d){return e(),l("div",null,p)}const h=i(t,[["render",o]]);export{g as __pageData,h as default};