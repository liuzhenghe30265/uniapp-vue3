import{_ as t,m as s,h as e,a9 as a,c as l,w as i,e as d,o as u,b as n,d as o,u as c,f as _,i as r}from"./index-BmzQcWuq.js";const f=t({data:()=>({gd:{}}),computed:{...s(["testvuex"])},methods:{...e(["setTestTrue"]),...e(["setTestFalse"]),setGD:function(){this.gd.test="123"},setVUEX:function(t){t?this.setTestTrue(this.$store.state):this.setTestFalse(this.$store.state)}},onShow(){this.gd=a().globalData}},[["render",function(t,s,e,a,f,v){const h=d,x=_,b=r;return u(),l(h,{class:"pa"},{default:i((()=>[n(h,{class:"uni-divider"},{default:i((()=>[n(h,{class:"uni-divider__content"},{default:i((()=>[o("globalData")])),_:1}),n(h,{class:"uni-divider__line"})])),_:1}),n(x,{class:"text"},{default:i((()=>[o("globalData中text的值: "+c(f.gd.test),1)])),_:1}),n(b,{onClick:s[0]||(s[0]=t=>v.setGD()),class:"button"},{default:i((()=>[o("修改上述值为123")])),_:1}),n(h,{class:"uni-divider"},{default:i((()=>[n(h,{class:"uni-divider__content"},{default:i((()=>[o("vuex")])),_:1}),n(h,{class:"uni-divider__line"})])),_:1}),n(x,{class:"text"},{default:i((()=>[o("vuex中hasLogin的值: "+c(t.testvuex),1)])),_:1}),n(b,{onClick:s[1]||(s[1]=t=>v.setVUEX(!0)),class:"button"},{default:i((()=>[o("修改上述值为true")])),_:1}),n(b,{onClick:s[2]||(s[2]=t=>v.setVUEX(!1)),class:"button"},{default:i((()=>[o("修改上述值为false")])),_:1})])),_:1})}],["__scopeId","data-v-ee35a0b1"]]);export{f as default};
