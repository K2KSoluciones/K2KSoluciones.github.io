import{F as c}from"./BackendConnection.880e9f2f.js";import{_ as g,L as u,o as m,c as h,b as t,t as i,F as f}from"./index.d1745c2d.js";const L={emits:["exportData"],data(){return{Lenguages:u}},methods:{exportFile(o,e){const a=[],s=[];c[e].fields.forEach(l=>s.push(l.placeholder)),a.push(s.join(",")+`
`),o.forEach(l=>{const d=[];c[e].fields.forEach(p=>{l[p.name]?d.push(l[p.name]):d.push("")}),a.push(d.join(",")+`
`)});const n=new Blob(a,{type:"application/text"}),r=document.createElement("a");r.href=URL.createObjectURL(n),r.download=e+"_export.csv",r.click(),URL.revokeObjectURL(r.href)}}},_=["title"],b=t("i",{class:"fa fa-file-export"},null,-1),w=[b],x={class:"dropdown-menu"};function k(o,e,a,s,n,r){return m(),h(f,null,[t("button",{type:"button","data-bs-toggle":"dropdown","aria-expanded":"false","data-toggle":"tooltip","data-placement":"bottom",title:n.Lenguages[n.Lenguages.selected].general.export,class:"btn text-light dropdown-toggle",style:{background:"#002133"}},w,8,_),t("ul",x,[t("li",null,[t("a",{class:"dropdown-item",href:"#",onClick:e[0]||(e[0]=l=>o.$emit("exportData",0))},i(this.Lenguages[this.Lenguages.selected].general.export_view),1)]),t("li",null,[t("a",{class:"dropdown-item",href:"#",onClick:e[1]||(e[1]=l=>o.$emit("exportData",1))},i(this.Lenguages[this.Lenguages.selected].general.export_all),1)])])],64)}const B=g(L,[["render",k]]),F={props:["moduleName"],emits:["importData"],data(){return{Lenguages:u}},methods:{importFile(o){const e=o.target.files,a=new FileReader;a.onload=s=>{const n=s.target.result;console.log(n)},a.readAsText(e[0])},downloadFile(){const o=[],e=[];c[this.moduleName].fields.forEach(n=>e.push(n.placeholder)),o.push(e.join(",")+`
`);const a=new Blob(o,{type:"application/text"}),s=document.createElement("a");s.href=URL.createObjectURL(a),s.download=this.moduleName+"_template.csv",s.click(),URL.revokeObjectURL(s.href)}}},$=["title"],U=t("i",{class:"fa fa-file-import"},null,-1),v=[U],E={class:"dropdown-menu"};function R(o,e,a,s,n,r){return m(),h(f,null,[t("input",{ref:"FileUpload",type:"file",accept:".csv",onChange:e[0]||(e[0]=(...l)=>r.importFile&&r.importFile(...l)),hidden:""},null,544),t("button",{type:"button","data-bs-toggle":"dropdown","aria-expanded":"false","data-toggle":"tooltip","data-placement":"bottom",title:n.Lenguages[n.Lenguages.selected].general.import,class:"btn text-light dropdown-toggle",style:{background:"#002133"}},v,8,$),t("ul",E,[t("li",null,[t("a",{class:"dropdown-item",href:"#",onClick:e[1]||(e[1]=(...l)=>r.downloadFile&&r.downloadFile(...l))},i(this.Lenguages[this.Lenguages.selected].general.import_template),1)]),t("li",null,[t("a",{class:"dropdown-item",href:"#",onClick:e[2]||(e[2]=l=>o.$refs.FileUpload.click())},i(this.Lenguages[this.Lenguages.selected].general.import_file),1)])])],64)}const C=g(F,[["render",R]]);export{B as E,C as I};
