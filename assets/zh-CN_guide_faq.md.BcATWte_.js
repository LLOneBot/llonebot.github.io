import{_ as a,c as e,o as s,a2 as t}from"./chunks/framework.Bx6qu0xe.js";const f=JSON.parse('{"title":"FAQ","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/guide/faq.md","filePath":"zh-CN/guide/faq.md","lastUpdated":1710661928000}'),l={name:"zh-CN/guide/faq.md"},o=t('<h1 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-label="Permalink to &quot;FAQ&quot;">​</a></h1><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h2><details class="details custom-block"><summary>下载了插件但是没有看到在NTQQ中生效</summary><p>检查是否下载的是插件release的版本，如果是源码的话需要自行编译。 依然不生效请查阅LiteLoaderQQNT的文档</p></details><details class="details custom-block"><summary>调用接口报404</summary><p>目前没有支持全部的onebot规范接口，请检查是否调用了不支持的接口</p></details><details class="details custom-block"><summary>发送不了图片和语音</summary><p>检查当前操作用户是否有LiteLoaderQQNT/data/LLOneBot的写入权限， 如Windows把QQ上安装到C盘有可能会出现无权限导致发送失败</p></details><details class="details custom-block"><summary>QQ变得很卡</summary><p>这是你的群特别多导致的，因为启动后会批量获取群成员列表，获取完之后就正常了</p></details><details class="details custom-block"><summary>如何使用CQ码</summary><p>前往配置界面将消息上报类型格式更改从消息段为CQ码即可</p></details><details class="details custom-block"><summary>无法发送语音或视频</summary><p>需要在 LLOneBot 配置 ffmpeg 路径, <a href="/zh-CN/guide/ffmpeg">ffmpeg 下载地址</a></p></details>',8),d=[o];function i(r,m,c,u,n,p){return s(),e("div",null,d)}const h=a(l,[["render",i]]);export{f as __pageData,h as default};