import{_ as e,aH as t,a1 as n,r as a,a as s,c as o,w as i,y as l,e as c,o as u,b as r,d,t as p,F as k,v as m,u as y,Z as f,i as h}from"./index-BmzQcWuq.js";const w=e({data:()=>({title:"getNetworkType",hasNetworkType:!1,networkType:"",connectedWifi:""}),onUnload:function(){this.networkType="",this.hasNetworkType=!1},methods:{getNetworkType:function(){t({success:e=>{console.log(e),this.hasNetworkType=!0,this.networkType=e.subtype||e.networkType},fail:()=>{n({content:"获取失败！",showCancel:!1})}})},clear:function(){this.hasNetworkType=!1,this.networkType="",this.connectedWifi=""}}},[["render",function(e,t,n,w,T,_){const N=a(s("page-head"),l),g=c,F=f,x=h;return u(),o(g,null,{default:i((()=>[r(N,{title:T.title},null,8,["title"]),r(g,{class:"uni-padding-wrap uni-common-mt"},{default:i((()=>[r(g,{style:{background:"#FFFFFF",padding:"40rpx"}},{default:i((()=>[r(g,{class:"uni-hello-text uni-center"},{default:i((()=>[d("网络状态")])),_:1}),!1===T.hasNetworkType?(u(),p(k,{key:0},[r(g,{class:"uni-h2 uni-center uni-common-mt"},{default:i((()=>[d("未获取")])),_:1}),r(g,{class:"uni-hello-text uni-center uni-common-mt"},{default:i((()=>[d("请点击下面按钮获取网络状态")])),_:1})],64)):m("",!0),!0===T.hasNetworkType?(u(),o(g,{key:1,class:"uni-h2 uni-center uni-common-mt"},{default:i((()=>[d(y(T.networkType),1)])),_:1})):m("",!0),!0===T.hasNetworkType&&"wifi"===T.networkType?(u(),o(g,{key:2,class:"uni-textarea uni-common-mt"},{default:i((()=>[r(F,{value:T.connectedWifi},null,8,["value"])])),_:1})):m("",!0)])),_:1}),r(g,{class:"uni-btn-v uni-common-mt"},{default:i((()=>[r(x,{type:"primary",onClick:_.getNetworkType},{default:i((()=>[d("获取设备网络状态")])),_:1},8,["onClick"]),r(x,{class:"uni-common-mt",onClick:_.clear},{default:i((()=>[d("清空")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})}]]);export{w as default};
