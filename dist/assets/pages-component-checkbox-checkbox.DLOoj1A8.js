import{_ as e,r as l,a,c as t,w as u,y as n,e as s,o as c,b as d,d as i,t as o,K as f,F as m,L as _,N as h,O as r,f as v,u as k}from"./index-BmzQcWuq.js";const b=e({data:()=>({title:"checkbox 复选框",items:[{value:"USA",name:"美国"},{value:"CHN",name:"中国",checked:"true"},{value:"BRA",name:"巴西"},{value:"JPN",name:"日本"},{value:"ENG",name:"英国"},{value:"FRA",name:"法国"}]}),methods:{checkboxChange:function(e){for(var l=this.items,a=e.detail.value,t=0,u=l.length;t<u;++t){const e=l[t];a.indexOf(e.value)>=0?this.$set(e,"checked",!0):this.$set(e,"checked",!1)}}}},[["render",function(e,b,p,C,g,x){const F=l(a("page-head"),n),y=s,N=_,w=h,A=r,O=v;return c(),t(y,null,{default:u((()=>[d(F,{title:g.title},null,8,["title"]),d(y,{class:"uni-padding-wrap uni-common-mt"},{default:u((()=>[d(y,{class:"uni-title uni-common-mt"},{default:u((()=>[i("默认样式")])),_:1}),d(y,null,{default:u((()=>[d(A,null,{default:u((()=>[d(w,null,{default:u((()=>[d(N,{value:"cb1",checked:"true"}),i("选中 ")])),_:1}),d(w,null,{default:u((()=>[d(N,{value:"cb"}),i("未选中 ")])),_:1})])),_:1})])),_:1}),d(y,{class:"uni-title uni-common-mt"},{default:u((()=>[i("不同颜色和尺寸的checkbox")])),_:1}),d(y,null,{default:u((()=>[d(A,null,{default:u((()=>[d(w,null,{default:u((()=>[d(N,{value:"cb1",checked:"true",color:"#FFCC33",style:{transform:"scale(0.7)"}}),i("选中 ")])),_:1}),d(w,null,{default:u((()=>[d(N,{value:"cb",color:"#FFCC33",style:{transform:"scale(0.7)"}}),i("未选中 ")])),_:1})])),_:1})])),_:1})])),_:1}),d(y,{class:"uni-padding-wrap"},{default:u((()=>[d(y,{class:"uni-title uni-common-mt"},{default:u((()=>[i(" 推荐展示样式 "),d(O,null,{default:u((()=>[i("\\n使用 uni-list 布局")])),_:1})])),_:1})])),_:1}),d(y,{class:"uni-list"},{default:u((()=>[d(A,{onChange:x.checkboxChange},{default:u((()=>[(c(!0),o(m,null,f(g.items,(e=>(c(),t(w,{class:"uni-list-cell uni-list-cell-pd",key:e.value},{default:u((()=>[d(y,null,{default:u((()=>[d(N,{value:e.value,checked:e.checked},null,8,["value","checked"])])),_:2},1024),d(y,null,{default:u((()=>[i(k(e.name),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["onChange"])])),_:1})])),_:1})}],["__scopeId","data-v-9c5fd396"]]);export{b as default};
