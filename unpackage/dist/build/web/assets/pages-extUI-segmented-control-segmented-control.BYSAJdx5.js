import{_ as e,r as t,a as l,c as a,w as s,e as n,o as c,b as u,d as i,v as o,t as d,K as r,F as _,f,R as m,u as y,a7 as h,Q as p}from"./index-BmzQcWuq.js";import{_ as v}from"./uni-card.DnbVEZwr.js";import{_ as x}from"./uni-segmented-control.Dbv9lO7l.js";import{_ as C}from"./uni-section.CazvVlP3.js";const k=e({components:{},data:()=>({items:["选项卡1","选项卡2","选项卡3"],styles:[{value:"button",text:"按钮",checked:!0},{value:"text",text:"文字"}],colors:["#007aff","#4cd964","#dd524d"],current:0,colorIndex:0,activeColor:"#007aff",styleType:"button"}),methods:{onClickItem(e){this.current!==e.currentIndex&&(this.current=e.currentIndex)},styleChange(e){this.styleType!==e.detail.value&&(this.styleType=e.detail.value)},colorChange(e){this.styleType!==e.detail.value&&(console.log(e.detail.value),this.activeColor=e.detail.value)}}},[["render",function(e,k,g,I,b,T){const j=f,w=t(l("uni-card"),v),z=t(l("uni-segmented-control"),x),F=n,K=t(l("uni-section"),C),Q=p,R=m;return c(),a(F,null,{default:s((()=>[u(w,{"is-shadow":!1,"is-full":""},{default:s((()=>[u(j,{class:"uni-h6"},{default:s((()=>[i("标签组件多用于商品分类、重点内容显示等场景。")])),_:1})])),_:1}),u(K,{title:"实心标签",type:"line"},{default:s((()=>[u(F,{class:"uni-padding-wrap uni-common-mt"},{default:s((()=>[u(z,{current:b.current,values:b.items,"style-type":b.styleType,"active-color":b.activeColor,onClickItem:T.onClickItem},null,8,["current","values","style-type","active-color","onClickItem"])])),_:1}),u(F,{class:"content"},{default:s((()=>[0===b.current?(c(),a(F,{key:0},{default:s((()=>[u(j,{class:"content-text"},{default:s((()=>[i("选项卡1的内容")])),_:1})])),_:1})):o("",!0),1===b.current?(c(),a(F,{key:1},{default:s((()=>[u(j,{class:"content-text"},{default:s((()=>[i("选项卡2的内容")])),_:1})])),_:1})):o("",!0),2===b.current?(c(),a(F,{key:2},{default:s((()=>[u(j,{class:"content-text"},{default:s((()=>[i("选项卡3的内容")])),_:1})])),_:1})):o("",!0)])),_:1})])),_:1}),u(K,{title:"Style",type:"line"}),u(F,{class:"example-body"},{default:s((()=>[u(R,{class:"uni-list",onChange:T.styleChange},{default:s((()=>[(c(!0),d(_,null,r(b.styles,((e,t)=>(c(),a(F,{key:t,class:"uni-list-item"},{default:s((()=>[u(F,{class:"uni-list-item__container"},{default:s((()=>[u(F,{class:"uni-list-item__content"},{default:s((()=>[u(j,{class:"uni-list-item__content-title"},{default:s((()=>[i(y(e.text),1)])),_:2},1024)])),_:2},1024),u(F,{class:"uni-list-item__extra"},{default:s((()=>[u(Q,{value:e.value,checked:e.checked},null,8,["value","checked"])])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["onChange"])])),_:1}),u(K,{title:"Color",type:"line"}),u(F,{class:"example-body"},{default:s((()=>[u(R,{class:"uni-list",onChange:T.colorChange},{default:s((()=>[(c(!0),d(_,null,r(b.colors,((e,t)=>(c(),a(F,{key:t,class:"uni-list-item"},{default:s((()=>[u(F,{class:"uni-list-item__container"},{default:s((()=>[u(F,{class:"uni-list-item__content"},{default:s((()=>[u(F,{style:h({backgroundColor:e}),class:"color-tag"},null,8,["style"])])),_:2},1024),u(F,{class:"uni-list-item__extra"},{default:s((()=>[u(Q,{value:e,checked:t===b.colorIndex},null,8,["value","checked"])])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["onChange"])])),_:1})])),_:1})}],["__scopeId","data-v-6a41e682"]]);export{k as default};
