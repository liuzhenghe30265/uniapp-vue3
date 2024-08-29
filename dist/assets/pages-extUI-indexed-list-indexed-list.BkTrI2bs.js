import{_ as e,r as t,a as i,o as s,c as l,w as o,d,u as n,v as a,t as c,F as h,K as u,b as r,n as m,f,e as _,a0 as x,ae as p,ap as k,S as v}from"./index-BmzQcWuq.js";import{_ as w}from"./uni-icons.Beq5ol40.js";const C=e({name:"UniIndexedList",components:{indexedListItem:e({name:"UniIndexedList",emits:["itemClick"],props:{loaded:{type:Boolean,default:!1},idx:{type:Number,default:0},list:{type:Object,default:()=>({})},showSelect:{type:Boolean,default:!1}},methods:{onClick(e,t){this.$emit("itemClick",{idx:e,index:t})}}},[["render",function(e,x,p,k,v,C){const y=f,g=_,I=t(i("uni-icons"),w);return s(),l(g,null,{default:o((()=>[p.loaded||p.list.itemIndex<15?(s(),l(g,{key:0,class:"uni-indexed-list__title-wrapper"},{default:o((()=>[p.list.items&&p.list.items.length>0?(s(),l(y,{key:0,class:"uni-indexed-list__title"},{default:o((()=>[d(n(p.list.key),1)])),_:1})):a("",!0)])),_:1})):a("",!0),(p.loaded||p.list.itemIndex<15)&&p.list.items&&p.list.items.length>0?(s(),l(g,{key:1,class:"uni-indexed-list__list"},{default:o((()=>[(s(!0),c(h,null,u(p.list.items,((e,t)=>(s(),l(g,{key:t,class:"uni-indexed-list__item","hover-class":"uni-indexed-list__item--hover"},{default:o((()=>[r(g,{class:"uni-indexed-list__item-container",onClick:e=>C.onClick(p.idx,t)},{default:o((()=>[r(g,{class:m(["uni-indexed-list__item-border",{"uni-indexed-list__item-border--last":t===p.list.items.length-1}])},{default:o((()=>[p.showSelect?(s(),l(g,{key:0,style:{"margin-right":"20rpx"}},{default:o((()=>[r(I,{type:e.checked?"checkbox-filled":"circle",color:e.checked?"#007aff":"#C0C0C0",size:"24"},null,8,["type","color"])])),_:2},1024)):a("",!0),r(y,{class:"uni-indexed-list__item-content"},{default:o((()=>[d(n(e.name),1)])),_:2},1024)])),_:2},1032,["class"])])),_:2},1032,["onClick"])])),_:2},1024)))),128))])),_:1})):a("",!0)])),_:1})}],["__scopeId","data-v-9dec359b"]])},emits:["click"],props:{options:{type:Array,default:()=>[]},showSelect:{type:Boolean,default:!1}},data:()=>({lists:[],winHeight:0,itemHeight:0,winOffsetY:0,touchmove:!1,touchmoveIndex:-1,scrollViewId:"",touchmovable:!0,loaded:!1,isPC:!1}),watch:{options:{handler:function(){this.setList()},deep:!0}},mounted(){this.isPC=this.IsPC(),setTimeout((()=>{this.setList()}),50),setTimeout((()=>{this.loaded=!0}),300)},methods:{setList(){this.lists=[],this.options.forEach(((e,t)=>{if(0===e.data.length)return;let i=t,s=e.data.map((i=>{let s={};return s.key=e.letter,s.name=i,s.itemIndex=t,t++,s.checked=!!i.checked&&i.checked,s}));this.lists.push({title:e.letter,key:e.letter,items:s,itemIndex:i})})),x().in(this).select("#list").boundingClientRect().exec((e=>{this.winOffsetY=e[0].top,this.winHeight=e[0].height,this.itemHeight=this.winHeight/this.lists.length}))},touchStart(e){this.touchmove=!0;let t=this.isPC?e.pageY:e.touches[0].pageY,i=Math.floor((t-this.winOffsetY)/this.itemHeight);this.lists[i]&&(this.scrollViewId="uni-indexed-list-"+i,this.touchmoveIndex=i)},touchMove(e){let t=this.isPC?e.pageY:e.touches[0].pageY,i=Math.floor((t-this.winOffsetY)/this.itemHeight);if(this.touchmoveIndex===i)return!1;this.lists[i]&&(this.scrollViewId="uni-indexed-list-"+i,this.touchmoveIndex=i)},touchEnd(){this.touchmove=!1},mousedown(e){this.isPC&&this.touchStart(e)},mousemove(e){this.isPC&&this.touchMove(e)},mouseleave(e){this.isPC&&this.touchEnd(e)},IsPC(){var e=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],i=!0;for(let s=0;s<t.length-1;s++)if(e.indexOf(t[s])>0){i=!1;break}return i},onClick(e){let{idx:t,index:i}=e,s={};for(let o in this.lists[t].items[i])s[o]=this.lists[t].items[i][o];let l=[];this.showSelect&&(this.lists[t].items[i].checked=!this.lists[t].items[i].checked,this.lists.forEach(((e,t)=>{e.items.forEach(((e,i)=>{if(e.checked){let e={};for(let s in this.lists[t].items[i])e[s]=this.lists[t].items[i][s];l.push(e)}}))}))),this.$emit("click",{item:s,select:l})}}},[["render",function(e,t,i,x,w,C){const y=p("indexed-list-item"),g=_,I=v,b=f;return s(),l(g,{class:"uni-indexed-list",ref:"list",id:"list"},{default:o((()=>[r(I,{"scroll-into-view":w.scrollViewId,class:"uni-indexed-list__scroll","scroll-y":""},{default:o((()=>[(s(!0),c(h,null,u(w.lists,((e,t)=>(s(),l(g,{key:t,id:"uni-indexed-list-"+t},{default:o((()=>[r(y,{list:e,loaded:w.loaded,idx:t,showSelect:i.showSelect,onItemClick:C.onClick},null,8,["list","loaded","idx","showSelect","onItemClick"])])),_:2},1032,["id"])))),128))])),_:1},8,["scroll-into-view"]),r(g,{class:"uni-indexed-list__menu",onTouchstart:C.touchStart,onTouchmove:k(C.touchMove,["stop","prevent"]),onTouchend:C.touchEnd,onMousedown:k(C.mousedown,["stop"]),onMousemove:k(C.mousemove,["stop","prevent"]),onMouseleave:k(C.mouseleave,["stop"])},{default:o((()=>[(s(!0),c(h,null,u(w.lists,((e,t)=>(s(),l(g,{key:t,class:m(["uni-indexed-list__menu-item",w.touchmoveIndex==t?"uni-indexed-list__menu--active":""])},{default:o((()=>[r(b,{class:m(["uni-indexed-list__menu-text",w.touchmoveIndex==t?"uni-indexed-list__menu-text--active":""])},{default:o((()=>[d(n(e.key),1)])),_:2},1032,["class"])])),_:2},1032,["class"])))),128))])),_:1},8,["onTouchstart","onTouchmove","onTouchend","onMousedown","onMousemove","onMouseleave"]),w.touchmove?(s(),l(g,{key:0,class:"uni-indexed-list__alert-wrapper"},{default:o((()=>[r(b,{class:"uni-indexed-list__alert"},{default:o((()=>[d(n(w.lists[w.touchmoveIndex].key),1)])),_:1})])),_:1})):a("",!0)])),_:1},512)}],["__scopeId","data-v-bb44ffb3"]]),y={list:[{letter:"A",data:["阿克苏机场","阿拉山口机场","阿勒泰机场","阿里昆莎机场","安庆天柱山机场","澳门国际机场"]},{letter:"B",data:["保山机场","包头机场","北海福成机场","北京南苑机场","北京首都国际机场"]},{letter:"C",data:["长白山机场","长春龙嘉国际机场","常德桃花源机场","昌都邦达机场","长沙黄花国际机场","长治王村机场","常州奔牛机场","成都双流国际机场","赤峰机场"]},{letter:"D",data:["大理机场","大连周水子国际机场","大庆萨尔图机场","大同东王庄机场","达州河市机场","丹东浪头机场","德宏芒市机场","迪庆香格里拉机场","东营机场","敦煌机场"]},{letter:"E",data:["鄂尔多斯机场","恩施许家坪机场","二连浩特赛乌苏国际机场"]},{letter:"F",data:["阜阳西关机场","福州长乐国际机场"]},{letter:"G",data:["赣州黄金机场","格尔木机场","固原六盘山机场","广元盘龙机场","广州白云国际机场","桂林两江国际机场","贵阳龙洞堡国际机场"]},{letter:"H",data:["哈尔滨太平国际机场","哈密机场","海口美兰国际机场","海拉尔东山国际机场","邯郸机场","汉中机场","杭州萧山国际机场","合肥骆岗国际机场","和田机场","黑河机场","呼和浩特白塔国际机场","淮安涟水机场","黄山屯溪国际机场"]},{letter:"I",data:[]},{letter:"J",data:["济南遥墙国际机场","济宁曲阜机场","鸡西兴凯湖机场","佳木斯东郊机场","嘉峪关机场","锦州小岭子机场","景德镇机场","井冈山机场","九江庐山机场","九寨黄龙机场"]},{letter:"K",data:["喀什机场","克拉玛依机场","库车龟兹机场","库尔勒机场","昆明巫家坝国际机场"]},{letter:"L",data:["拉萨贡嘎机场","兰州中川机场","丽江三义机场","黎平机场","连云港白塔埠机场","临沧机场","临沂机场","林芝米林机场","柳州白莲机场","龙岩冠豸山机场","泸州蓝田机场","洛阳北郊机场"]},{letter:"M",data:["满洲里西郊机场","绵阳南郊机场","漠河古莲机场","牡丹江海浪机场"]},{letter:"N",data:["南昌昌北国际机场","南充高坪机场","南京禄口国际机场","南宁吴圩机场","南通兴东机场","南阳姜营机场","宁波栎社国际机场"]},{letter:"O",data:[]},{letter:"P",data:["普洱思茅机场"]},{letter:"Q",data:["齐齐哈尔三家子机场","秦皇岛山海关机场","青岛流亭国际机场","衢州机场","泉州晋江机场"]},{letter:"R",data:["日喀则和平机场"]},{letter:"S",data:["三亚凤凰国际机场","汕头外砂机场","上海虹桥国际机场","上海浦东国际机场","深圳宝安国际机场","沈阳桃仙国际机场","石家庄正定国际机场","苏南硕放国际机场"]},{letter:"T",data:["塔城机场","太原武宿国际机场","台州路桥机场 (黄岩机场)","唐山三女河机场","腾冲驼峰机场","天津滨海国际机场","通辽机场","铜仁凤凰机场"]},{letter:"U",data:[]},{letter:"V",data:[]},{letter:"W",data:["万州五桥机场","潍坊机场","威海大水泊机场","文山普者黑机场","温州永强国际机场","乌海机场","武汉天河国际机场","乌兰浩特机场","乌鲁木齐地窝堡国际机场","武夷山机场","梧州长洲岛机场"]},{letter:"X",data:["西安咸阳国际机场","西昌青山机场","锡林浩特机场","西宁曹家堡机场","西双版纳嘎洒机场","厦门高崎国际机场","香港国际机场","襄阳刘集机场","兴义机场","徐州观音机场"]},{letter:"Y",data:["延安二十里堡机场","盐城机场","延吉朝阳川机场","烟台莱山国际机场","宜宾菜坝机场","宜昌三峡机场","伊春林都机场","伊宁机场","义乌机场","银川河东机场","永州零陵机场","榆林榆阳机场","玉树巴塘机场","运城张孝机场"]},{letter:"Z",data:["湛江机场","昭通机场","郑州新郑国际机场","芷江机场","重庆江北国际机场","中卫香山机场","舟山朱家尖机场","珠海三灶机场"]}]};const g=e({components:{},data:()=>({list:y.list}),methods:{bindClick(e){console.log("点击item，返回数据"+JSON.stringify(e))}}},[["render",function(e,o,d,n,a,c){const h=t(i("uni-indexed-list"),C);return s(),l(h,{options:a.list,"show-select":!0,onClick:c.bindClick},null,8,["options","onClick"])}]]);export{g as default};
