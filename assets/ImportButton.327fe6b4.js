import{F as p}from"./fields.bf64cb4c.js";import{_ as u,L as g,o as m,c as h,d as t,t as r,F as f}from"./index.99972e7e.js";const L={emits:["exportData"],data(){return{Lenguages:g}},methods:{exportFile(o,e){const i=[],l=[];p[e].fields.forEach(s=>l.push(s.placeholder)),i.push(l.join(",")+`
`),o.forEach(s=>{const d=[];p[e].fields.forEach(c=>{s[c.name]?d.push(s[c.name]):d.push("")}),i.push(d.join(",")+`
`)});const a=new Blob(i,{type:"application/text"}),n=document.createElement("a");n.href=URL.createObjectURL(a),n.download=e+"_export.csv",n.click(),URL.revokeObjectURL(n.href)}}},_=["title"],b=t("i",{class:"fa fa-file-export"},null,-1),w=[b],x={class:"dropdown-menu"};function k(o,e,i,l,a,n){return m(),h(f,null,[t("button",{type:"button","data-bs-toggle":"dropdown","aria-expanded":"false","data-toggle":"tooltip","data-placement":"bottom",title:a.Lenguages[a.Lenguages.selected].general.export,class:"btn text-light dropdown-toggle",style:{background:"#002133"}},w,8,_),t("ul",x,[t("li",null,[t("a",{class:"dropdown-item",href:"#",onClick:e[0]||(e[0]=s=>o.$emit("exportData",0))},r(this.Lenguages[this.Lenguages.selected].general.export_view),1)]),t("li",null,[t("a",{class:"dropdown-item",href:"#",onClick:e[1]||(e[1]=s=>o.$emit("exportData",1))},r(this.Lenguages[this.Lenguages.selected].general.export_all),1)])])],64)}const B=u(L,[["render",k]]),F={props:["moduleName"],emits:["importData"],data(){return{Lenguages:g}},methods:{importFile(o){const e=o.target.files;this.$emit("importData",e[0])},downloadFile(){const o=[],e=[];p[this.moduleName].fields.forEach(a=>e.push(a.placeholder)),o.push(e.join(",")+`
`);const i=new Blob(o,{type:"application/text"}),l=document.createElement("a");l.href=URL.createObjectURL(i),l.download=this.moduleName+"_template.csv",l.click(),URL.revokeObjectURL(l.href)}}},$=["title"],U=t("i",{class:"fa fa-file-import"},null,-1),v=[U],E={class:"dropdown-menu"};function y(o,e,i,l,a,n){return m(),h(f,null,[t("input",{ref:"FileUpload",type:"file",accept:".csv",onChange:e[0]||(e[0]=(...s)=>n.importFile&&n.importFile(...s)),hidden:""},null,544),t("button",{type:"button","data-bs-toggle":"dropdown","aria-expanded":"false","data-toggle":"tooltip","data-placement":"bottom",title:a.Lenguages[a.Lenguages.selected].general.import,class:"btn text-light dropdown-toggle",style:{background:"#002133"}},v,8,$),t("ul",E,[t("li",null,[t("a",{class:"dropdown-item",href:"#",onClick:e[1]||(e[1]=(...s)=>n.downloadFile&&n.downloadFile(...s))},r(this.Lenguages[this.Lenguages.selected].general.import_template),1)]),t("li",null,[t("a",{class:"dropdown-item",href:"#",onClick:e[2]||(e[2]=s=>o.$refs.FileUpload.click())},r(this.Lenguages[this.Lenguages.selected].general.import_file),1)])])],64)}const D=u(F,[["render",y]]);export{B as E,D as I};
