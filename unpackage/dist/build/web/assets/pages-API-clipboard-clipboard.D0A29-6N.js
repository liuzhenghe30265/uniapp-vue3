import{_ as a,aQ as t,a1 as l,aR as e,r as s,a as n,c as i,w as d,y as o,e as c,o as u,b as r,d as p,P as f,i as C}from"./index-BmzQcWuq.js";const h=a({data:()=>({title:"get/setClipboardData",data:""}),methods:{dataChange:function(a){this.data=a.detail.value},getClipboard:function(){t({success:a=>{console.log(a.data);const t=a.data?"剪贴板内容为:"+a.data:"剪贴板暂无内容";l({content:t,title:"读取剪贴板",showCancel:!1})},fail:()=>{l({content:"读取剪贴板失败!",showCancel:!1})}})},setClipboard:function(){var a=this.data;0===a.length?l({title:"设置剪贴板失败",content:"内容不能为空",showCancel:!1}):e({data:a,success:()=>{},fail:()=>{}})}}},[["render",function(a,t,l,e,h,g){const _=s(n("page-head"),o),b=c,v=f,w=C;return u(),i(b,null,{default:d((()=>[r(_,{title:h.title},null,8,["title"]),r(b,{class:"uni-padding-wrap"},{default:d((()=>[r(b,{class:"uni-title"},{default:d((()=>[p("请输入剪贴板内容")])),_:1}),r(b,{class:"uni-list"},{default:d((()=>[r(b,{class:"uni-list-cell"},{default:d((()=>[r(v,{class:"uni-input",type:"text",placeholder:"请输入剪贴板内容",value:h.data,onInput:g.dataChange},null,8,["value","onInput"])])),_:1})])),_:1}),r(b,{class:"uni-btn-v"},{default:d((()=>[r(w,{type:"primary",onClick:g.setClipboard},{default:d((()=>[p("存储数据")])),_:1},8,["onClick"]),r(w,{onClick:g.getClipboard},{default:d((()=>[p("读取数据")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})}]]);export{h as default};
