import{A as k,B as w}from"./BackendConnection.0e16c68e.js";import{S as M}from"./SearchField.f4c29663.js";import{E as B,I as x}from"./ImportButton.9a25f80f.js";import{E as L}from"./EditableTable.2a8f24a1.js";import{F as i}from"./fields.42457c64.js";import{_ as N,L as D,r as n,o as c,c as O,b as r,t as y,d as l,g as h,a as d,F as E}from"./index.17f9246e.js";import"./PageGenerator.9b798602.js";const C={props:["token","user","hasPermission","updateToken"],data(){return{moduleName:"humans",title:i.humans.title,Model:i.humans.Model,fields:i.humans.fields,Lenguages:D,models:[],original:[],auxiliar:[]}},created(){this.token?this.user?this.hasPermission(this.moduleName,"access")||this.$router.push("/"):this.$router.push("/"):this.$router.push("/")},methods:{showMessage(s,e){this.$refs.AlertMessage.show(s,e)},searchData(s){this.models=s},exportData(s=0){s==1?this.$refs.ExportButton.exportFile(this.original,this.moduleName):this.$refs.ExportButton.exportFile(this.models,this.moduleName)},async getData(){try{const s=await this.$refs.BackendConnection.getAll("personal2_get");console.log(s),this.original=s.resultados.map(e=>new this.Model(e)),this.models=this.original}catch(s){console.log(s),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.err_get,"error")}},async createOne(s){try{const e=await this.$refs.BackendConnection.createOne("personal2_create",s);this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.ok_post,"success")}catch(e){console.log(e),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.err_post,"error")}},async updateOne(s){try{const e=this.models[s];delete e.createdAt,delete e.createdBy,delete e.updatedAt,delete e.updatedBy;const a=await this.$refs.BackendConnection.updateOne("personal2_up",e);this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.ok_put,"success")}catch(e){console.log(e),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.err_put,"error")}},async deleteOne(s){try{const e=window.prompt(this.Lenguages[this.Lenguages.selected].alerts.ask_delete,"");if(e==null||e=="")return;this.$refs.BackendConnection.deleteOne("personal2_delete",this.models[s],e),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.ok_delete,"success"),this.getData()}catch(e){console.log(e),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.err_delete,"error")}}},components:{AlertMessage:k,SearchField:M,ExportButton:B,ImportButton:x,EditableTable:L,BackendConnection:w},mounted(){this.hasPermission(this.moduleName,"access")?this.getData():this.$router.push("/")}},S={class:"row pt-3 w-100"},A={class:"col"},F={id:"moduleTitle"},b={class:"col py-2"},P={class:"btn-group"};function I(s,e,a,v,t,o){const u=n("SearchField"),m=n("ExportButton"),g=n("ImportButton"),p=n("AlertMessage"),_=n("EditableTable"),f=n("BackendConnection");return c(),O(E,null,[r("div",S,[r("div",A,[r("h1",F,y(t.title),1)]),r("div",b,[r("div",P,[l(u,{original:t.original,onSearchData:o.searchData},null,8,["original","onSearchData"]),a.hasPermission(t.moduleName,"export")?(c(),h(m,{key:0,ref:"ExportButton",onExportData:o.exportData},null,8,["onExportData"])):d("",!0),a.hasPermission(t.moduleName,"import")?(c(),h(g,{key:1,moduleName:t.moduleName,onImportData:o.createOne},null,8,["moduleName","onImportData"])):d("",!0)])])]),l(p,{ref:"AlertMessage",class:"row pt-1"},null,512),l(_,{token:a.token,user:a.user,moduleName:t.moduleName,Model:t.Model,fields:t.fields,models:t.models,auxiliar:t.auxiliar,hasPermission:a.hasPermission,onShowMessage:o.showMessage,onCreateOne:o.createOne,onUpdateOne:o.updateOne,onDeleteOne:o.deleteOne},null,8,["token","user","moduleName","Model","fields","models","auxiliar","hasPermission","onShowMessage","onCreateOne","onUpdateOne","onDeleteOne"]),l(f,{token:a.token,moduleName:t.moduleName,ref:"BackendConnection",onShowMessage:o.showMessage},null,8,["token","moduleName","onShowMessage"])],64)}const G=N(C,[["render",I]]);export{G as default};
