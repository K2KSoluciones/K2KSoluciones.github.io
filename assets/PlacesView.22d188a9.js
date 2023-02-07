import{A as w,B as M}from"./BackendConnection.ecfc1fb4.js";import{S as k}from"./SearchField.df00062c.js";import{E as B,I as x}from"./ImportButton.5a174438.js";import{E as L}from"./EditableTable.a6313a6f.js";import{F as i}from"./fields.5d55b05c.js";import{_ as N,L as D,r as n,o as c,c as O,b as r,t as y,d as l,g as h,a as d,F as E}from"./index.0721faa3.js";import"./PageGenerator.8ed50f9f.js";const C={props:["token","user","hasPermission","updateToken"],data(){return{moduleName:"places",title:i.places.title,Model:i.places.Model,fields:i.places.fields,Lenguages:D,models:[],original:[],auxiliar:[]}},created(){this.token?this.user?this.hasPermission(this.moduleName,"access")||this.$router.push("/"):this.$router.push("/"):this.$router.push("/")},methods:{showMessage(s,e){this.$refs.AlertMessage.show(s,e)},searchData(s){this.models=s},exportData(s=0){s==1?this.$refs.ExportButton.exportFile(this.original,this.moduleName):this.$refs.ExportButton.exportFile(this.models,this.moduleName)},async getData(){try{const s=await this.$refs.BackendConnection.getAll("lugares_get");this.original=s.resultados.map(e=>new this.Model(e)),this.models=this.original,s.auxiliar&&(this.auxiliar=s.auxiliar)}catch(s){console.log(s),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.err_get,"error")}},async createOne(s){try{const e=await this.$refs.BackendConnection.createOne("lugares_create",s);this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.ok_post,"success"),this.original.push(new this.Model(e.resultados))}catch(e){console.log(e),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.err_post,"error")}},async updateOne(s){try{const e=this.models[s];delete e.createdAt,delete e.createdBy,delete e.updatedAt,delete e.updatedBy;const o=await this.$refs.BackendConnection.updateOne("lugares_up",e);this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.ok_put,"success"),this.original[s]=new this.Model(o.resultados)}catch(e){console.log(e),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.err_put,"error")}},async deleteOne(s){try{const e=window.prompt(this.Lenguages[this.Lenguages.selected].alerts.ask_delete,"");if(e==null||e=="")return;this.$refs.BackendConnection.deleteOne("lugares_delete",this.models[s],e),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.ok_delete,"success"),this.getData()}catch(e){console.log(e),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.err_delete,"error")}}},components:{AlertMessage:w,SearchField:k,ExportButton:B,ImportButton:x,EditableTable:L,BackendConnection:M},mounted(){this.hasPermission(this.moduleName,"access")?this.getData():this.$router.push("/")}},S={class:"row pt-3 w-100"},A={class:"col"},F={id:"moduleTitle"},P={class:"col py-2"},b={class:"btn-group"};function I(s,e,o,v,t,a){const u=n("SearchField"),m=n("ExportButton"),g=n("ImportButton"),p=n("AlertMessage"),_=n("EditableTable"),f=n("BackendConnection");return c(),O(E,null,[r("div",S,[r("div",A,[r("h1",F,y(t.title),1)]),r("div",P,[r("div",b,[l(u,{original:t.original,onSearchData:a.searchData},null,8,["original","onSearchData"]),o.hasPermission(t.moduleName,"export")?(c(),h(m,{key:0,ref:"ExportButton",onExportData:a.exportData},null,8,["onExportData"])):d("",!0),o.hasPermission(t.moduleName,"import")?(c(),h(g,{key:1,moduleName:t.moduleName,onImportData:a.createOne},null,8,["moduleName","onImportData"])):d("",!0)])])]),l(p,{ref:"AlertMessage",class:"row pt-1"},null,512),l(_,{token:o.token,user:o.user,moduleName:t.moduleName,Model:t.Model,fields:t.fields,models:t.models,auxiliar:t.auxiliar,hasPermission:o.hasPermission,onShowMessage:a.showMessage,onCreateOne:a.createOne,onUpdateOne:a.updateOne,onDeleteOne:a.deleteOne},null,8,["token","user","moduleName","Model","fields","models","auxiliar","hasPermission","onShowMessage","onCreateOne","onUpdateOne","onDeleteOne"]),l(f,{token:o.token,moduleName:t.moduleName,ref:"BackendConnection",onShowMessage:a.showMessage},null,8,["token","moduleName","onShowMessage"])],64)}const H=N(C,[["render",I]]);export{H as default};
