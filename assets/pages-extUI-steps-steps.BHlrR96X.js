import{_ as t,r as e,a as i,o as s,c as l,w as n,b as o,n as c,t as a,F as u,K as r,a7 as d,d as p,u as _,f as m,e as v,i as f}from"./index-BmzQcWuq.js";import{_ as y}from"./uni-icons.Beq5ol40.js";import{_ as C}from"./uni-section.CazvVlP3.js";const g=t({name:"UniSteps",props:{direction:{type:String,default:"row"},activeColor:{type:String,default:"#2979FF"},deactiveColor:{type:String,default:"#B7BDC6"},active:{type:Number,default:0},activeIcon:{type:String,default:"checkbox-filled"},options:{type:Array,default:()=>[]}},data:()=>({})},[["render",function(t,f,C,g,w,h){const k=m,x=v,b=e(i("uni-icons"),y);return s(),l(x,{class:"uni-steps"},{default:n((()=>[o(x,{class:c(["column"===C.direction?"uni-steps__column":"uni-steps__row"])},{default:n((()=>[o(x,{class:c(["column"===C.direction?"uni-steps__column-text-container":"uni-steps__row-text-container"])},{default:n((()=>[(s(!0),a(u,null,r(C.options,((t,e)=>(s(),l(x,{key:e,class:c(["column"===C.direction?"uni-steps__column-text":"uni-steps__row-text"])},{default:n((()=>[o(k,{style:d({color:e===C.active?C.activeColor:C.deactiveColor}),class:c(["column"===C.direction?"uni-steps__column-title":"uni-steps__row-title"])},{default:n((()=>[p(_(t.title),1)])),_:2},1032,["style","class"]),o(k,{style:d({color:C.deactiveColor}),class:c(["column"===C.direction?"uni-steps__column-desc":"uni-steps__row-desc"])},{default:n((()=>[p(_(t.desc),1)])),_:2},1032,["style","class"])])),_:2},1032,["class"])))),128))])),_:1},8,["class"]),o(x,{class:c(["column"===C.direction?"uni-steps__column-container":"uni-steps__row-container"])},{default:n((()=>[(s(!0),a(u,null,r(C.options,((t,e)=>(s(),l(x,{class:c(["column"===C.direction?"uni-steps__column-line-item":"uni-steps__row-line-item"]),key:e},{default:n((()=>[o(x,{class:c(["column"===C.direction?"uni-steps__column-line":"uni-steps__row-line","column"===C.direction?"uni-steps__column-line--before":"uni-steps__row-line--before"]),style:d({backgroundColor:e<=C.active&&0!==e?C.activeColor:0===e?"transparent":C.deactiveColor})},null,8,["class","style"]),e===C.active?(s(),l(x,{key:0,class:c(["column"===C.direction?"uni-steps__column-check":"uni-steps__row-check"])},{default:n((()=>[o(b,{color:C.activeColor,type:C.activeIcon,size:"14"},null,8,["color","type"])])),_:1},8,["class"])):(s(),l(x,{key:1,class:c(["column"===C.direction?"uni-steps__column-circle":"uni-steps__row-circle"]),style:d({backgroundColor:e<C.active?C.activeColor:C.deactiveColor})},null,8,["class","style"])),o(x,{class:c(["column"===C.direction?"uni-steps__column-line":"uni-steps__row-line","column"===C.direction?"uni-steps__column-line--after":"uni-steps__row-line--after"]),style:d({backgroundColor:e<C.active&&e!==C.options.length-1?C.activeColor:e===C.options.length-1?"transparent":C.deactiveColor})},null,8,["class","style"])])),_:2},1032,["class"])))),128))])),_:1},8,["class"])])),_:1},8,["class"])])),_:1})}],["__scopeId","data-v-2fc8e0ae"]]);const w=t({components:{},data:()=>({active:1,list1:[{title:"事件一"},{title:"事件二"},{title:"事件三"},{title:"事件四"}],list2:[{title:"买家下单",desc:"2018-11-11"},{title:"卖家发货",desc:"2018-11-12"},{title:"买家签收",desc:"2018-11-13"},{title:"交易完成",desc:"2018-11-14"}]}),methods:{change(){this.active<this.list1.length-1?this.active+=1:this.active=0}}},[["render",function(t,c,a,u,r,d){const _=e(i("uni-steps"),g),m=e(i("uni-section"),C),y=f,w=v;return s(),l(w,null,{default:n((()=>[o(m,{title:"基本用法",type:"line",padding:""},{default:n((()=>[o(_,{options:r.list1,active:r.active},null,8,["options","active"])])),_:1}),o(m,{title:"自定义图标",type:"line",padding:""},{default:n((()=>[o(_,{options:r.list1,"active-icon":"checkbox",active:r.active},null,8,["options","active"])])),_:1}),o(m,{title:"自定义图标",type:"line",padding:""},{default:n((()=>[o(_,{options:r.list1,"active-icon":"medal",active:r.active},null,8,["options","active"])])),_:1}),o(m,{title:"纵向排列",type:"line",padding:""},{default:n((()=>[o(_,{options:r.list2,"active-color":"#007AFF",active:r.active,direction:"column"},null,8,["options","active"])])),_:1}),o(y,{type:"primary",size:"mini",style:{margin:"30px 10px",width:"100px"},onClick:d.change},{default:n((()=>[p("改变状态")])),_:1},8,["onClick"])])),_:1})}],["__scopeId","data-v-1e6ed18b"]]);export{w as default};
