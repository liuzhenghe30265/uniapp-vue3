import{_ as t,aF as e,s as n,a0 as o,r as s,a,c as i,w as c,y as d,e as l,o as u,b as r,d as f,i as h}from"./index-BmzQcWuq.js";const p=t({data:()=>({title:"action-sheet",buttonRect:{}}),onReady(){this.getNodeInfo(),window.addEventListener("resize",this.getNodeInfo)},beforeDestroy(){window.removeEventListener("resize",this.getNodeInfo)},methods:{actionSheetTap(){const t=this;e({title:"标题",itemList:["item1","item2","item3","item4"],popover:{top:t.buttonRect.top+104+t.buttonRect.height,left:t.buttonRect.left+t.buttonRect.width/2},success:t=>{console.log(t.tapIndex),n({title:"点击了第"+t.tapIndex+"个选项",icon:"none"})}})},getNodeInfo(){o().select(".target").boundingClientRect().exec((t=>{const e=t[0];e&&(this.buttonRect=e)}))}}},[["render",function(t,e,n,o,p,g){const b=s(a("page-head"),d),m=h,R=l;return u(),i(R,null,{default:c((()=>[r(b,{title:p.title},null,8,["title"]),r(R,{class:"uni-padding-wrap"},{default:c((()=>[r(R,{class:"uni-btn-v"},{default:c((()=>[r(m,{class:"target",type:"default",onClick:g.actionSheetTap},{default:c((()=>[f("弹出action sheet")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})}]]);export{p as default};
