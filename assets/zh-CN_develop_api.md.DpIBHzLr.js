import{_ as d,o as e,c as r,a0 as n}from"./chunks/framework.CwR-YdiG.js";const y=JSON.parse('{"title":"API 列表","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/develop/api.md","filePath":"zh-CN/develop/api.md","lastUpdated":1731741500000}'),l={name:"zh-CN/develop/api.md"};function a(s,t,i,g,o,_){return e(),r("div",null,t[0]||(t[0]=[n('<h1 id="api-列表" tabindex="-1">API 列表 <a class="header-anchor" href="#api-列表" aria-label="Permalink to &quot;API 列表&quot;">​</a></h1><p>LLOneBot 实现了 OneBot 11 以及 go-cqhttp 的大部分 API</p><p>接口详细示例: <a href="https://api.napneko.com" target="_blank" rel="noreferrer">点击跳转</a></p><h2 id="连接方式支持情况" tabindex="-1">连接方式支持情况 <a class="header-anchor" href="#连接方式支持情况" aria-label="Permalink to &quot;连接方式支持情况&quot;">​</a></h2><table tabindex="0"><thead><tr><th>连接方式</th><th style="text-align:center;">可用</th></tr></thead><tbody><tr><td>HTTP 接口调用</td><td style="text-align:center;">✔</td></tr><tr><td>HTTP 事件上报</td><td style="text-align:center;">✔</td></tr><tr><td>HTTP POST 快速操作</td><td style="text-align:center;">✔</td></tr><tr><td>正向 WS 连接</td><td style="text-align:center;">✔</td></tr><tr><td>反向 WS 连接</td><td style="text-align:center;">✔</td></tr></tbody></table><h2 id="api-支持情况" tabindex="-1">API 支持情况 <a class="header-anchor" href="#api-支持情况" aria-label="Permalink to &quot;API 支持情况&quot;">​</a></h2><h3 id="onebot-11" tabindex="-1">OneBot 11 <a class="header-anchor" href="#onebot-11" aria-label="Permalink to &quot;OneBot 11&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>详细用法参阅 <a href="https://github.com/botuniverse/onebot-11/blob/master/api/public.md" target="_blank" rel="noreferrer">OneBot 11 文档</a></p></div><table tabindex="0"><thead><tr><th>功能</th><th>API</th><th style="text-align:center;">可用</th><th>备注</th></tr></thead><tbody><tr><td>获取 bot 账号信息</td><td>get_login_info</td><td style="text-align:center;">✔</td><td></td></tr><tr><td>发送消息</td><td>send_msg</td><td style="text-align:center;">✔</td><td></td></tr><tr><td>发送群聊消息</td><td>send_group_msg</td><td style="text-align:center;">✔</td><td></td></tr><tr><td>发送好友消息</td><td>send_private_msg</td><td style="text-align:center;">✔</td><td>不支持主动临时消息</td></tr><tr><td>获取消息详情</td><td>get_msg</td><td style="text-align:center;">✔</td><td></td></tr><tr><td>撤回消息</td><td>delete_msg</td><td style="text-align:center;">✔</td><td></td></tr><tr><td>发送好友赞</td><td>send_like</td><td style="text-align:center;">✔</td><td></td></tr><tr><td>获取好友列表</td><td>get_friend_list</td><td style="text-align:center;">✔</td><td></td></tr><tr><td>处理好友请求</td><td>set_friend_add_request</td><td style="text-align:center;">✔</td><td></td></tr><tr><td>获取群列表</td><td>get_group_list</td><td style="text-align:center;">✔</td><td></td></tr><tr><td>获取群信息</td><td>get_group_info</td><td style="text-align:center;">✔</td><td></td></tr><tr><td>获取群成员列表</td><td>get_group_member_list</td><td style="text-align:center;">✔</td><td></td></tr><tr><td>获取群成员信息</td><td>get_group_member_info</td><td style="text-align:center;">✔</td><td></td></tr><tr><td>获取群荣誉信息</td><td>get_group_honor_info</td><td style="text-align:center;">✔</td><td></td></tr><tr><td>设置群组专属头衔</td><td>set_group_special_title</td><td style="text-align:center;">✔</td><td></td></tr><tr><td>群匿名禁言</td><td>set_group_anonymous_ban</td><td style="text-align:center;">❌</td><td></td></tr><tr><td>开关群匿名</td><td>set_group_anonymous</td><td style="text-align:center;">❌</td><td></td></tr><tr><td>处理加群请求</td><td>set_group_add_request</td><td style="text-align:center;">✔</td><td></td></tr><tr><td>退群</td><td>set_group_leave</td><td style="text-align:center;">✔</td><td></td></tr><tr><td>群踢人</td><td>set_group_kick</td><td style="text-align:center;">✔</td><td></td></tr><tr><td>群禁言</td><td>set_group_ban</td><td style="text-align:center;">✔</td><td></td></tr><tr><td>全群禁言</td><td>set_group_whole_ban</td><td style="text-align:center;">✔</td><td></td></tr><tr><td>设置管理员</td><td>set_group_admin</td><td style="text-align:center;">✔</td><td></td></tr><tr><td>设置群名片</td><td>set_group_card</td><td style="text-align:center;">✔</td><td></td></tr><tr><td>设置群名</td><td>set_group_name</td><td style="text-align:center;">✔</td><td></td></tr><tr><td>获取陌生人信息</td><td>get_stranger_info</td><td style="text-align:center;">✔</td><td></td></tr><tr><td>获取版本信息</td><td>get_version_info</td><td style="text-align:center;">✔</td><td></td></tr><tr><td>获取状态</td><td>get_status</td><td style="text-align:center;">✔</td><td></td></tr><tr><td>检查能否发送图片</td><td>can_send_image</td><td style="text-align:center;">✔</td><td></td></tr><tr><td>检查能否发送语音</td><td>can_send_record</td><td style="text-align:center;">✔</td><td></td></tr><tr><td>获取图片详情</td><td>get_image</td><td style="text-align:center;">✔</td><td></td></tr><tr><td>获取语音文件</td><td>get_record</td><td style="text-align:center;">✔</td><td></td></tr><tr><td>获取文件详情</td><td>get_file</td><td style="text-align:center;">✔</td><td></td></tr><tr><td>获取 Cookies</td><td>get_cookies</td><td style="text-align:center;">✔</td><td></td></tr><tr><td>获取 CSRF Token</td><td>get_csrf_token</td><td style="text-align:center;">❌</td><td></td></tr><tr><td>获取 QQ 相关接口凭证</td><td>get_credentials</td><td style="text-align:center;">❌</td><td></td></tr><tr><td>重启</td><td>set_restart</td><td style="text-align:center;">✔</td><td></td></tr><tr><td>清理缓存</td><td>clean_cache</td><td style="text-align:center;">✔</td><td></td></tr></tbody></table><h3 id="go-cqhttp" tabindex="-1">Go-CQHTTP <a class="header-anchor" href="#go-cqhttp" aria-label="Permalink to &quot;Go-CQHTTP&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>详细用法参阅 <a href="https://docs.go-cqhttp.org/api/" target="_blank" rel="noreferrer">go-cqhttp 文档</a></p></div><table tabindex="0"><thead><tr><th>功能</th><th>API</th><th style="text-align:center;">可用</th></tr></thead><tbody><tr><td>发送合并转发 ( 好友 )</td><td>send_private_forward_msg</td><td style="text-align:center;">✔</td></tr><tr><td>发送合并转发 ( 群聊 )</td><td>send_group_forward_msg</td><td style="text-align:center;">✔</td></tr><tr><td>获取群消息历史记录</td><td>get_group_msg_history</td><td style="text-align:center;">✔</td></tr><tr><td>获取合并转发内容</td><td>get_forward_msg</td><td style="text-align:center;">✔</td></tr><tr><td>上传群文件</td><td>upload_group_file</td><td style="text-align:center;">✔</td></tr><tr><td>上传私聊文件</td><td>upload_private_file</td><td style="text-align:center;">✔</td></tr><tr><td>下载文件到缓存目录</td><td>download_file</td><td style="text-align:center;">✔</td></tr><tr><td>设置精华消息</td><td>set_essence_msg</td><td style="text-align:center;">✔</td></tr><tr><td>移出精华消息</td><td>delete_essence_msg</td><td style="text-align:center;">✔</td></tr><tr><td>删除群文件</td><td>delete_group_file</td><td style="text-align:center;">✔</td></tr><tr><td>创建群文件文件夹</td><td>create_group_file_folder</td><td style="text-align:center;">✔</td></tr><tr><td>删除群文件文件夹</td><td>delete_group_folder</td><td style="text-align:center;">✔</td></tr><tr><td>获取群系统消息</td><td>get_group_system_msg</td><td style="text-align:center;">✔</td></tr><tr><td>获取群 @全体成员 剩余次数</td><td>get_group_at_all_remain</td><td style="text-align:center;">✔</td></tr><tr><td>获取群根目录文件列表</td><td>get_group_root_files</td><td style="text-align:center;">✔</td></tr><tr><td>发送群公告</td><td>_send_group_notice</td><td style="text-align:center;">✔</td></tr><tr><td>标记消息已读</td><td>mark_msg_as_read</td><td style="text-align:center;">✔</td></tr><tr><td>获取群子目录文件列表</td><td>get_group_files_by_folder</td><td style="text-align:center;">✔</td></tr><tr><td>获取精华消息列表</td><td>get_essence_msg_list</td><td style="text-align:center;">✔</td></tr><tr><td>获取群文件资源链接</td><td>get_group_file_url</td><td style="text-align:center;">✔</td></tr><tr><td>获取群公告</td><td>_get_group_notice</td><td style="text-align:center;">✔</td></tr><tr><td>删除好友</td><td>delete_friend</td><td style="text-align:center;">✔</td></tr><tr><td>图片 OCR</td><td>ocr_image</td><td style="text-align:center;">✔</td></tr><tr><td>获取群文件系统信息</td><td>get_group_file_system_info</td><td style="text-align:center;">✔</td></tr></tbody></table><h3 id="llonebot" tabindex="-1">LLOneBot <a class="header-anchor" href="#llonebot" aria-label="Permalink to &quot;LLOneBot&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>详细用法参阅 <a href="https://api.napneko.com" target="_blank" rel="noreferrer">https://api.napneko.com</a></p></div><table tabindex="0"><thead><tr><th>功能</th><th>API</th><th style="text-align:center;">可用</th></tr></thead><tbody><tr><td>设置头像</td><td>set_qq_avatar</td><td style="text-align:center;">✔</td></tr><tr><td>获取文件信息</td><td>get_file</td><td style="text-align:center;">✔</td></tr><tr><td>获取已过滤的加群通知</td><td>get_group_ignore_add_request</td><td style="text-align:center;">✔</td></tr><tr><td>转发单条信息到私聊</td><td>forward_friend_single_msg</td><td style="text-align:center;">✔</td></tr><tr><td>转发单条信息到群聊</td><td>forward_group_single_msg</td><td style="text-align:center;">✔</td></tr><tr><td>设置消息的表情回应</td><td>set_msg_emoji_like</td><td style="text-align:center;">✔</td></tr><tr><td>获取好友分类列表</td><td>get_friends_with_category</td><td style="text-align:center;">✔</td></tr><tr><td>设置自身在线状态</td><td>set_online_status</td><td style="text-align:center;">✔</td></tr><tr><td>获取自身点赞列表</td><td>get_profile_like</td><td style="text-align:center;">✔</td></tr><tr><td>发送合并转发消息</td><td>send_forward_msg</td><td style="text-align:center;">✔</td></tr><tr><td>获取收藏表情</td><td>fetch_custom_face</td><td style="text-align:center;">✔</td></tr><tr><td>获取好友历史消息记录</td><td>get_friend_msg_history</td><td style="text-align:center;">✔</td></tr><tr><td>获取表情回应列表</td><td>fetch_emoji_like</td><td style="text-align:center;">✔</td></tr><tr><td>获取官方机器人 QQ 号区间</td><td>get_robot_uin_range</td><td style="text-align:center;">✔</td></tr><tr><td>好友戳一戳</td><td>friend_poke</td><td style="text-align:center;">✔</td></tr><tr><td>群组戳一戳</td><td>group_poke</td><td style="text-align:center;">✔</td></tr><tr><td>设置好友备注</td><td>set_friend_remark</td><td style="text-align:center;">✔</td></tr><tr><td>移动好友到分组</td><td>set_friend_category</td><td style="text-align:center;">✔</td></tr><tr><td>设置群备注</td><td>set_group_remark</td><td style="text-align:center;">✔</td></tr><tr><td>设置群消息接收方式</td><td>set_group_msg_mask</td><td style="text-align:center;">✔</td></tr></tbody></table>',15)]))}const p=d(l,[["render",a]]);export{y as __pageData,p as default};
