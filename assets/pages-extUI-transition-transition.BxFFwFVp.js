import{_ as t,r as s,a,c as i,w as e,e as n,o,b as l,d as r,f as d,i as u}from"./index-BmzQcWuq.js";import{_ as c}from"./uni-card.DnbVEZwr.js";import{_ as f}from"./uni-transition.32_0kIlH.js";import{_ as p}from"./uni-section.CazvVlP3.js";const h=t({components:{},data:()=>({show:!0,modeClass:"fade",styles:{}}),onLoad(){},methods:{handle(t){this.show=!this.show,this.modeClass=t},custom(){this.$refs.ani.step({width:"100px",height:"100px",rotate:"180"},{delay:200,duration:300}),this.$refs.ani.step({width:"100px",height:"100px",rotate:"0"},{transformOrigin:"50% 50%"}),this.$refs.ani.step({translateX:"-100px"},{timingFunction:"ease-in",duration:100}),this.$refs.ani.step({translateX:"100px"},{timingFunction:"ease",duration:300}),this.$refs.ani.step({translateX:"50px",scale:1.5},{timingFunction:"linear",duration:100}),this.$refs.ani.step({translateX:"0px",scale:1},{timingFunction:"linear",duration:150}),this.$refs.ani.run()}}},[["render",function(t,h,m,_,y,x){const w=d,C=s(a("uni-card"),c),b=s(a("uni-transition"),f),g=n,$=s(a("uni-section"),p),k=u;return o(),i(g,null,{default:e((()=>[l(C,{"is-full":"","is-shadow":!1},{default:e((()=>[l(w,{class:"uni-h6"},{default:e((()=>[r("过渡动画，通常用于元素的过渡效果，例如淡隐淡出效果，遮罩层的效果、放大缩小的效果等")])),_:1})])),_:1}),l($,{title:"示例",type:"line"},{default:e((()=>[l(g,{class:"example"},{default:e((()=>[l(b,{ref:"ani","custom-class":"transition","mode-class":y.modeClass,styles:y.styles,show:y.show},{default:e((()=>[l(w,{class:"text"},{default:e((()=>[r("示例元素")])),_:1})])),_:1},8,["mode-class","styles","show"])])),_:1})])),_:1}),l($,{title:"操作",subTitle:"点击按钮 ,切换动画效果",type:"line"},{default:e((()=>[l(g,{class:"example-body"},{default:e((()=>[l(k,{class:"transition-button",type:"primary",onClick:h[0]||(h[0]=t=>x.handle("fade"))},{default:e((()=>[r("淡隐淡出")])),_:1}),l(k,{class:"transition-button",type:"primary",onClick:h[1]||(h[1]=t=>x.handle(["fade","slide-top"]))},{default:e((()=>[r("由上至下")])),_:1}),l(k,{class:"transition-button",type:"primary",onClick:h[2]||(h[2]=t=>x.handle(["fade","slide-right"]))},{default:e((()=>[r("由右至左过")])),_:1}),l(k,{class:"transition-button",type:"primary",onClick:h[3]||(h[3]=t=>x.handle(["fade","zoom-in"]))},{default:e((()=>[r("由小到大过")])),_:1}),l(k,{class:"transition-button",type:"primary",onClick:x.custom},{default:e((()=>[r("自定义动画")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-8cd65a01"]]);export{h as default};
