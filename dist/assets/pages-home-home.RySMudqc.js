import{_ as e,g as o,s as a,r as n,a as t,o as s,c as l,w as i,b as c,d as r,n as h,M as u,i as d,e as f,f as m,m as p,h as g,j as w,l as b,k,p as y,q as C,t as S,F as _,u as v,v as I,x as U}from"./index-BmzQcWuq.js";import{_ as j}from"./uni-list-item.C-AQFBNn.js";import{_ as x}from"./uni-list.DSNVfhcT.js";import{_ as D}from"./uni-popup.KVGyxqag.js";import{_ as E}from"./uni-easyinput.vGaKFQ4o.js";import{_ as T,a as L}from"./uni-forms.9Xe3NES7.js";import"./uni-icons.Beq5ol40.js";import"./uni-badge.COjVaoep.js";import"./uni-transition.32_0kIlH.js";const O=e({name:"mpvue-map",data:()=>({type:"",id:0,title:"map",latitude:39.909,longitude:116.39742,controls:[{id:1,position:{left:5,top:180,width:30,height:30},clickable:!0}],showLocation:!0,scale:13,showCompass:!0,enable3D:!0,enableOverlooking:!0,enableZoom:!0,enableScroll:!0,enableRotate:!0,enableSatellite:!1,enableTraffic:!1,polyline:[],markers:[],polygons:[],circles:[],includePoints:[],rotate:0,skew:0}),mounted(){this.getCurrentLocation()},methods:{change(e){console.log("当前模式："+e.type+",状态："+e.show)},toggle(e){this.type=e,this.$refs.popup.open(e)},changeScale(){this.scale=9==this.scale?15:9},changeRotate(){this.rotate=90==this.rotate?0:90},changeSkew(){this.skew=30==this.skew?0:30},enableThreeD(e){this.enable3D=e.value},changeShowCompass(e){this.showCompass=e.value},changeEnableOverlooking(e){this.enableOverlooking=e.value},changeEnableZoom(e){this.enableZoom=e.value},changeEnableScroll(e){this.enableScroll=e.value},changeEnableRotate(e){this.enableRotate=e.value},changeEnableSatellite(e){this.enableSatellite=e.value},changeEnableTraffic(e){this.enableTraffic=e.value},getCurrentLocation(){o({type:"gcj02",success:e=>{console.log(e),this.longitude=e.longitude,this.latitude=e.latitude},fail:e=>{console.log(e),a({title:"无法获取位置信息",icon:"none"})}})}}},[["render",function(e,o,a,p,g,w){const b=u,k=d,y=f,C=m,S=n(t("uni-list-item"),j),_=n(t("uni-list"),x),v=n(t("uni-popup"),D);return s(),l(y,null,{default:i((()=>[c(b,{class:"map",ref:"map",latitude:g.latitude,longitude:g.longitude,controls:g.controls,scale:g.scale,"show-location":g.showLocation,"enable-3D":g.enable3D,rotate:g.rotate,skew:g.skew,"show-compass":g.showCompass,"enable-overlooking":g.enableOverlooking,"enable-zoom":g.enableZoom,"enable-scroll":g.enableScroll,"enable-rotate":g.enableRotate,"enable-satellite":g.enableSatellite,"enable-traffic":g.enableTraffic,markers:g.markers,polyline:g.polyline,circles:g.circles,polygons:g.polygons,"include-points":g.includePoints},null,8,["latitude","longitude","controls","scale","show-location","enable-3D","rotate","skew","show-compass","enable-overlooking","enable-zoom","enable-scroll","enable-rotate","enable-satellite","enable-traffic","markers","polyline","circles","polygons","include-points"]),c(y,{class:"uni-flex uni-row",style:{"-webkit-justify-content":"center","justify-content":"center"}},{default:i((()=>[c(y,{class:"flex-item"},{default:i((()=>[c(k,{onClick:w.getCurrentLocation},{default:i((()=>[r("获取当前位置信息")])),_:1},8,["onClick"])])),_:1}),c(y,{class:"flex-item"},{default:i((()=>[c(k,{class:"button",type:"primary",onClick:o[0]||(o[0]=e=>w.toggle("right"))},{default:i((()=>[c(C,{class:"button-text"},{default:i((()=>[r("地图控制")])),_:1})])),_:1})])),_:1})])),_:1}),c(v,{ref:"popup","background-color":"#fff",onChange:w.change},{default:i((()=>[c(y,{class:h(["popup-content",{"popup-height":"left"===g.type||"right"===g.type}])},{default:i((()=>[c(_,{class:"scrollview"},{default:i((()=>[c(S,{"show-arrow":!1,"show-switch":!0,"switch-checked":g.enable3D,title:"显示3D楼块",onSwitchChange:w.enableThreeD},null,8,["switch-checked","onSwitchChange"]),c(S,{"show-arrow":!1,"show-switch":!0,"switch-checked":g.showCompass,title:"显示指南针",onSwitchChange:w.changeShowCompass},null,8,["switch-checked","onSwitchChange"]),c(S,{"show-arrow":!1,"show-switch":!0,"switch-checked":g.enableOverlooking,title:"开启俯视",onSwitchChange:w.changeEnableOverlooking},null,8,["switch-checked","onSwitchChange"]),c(S,{"show-arrow":!1,"show-switch":!0,"switch-checked":g.enableZoom,title:"是否支持缩放",onSwitchChange:w.changeEnableZoom},null,8,["switch-checked","onSwitchChange"]),c(S,{"show-arrow":!1,"show-switch":!0,"switch-checked":g.enableScroll,title:"是否支持拖动",onSwitchChange:w.changeEnableScroll},null,8,["switch-checked","onSwitchChange"]),c(S,{"show-arrow":!1,"show-switch":!0,"switch-checked":g.enableRotate,title:"是否支持旋转",onSwitchChange:w.changeEnableRotate},null,8,["switch-checked","onSwitchChange"]),c(S,{"show-arrow":!1,"show-switch":!0,"switch-checked":g.enableSatellite,title:"是否开启卫星图",onSwitchChange:w.changeEnableSatellite},null,8,["switch-checked","onSwitchChange"]),c(S,{"show-arrow":!1,"show-switch":!0,"switch-checked":g.enableTraffic,title:"是否开启实时路况",onSwitchChange:w.changeEnableTraffic},null,8,["switch-checked","onSwitchChange"])])),_:1})])),_:1},8,["class"])])),_:1},8,["onChange"])])),_:1})}],["__scopeId","data-v-ba89403c"]]);const V=e({data:()=>({formData:{username:"admin",password:"admin"},rules:{username:{rules:[{required:!0,errorMessage:"请输入用户名"}]},password:{rules:[{required:!0,errorMessage:"请输入密码"}]}},hasUserInfo:!1}),computed:{...p(["userInfo","hasLogin"])},onShow:function(){console.log("home Show")},onHide:function(){console.log("home Hide")},methods:{...g(["login","setUniverifyLogin"]),...w(["getUserInfo"]),Toast(e,o=1e3){a(Object.assign({},e,{duration:o}))},getWxUserInfo(){uni.getUserInfo({provider:this.provider,success:e=>{console.log("getUserInfo success",e),this.hasUserInfo=!0,this.userInfo=e.userInfo},fail:e=>{this.hasUserInfo=!1,console.log("getUserInfo fail",e)}})},tologin(){const e="weixin";b({provider:e,success:async o=>{this.Toast({title:"登录成功"}),this.login(e),console.warn("如需获取openid请参考uni-id: https://uniapp.dcloud.net.cn/uniCloud/uni-id"),k({url:"https://97fca9f2-41f6-449f-a35e-3f135d4c3875.bspapp.com/http/user-center",method:"POST",data:{action:"loginByWeixin",params:{code:o.code,platform:"mp-weixin"}},success(e){console.log(e),0===e.data.code?y("openid",e.data.openid):console.log("获取openid失败：",e.data.errMsg)},fail(e){console.log("获取openid失败：",e)}})},fail:e=>{console.log(e)}})},change(e){console.log("当前模式："+e.type+",状态："+e.show)},toggle(e){this.type=e,this.$refs.popup.open(e)},submit(){this.$refs.form.validate().then((e=>{C({username:e.username,password:e.password}).then((e=>{if(console.log(".........res",e),e&&200===e.code){const o=`Bearer ${e.data.token}`;y("token",o),this.getUserInfo()}})).catch((e=>{}))})).catch((e=>{console.log("表单错误信息：",e)}))}}},[["render",function(e,o,a,h,u,m){const p=n(t("mpvue-map"),O),g=d,w=f,b=U,k=n(t("uni-easyinput"),E),y=n(t("uni-forms-item"),T),C=n(t("uni-forms"),L);return s(),S(_,null,[c(p),c(w,{class:"uni-h4 uni-center uni-common-mt"},{default:i((()=>[r(v(e.hasLogin?"已登录":"未登录")+" ",1),c(g,{type:"primary",onClick:o[0]||(o[0]=o=>m.tologin(e.value))},{default:i((()=>[r(" 微信登录 ")])),_:1})])),_:1}),c(w,{class:"uni-h4 uni-center uni-common-mt"},{default:i((()=>[c(w,null,{default:i((()=>[u.hasUserInfo?(s(),S(_,{key:0},[c(w,{class:"uni-h4 uni-center uni-common-mt"},{default:i((()=>[r(v(e.userInfo.nickName||e.userInfo.nickname||e.userInfo.gender||e.userInfo.email||e.userInfo.phoneNumber),1)])),_:1}),e.userInfo.avatarUrl||e.userInfo.avatar_url?(s(),l(w,{key:0,style:{padding:"30rpx 0","text-align":"center"}},{default:i((()=>[c(b,{class:"userinfo-avatar",src:e.userInfo.avatarUrl||e.userInfo.avatar_url},null,8,["src"])])),_:1})):I("",!0)],64)):(s(),S(_,{key:1},[r(" 点击下方按钮获取用户信息 ")],64))])),_:1}),c(g,{type:"primary",onClick:m.getWxUserInfo},{default:i((()=>[r(" 获取用户信息 ")])),_:1},8,["onClick"])])),_:1}),e.userInfo&&e.userInfo.username?(s(),l(w,{key:0,class:"uni-h4 uni-center uni-common-mt"},{default:i((()=>[r(" 当前用户 "+v(e.userInfo.username),1)])),_:1})):(s(),l(w,{key:1,class:"uni-h4 uni-center uni-common-mt"},{default:i((()=>[c(C,{ref:"form",modelValue:u.formData,rules:u.rules},{default:i((()=>[c(y,{name:"username"},{default:i((()=>[c(k,{type:"text",modelValue:u.formData.username,"onUpdate:modelValue":o[1]||(o[1]=e=>u.formData.username=e),placeholder:"输入用户名"},null,8,["modelValue"])])),_:1}),c(y,{name:"password"},{default:i((()=>[c(k,{type:"password",modelValue:u.formData.password,"onUpdate:modelValue":o[2]||(o[2]=e=>u.formData.password=e),placeholder:"输入密码"},null,8,["modelValue"])])),_:1})])),_:1},8,["modelValue","rules"]),c(g,{type:"primary",onClick:m.submit},{default:i((()=>[r("登录")])),_:1},8,["onClick"])])),_:1}))],64)}]]);export{V as default};
