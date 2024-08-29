import{_ as t,aa as e,ab as i,ac as s,ad as a,r as l,a as n,o,c,w as r,n as d,v as h,b as u,a8 as p,d as g,u as f,e as m,x as y,f as b,B as _}from"./index-BmzQcWuq.js";import{_ as w}from"./uni-icons.Beq5ol40.js";import{_ as k}from"./uni-badge.COjVaoep.js";const S=t({name:"UniListItem",emits:["click","switchChange"],props:{direction:{type:String,default:"row"},title:{type:String,default:""},note:{type:String,default:""},ellipsis:{type:[Number,String],default:0},disabled:{type:[Boolean,String],default:!1},clickable:{type:Boolean,default:!1},showArrow:{type:[Boolean,String],default:!1},link:{type:[Boolean,String],default:!1},to:{type:String,default:""},showBadge:{type:[Boolean,String],default:!1},showSwitch:{type:[Boolean,String],default:!1},switchChecked:{type:[Boolean,String],default:!1},badgeText:{type:String,default:""},badgeType:{type:String,default:"success"},badgeStyle:{type:Object,default:()=>({})},rightText:{type:String,default:""},thumb:{type:String,default:""},thumbSize:{type:String,default:"base"},showExtraIcon:{type:[Boolean,String],default:!1},extraIcon:{type:Object,default:()=>({type:"",color:"#000000",size:20})},border:{type:Boolean,default:!0}},data:()=>({isFirstChild:!1}),mounted(){this.list=this.getForm(),this.list&&(this.list.firstChildAppend||(this.list.firstChildAppend=!0,this.isFirstChild=!0))},methods:{getForm(t="uniList"){let e=this.$parent,i=e.$options.name;for(;i!==t;){if(e=e.$parent,!e)return!1;i=e.$options.name}return e},onClick(){""===this.to?(this.clickable||this.link)&&this.$emit("click",{data:{}}):this.openPage()},onSwitchChange(t){this.$emit("switchChange",t.detail)},openPage(){-1!==["navigateTo","redirectTo","reLaunch","switchTab"].indexOf(this.link)?this.pageApi(this.link):this.pageApi("navigateTo")},pageApi(t){let l={url:this.to,success:t=>{this.$emit("click",{data:t})},fail:t=>{this.$emit("click",{data:t})}};switch(t){case"navigateTo":default:e(l);break;case"redirectTo":a(l);break;case"reLaunch":s(l);break;case"switchTab":i(l)}}}},[["render",function(t,e,i,s,a,S){const x=m,C=y,T=l(n("uni-icons"),w),B=b,$=l(n("uni-badge"),k),I=_;return o(),c(x,{class:d([{"uni-list-item--disabled":i.disabled},"uni-list-item"]),"hover-class":!i.clickable&&!i.link||i.disabled||i.showSwitch?"":"uni-list-item--hover",onClick:S.onClick},{default:r((()=>[a.isFirstChild?h("",!0):(o(),c(x,{key:0,class:d(["border--left",{"uni-list--border":i.border}])},null,8,["class"])),u(x,{class:d(["uni-list-item__container",{"container--right":i.showArrow||i.link,"flex--direction":"column"===i.direction}])},{default:r((()=>[p(t.$slots,"header",{},(()=>[u(x,{class:"uni-list-item__header"},{default:r((()=>[i.thumb?(o(),c(x,{key:0,class:"uni-list-item__icon"},{default:r((()=>[u(C,{src:i.thumb,class:d(["uni-list-item__icon-img",["uni-list--"+i.thumbSize]])},null,8,["src","class"])])),_:1})):i.showExtraIcon?(o(),c(x,{key:1,class:"uni-list-item__icon"},{default:r((()=>[u(T,{color:i.extraIcon.color,size:i.extraIcon.size,type:i.extraIcon.type},null,8,["color","size","type"])])),_:1})):h("",!0)])),_:1})]),!0),p(t.$slots,"body",{},(()=>[u(x,{class:d(["uni-list-item__content",{"uni-list-item__content--center":i.thumb||i.showExtraIcon||i.showBadge||i.showSwitch}])},{default:r((()=>[i.title?(o(),c(B,{key:0,class:d(["uni-list-item__content-title",[0!==i.ellipsis&&i.ellipsis<=2?"uni-ellipsis-"+i.ellipsis:""]])},{default:r((()=>[g(f(i.title),1)])),_:1},8,["class"])):h("",!0),i.note?(o(),c(B,{key:1,class:"uni-list-item__content-note"},{default:r((()=>[g(f(i.note),1)])),_:1})):h("",!0)])),_:1},8,["class"])]),!0),p(t.$slots,"footer",{},(()=>[i.rightText||i.showBadge||i.showSwitch?(o(),c(x,{key:0,class:d(["uni-list-item__extra",{"flex--justify":"column"===i.direction}])},{default:r((()=>[i.rightText?(o(),c(B,{key:0,class:"uni-list-item__extra-text"},{default:r((()=>[g(f(i.rightText),1)])),_:1})):h("",!0),i.showBadge?(o(),c($,{key:1,type:i.badgeType,text:i.badgeText,"custom-style":i.badgeStyle},null,8,["type","text","custom-style"])):h("",!0),i.showSwitch?(o(),c(I,{key:2,disabled:i.disabled,checked:i.switchChecked,onChange:S.onSwitchChange},null,8,["disabled","checked","onChange"])):h("",!0)])),_:1},8,["class"])):h("",!0)]),!0)])),_:3},8,["class"]),i.showArrow||i.link?(o(),c(T,{key:1,size:16,class:"uni-icon-wrapper",color:"#bbb",type:"arrowright"})):h("",!0)])),_:3},8,["class","hover-class","onClick"])}],["__scopeId","data-v-f561971d"]]);export{S as _};
