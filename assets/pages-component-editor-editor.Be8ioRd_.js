import{_ as a,$ as t,a0 as n,a1 as i,a2 as o,c as l,w as e,e as s,o as c,b as r,n as d,a3 as u}from"./index-BmzQcWuq.js";const f=a({data:()=>({readOnly:!1,formats:{}}),onLoad(){t({family:"Pacifico",source:'url("https://sungd.github.io/Pacifico.ttf")'})},methods:{readOnlyChange(){this.readOnly=!this.readOnly},onEditorReady(){n().select("#editor").context((a=>{this.editorCtx=a.context})).exec()},undo(){this.editorCtx.undo()},redo(){this.editorCtx.redo()},format(a){let{name:t,value:n}=a.target.dataset;t&&this.editorCtx.format(t,n)},onStatusChange(a){const t=a.detail;this.formats=t},insertDivider(){this.editorCtx.insertDivider({success:function(){console.log("insert divider success")}})},clear(){i({title:"清空编辑器",content:"确定清空编辑器全部内容？",success:a=>{a.confirm&&this.editorCtx.clear({success:function(a){console.log("clear success")}})}})},removeFormat(){this.editorCtx.removeFormat()},insertDate(){const a=new Date,t=`${a.getFullYear()}/${a.getMonth()+1}/${a.getDate()}`;this.editorCtx.insertText({text:t})},insertImage(){o({count:1,success:a=>{this.editorCtx.insertImage({src:a.tempFilePaths[0],alt:"图像",success:function(){console.log("insert image success")}})}})}}},[["render",function(a,t,n,i,o,f){const m=s,v=u;return c(),l(m,{class:"container"},{default:e((()=>[r(m,{class:"page-body"},{default:e((()=>[r(m,{class:"wrapper"},{default:e((()=>[r(m,{class:"toolbar",onClick:f.format,style:{height:"120px","overflow-y":"auto"}},{default:e((()=>[r(m,{class:d([o.formats.bold?"ql-active":"","iconfont icon-zitijiacu"]),"data-name":"bold"},null,8,["class"]),r(m,{class:d([o.formats.italic?"ql-active":"","iconfont icon-zitixieti"]),"data-name":"italic"},null,8,["class"]),r(m,{class:d([o.formats.underline?"ql-active":"","iconfont icon-zitixiahuaxian"]),"data-name":"underline"},null,8,["class"]),r(m,{class:d([o.formats.strike?"ql-active":"","iconfont icon-zitishanchuxian"]),"data-name":"strike"},null,8,["class"]),r(m,{class:d(["left"===o.formats.align?"ql-active":"","iconfont icon-zuoduiqi"]),"data-name":"align","data-value":"left"},null,8,["class"]),r(m,{class:d(["center"===o.formats.align?"ql-active":"","iconfont icon-juzhongduiqi"]),"data-name":"align","data-value":"center"},null,8,["class"]),r(m,{class:d(["right"===o.formats.align?"ql-active":"","iconfont icon-youduiqi"]),"data-name":"align","data-value":"right"},null,8,["class"]),r(m,{class:d(["justify"===o.formats.align?"ql-active":"","iconfont icon-zuoyouduiqi"]),"data-name":"align","data-value":"justify"},null,8,["class"]),r(m,{class:d([o.formats.lineHeight?"ql-active":"","iconfont icon-line-height"]),"data-name":"lineHeight","data-value":"2"},null,8,["class"]),r(m,{class:d([o.formats.letterSpacing?"ql-active":"","iconfont icon-Character-Spacing"]),"data-name":"letterSpacing","data-value":"2em"},null,8,["class"]),r(m,{class:d([o.formats.marginTop?"ql-active":"","iconfont icon-722bianjiqi_duanqianju"]),"data-name":"marginTop","data-value":"20px"},null,8,["class"]),r(m,{class:d([o.formats.marginBottom?"ql-active":"","iconfont icon-723bianjiqi_duanhouju"]),"data-name":"marginBottom","data-value":"20px"},null,8,["class"]),r(m,{class:"iconfont icon-clearedformat",onClick:f.removeFormat},null,8,["onClick"]),r(m,{class:d([o.formats.fontFamily?"ql-active":"","iconfont icon-font"]),"data-name":"fontFamily","data-value":"Pacifico"},null,8,["class"]),r(m,{class:d(["24px"===o.formats.fontSize?"ql-active":"","iconfont icon-fontsize"]),"data-name":"fontSize","data-value":"24px"},null,8,["class"]),r(m,{class:d(["#0000ff"===o.formats.color?"ql-active":"","iconfont icon-text_color"]),"data-name":"color","data-value":"#0000ff"},null,8,["class"]),r(m,{class:d(["#00ff00"===o.formats.backgroundColor?"ql-active":"","iconfont icon-fontbgcolor"]),"data-name":"backgroundColor","data-value":"#00ff00"},null,8,["class"]),r(m,{class:"iconfont icon-date",onClick:f.insertDate},null,8,["onClick"]),r(m,{class:"iconfont icon--checklist","data-name":"list","data-value":"check"}),r(m,{class:d(["ordered"===o.formats.list?"ql-active":"","iconfont icon-youxupailie"]),"data-name":"list","data-value":"ordered"},null,8,["class"]),r(m,{class:d(["bullet"===o.formats.list?"ql-active":"","iconfont icon-wuxupailie"]),"data-name":"list","data-value":"bullet"},null,8,["class"]),r(m,{class:"iconfont icon-undo",onClick:f.undo},null,8,["onClick"]),r(m,{class:"iconfont icon-redo",onClick:f.redo},null,8,["onClick"]),r(m,{class:"iconfont icon-outdent","data-name":"indent","data-value":"-1"}),r(m,{class:"iconfont icon-indent","data-name":"indent","data-value":"+1"}),r(m,{class:"iconfont icon-fengexian",onClick:f.insertDivider},null,8,["onClick"]),r(m,{class:"iconfont icon-charutupian",onClick:f.insertImage},null,8,["onClick"]),r(m,{class:d([1===o.formats.header?"ql-active":"","iconfont icon-format-header-1"]),"data-name":"header","data-value":1},null,8,["class"]),r(m,{class:d(["sub"===o.formats.script?"ql-active":"","iconfont icon-zitixiabiao"]),"data-name":"script","data-value":"sub"},null,8,["class"]),r(m,{class:d(["super"===o.formats.script?"ql-active":"","iconfont icon-zitishangbiao"]),"data-name":"script","data-value":"super"},null,8,["class"]),r(m,{class:"iconfont icon-shanchu",onClick:f.clear},null,8,["onClick"]),r(m,{class:d(["rtl"===o.formats.direction?"ql-active":"","iconfont icon-direction-rtl"]),"data-name":"direction","data-value":"rtl"},null,8,["class"])])),_:1},8,["onClick"]),r(m,{class:"editor-wrapper"},{default:e((()=>[r(v,{id:"editor",class:"ql-container",placeholder:"开始输入...","show-img-size":"","show-img-toolbar":"","show-img-resize":"",onStatuschange:f.onStatusChange,"read-only":o.readOnly,onReady:f.onEditorReady},null,8,["onStatuschange","read-only","onReady"])])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-6fa34ecd"]]);export{f as default};
