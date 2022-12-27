import{A as w}from"./AlertMessage.373dc305.js";import{S as M}from"./SearchField.cf17901a.js";import{E as B,I as L}from"./ImportButton.dde9842d.js";import{E as x}from"./EditableTable.46949686.js";import{F as c,B as N}from"./BackendConnection.e0c1fbf9.js";import{_ as y,L as D,r as n,o as h,c as E,b as r,t as O,d as i,g as u,a as d,F as C}from"./index.6058fd22.js";import"./PageGenerator.59199e21.js";const S={props:["token","user","hasPermission","updateToken"],data(){return{moduleName:"humans",title:c.humans.title,Model:c.humans.Model,fields:c.humans.fields,Lenguages:D,models:[],original:[],auxiliar:[]}},created(){this.token?this.user?this.hasPermission(this.moduleName,"access")||this.$router.push("/"):this.$router.push("/"):this.$router.push("/")},methods:{showMessage(s,e){this.$refs.AlertMessage.show(s,e)},searchData(s){this.models=s},exportData(s=0){s==1?this.$refs.ExportButton.exportFile(this.original,this.moduleName):this.$refs.ExportButton.exportFile(this.models,this.moduleName)},async getData(){try{const s=await this.$refs.BackendConnection.getAll("personal2_get");console.log(s),this.original=s.resultados.map(e=>new this.Model(e)),this.models=this.original,this.models.forEach(async e=>{const o={method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}};try{const t=await(await fetch("https://processmanager.k2ksoluciones.com/fotos/"+e.foto,o)).json();console.log(t)}catch(l){console.log(l),this.showMessage(this.Lenguages[this.Lenguages.selected].humans.err_get_photo,"error")}})}catch(s){console.log(s),this.showMessage(this.Lenguages[this.Lenguages.selected].humans.err_get,"error")}},async createOne(s){try{const e=await this.$refs.BackendConnection.createOne("personal2_create",s);this.showMessage(this.Lenguages[this.Lenguages.selected].humans.ok_post,"success")}catch(e){console.log(e),this.showMessage(this.Lenguages[this.Lenguages.selected].humans.err_post,"error")}},async updateOne(s){try{const e=this.models[s];delete e.createdAt,delete e.createdBy,delete e.updatedAt,delete e.updatedBy;const o=await this.$refs.BackendConnection.updateOne("personal2_up",e);this.showMessage(this.Lenguages[this.Lenguages.selected].humans.ok_put,"success")}catch(e){console.log(e),this.showMessage(this.Lenguages[this.Lenguages.selected].humans.err_put,"error")}},async deleteOne(s){try{const e=window.prompt(this.Lenguages[this.Lenguages.selected].humans.ask_delete,"");if(e==null||e=="")return;this.$refs.BackendConnection.deleteOne("personal2_delete",this.models[s],e),this.showMessage(this.Lenguages[this.Lenguages.selected].humans.ok_delete,"success"),this.getData()}catch(e){console.log(e),this.showMessage(this.Lenguages[this.Lenguages.selected].humans.err_delete,"error")}}},components:{AlertMessage:w,SearchField:M,ExportButton:B,ImportButton:L,EditableTable:x,BackendConnection:N},mounted(){this.hasPermission(this.moduleName,"access")?this.getData():this.$router.push("/")}},A={class:"row pt-3 w-100"},F={class:"col"},b={id:"moduleTitle"},P={class:"col py-2"},T={class:"btn-group"};function I(s,e,o,l,t,a){const m=n("SearchField"),g=n("ExportButton"),p=n("ImportButton"),_=n("AlertMessage"),f=n("EditableTable"),k=n("BackendConnection");return h(),E(C,null,[r("div",A,[r("div",F,[r("h1",b,O(t.title),1)]),r("div",P,[r("div",T,[i(m,{original:t.original,onSearchData:a.searchData},null,8,["original","onSearchData"]),o.hasPermission(t.moduleName,"export")?(h(),u(g,{key:0,ref:"ExportButton",onExportData:a.exportData},null,8,["onExportData"])):d("",!0),o.hasPermission(t.moduleName,"import")?(h(),u(p,{key:1,moduleName:t.moduleName,onImportData:a.createOne},null,8,["moduleName","onImportData"])):d("",!0)])])]),i(_,{ref:"AlertMessage",class:"row pt-1"},null,512),i(f,{token:o.token,user:o.user,moduleName:t.moduleName,Model:t.Model,fields:t.fields,models:t.models,auxiliar:t.auxiliar,hasPermission:o.hasPermission,onShowMessage:a.showMessage,onCreateOne:a.createOne,onUpdateOne:a.updateOne,onDeleteOne:a.deleteOne},null,8,["token","user","moduleName","Model","fields","models","auxiliar","hasPermission","onShowMessage","onCreateOne","onUpdateOne","onDeleteOne"]),i(k,{token:o.token,moduleName:t.moduleName,ref:"BackendConnection",onShowMessage:a.showMessage},null,8,["token","moduleName","onShowMessage"])],64)}const z=y(S,[["render",I]]);export{z as default};
