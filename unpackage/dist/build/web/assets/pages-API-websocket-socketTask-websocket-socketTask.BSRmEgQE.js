import{_ as s,V as e,au as t,a1 as o,at as c,b4 as n,s as a,r as i,a as l,c as k,w as h,y as d,e as r,o as g,b as u,d as p,u as f,b5 as m,b6 as T,i as w}from"./index-BmzQcWuq.js";let b=e().platform;const _=s({data:()=>({connected:!1,connecting:!1,socketTask:!1,msg:!1}),computed:{showMsg(){return this.connected?this.msg?"收到消息："+this.msg:"等待接收消息":"尚未连接"}},onUnload(){t(),this.socketTask&&this.socketTask.close&&this.socketTask.close()},methods:{connect(){if(this.connected||this.connecting)return o({content:"正在连接或者已经连接，请勿重复连接",showCancel:!1}),!1;this.connecting=!0,c({title:"连接中..."}),this.socketTask=n({url:"wss://echo.websocket.org",data:()=>({msg:"Hello"}),success(s){},fail(s){}}),console.log(this.socketTask),this.socketTask.onOpen((s=>{this.connecting=!1,this.connected=!0,t(),a({icon:"none",title:"连接成功"}),console.log("onOpen",s)})),this.socketTask.onError((s=>{this.connecting=!1,this.connected=!1,t(),o({content:"连接失败，可能是websocket服务不可用，请稍后再试",showCancel:!1}),console.log("onError",s)})),this.socketTask.onMessage((s=>{this.msg=s.data,console.log("onMessage",s)})),this.socketTask.onClose((s=>{this.connected=!1,this.startRecive=!1,this.socketTask=!1,this.msg=!1,console.log("onClose",s)})),console.log("task",this.socketTask)},send(){this.socketTask.send({data:"from "+b+" : "+parseInt(1e4*Math.random()).toString(),success(s){console.log(s)},fail(s){console.log(s)}})},close(){this.socketTask&&this.socketTask.close&&this.socketTask.close()}}},[["render",function(s,e,t,o,c,n){const a=i(l("page-head"),d),b=r,_=w;return g(),k(b,null,{default:h((()=>[u(a,{title:"websocket通讯示例"}),u(b,{class:"uni-padding-wrap"},{default:h((()=>[u(b,{class:"uni-btn-v"},{default:h((()=>[u(b,{class:"websocket-msg"},{default:h((()=>[p(f(n.showMsg),1)])),_:1}),u(_,{type:"primary",onClick:n.connect},{default:h((()=>[p("连接websocket服务")])),_:1},8,["onClick"]),m(u(_,{type:"primary",onClick:n.send},{default:h((()=>[p("发送一条消息")])),_:1},8,["onClick"]),[[T,c.connected]]),u(_,{type:"primary",onClick:n.close},{default:h((()=>[p("断开websocket服务")])),_:1},8,["onClick"]),u(b,{class:"websocket-tips"},{default:h((()=>[p("发送消息后会收到一条服务器返回的消息（与发送的消息内容一致）")])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-90e828af"]]);export{_ as default};
